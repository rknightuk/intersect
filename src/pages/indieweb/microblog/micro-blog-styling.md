---
title: Micro.blog Styling
---

This is the tweaks I've made to the styling [on my Micro.blog site](https://toot.rknight.me).

## Paper theme-spefiic

[am1t/microdotblog-paper](https://github.com/am1t/microdotblog-paper) is the theme I use.

Make blockquotes italics:

```css
blockquote {
	font-style: italic;
}
```

Remove the post separator:

```css
hr.post-separator {
	display: none;
}
```

## Photo Grid changes

I didn't like how the grid looked when mixing square and non-square images so I made so changes so that all the containers are square and the images fill those containers.

```css
.photos-grid-container a {
	aspect-ratio: 1;
	overflow: hidden;
}

.photos-grid-container img {
	height: 100%!important;
  	width: 100%;
  	object-fit: cover;
}
```