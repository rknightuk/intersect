---
title: Javascript
---

## Notes

- `KeyboardEvent.keycode` is deprecated, [use `KeyboardEvent.key` instead](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
## Return Item at Index with `at()`

```js
const array = ['one', 'two', 'three']
array.at(1) // two
```

[Array.prototype.at() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

## Sorting an Array

```js
const myArray = [{ attr: 'z' }, { attr: 'a' }, { attr: 'q' }]

myArray.sort((a,b) => (a.attr > b.attr) ? 1 : ((b.attr > a.attr) ? -1 : 0))
```

## Deduplicate Array

```js
const dupedArray = ['one', 'two', 'one']
const newDeDupedArray = [...new Set(dupedArray)]
// ['one', 'two']
```
## Scroll Page

[`scrollTo()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
})
```

[`scrollIntoView()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

```js
element.scrollIntoView({ 
  behavior: 'smooth', 
  inline: 'start'
})
```

## Disable Scrolling

You probably shouldn't do this in almost all cases. [Source](https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/).

```js
function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = () => {}
}
```

## Detect if Page Has Scroll Bar

```js
window.innerHeight > document.body.offsetHeight
```

## Get Query Params from URL

[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#browser_compatibility)

```js
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
```

## Get URL Parts

```js
const url = new URL('https://example.com')

{
    hash: "",
    host: "example.com",
    hostname: "example.com",
    href: "https://example.com/",
    origin: "https://example.com",
    password: "",
    pathname: "/",
    port: "",
    protocol: "https:",
    search: "",
    searchParams: URLSearchParams {},
    username: ""
}
```

## querySelectorAll Multiple Arguments

```js
document.querySelectorAll('p, li')
```
## Get Parent Element

```js
element.closest('.class-name')
```

## Match Regex on String

```js
const regex = /#/g
myString.match(regex)

// returns null or an array of matches
```

## Get First N Elements of Array

```js
myArray.slice(0, size)
```

## Replace Contents of File

I used this when I realised it was better to have frontmatter for Eleventy than try and extract it myself.

```js
const fs = require('fs')

const FILES = [
    'path/to/file/index.md',
    'path/to/file/another.md'
]

FILES.forEach(path => {
    let contents = fs.readFileSync(path, 'utf-8')
    const headingLine = contents.split('\n')[0]
    const heading = headingLine.replace('# ', '')
    const frontMatter = `---
title: ${heading}
---`

    contents = contents.replace(headingLine, frontMatter)

    fs.writeFileSync(path, contents)
})
```

## Set xlink:href of Element

```js
element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', value)
```

## Detect Dark Mode

```js
// returns boolean
window.matchMedia('(prefers-color-scheme: dark)').matches
window.matchMedia('(prefers-color-scheme: light)').matches
window.matchMedia('(prefers-color-scheme: no-preference)').matches
```

## Caching

Simple caching technique I used before I'd read the docs for the [Eleventy Cache Assets plugin](https://www.11ty.dev/docs/plugins/cache/). Alway read the docs first.

```js
const fs = require('fs')
const cachePath = './cache_path.json'

if (fs.existsSync(cachePath))
{
    console.log('Loading data from cache')
    return {
        myData: JSON.parse(fs.readFileSync(cachePath, 'utf-8'))
    }
}

console.log('Loading data from API')

const res = await theApiRequest()

fs.writeFileSync(cachePath, JSON.stringify(res))

return {
    myData: res
}
```

## Get Emoji Flag from Country Code

[Country Code to Flag Emoji](https://dev.to/jorik/country-code-to-flag-emoji-a21)

```js
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
```

## Assert with console

`console.assert(1 === 1)`

## Format Lists with `Intl.ListFormat`

```js
const vehicles = ['One', 'Two', 'Three'];
const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
formatter.format(vehicles) // One, Two, and Three
```

[Intl.ListFormat docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat)

## Links

- [Introducing Astro: Ship Less JavaScript](https://astro.build/blog/introducing-astro)
- [neilgupta/Sherlock: Natural-language event parser for Javascript](https://github.com/neilgupta/Sherlock/)
- [wanasit/chrono: A natural language date parser in Javascript](https://github.com/wanasit/chrono)
- [An Introduction To Stimulus.js — Smashing Magazine](https://www.smashingmagazine.com/2020/07/introduction-stimulusjs/)
- [A Complete Beginner's Guide to React: Hooks Edition · We Learn Code](https://welearncode.com/beginners-guide-react-2020/)
- [WebGazer.js: Democratizing Webcam Eye Tracking on the Browser](https://webgazer.cs.brown.edu/)
- [Vanilla JS Konami Code](https://codepen.io/jacknumber/details/BKBjvM)
- [danielborowski/jsboard: JavaScript library for easily creating board games](https://github.com/danielborowski/jsboard)
- [How to get the domain name from a URL in JavaScript – w3collective](https://w3collective.com/get-domain-name-url-javascript/)
- [How can I get query string values in JavaScript?](https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript)
- [mark.js - JavaScript keyword highlighter](https://markjs.io/)
- [JavaScript Event KeyCodes](https://keycode.info/)
- [David K. 🎹 on Twitter: "🔢 Quick tip: if you're sorting an array in JS and keep forgetting how to write the compare functions (like I do), here's a mnemonic device: (a, z) =&gt; a - z // ascending, like "a to z" (a, z) =&gt; z - a // descending, like "z to a" Hope this helps someone! https://t.co/swrOZewOMC" / Twitter](https://twitter.com/DavidKPiano/status/1292237580780605440)
- [peerigon/parse-domain: Splits a hostname into subdomains, domain and (effective) top-level domains.](https://github.com/peerigon/parse-domain)
- [FileReader.readAsDataURL() - Web APIs | MDN - image to base64](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)
- [getify/You-Dont-Know-JS: A book series on JavaScript. @YDKJS on twitter.](https://github.com/getify/You-Dont-Know-JS)
- [Reef - A lightweight library for creating reactive, state-based UI](https://reefjs.com/)
- [Monaco Editor - VSCode editor library](https://microsoft.github.io/monaco-editor/)
- [Monaco Editor in Laravel Livewire | Günther Debrauwer](https://gdebrauwer.dev/blog/monaco-editor-in-laravel-livewire/)
- [EyeDropper/color picker API](https://wicg.github.io/eyedropper-api/)
- [a11y-dialog lightweight dialog/modal library](https://a11y-dialog.netlify.app/)
- [Free Charting Library by TradingView](https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/)
- [Day.js · 2kB JavaScript date utility library](https://day.js.org/)
- [SaraVieira/next-fullstack-starter: A nextjs full stack starter for your dreams](https://github.com/SaraVieira/next-fullstack-starter)
- [squirm-inal Web Component Demo terminal](https://squirminal.zachleat.dev/)
- [Volta - The Hassle-Free JavaScript Tool Manager](https://volta.sh/)
