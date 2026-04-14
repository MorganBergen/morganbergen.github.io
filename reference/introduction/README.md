#  quick start

react documentation 

1.  [create and nest components](#creating-and-nesting-components)
2.  add markup and styles
3.  display data
4.  render conditions and lists
5.  respond to events and update the screen
6.  share data between two components

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


