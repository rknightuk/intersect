---
title: CSS
---

## Include Stylesheet

```html
<link rel="stylesheet" href="style.css">
```

## System Font Defaults

[Shipping system fonts to GitHub.com](https://markdotto.com/2018/02/07/github-system-fonts/)

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
```

## Using CSS Variables

[Browser support for CSS variables](https://caniuse.com/css-variables)

```css
:root {
  --primary-color: #db0a5b;
}

.something {
  --primary-color: #db0a5b;
}
```

## Dark Mode

```css
:root {
  --text-color: #000;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #fff;
  }
}
```

## Hover Element Change Another

[The Adjacent-Sibling Selector](https://meyerweb.com/eric/articles/webrev/200007a.html)

```html
<div class="hoverer">hover me</div>
<div class="hoveree">and I will appear</div>
```

```css
.hoveree {
    display: none;
}
    
.hoverer:hover + .hoveree {
    display: block;
}
```

## Links

- [CSS accent-color](https://web.dev/accent-color/)
- [Grid Garden - A game for learning CSS grid](https://cssgridgarden.com/)
- [Flexbox Froggy - A game for learning CSS flexbox](https://flexboxfroggy.com/)
- [What The Flexbox?! — A simple 20 video course that will help you master CSS Flexbox](https://flexbox.io/)
- [ColorSpace - CSS Gradient Color Generator](https://mycolor.space/gradient)
- [Relearn CSS layout: Every Layout](https://every-layout.dev/)
- [Make “Pre” Text Wrap](https://css-tricks.com/snippets/css/make-pre-text-wrap/)
- [Glide CSS — A tiny component-first CSS framework for Sass](https://glidecss.com/)
- [PurgeCSS - Remove unused CSS](https://purgecss.com/#sponsors-%F0%9F%A5%B0)
- [NES.css - NES-style CSS Framework](https://nostalgic-css.github.io/NES.css/)
- [The future of CSS: Nesting Selectors – Bram.us](https://www.bram.us/2019/03/17/the-future-of-css-nesting-selectors/)
- [CSS Nesting Module](https://www.w3.org/TR/2021/WD-css-nesting-1-20210831/)
- [How to Create Neon Text With CSS | CSS-Tricks](https://css-tricks.com/how-to-create-neon-text-with-css/)
- [A Complete Guide to Custom Properties | CSS-Tricks](https://css-tricks.com/a-complete-guide-to-custom-properties/)
- [OctoD/postcss-brexit: A post brexit plugin for post-css made for true British English programmers](https://github.com/octod/postcss-brexit)
- [Grainy Gradients | CSS-Tricks](https://css-tricks.com/grainy-gradients/)
- [Pico.css • Minimal CSS Framework for semantic HTML](https://picocss.com/)
- [Light and dark mode in just 14 lines of CSS](https://whitep4nth3r.com/blog/quick-light-dark-mode-css/)
- [A responsive striped CSS gradient inspired by 80s VHS tapes](https://whitep4nth3r.com/blog/responsive-striped-css-pattern-80s-vhs-tapes/)