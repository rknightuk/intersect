---
title: Javascript
---

## Notes

- `KeyboardEvent.keycode` is deprecated, [use `KeyboardEvent.key` instead](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)

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
- [Pocket](https://getpocket.com/my-list?src=sidebar)
- [Debugging—Eleventy, a simpler static site generator.](https://www.11ty.dev/docs/debugging/)
- [David K. 🎹 on Twitter: "🔢 Quick tip: if you're sorting an array in JS and keep forgetting how to write the compare functions (like I do), here's a mnemonic device: (a, z) =&gt; a - z // ascending, like "a to z" (a, z) =&gt; z - a // descending, like "z to a" Hope this helps someone! https://t.co/swrOZewOMC" / Twitter](https://twitter.com/DavidKPiano/status/1292237580780605440)
- [peerigon/parse-domain: Splits a hostname into subdomains, domain and (effective) top-level domains.](https://github.com/peerigon/parse-domain)
