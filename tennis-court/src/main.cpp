// 3D tennis court walkthrough.
// All dimensions are in meters and follow ITF regulation sizes.
// Coordinate system: X = across the court, Y = up, Z = along the court (net at Z = 0).

#if defined(__APPLE__)
#include <OpenGL/gl3.h>
#else
#define GL_GLEXT_PROTOTYPES
#include <GL/gl.h>
#include <GL/glext.h>
#endif
#define GLFW_INCLUDE_NONE
#include <GLFW/glfw3.h>

#include <algorithm>
#include <cmath>
#include <cstdio>
#include <cstdlib>
#include <random>
#include <vector>

// ---------------------------------------------------------------------------
// Minimal math
// ---------------------------------------------------------------------------

constexpr float kPi = 3.14159265358979f;

struct Vec3 {
    float x = 0, y = 0, z = 0;
};

static Vec3 operator+(Vec3 a, Vec3 b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }
static Vec3 operator-(Vec3 a, Vec3 b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
static Vec3 operator*(Vec3 a, float s) { return {a.x * s, a.y * s, a.z * s}; }
static float dot(Vec3 a, Vec3 b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
static Vec3 cross(Vec3 a, Vec3 b) {
    return {a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x};
}
static Vec3 normalize(Vec3 v) {
    float len = std::sqrt(dot(v, v));
    return len > 0 ? v * (1.0f / len) : v;
}

// Column-major 4x4 matrix, matching OpenGL's layout.
struct Mat4 {
    float m[16] = {1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1};
};

static Mat4 operator*(const Mat4& a, const Mat4& b) {
    Mat4 r;
    for (int col = 0; col < 4; ++col)
        for (int row = 0; row < 4; ++row) {
            float s = 0;
            for (int k = 0; k < 4; ++k) s += a.m[k * 4 + row] * b.m[col * 4 + k];
            r.m[col * 4 + row] = s;
        }
    return r;
}

static Mat4 perspective(float fovY, float aspect, float zNear, float zFar) {
    Mat4 r;
    float f = 1.0f / std::tan(fovY * 0.5f);
    r.m[0] = f / aspect;
    r.m[5] = f;
    r.m[10] = (zFar + zNear) / (zNear - zFar);
    r.m[11] = -1;
    r.m[14] = 2 * zFar * zNear / (zNear - zFar);
    r.m[15] = 0;
    return r;
}

static Mat4 lookAt(Vec3 eye, Vec3 target, Vec3 up) {
    Vec3 f = normalize(target - eye);
    Vec3 s = normalize(cross(f, up));
    Vec3 u = cross(s, f);
    Mat4 r;
    r.m[0] = s.x; r.m[4] = s.y; r.m[8] = s.z;
    r.m[1] = u.x; r.m[5] = u.y; r.m[9] = u.z;
    r.m[2] = -f.x; r.m[6] = -f.y; r.m[10] = -f.z;
    r.m[12] = -dot(s, eye);
    r.m[13] = -dot(u, eye);
    r.m[14] = dot(f, eye);
    return r;
}

static Mat4 translateScale(Vec3 t, Vec3 s) {
    Mat4 r;
    r.m[0] = s.x;
    r.m[5] = s.y;
    r.m[10] = s.z;
    r.m[12] = t.x;
    r.m[13] = t.y;
    r.m[14] = t.z;
    return r;
}

// ---------------------------------------------------------------------------
// Geometry building
// ---------------------------------------------------------------------------

struct Vertex {
    Vec3 pos;
    Vec3 normal;
    Vec3 color;
};

using Geometry = std::vector<Vertex>;

static void addQuad(Geometry& g, Vec3 a, Vec3 b, Vec3 c, Vec3 d, Vec3 n, Vec3 color) {
    g.push_back({a, n, color});
    g.push_back({b, n, color});
    g.push_back({c, n, color});
    g.push_back({a, n, color});
    g.push_back({c, n, color});
    g.push_back({d, n, color});
}

// Axis-aligned box spanning [lo, hi].
static void addBox(Geometry& g, Vec3 lo, Vec3 hi, Vec3 color) {
    Vec3 p000{lo.x, lo.y, lo.z}, p100{hi.x, lo.y, lo.z}, p010{lo.x, hi.y, lo.z}, p110{hi.x, hi.y, lo.z};
    Vec3 p001{lo.x, lo.y, hi.z}, p101{hi.x, lo.y, hi.z}, p011{lo.x, hi.y, hi.z}, p111{hi.x, hi.y, hi.z};
    addQuad(g, p010, p011, p111, p110, {0, 1, 0}, color);
    addQuad(g, p000, p100, p101, p001, {0, -1, 0}, color);
    addQuad(g, p001, p101, p111, p011, {0, 0, 1}, color);
    addQuad(g, p000, p010, p110, p100, {0, 0, -1}, color);
    addQuad(g, p100, p110, p111, p101, {1, 0, 0}, color);
    addQuad(g, p000, p001, p011, p010, {-1, 0, 0}, color);
}

// Flat rectangle on the ground (as a thin slab whose top sits at `top`).
static void addGroundRect(Geometry& g, float x0, float z0, float x1, float z1, float top, Vec3 color) {
    addBox(g, {std::min(x0, x1), top - 0.02f, std::min(z0, z1)},
           {std::max(x0, x1), top, std::max(z0, z1)}, color);
}

static void addSphere(Geometry& g, float radius, int stacks, int slices, Vec3 color) {
    auto point = [&](int i, int j) {
        float phi = kPi * i / stacks;
        float theta = 2 * kPi * j / slices;
        return Vec3{std::sin(phi) * std::cos(theta), std::cos(phi), std::sin(phi) * std::sin(theta)};
    };
    for (int i = 0; i < stacks; ++i)
        for (int j = 0; j < slices; ++j) {
            Vec3 a = point(i, j), b = point(i + 1, j), c = point(i + 1, j + 1), d = point(i, j + 1);
            for (Vec3 p : {a, b, c, a, c, d}) g.push_back({p * radius, p, color});
        }
}

// ---------------------------------------------------------------------------
// Court dimensions (ITF)
// ---------------------------------------------------------------------------

namespace court {
constexpr float kHalfLength = 23.77f / 2;      // baseline to baseline
constexpr float kHalfDoubles = 10.97f / 2;
constexpr float kHalfSingles = 8.23f / 2;
constexpr float kServiceLine = 6.40f;          // distance from net
constexpr float kLineWidth = 0.05f;
constexpr float kBaselineWidth = 0.10f;
constexpr float kNetCenterHeight = 0.914f;
constexpr float kNetPostHeight = 1.07f;
constexpr float kPostX = kHalfDoubles + 0.914f;
constexpr float kRunbackHalfLength = 36.57f / 2;  // total enclosed area
constexpr float kRunbackHalfWidth = 18.29f / 2;
constexpr float kFenceHeight = 3.0f;

// Surface heights, separated to avoid z-fighting.
constexpr float kGrassTop = -0.01f;
constexpr float kApronTop = 0.0f;
constexpr float kCourtTop = 0.005f;
constexpr float kLineTop = 0.01f;

float netHeightAt(float x) {
    float t = x / kPostX;
    return kNetCenterHeight + (kNetPostHeight - kNetCenterHeight) * t * t;
}
}  // namespace court

const Vec3 kWhite{0.95f, 0.95f, 0.95f};
const Vec3 kCourtBlue{0.14f, 0.33f, 0.62f};
const Vec3 kApronGreen{0.18f, 0.45f, 0.32f};
const Vec3 kGrass{0.24f, 0.48f, 0.18f};
const Vec3 kWindscreen{0.05f, 0.22f, 0.14f};
const Vec3 kMetal{0.22f, 0.24f, 0.26f};
const Vec3 kWood{0.50f, 0.33f, 0.18f};

static void buildCourtLines(Geometry& g) {
    using namespace court;
    const float y = kLineTop;
    const float hw = kLineWidth / 2;

    // Baselines (wider), measured inward from the outer edge.
    for (float s : {-1.0f, 1.0f})
        addGroundRect(g, -kHalfDoubles, s * kHalfLength, kHalfDoubles, s * (kHalfLength - kBaselineWidth), y, kWhite);

    // Doubles and singles sidelines.
    for (float s : {-1.0f, 1.0f}) {
        addGroundRect(g, s * kHalfDoubles, -kHalfLength, s * (kHalfDoubles - kLineWidth), kHalfLength, y, kWhite);
        addGroundRect(g, s * kHalfSingles, -kHalfLength, s * (kHalfSingles - kLineWidth), kHalfLength, y, kWhite);
    }

    // Service lines (between singles sidelines) and the center service line.
    for (float s : {-1.0f, 1.0f})
        addGroundRect(g, -kHalfSingles, s * (kServiceLine - hw), kHalfSingles, s * (kServiceLine + hw), y, kWhite);
    addGroundRect(g, -hw, -kServiceLine, hw, kServiceLine, y, kWhite);

    // Center marks on each baseline.
    for (float s : {-1.0f, 1.0f})
        addGroundRect(g, -hw, s * (kHalfLength - kBaselineWidth), hw, s * (kHalfLength - kBaselineWidth - 0.10f), y, kWhite);
}

static void buildNetHardware(Geometry& g) {
    using namespace court;
    // Posts.
    for (float s : {-1.0f, 1.0f})
        addBox(g, {s * kPostX - 0.05f, 0, -0.05f}, {s * kPostX + 0.05f, kNetPostHeight + 0.03f, 0.05f}, kMetal);

    // White headband following the sag of the net.
    const int segments = 64;
    for (int i = 0; i < segments; ++i) {
        float x0 = -kPostX + 2 * kPostX * i / segments;
        float x1 = -kPostX + 2 * kPostX * (i + 1) / segments;
        float top = court::netHeightAt(0.5f * (x0 + x1));
        addBox(g, {x0, top - 0.06f, -0.012f}, {x1, top, 0.012f}, kWhite);
    }

    // Center strap.
    addBox(g, {-0.025f, 0, -0.013f}, {0.025f, kNetCenterHeight - 0.05f, 0.013f}, kWhite);
}

// Net mesh surface; the cords are drawn procedurally in the fragment shader.
static void buildNet(Geometry& g) {
    using namespace court;
    const int segments = 64;
    const Vec3 n{0, 0, 1};
    const Vec3 c{0.05f, 0.05f, 0.05f};
    for (int i = 0; i < segments; ++i) {
        float x0 = -kPostX + 2 * kPostX * i / segments;
        float x1 = -kPostX + 2 * kPostX * (i + 1) / segments;
        float h0 = netHeightAt(x0) - 0.05f, h1 = netHeightAt(x1) - 0.05f;
        addQuad(g, {x0, 0, 0}, {x1, 0, 0}, {x1, h1, 0}, {x0, h0, 0}, n, c);
    }
}

static void buildFence(Geometry& g) {
    using namespace court;
    const float L = kRunbackHalfLength, W = kRunbackHalfWidth, H = kFenceHeight, t = 0.03f;

    // Windscreen panels on all four sides.
    addBox(g, {-W, 0, -L - t}, {W, H, -L}, kWindscreen);
    addBox(g, {-W, 0, L}, {W, H, L + t}, kWindscreen);
    addBox(g, {-W - t, 0, -L}, {-W, H, L}, kWindscreen);
    addBox(g, {W, 0, -L}, {W + t, H, L}, kWindscreen);

    // Posts and top rail.
    const float postHalf = 0.04f, postH = H + 0.6f;
    auto post = [&](float x, float z) {
        addBox(g, {x - postHalf, 0, z - postHalf}, {x + postHalf, postH, z + postHalf}, kMetal);
    };
    for (int i = 0; i <= 12; ++i) {
        float x = -W + 2 * W * i / 12;
        post(x, -L - 0.07f);
        post(x, L + 0.07f);
    }
    for (int i = 0; i <= 20; ++i) {
        float z = -L + 2 * L * i / 20;
        post(-W - 0.07f, z);
        post(W + 0.07f, z);
    }
    const float r = 0.025f;
    addBox(g, {-W, postH - r, -L - 0.1f}, {W, postH, -L - 0.05f}, kMetal);
    addBox(g, {-W, postH - r, L + 0.05f}, {W, postH, L + 0.1f}, kMetal);
    addBox(g, {-W - 0.1f, postH - r, -L}, {-W - 0.05f, postH, L}, kMetal);
    addBox(g, {W + 0.05f, postH - r, -L}, {W + 0.1f, postH, L}, kMetal);
}

static void buildUmpireChair(Geometry& g) {
    const float x = -(court::kPostX + 1.0f);
    const float legH = 1.8f, half = 0.35f, leg = 0.04f;
    for (float dx : {-half, half})
        for (float dz : {-half, half})
            addBox(g, {x + dx - leg, 0, dz - leg}, {x + dx + leg, legH, dz + leg}, kMetal);
    addBox(g, {x - half - 0.05f, legH, -half - 0.05f}, {x + half + 0.05f, legH + 0.06f, half + 0.05f}, kWood);
    addBox(g, {x - half - 0.05f, legH + 0.06f, -half}, {x - half + 0.03f, legH + 0.7f, half}, kWood);
    // Ladder rungs.
    for (int i = 1; i <= 5; ++i) {
        float y = legH * i / 6;
        addBox(g, {x + half - 0.03f, y, -half}, {x + half + 0.03f, y + 0.04f, half}, kMetal);
    }
}

static void buildBenches(Geometry& g) {
    const float x = court::kPostX + 1.2f;
    for (float z : {-2.0f, 2.0f}) {
        addBox(g, {x - 0.25f, 0.42f, z - 1.0f}, {x + 0.25f, 0.47f, z + 1.0f}, kWood);
        addBox(g, {x + 0.2f, 0.47f, z - 1.0f}, {x + 0.25f, 0.9f, z + 1.0f}, kWood);
        for (float dz : {-0.9f, 0.9f})
            addBox(g, {x - 0.22f, 0, z + dz - 0.03f}, {x + 0.22f, 0.42f, z + dz + 0.03f}, kMetal);
    }
}

static void buildLightPoles(Geometry& poles, Geometry& lamps) {
    const float x = court::kRunbackHalfWidth + 1.5f, z = court::kRunbackHalfLength - 4.0f, h = 11.0f;
    for (float sx : {-1.0f, 1.0f})
        for (float sz : {-1.0f, 1.0f}) {
            float px = sx * x, pz = sz * z;
            addBox(poles, {px - 0.12f, 0, pz - 0.12f}, {px + 0.12f, h, pz + 0.12f}, kMetal);
            addBox(poles, {px - 0.9f, h, pz - 0.15f}, {px + 0.9f, h + 0.7f, pz + 0.15f}, kMetal);
            float face = px - sx * 0.16f;
            addBox(lamps, {std::min(face, px), h + 0.05f, pz - 0.12f}, {std::max(face, px), h + 0.65f, pz + 0.12f},
                   {1.0f, 0.98f, 0.85f});
        }
}

static Geometry buildStaticScene() {
    using namespace court;
    Geometry g;
    addGroundRect(g, -150, -150, 150, 150, kGrassTop, kGrass);
    addGroundRect(g, -kRunbackHalfWidth, -kRunbackHalfLength, kRunbackHalfWidth, kRunbackHalfLength, kApronTop, kApronGreen);
    addGroundRect(g, -kHalfDoubles, -kHalfLength, kHalfDoubles, kHalfLength, kCourtTop, kCourtBlue);
    buildCourtLines(g);
    buildNetHardware(g);
    buildFence(g);
    buildUmpireChair(g);
    buildBenches(g);
    return g;
}

// ---------------------------------------------------------------------------
// GPU helpers
// ---------------------------------------------------------------------------

struct Mesh {
    GLuint vao = 0, vbo = 0;
    GLsizei count = 0;

    void upload(const Geometry& g) {
        count = static_cast<GLsizei>(g.size());
        glGenVertexArrays(1, &vao);
        glGenBuffers(1, &vbo);
        glBindVertexArray(vao);
        glBindBuffer(GL_ARRAY_BUFFER, vbo);
        glBufferData(GL_ARRAY_BUFFER, g.size() * sizeof(Vertex), g.data(), GL_STATIC_DRAW);
        glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, sizeof(Vertex), (void*)offsetof(Vertex, pos));
        glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, sizeof(Vertex), (void*)offsetof(Vertex, normal));
        glVertexAttribPointer(2, 3, GL_FLOAT, GL_FALSE, sizeof(Vertex), (void*)offsetof(Vertex, color));
        glEnableVertexAttribArray(0);
        glEnableVertexAttribArray(1);
        glEnableVertexAttribArray(2);
    }
    void draw() const {
        glBindVertexArray(vao);
        glDrawArrays(GL_TRIANGLES, 0, count);
    }
    void destroy() {
        glDeleteBuffers(1, &vbo);
        glDeleteVertexArrays(1, &vao);
    }
};

static const char* kVertexShader = R"(
#version 330 core
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec3 aColor;
uniform mat4 uModel;
uniform mat4 uViewProj;
out vec3 vWorld;
out vec3 vNormal;
out vec3 vColor;
void main() {
    vec4 world = uModel * vec4(aPos, 1.0);
    vWorld = world.xyz;
    vNormal = mat3(uModel) * aNormal;
    vColor = aColor;
    gl_Position = uViewProj * world;
}
)";

// uMode: 0 = lit solid, 1 = net (procedural cords), 2 = emissive, 3 = soft shadow.
static const char* kFragmentShader = R"(
#version 330 core
in vec3 vWorld;
in vec3 vNormal;
in vec3 vColor;
uniform int uMode;
uniform vec3 uCamPos;
uniform vec3 uSkyColor;
uniform vec3 uLightDir;
out vec4 FragColor;

float cordCoverage(vec2 g) {
    vec2 w = fwidth(g);
    vec2 distToCord = 0.5 - abs(fract(g) - 0.5);
    const float halfThickness = 0.07;
    vec2 c = 1.0 - smoothstep(vec2(halfThickness) - w, vec2(halfThickness) + w, distToCord);
    return max(c.x, c.y);
}

void main() {
    vec3 color;
    float alpha = 1.0;

    if (uMode == 2) {
        color = vColor;
    } else if (uMode == 3) {
        color = vec3(0.0);
        alpha = 0.35;
    } else {
        vec3 n = normalize(vNormal);
        if (dot(n, uCamPos - vWorld) < 0.0) n = -n;
        float diffuse = max(dot(n, normalize(uLightDir)), 0.0);
        float hemi = 0.5 + 0.5 * n.y;
        vec3 ambient = mix(vec3(0.22, 0.21, 0.20), vec3(0.42, 0.47, 0.55), hemi);
        color = vColor * (ambient + vec3(1.0, 0.97, 0.9) * diffuse * 0.75);

        if (uMode == 1) {
            alpha = cordCoverage(vWorld.xy / 0.045) * 0.9;
            if (alpha < 0.01) discard;
        }
    }

    float dist = length(vWorld - uCamPos);
    float fog = 1.0 - exp(-pow(dist * 0.006, 2.0));
    color = mix(color, uSkyColor, fog);
    FragColor = vec4(color, alpha);
}
)";

static GLuint compileShader(GLenum type, const char* src) {
    GLuint s = glCreateShader(type);
    glShaderSource(s, 1, &src, nullptr);
    glCompileShader(s);
    GLint ok = 0;
    glGetShaderiv(s, GL_COMPILE_STATUS, &ok);
    if (!ok) {
        char log[2048];
        glGetShaderInfoLog(s, sizeof(log), nullptr, log);
        std::fprintf(stderr, "Shader compile error:\n%s\n", log);
        std::exit(1);
    }
    return s;
}

static GLuint createProgram() {
    GLuint vs = compileShader(GL_VERTEX_SHADER, kVertexShader);
    GLuint fs = compileShader(GL_FRAGMENT_SHADER, kFragmentShader);
    GLuint p = glCreateProgram();
    glAttachShader(p, vs);
    glAttachShader(p, fs);
    glLinkProgram(p);
    GLint ok = 0;
    glGetProgramiv(p, GL_LINK_STATUS, &ok);
    if (!ok) {
        char log[2048];
        glGetProgramInfoLog(p, sizeof(log), nullptr, log);
        std::fprintf(stderr, "Program link error:\n%s\n", log);
        std::exit(1);
    }
    glDeleteShader(vs);
    glDeleteShader(fs);
    return p;
}

// ---------------------------------------------------------------------------
// Camera / input
// ---------------------------------------------------------------------------

struct Camera {
    Vec3 pos{0, 1.7f, court::kHalfLength + 4.0f};
    float yaw = -90.0f;  // degrees; -90 looks toward -Z (across the net)
    float pitch = -5.0f;
    float fov = 70.0f;

    Vec3 front() const {
        float y = yaw * kPi / 180, p = pitch * kPi / 180;
        return normalize({std::cos(y) * std::cos(p), std::sin(p), std::sin(y) * std::cos(p)});
    }
};

struct AppState {
    Camera camera;
    bool mouseCaptured = true;
    bool firstMouse = true;
    double lastX = 0, lastY = 0;
    bool ballPaused = false;
};

static AppState* app(GLFWwindow* w) { return static_cast<AppState*>(glfwGetWindowUserPointer(w)); }

static void setMouseCapture(GLFWwindow* w, bool captured) {
    AppState* s = app(w);
    s->mouseCaptured = captured;
    s->firstMouse = true;
    glfwSetInputMode(w, GLFW_CURSOR, captured ? GLFW_CURSOR_DISABLED : GLFW_CURSOR_NORMAL);
    if (captured && glfwRawMouseMotionSupported()) glfwSetInputMode(w, GLFW_RAW_MOUSE_MOTION, GLFW_TRUE);
}

static void onCursor(GLFWwindow* w, double x, double y) {
    AppState* s = app(w);
    if (!s->mouseCaptured) return;
    if (s->firstMouse) {
        s->lastX = x;
        s->lastY = y;
        s->firstMouse = false;
        return;
    }
    const float sensitivity = 0.1f;
    s->camera.yaw += static_cast<float>(x - s->lastX) * sensitivity;
    s->camera.pitch -= static_cast<float>(y - s->lastY) * sensitivity;
    s->camera.pitch = std::clamp(s->camera.pitch, -89.0f, 89.0f);
    s->lastX = x;
    s->lastY = y;
}

static void onScroll(GLFWwindow* w, double, double dy) {
    Camera& c = app(w)->camera;
    c.fov = std::clamp(c.fov - static_cast<float>(dy) * 2.0f, 20.0f, 100.0f);
}

static void onKey(GLFWwindow* w, int key, int, int action, int) {
    if (action != GLFW_PRESS) return;
    AppState* s = app(w);
    switch (key) {
        case GLFW_KEY_ESCAPE: glfwSetWindowShouldClose(w, GLFW_TRUE); break;
        case GLFW_KEY_TAB: setMouseCapture(w, !s->mouseCaptured); break;
        case GLFW_KEY_R: s->camera = Camera{}; break;
        case GLFW_KEY_P: s->ballPaused = !s->ballPaused; break;
        default: break;
    }
}

static void onMouseButton(GLFWwindow* w, int button, int action, int) {
    if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_PRESS && !app(w)->mouseCaptured)
        setMouseCapture(w, true);
}

static void updateCamera(GLFWwindow* w, Camera& c, float dt) {
    float yawRad = c.yaw * kPi / 180;
    Vec3 forward{std::cos(yawRad), 0, std::sin(yawRad)};
    Vec3 right{-forward.z, 0, forward.x};
    Vec3 move{};
    auto down = [&](int k) { return glfwGetKey(w, k) == GLFW_PRESS; };
    if (down(GLFW_KEY_W) || down(GLFW_KEY_UP)) move = move + forward;
    if (down(GLFW_KEY_S) || down(GLFW_KEY_DOWN)) move = move - forward;
    if (down(GLFW_KEY_D) || down(GLFW_KEY_RIGHT)) move = move + right;
    if (down(GLFW_KEY_A) || down(GLFW_KEY_LEFT)) move = move - right;
    if (down(GLFW_KEY_SPACE) || down(GLFW_KEY_E)) move.y += 1;
    if (down(GLFW_KEY_LEFT_CONTROL) || down(GLFW_KEY_Q)) move.y -= 1;

    float speed = down(GLFW_KEY_LEFT_SHIFT) ? 15.0f : 5.0f;
    if (dot(move, move) > 0) c.pos = c.pos + normalize(move) * (speed * dt);
    c.pos.y = std::clamp(c.pos.y, 0.15f, 60.0f);
}

// ---------------------------------------------------------------------------
// Ball rally simulation
// ---------------------------------------------------------------------------

struct Ball {
    static constexpr float kRadius = 0.033f;
    static constexpr float kGravity = 9.81f;
    Vec3 pos{0, 1.0f, court::kHalfLength + 0.3f};
    Vec3 vel{};
    std::mt19937 rng{1234};

    // Send the ball toward a random spot in the opponent's half, clearing the net.
    void hit() {
        float dir = pos.z > 0 ? -1.0f : 1.0f;
        std::uniform_real_distribution<float> depth(5.5f, 10.5f), side(-3.5f, 3.5f), pace(15.0f, 22.0f);
        Vec3 target{side(rng), kRadius, dir * depth(rng)};
        float speed = pace(rng);
        float y0 = std::max(pos.y, 0.6f);
        pos.y = y0;
        for (int attempt = 0; attempt < 10; ++attempt, speed *= 0.9f) {
            float T = std::fabs(target.z - pos.z) / speed;
            float vy = (target.y - y0 + 0.5f * kGravity * T * T) / T;
            float tNet = std::fabs(pos.z) / speed;
            float yNet = y0 + vy * tNet - 0.5f * kGravity * tNet * tNet;
            vel = {(target.x - pos.x) / T, vy, dir * speed};
            if (yNet > court::kNetPostHeight + 0.15f) break;
        }
    }

    void update(float dt) {
        vel.y -= kGravity * dt;
        pos = pos + vel * dt;
        if (pos.y < kRadius && vel.y < 0) {
            pos.y = kRadius;
            vel.y = -vel.y * 0.72f;
            vel.x *= 0.85f;
            vel.z *= 0.85f;
        }
        bool pastBaseline = std::fabs(pos.z) > court::kHalfLength + 0.5f && pos.z * vel.z > 0;
        if (pastBaseline || vel.z == 0) hit();
    }
};

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

int main() {
    if (!glfwInit()) {
        std::fprintf(stderr, "Failed to initialize GLFW\n");
        return 1;
    }
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
    glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GLFW_TRUE);
    glfwWindowHint(GLFW_SAMPLES, 4);

    GLFWwindow* window = glfwCreateWindow(1280, 800, "3D Tennis Court", nullptr, nullptr);
    if (!window) {
        std::fprintf(stderr, "Failed to create window (OpenGL 3.3 required)\n");
        glfwTerminate();
        return 1;
    }
    glfwMakeContextCurrent(window);
    glfwSwapInterval(1);

    AppState state;
    glfwSetWindowUserPointer(window, &state);
    glfwSetCursorPosCallback(window, onCursor);
    glfwSetScrollCallback(window, onScroll);
    glfwSetKeyCallback(window, onKey);
    glfwSetMouseButtonCallback(window, onMouseButton);
    setMouseCapture(window, true);

    std::printf(
        "Controls:\n"
        "  Mouse          look around\n"
        "  W A S D        move\n"
        "  Space / E      fly up\n"
        "  Ctrl / Q       fly down\n"
        "  Shift          sprint\n"
        "  Scroll         zoom\n"
        "  P              pause / resume the ball\n"
        "  R              reset camera\n"
        "  Tab            release / capture mouse\n"
        "  Esc            quit\n");

    GLuint program = createProgram();
    GLint uModel = glGetUniformLocation(program, "uModel");
    GLint uViewProj = glGetUniformLocation(program, "uViewProj");
    GLint uMode = glGetUniformLocation(program, "uMode");
    GLint uCamPos = glGetUniformLocation(program, "uCamPos");
    GLint uSkyColor = glGetUniformLocation(program, "uSkyColor");
    GLint uLightDir = glGetUniformLocation(program, "uLightDir");

    Geometry poles, lamps, net, ball;
    Geometry scene = buildStaticScene();
    buildLightPoles(poles, lamps);
    scene.insert(scene.end(), poles.begin(), poles.end());
    buildNet(net);
    addSphere(ball, 1.0f, 12, 18, {0.82f, 0.95f, 0.22f});

    Mesh sceneMesh, lampMesh, netMesh, ballMesh;
    sceneMesh.upload(scene);
    lampMesh.upload(lamps);
    netMesh.upload(net);
    ballMesh.upload(ball);

    const Vec3 sky{0.58f, 0.76f, 0.94f};
    glEnable(GL_DEPTH_TEST);
    glEnable(GL_MULTISAMPLE);
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    glClearColor(sky.x, sky.y, sky.z, 1);

    Ball tennisBall;
    tennisBall.hit();

    double lastTime = glfwGetTime();
    while (!glfwWindowShouldClose(window)) {
        double now = glfwGetTime();
        float dt = static_cast<float>(std::min(now - lastTime, 0.1));
        lastTime = now;

        glfwPollEvents();
        updateCamera(window, state.camera, dt);
        if (!state.ballPaused) {
            const int substeps = 4;
            for (int i = 0; i < substeps; ++i) tennisBall.update(dt / substeps);
        }

        int fbW, fbH;
        glfwGetFramebufferSize(window, &fbW, &fbH);
        if (fbW == 0 || fbH == 0) continue;
        glViewport(0, 0, fbW, fbH);
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

        const Camera& cam = state.camera;
        Mat4 proj = perspective(cam.fov * kPi / 180, static_cast<float>(fbW) / fbH, 0.1f, 400.0f);
        Mat4 view = lookAt(cam.pos, cam.pos + cam.front(), {0, 1, 0});
        Mat4 viewProj = proj * view;
        Mat4 identity;

        glUseProgram(program);
        glUniformMatrix4fv(uViewProj, 1, GL_FALSE, viewProj.m);
        glUniform3f(uCamPos, cam.pos.x, cam.pos.y, cam.pos.z);
        glUniform3f(uSkyColor, sky.x, sky.y, sky.z);
        glUniform3f(uLightDir, 0.35f, 1.0f, 0.25f);

        glUniformMatrix4fv(uModel, 1, GL_FALSE, identity.m);
        glUniform1i(uMode, 0);
        sceneMesh.draw();
        glUniform1i(uMode, 2);
        lampMesh.draw();

        const Vec3& b = tennisBall.pos;
        Mat4 ballModel = translateScale(b, {Ball::kRadius, Ball::kRadius, Ball::kRadius});
        glUniformMatrix4fv(uModel, 1, GL_FALSE, ballModel.m);
        glUniform1i(uMode, 0);
        ballMesh.draw();

        // Flattened sphere as a contact shadow; shrinks as the ball rises.
        float shadowScale = Ball::kRadius * std::clamp(1.4f - b.y * 0.15f, 0.5f, 1.4f);
        Mat4 shadowModel = translateScale({b.x, court::kLineTop + 0.01f, b.z}, {shadowScale, 0.001f, shadowScale});
        glUniformMatrix4fv(uModel, 1, GL_FALSE, shadowModel.m);
        glUniform1i(uMode, 3);
        glDepthMask(GL_FALSE);
        ballMesh.draw();
        glDepthMask(GL_TRUE);

        // Net last so everything behind it shows through the mesh.
        glUniformMatrix4fv(uModel, 1, GL_FALSE, identity.m);
        glUniform1i(uMode, 1);
        netMesh.draw();

        glfwSwapBuffers(window);
    }

    sceneMesh.destroy();
    lampMesh.destroy();
    netMesh.destroy();
    ballMesh.destroy();
    glDeleteProgram(program);
    glfwDestroyWindow(window);
    glfwTerminate();
    return 0;
}
