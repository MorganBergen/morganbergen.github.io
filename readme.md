cr 019e56c8-8a88-7bd1-9317-4b1441206f54

###  `ng new my-first-angular-app`

`ng new [name]` command creates a new workspace

when you run this command, the cli installs the necessary angular npm packages and other dependencies in a new workspacce, with a root-level application named `name`

creates a new angular workspace, `[name]` is the name for the new workspace and the initial project.  `[name]` will be used for the root directory and various identifiers throughout the project.

`ng new [name] --package-manager=[npm|yarn|pnpm|bun]`

`ng new main --package-manager=bun`

angular cli creates teh angular project structure, bun installs dependencies and manages the lockfile.

the package manager used to install dependencies

`ng` is the angular cli command line tool.  angular project tool owns the angular framework workflow. 
`new` is the command to create a new angular workspace and initial project  
`bun` fast JavaScript runtime, package manager, bundler, and test runner.  essentially the dependency installer + script runner.  bun owns packages, lockfile, and command execution.

####  complete output

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

✔ Packages installed successfully.
hint: Using 'master' as the name for the initial branch. This default branch name
hint: will change to "main" in Git 3.0. To configure the initial branch name
hint: to use in all of your new repositories, which will suppress this warning,
hint: call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
hint:
hint: Disable this message with "git config set advice.defaultBranchName false"
    Successfully initialized git.
```

###  workspae and project file structure

when developing applications in the context of an angualr workspace.  a workspace contains the files for one or more projects.  a project is the set of files that comprise an application or a shareable library.

by default, `ng new` creates an initial skeleton application at the root level of the workspace, along with its end-to-end tests.  the skeleton is for a simple welcome application that is ready to run and easy to modify.  

the root-level application has the same name as the workspace, and the source files reside in the `src/` subfolder of the workspace.  the default behavior is suitable for a typical multi-repo development style where each application resides in its own workspace.  
