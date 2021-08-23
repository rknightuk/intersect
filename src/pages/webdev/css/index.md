---
title: CSS
---

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