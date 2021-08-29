---
title: SVG
---

## Apply Viewbox from an Element

```js
sourceSVG = document.getElementById('source-svg')
// get viewbox data
viewBox = sourceSVG.viewBox.baseVal
// get existing
existing = document.getElementById('existing-svg')
// set viewbox
existing.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`)
```

## Links

- [Using SVG | CSS-Tricks](https://css-tricks.com/using-svg/)
- [Method Draw online SVG editor](https://editor.method.ac/)
- [Inkscape](https://inkscape.org/) - cross-platform vector graphics software
- [Change Color of SVG on Hover | CSS-Tricks](https://css-tricks.com/change-color-of-svg-on-hover/)
- [Animating SVG path segments](http://lmgonzalves.github.io/2015/10/26/animating-svg-path-segments/)
- [Animating an SVG Menu Icon with Segment | Codrops](http://tympanus.net/codrops/2015/11/12/animating-svg-menu-icon-segment/)
- [PNG to SVG (Online & Free) — Convertio](https://convertio.co/png-svg/)
- [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)
- [SVG to PNG - Convert SVG files to PNG Online](https://svgtopng.com)
- [SVG Sprite Generator](https://svgsprit.es/)
- [svg-sprite/svg-sprite: SVG sprites & stacks galore — A low-level Node.js module that takes a bunch of SVG files, optimizes them and bakes them into SVG sprites of several types along with suitable stylesheet resources (e.g. CSS, Sass, LESS, Stylus, etc.)](https://github.com/svg-sprite/svg-sprite)