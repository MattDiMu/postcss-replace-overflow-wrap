# PostCSS Replace Overflow Wrap [![Build Status][ci-img]][ci]

[PostCSS] plugin to replace overflow-wrap with word-wrap. May optionally retain both declarations.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/MattDiMu/postcss-replace-overflow-wrap.svg
[ci]:      https://travis-ci.org/MattDiMu/postcss-replace-overflow-wrap


```css
/* before */
.foo {
    overflow-wrap: break-word;
}

/* after */
.foo {
    word-wrap: break-word;
}
```

```css
/* before, when the option { method: 'copy' } is passed */
.foo {
    overflow-wrap: break-word;
}

/* after */
.foo {
    word-wrap: break-word;
    overflow-wrap: break-word;
}
```


## Usage

```js
postcss([ require('postcss-replace-overflow-wrap') ])
```

See [PostCSS] docs for examples for your environment.
