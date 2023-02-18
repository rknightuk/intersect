---
title: Emoji
---

## Emoji Dataset

[Emoji Data by iamcal](https://github.com/iamcal/emoji-data) is the most complete source I've found. [Unicode Emoji JSON](https://github.com/muan/unicode-emoji-json) is also good but doesn't have as much data.

If you need to convert from `unified` code into the native emoji in javascript:

```js
const unicodes = e.unified.split('-')
const codePoints = unicodes.map((u) => `0x${u}`)
const nativeEmoji = String.fromCodePoint(...codePoints)
````

## Links

- [📙 Emojipedia — 😃 Home of Emoji Meanings 💁👌🎍😍](https://emojipedia.org/)
- [missive/emoji-mart: One component to pick them all 👊🏼](https://github.com/missive/emoji-mart)
- [Emoji ZWJ Sequences: Three Letters, Many Possibilities](https://blog.emojipedia.org/emoji-zwj-sequences-three-letters-many-possibilities/)
- [Rocket – the best emoji app for Mac](https://matthewpalmer.net/rocket/)
- [jeeftor/EmojiTaco: Alfred Emoji Script with Taco and other unicode 9 emoji](https://github.com/jeeftor/EmojiTaco)
- [What About the Afghanistan Flag Emoji?](https://blog.emojipedia.org/what-about-the-afghanistan-flag-emoji/)
- [Emoji to Scale](https://javier.xyz/emoji-to-scale/)
- [Emojinator](https://emojinator.fun/)
- [Noto Emoji - Google Fonts](https://fonts.google.com/noto/specimen/Noto+Emoji)
	+ [Noto Emoji: What is black and white and read all over?](https://jenniferdaniel.substack.com/p/what-is-black-and-white-and-read?s=w)
- [petpet](https://benisland.neocities.org/petpet/)
