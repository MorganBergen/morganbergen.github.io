# MyFirstAngularApp

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


```CLI
❯ bun install -g @angular/cli
bun add v1.3.13 (bf2e2cec)

installed @angular/cli@21.2.10 with binaries:
 - ng

277 packages installed [2.28s]

warn: To run "ng", add the global bin folder to $PATH:

export PATH="/Users/morgan/.bun/bin:$PATH"
❯ export PATH="/Users/morgan/.bun/bin:$PATH"
❯ ng --version
Node.js version v25.8.2 detected.
Odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
21.2.10
❯ ng
Node.js version v25.8.2 detected.
Odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
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
details and how to change this setting, see https://angular.dev/cli/analytics.

   No
Global setting: disabled
Local setting: No local workspace configuration file.
Effective status: disabled
✔ Which stylesheet system would you like to use? CSS             [ https://developer.mozilla.org/docs/Web/CSS
  ]
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
