#  morganbergen.github.io

[`React`](https://react.dev)

the library for web and native user interfaces.  react lets you build user interfaces out of individual pieces called components.  create your own react components like `Thumbnail`, `LikeButton`, and `Video`.  then combine them into entire screens, pages, and apps.

```javascript
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
```


----------------------------------

`Next.js`

`next.js` is a react framework for building full take web applications.  you use react components to build user interfaces, and `next.js` for additional features and optimizations.

