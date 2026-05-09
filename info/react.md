#  quick start

react documentation and example programs to view

###  table of contents

1.  [create and nest components](#creating-and-nesting-components)
2.  add markup and styles
3.  display data
4.  render conditions and lists
5.  respond to events and update the screen
6.  share data between two components

###  references

[react.dev](https://react.dev/learn)

###  program

`npm install`  
`npm start`

```
Compiled successfully!

You can now view react.dev in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.193:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

that should start the react dev server, usually at [http://localhost:3000](http://localhost:3000)

###  session review

Token usage: total=43,848 input=39,725 (+ 609,408 cached) output=4,123 (reasoning 740)
To continue this session, run codex resume 019d8d21-9368-7cb3-95f3-9b579e7baea3

##  creating and nesting components

react apps are made out of components.  a component is a piece of the ui that has its own logic and appearance.  a component can be as small as a button, or as large as an entire page.  react components are javascript functions that return markup,

```javascript

function MyButton() {
    return (
        <button>I'm a button</button>
    );
}
```

now that youve declared `MyButton`, you can nest it into another component,

```javascript

export default function MyApp() {
    return (
        <div>
            <h1>welcome to my app</h1>
            <MyButton />
        </div>
    );
}
```
notice that `<MyButton />` starts with a capital letter.  that's how you know it's a react component.  react component names must always start with a capital letter, while html tags must be lowercase.

the export default keywords specify the main component in the file.  if you're not familiar with some piece of javascript syntax, mdn and javascript.info have great references.

##  writing markup with jsx

the markup syntax you've seen above is called jsx.  it's optional, but most react projects use jsx for its convenience.  all of the tools we recommend for local development support jsx out of the box.

jsx is stricter than html.  you have to close tags like `<br />`.  your component also can't return multiple jsx tages.  you have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper:

```jsx
function AboutPage() {
    return (
    <>
        <h1>about</h1>
        <p>hello there. <br />how do you do?</p>
    </>
    );
}
```

if you have a lot of html to port to jsx you can use an online converter.

##  adding styles

in react, you specify a css class with `className`.  it works the same way as the html `class` attribute:











