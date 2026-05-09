#  stack

typescript, angular, bun

angular was developed by a team at google and is maintained [here](https://github.com/angular)

[reference installation](https://angular.dev/installation)

npm, pnpm, yarn, bun

in the javascript ecosystem npm, yarn, pnpm, and bun are the four primary tools used to manage project dependencies.  they all perform the same core task - installing and managing packages from the npm registry.

yarn 

yarn was originally created by facebook to solve npm's early speed and security issues.  the pro is that it introduced lockedfiles (now standard everywhere) for deterministic builds.  modern yarn offers features like zero installs and excellent workspace support for monorepos.

modern yarn cal eliminate `node_modules` entirely using pnp, which maps dependencies to zip archives.  this makes installs near-instant after the first run and enables zero-installs where you commit your dependency cache to git.

bun 

installation

brew tap oven-sh/bun
brew install bun

❯ bun
Bun is a fast JavaScript runtime, package manager, bundler, and test runner. (1.3.13+bf2e2cecf)

Usage: bun <command> [...flags] [...args]

Commands:
  run       ./my-script.ts       Execute a file with Bun
            lint                 Run a package.json script
  test                           Run unit tests with Bun
  x         next                 Execute a package binary (CLI), installing if needed (bunx)
  repl                           Start a REPL session with Bun
  exec                           Run a shell script directly with Bun

  install                        Install dependencies for a package.json (bun i)
  add       tailwindcss          Add a dependency to package.json (bun a)
  remove    browserify           Remove a dependency from package.json (bun rm)
  update    elysia               Update outdated dependencies
  audit                          Check installed packages for vulnerabilities
  outdated                       Display latest versions of outdated dependencies
  link      [<package>]          Register or link a local npm package
  unlink                         Unregister a local npm package
  publish                        Publish a package to the npm registry
  patch <pkg>                    Prepare a package for patching
  pm <subcommand>                Additional package management utilities
  info      @shumai/shumai       Display package metadata from the registry
  why       hono                 Explain why a package is installed

  build     ./a.ts ./b.jsx       Bundle TypeScript & JavaScript into a single file

  init                           Start an empty Bun project from a built-in template
  create    elysia               Create a new project from a template (bun c)
  upgrade                        Upgrade to latest version of Bun.
  feedback  ./file1 ./file2      Provide feedback to the Bun team.

  <command> --help               Print help text for command.

Learn more about Bun:            https://bun.com/docs
Join our Discord community:      https://bun.com/discord
