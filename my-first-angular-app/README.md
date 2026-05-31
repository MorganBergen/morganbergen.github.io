# MyFirstAngularApp

####  table of contents

1.  [development server](#development-server)
2.  [code scaffolding](#code-scaffolding)
3.  [building](#building)
4.  [running unit tests](#running-unit-tests)
5.  [running end to end tests](#running-end-to-end-tests)
6.  [additional resources](#additional-resources)

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



###  `ng new my-first-angular-app`

`ng new [name]`

creates a new angular workspace, `[name]` is the name for the new workspace and the initial project.  `[name]` will be used for the root directory and various identifiers throughout the project.

what is an angular workspace?  ...

`ng new [name] --package-manager=[npm|yarn|pnpm|bun]`

`ng new main --package-manager=bun`

angular cli creates teh angular project structure, bun installs dependencies and manages the lockfile.

the package manager used to install dependencies

`ng` is the angular cli command line tool.  angular project tool owns the angular framework workflow. 
`new` is the command to create a new angular workspace and initial project  
`bun` fast JavaScript runtime, package manager, bundler, and test runner.  essentially the dependency installer + script runner.  bun owns packages, lockfile, and command execution.


```
 ng new main --package-manager=bun
✔ Which stylesheet system would you like to use? CSS             [
https://developer.mozilla.org/docs/Web/CSS                     ]

✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?
 Yes

? Which stylesheet system would you like to use?
❯ CSS             [ https://developer.mozilla.org/docs/Web/CSS                     ] y 
  Tailwind CSS    [ https://tailwindcss.com                                        ]
  Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass (Indented) [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less            [ http://lesscss.org                                             ]

✔ Which AI tools do you want to configure with Angular best practices?
https://angular.dev/ai/develop-with-ai None
CREATE main/.prettierrc (161 bytes)
CREATE main/README.md (1458 bytes)
CREATE main/.editorconfig (314 bytes)
CREATE main/.gitignore (622 bytes)
CREATE main/angular.json (2126 bytes)
CREATE main/package.json (1003 bytes)
CREATE main/tsconfig.json (957 bytes)
CREATE main/tsconfig.app.json (447 bytes)
CREATE main/tsconfig.spec.json (441 bytes)
CREATE main/.vscode/extensions.json (130 bytes)
CREATE main/.vscode/launch.json (470 bytes)
CREATE main/.vscode/mcp.json (179 bytes)
CREATE main/.vscode/tasks.json (978 bytes)
CREATE main/src/main.ts (222 bytes)
CREATE main/src/index.html (290 bytes)
CREATE main/src/styles.css (80 bytes)
CREATE main/src/main.server.ts (292 bytes)
CREATE main/src/server.ts (1609 bytes)
CREATE main/src/app/app.css (0 bytes)
CREATE main/src/app/app.spec.ts (671 bytes)
CREATE main/src/app/app.ts (286 bytes)
CREATE main/src/app/app.html (20144 bytes)
CREATE main/src/app/app.config.ts (441 bytes)
CREATE main/src/app/app.routes.ts (77 bytes)
CREATE main/src/app/app.config.server.ts (426 bytes)
CREATE main/src/app/app.routes.server.ts (166 bytes)
CREATE main/public/favicon.ico (15086 bytes)
⠦ Installing packages (bun)...


Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N) y 

which style system would you like to use? 

? Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai
❯ ◉ None                                            
  ◯ Agents.md      [ https://agents.md/                                               ] y
  ◯ Claude         [ https://docs.anthropic.com/en/docs/claude-code/memory            ]
  ◯ Cursor         [ https://docs.cursor.com/en/context/rules                         ]
  ◯ Gemini         [ https://ai.google.dev/gemini-api/docs                            ]
  ◯ GitHub Copilot [ https://code.visualstudio.com/docs/copilot/copilot-customization ]
  ◯ JetBrains AI   [ https://www.jetbrains.com/help/junie/customize-guidelines.html   ]

CREATE my-first-angular-app/.prettierrc (161 bytes)
CREATE my-first-angular-app/README.md (1471 bytes)
CREATE my-first-angular-app/.editorconfig (314 bytes)
CREATE my-first-angular-app/.gitignore (622 bytes)
CREATE my-first-angular-app/angular.json (2174 bytes)
CREATE my-first-angular-app/package.json (1052 bytes)
CREATE my-first-angular-app/tsconfig.json (957 bytes)
CREATE my-first-angular-app/tsconfig.app.json (447 bytes)
CREATE my-first-angular-app/tsconfig.spec.json (441 bytes)
CREATE my-first-angular-app/.vscode/extensions.json (130 bytes)
CREATE my-first-angular-app/.vscode/launch.json (470 bytes)
CREATE my-first-angular-app/.vscode/mcp.json (179 bytes)
CREATE my-first-angular-app/.vscode/tasks.json (978 bytes)
CREATE my-first-angular-app/src/main.ts (222 bytes)
CREATE my-first-angular-app/src/index.html (303 bytes)
CREATE my-first-angular-app/src/styles.css (80 bytes)
CREATE my-first-angular-app/src/main.server.ts (292 bytes)
CREATE my-first-angular-app/src/server.ts (1609 bytes)
CREATE my-first-angular-app/src/app/app.css (0 bytes)
CREATE my-first-angular-app/src/app/app.spec.ts (687 bytes)
CREATE my-first-angular-app/src/app/app.ts (302 bytes)
CREATE my-first-angular-app/src/app/app.html (20144 bytes)
CREATE my-first-angular-app/src/app/app.config.ts (441 bytes)
CREATE my-first-angular-app/src/app/app.routes.ts (77 bytes)
CREATE my-first-angular-app/src/app/app.config.server.ts (426 bytes)
CREATE my-first-angular-app/src/app/app.routes.server.ts (166 bytes)
CREATE my-first-angular-app/public/favicon.ico (15086 bytes)
⠹ Installing packages (npm)...

↑↓ navigate • ⏎ select
```

```
❯ ng new my-first-angular-app
Node.js version v25.8.2 detected.
Odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
 Would you like to enable autocompletion? This will set up your terminal so pressing TAB while typing Angular CLI commands will
show possible options and autocomplete arguments. (Enabling autocompletion will modify configuration files in your home
directory.) Yes
Appended `source <(ng completion script)` to `/Users/morgan/.zshrc`. Restart your terminal or run the following to autocomplete `ng` commands:

    source <(ng completion script)

Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.dev/cli/analytics. No
Global setting: disabled
Local setting: No local workspace configuration file.
Effective status: disabled
✔ Which stylesheet system would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS]
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? Yes
✔ Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai None
CREATE my-first-angular-app/.prettierrc (161 bytes)
CREATE my-first-angular-app/README.md (1471 bytes)
CREATE my-first-angular-app/.editorconfig (314 bytes)
CREATE my-first-angular-app/.gitignore (622 bytes)
CREATE my-first-angular-app/angular.json (2174 bytes)
CREATE my-first-angular-app/package.json (1052 bytes)
CREATE my-first-angular-app/tsconfig.json (957 bytes)
CREATE my-first-angular-app/tsconfig.app.json (447 bytes)
CREATE my-first-angular-app/tsconfig.spec.json (441 bytes)
CREATE my-first-angular-app/.vscode/extensions.json (130 bytes)
CREATE my-first-angular-app/.vscode/launch.json (470 bytes)
CREATE my-first-angular-app/.vscode/mcp.json (179 bytes)
CREATE my-first-angular-app/.vscode/tasks.json (978 bytes)
CREATE my-first-angular-app/src/main.ts (222 bytes)
CREATE my-first-angular-app/src/index.html (303 bytes)
CREATE my-first-angular-app/src/styles.css (80 bytes)
CREATE my-first-angular-app/src/main.server.ts (292 bytes)
CREATE my-first-angular-app/src/server.ts (1609 bytes)
CREATE my-first-angular-app/src/app/app.css (0 bytes)
CREATE my-first-angular-app/src/app/app.spec.ts (687 bytes)
CREATE my-first-angular-app/src/app/app.ts (302 bytes)
CREATE my-first-angular-app/src/app/app.html (20144 bytes)
CREATE my-first-angular-app/src/app/app.config.ts (441 bytes)
CREATE my-first-angular-app/src/app/app.routes.ts (77 bytes)
CREATE my-first-angular-app/src/app/app.config.server.ts (426 bytes)
CREATE my-first-angular-app/src/app/app.routes.server.ts (166 bytes)
CREATE my-first-angular-app/public/favicon.ico (15086 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
```


At a high level this is a GitHub Pages/Vercel repo with the actual Angular app nested in my-
  first-angular-app. I also see two local uncommitted docs changes at the root: readme.md modified
  and calendar.md untracked, so I’ll avoid treating those as committed project state.

• Explored
  └ Read vercel.json, angular.json, package.json, pages.yml, README.md, overview.md, main.ts,
         index.html, styles.css
    List my-first-angular-app
    Read app.css, app.html, app.spec.ts, app.config.ts, app.ts

──────────────────────────────────────────────────────────────────────────────────────────────────

• Repo Map

  This repo is morganbergen.github.io, and the real app lives in a nested folder:

  morganbergen.github.io/
    .github/workflows/pages.yml      GitHub Pages deploy workflow
    vercel.json                      Vercel deploy config
    .node-version                    root Node version for deploy tooling
    info/                            notes/docs, partly outdated Next.js notes
    my-first-angular-app/            actual Angular application

  The app is not at the repo root. That is why Vercel and GitHub Actions were confused earlier:
  old config expected a Next.js app or my-app, but the real app is /Users/morgan/Documents/github/
  morganbergen.github.io/my-first-angular-app.

  What It Builds

  The app is a small Angular 21 single-page app using Bun.

  Key file: package.json

  Important scripts:

  bun run start   # local dev server via ng serve
  bun run build   # production Angular build
  bun run test    # Angular unit tests

  Build output goes here:

  my-first-angular-app/dist/my-first-angular-app/browser

  That folder is what both Vercel and GitHub Pages should serve.

  What The App Does

  The app renders a full-screen Matrix-style canvas animation.

  Main flow:

  - src/main.ts bootstraps Angular.
  - src/app/app.ts owns the canvas animation.
  - src/app/app.html contains one canvas.
  - src/app/app.css makes it full-screen.

  The component waits until the browser view is ready, gets the canvas context, sizes it to the
  device pixel ratio, then repeatedly draws random green glyphs using requestAnimationFrame.

  Deployment

  There are two deployment paths now:

  GitHub Pages: /Users/morgan/Documents/github/morganbergen.github.io/.github/workflows/pages.yml

  It runs on pushes to master, installs Bun, builds the Angular app, uploads the dist/.../browser
  folder, and deploys it to Pages.

  Vercel: /Users/morgan/Documents/github/morganbergen.github.io/vercel.json

  It tells Vercel:

  "framework": "angular",
  "buildCommand": "cd my-first-angular-app && bun run build",
  "outputDirectory": "my-first-angular-app/dist/my-first-angular-app/browser"

  So Vercel no longer tries to run next build.

  Current Caveats

  Your info/overview.md notes still describe an older Next.js app, not the current Angular app.
  That documentation is now misleading.

  Git status also shows local uncommitted docs changes:

   M readme.md
  ?? calendar.md

  I did not change those.

  The main thing to remember: this is an Angular canvas app inside a repo root that also contains
  deployment and notes files. Most app work should happen inside my-first-angular-app/src/app.
