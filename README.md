#  readme

###  introduction

[next.js](https://nextjs.org) and [nextra](https://nextra.site/docs/blog-theme/start)

`npm i next react react-dom nextra nextra-theme-blog`

`npx create-next-app@latest --example blog morganbergen`

`npm run dev`

```zsh
❯ npm run dev

   ▲ Next.js 15.2.1
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.60:3000
```

###  project structure

```zsh
❯ tree -I "node_modules|dist|.next|.turbo|.git|.vercel|.yarn|package-lock.json|yarn.lock|pnpm-lock.yaml|.github|.eslintrc.*|.prettierrc*|.editorconfig|.eslintcache|.swcrc|.DS_Store|*.log|.idea|.vscode|.env"
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.mdx
│   ├── photos.mdx
│   ├── posts
│   │   ├── index.md
│   │   ├── markdown.md
│   │   └── pages.md
│   └── tags
│       └── [tag].mdx
├── public
│   ├── favicon.ico
│   ├── fonts
│   │   ├── Inter-italic.latin.var.woff2
│   │   └── Inter-roman.latin.var.woff2
│   └── images
│       ├── photo.jpg
│       └── photo2.jpg
├── scripts
│   └── gen-rss.js
├── styles
│   └── main.css
├── theme.config.js
└── tsconfig.json

9 directories, 21 files
```

###  core configuration files

####  `next.config.js`

####  `package.json`

####  `theme.config.js` 

```javascript
/**
 * @brief   customize the site's appearance and metadata
 */

const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Your Name.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
};
```
