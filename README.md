#  morgan bergen

`/app/src/app` is non standard for nextjs

core file are `layout.tsx`, `page.tsx`, and `globals.css`

`shadcn/ui` supports `next.js 15.2.1`


```
Next.js Version:
You're running Next.js 15.2.1, which is the latest version
This is good news as shadcn/ui fully supports Next.js 15
Tailwind Configuration:
Tailwind CSS is a utility-first CSS framework that's included by default in new Next.js projects

tailwind since you used create-next-app
We can see this in your current page.tsx which uses Tailwind classes like min-h-screen, flex, etc.
```


`npx shadcn@latest init`


```
❯ pnpm dlx shadcn@latest init
Packages: +220
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 220, reused 67, downloaded 153, added 220, done
Library/Caches/pnpm/dlx/hx67qbkz3shxeflxwe2je2aqw4/19588a05607-8d9a/node_modules/Library/Caches/pnpm/dlx/hx67qbkz3shxeflxwe2je2aqw4/19588a05607-8d9a/node_modules/.pnpm/msw@2.7.3/node_modules/msw: Running postinstall script, done in 46ms
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS config. Found v4.
✔ Validating import alias.
✔ Which color would you like to use as the base color? › Gray
✔ Writing components.json.
✔ Checking registry.
✔ Updating src/app/globals.css
  Installing dependencies.

It looks like you are using React 19. 
Some packages may fail to install due to peer dependency issues in npm (see https://ui.shadcn.com/react-19).

✔ How would you like to proceed? › Use --force
✔ Installing dependencies.
✔ Created 1 file:
  - src/lib/utils.ts

Success! Project initialization completed.
You may now add components.
```

####  initial structure and initialization

<details><summary>&nbsp; initial setup</summary>
<br>
    
`npx create-next-app@latest`

`npm run dev`

`app/page.tsx` main page
</details>

<details>
<summary>&nbsp; project structure</summary>

```
.
├── README.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   └── app
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
└── tsconfig.json

4 directories, 17 files
<<<<<<< HEAD
```

####  top level directories


|   directory   |   description   |
|---           |---             |
|   `app`       |   app router    |
|   `pages`     |   pages router  |
|   `public`    |   static files  |
|   `src`       |   application source code |

</details>


[reference](https://nextjs.org/docs/app/getting-started/project-structure)

=======
```
>>>>>>> f547931 (restart)
