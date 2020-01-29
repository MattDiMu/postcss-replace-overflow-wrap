# PostCSS Replace Overflow Wrap [![CSS Standard Status][css-img]][css] [![Build Status][ci-img]][ci]

[PostCSS] plugin to replace overflow-wrap with word-wrap. May optionally retain both declarations.

[!['Can I use' table](https://caniuse.bitsofco.de/image/wordwrap.png)](https://caniuse.com/#feat=wordwrap)

[PostCSS]: https://github.com/postcss/postcss
[css-img]: https://jonathantneal.github.io/css-db/badge/css-text-overflow-wrap-property.svg
[css]:     https://jonathantneal.github.io/css-db/#css-text-overflow-wrap-property
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
/* default usage, with no options (method = replace) */
postcss([ require('postcss-replace-overflow-wrap') ])
```

```js
/* add word-wrap, but keep overflow-wrap */
postcss([ require('postcss-replace-overflow-wrap') ])({ method: 'copy' })
```
See [PostCSS] docs for examples for your environment.
