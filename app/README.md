#  morgan bergen

####  table of contents

[project structure](#project-structure)

> [`package.json`](#packagejson)
>
> [`tsconfig.json`](#tsconfigjson)
>
> [`next-env.d.ts`](#next-envdts)
> 
> [`next.config.ts`](#nextconfigts)
>
> [`eslint.config.mjs`](#eslintconfigmjs)
>
> [`postcss.config.mjs`](#postcssconfigmjs)
>
> [`readme.md`](#readmemd)



##  

####  project structure

```
app
├── .next
│   └── ...
├── node_modules
│   └── ...
├── public
│   └── ...
├── src
│   └── ...
│
├── README.md
├── .gitignore
│
├── package.json
├── tsconfig.json
├── package-lock.json
│
├── next-env.d.ts
├── next.config.ts
│
├── eslint.config.mjs
└── postcss.config.mjs
```

####  `package.json`

```JSON
{
  "name": "app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.2.1"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.2.1",
    "@eslint/eslintrc": "^3"
  }
}
```

`scripts`

`next dev --turbopack`, `next build`, `next start`, `next lint`

`dependencies`

`react`, `react-dom`, `next`

`devDependencies` 

`typescript`, `@types/node`, `@types/react`, `@types/react-dom`, `@tailwindcss/postcss`, `tailwindcss`, `eslint`, `eslint-config-next`, `@eslint/eslintrc`

the purpose of the `package.json` is to _________________. 

when calling `tsc` or generally compiling the project with `npm run dev` or with `next build` __________________.

####  `tsconfig.json`

```JSON
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

`compilerOptions`

`paths`

`include`

`exclude`



####  `next-env.d.ts`

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

the purpose of this file can be found in the link shown above

####  `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

we are importing a component from the `next` library

and we construct a new object by instantiating the `NextConfig` class

the object is defined, but with no parameters

somewhere in this project `nextConfig` is used to configure the project
























####  `eslint.config.mjs`

```mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

`__filename`, `__dirname`, `compat` are all privately defined variables relative to only `eslint.config.mjs`

`eslintConfig` is a private member object?

####  `postcss.config.mjs`

```mjs
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

the public variable accessible by other modules is `postcss.config.config`


####  `README.md`

<details><summary><code>next.js</code></summary>

this is a [next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**getting started**

first, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

you can start editing the page by modifying `app/page.tsx`. the page auto-updates as you edit the file.

this project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [geist](https://vercel.com/font), a new font family for vercel.

**learn more**

to learn more about next.js, take a look at the following resources:

- [next.js documentation](https://nextjs.org/docs) - learn about next.js features and api.
- [learn next.js](https://nextjs.org/learn) - an interactive next.js tutorial.

you can check out [the next.js github repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

**deploy on vercel**

the easiest way to deploy your next.js app is to use the [vercel platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of next.js.

check out our [next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

</details>