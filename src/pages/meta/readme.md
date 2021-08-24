---
title: Readme
---

A personal wiki built with [Eleventy](https://11ty.dev).

## Installation

Clone the repo then make a copy of `src/_eleventy/_data/config.json.example` and name it `config.json`. Here you can set the site name, Github repo URL, and your Fathom tracking code.

- `npm install`
- `npm start`
- Open `localhost:8080` and have at it

If you want to fetch Fathom popular pages on build, copy `.env.example` as `.env` and [add your `FATHOM_API_KEY`](https://usefathom.com/api). Pages are only fetched once per day and cached using [Cache Assets](https://www.11ty.dev/docs/plugins/cache/).

## Content and Directory Structure

All of the source files of the content are plain markdown files. These must be markdown for the headings ID links to work but they can, in theory, be `njk` or anything else Eleventy supports. The file structure looks like this:

```txt
📦intersect
 ┣ 📂topic
 ┃ ┗ 📂subtopic-with-subtopics
 ┃    ┗ 📜subsubtopic.md
 ┃    ┗ 📜index.md
 ┃ ┗ 📜subtopic.md
 ┃ ┗ 📜index.md
```

These can be infinitely nested thanks to [Eleventy Navigation](https://www.11ty.dev/docs/plugins/navigation/).

## Features

- Syntax highlighting with [PrismJS](https://prismjs.com)
- Table of contents generation (see below)
- Search content and links
- Highlight search queries on navigation
- Popular pages via Fathom API (see [stats page](/meta/stats/))
- Recently updated pages based on Git commits (see [Introduction](/))

### Search

Search has two modes: page content or link titles. The default is page content. To search links start the query with `l `, e.g. `l my query`.

## Keyboard Shortcuts

- <kbd>/</kbd> - Show and focus the search modal
- <kbd>esc</kbd> - Close the search modal/clear search highlights
- <kbd>down ↓</kbd> or <kbd>tab</kbd> / <kbd>up ↑</kbd> or <kbd>shift ⇧</kbd> <kbd>tab</kbd> to navigate search results

## Eleventy Setup

[View more about static site generators](/webdev/static-site-generators).

This site is built with [Eleventy](https://www.11ty.dev) and a number of custom scripts. If you've used Eleventy before, you might look at the source code and wonder why everything is _slightly_ different than a normal setup. I wanted to keep all the "content" in one single folder so if I ever decide to move away from this setup it's not entangled with the way Eleventy works.

I wanted to use as little [Front Matter](https://www.11ty.dev/docs/data-frontmatter/) as possible for the pages, so they only have a title set. Everything else is done with [Eleventy Computed Data](https://www.11ty.dev/docs/data-computed/).

### Collection - Links

[View `links.js` on Github](https://github.com/rknightuk/intersect/blob/main/src/_eleventy/_filters/collections/links.js)

This collection finds all of the links in all pages for use in the search. It also counts how many links for each domain there are, which is used on the [stats page](/meta/stats/).

```js
// collections.links
{
    charts: {
        'example.com': 12,
        'test.com': 10,
    },
    links: [
        {
          title: 'A Cool Website',
          href: 'https://coolwebsite.com,
          sourceTitle: 'Websites', // the title of the page the link is on
          sourceUrl: '/websites/', // the slug of the page the link is on
        }
    ]
}
```

### Collection - Pages

[View `pages.js` on Github](https://github.com/rknightuk/intersect/blob/main/src/_eleventy/_filters/collections/pages.js)

This collection is used for navigation, breadcrumbs, and search - It orders the pages alphabetically, but with featured pages at the top (like [meta)(/meta/)). It also generates a page index for [fixing an issue with ordering in navigation](/webdev/static-site-generators/eleventy/#automatic-ordering-for-eleventy-navigation).

```js
// collections.pages
{
    data: [] // array of pages, standard collection
    pageIndex: {
        '/page/slug/': {
            order: 12, // this index is used for eleventyNavigation
            title: 'Cool Page', // useful for getting a page title (e.g. when working out parent pages just from the page URL)
        }
    }
}

```

### Computed Data

[View `pages.js` on Github](https://github.com/rknightuk/intersect/blob/main/src/pages/pages.11tydata.js)

This generates the navigation plugin data, counts the links on the page, and makes a link to the source for the page on GitHub.

### Table of Contents Renderer

[View `renderTOC` on Github](https://github.com/rknightuk/intersect/blob/main/src/_eleventy/renderers/renderTOC)

This is a custom copy of [jdsteinbach/eleventy-plugin-toc](https://github.com/jdsteinbach/eleventy-plugin-toc) which fixes a [bug with unordered lists](https://github.com/jdsteinbach/eleventy-plugin-toc/pull/20) (this PR has been around for a while so I wasn't expecting it to be fixed any time soon). There are [a lot of forks of the library](https://github.com/jdsteinbach/eleventy-plugin-toc/network/members) but they all go in different directions and I didn't think it was worth creating yet another fork.

### Navigation Renderer

- [View `renderNavigation` on Github](https://github.com/rknightuk/intersect/blob/main/src/_eleventy/renderers/renderNavigation.js)

I had a lot of requirements for the navigation so the renderer generates it exactly as I need instead of using the built in shortcodes.

## Acknowledgements

- [Nikita Voloboev](https://github.com/nikitavoloboev/knowledge) for the idea.
- [Eleventy](https://www.11ty.dev/) for making this easy
- [Pure CSS side menu layout](https://purecss.io/layouts/side-menu/#about)
- Markdown
    - [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css) for the main content css
    - [markdown-it-imsize](https://www.npmjs.com/package/@jochenlinnemann/markdown-it-imsize) for markdown image size support
    - [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) for the anchor links on headings
- [VSCode theme for syntax highlighting by Andrew Lock](https://andrewlock.net) for the code highlighting
- [Squash filter by Phil Hawksworth](https://github.com/philhawksworth/hawksworx.com/blob/8c96ba2541c8fd6fe6f521cdb5e17848c231636c/src/site/_filters/squash.js)
- [mark.js](https://markjs.io) for the search query highlighting
- Icons
    - [Softies Icons](https://robbiepearce.com/softies/) by Robbie Pearce
    - [Feather Icons](https://feathericons.com/) for the chevron icons
    - [Font Awesome GitHub icon](https://fontawesome.com/v5.15/icons/github)

## Read the Docs, Idiot

Because I didn't read the docs first, I implemented a bunch of things like [my own caching](/programming/js/#caching) and my own navigation. I'm adding it below just because it was an interesting problem to solve.

`pageData.js`

```js
squashContent = function(text) {
// this still exists in the code
}

module.exports = function(data) {
    let collection = data.items

    topLevel = {}
    secondLevel = {}
    thirdLevel = {}
    featuredTopLevel = {}

    const FEATURED = [
        '/',
        'meta',
    ]

    const IGNORED = [
        '_eleventy',
        'search.json',
    ]

    collection = collection.sort((a,b) => (a.template.dataCache.page.url > b.template.dataCache.page.url) ? 1 : ((b.template.dataCache.page.url > a.template.dataCache.page.url) ? -1 : 0))

    collection.forEach((c) => {
        const url = c.template.dataCache.page.url
        const pages = url.split("/").filter((u) => u)
        const title = c.template.inputContent.split("\n")[0].replace("# ", "")
        const squashedContent = squashContent(c.template.inputContent).replace(/[^\w\s]/gi, '')
        const rawContent = c.template.inputContent
        const topLevelKey = pages[0] || "/"
        const isFeatured = FEATURED.includes(topLevelKey);
        const isTopLevel = pages.length <= 1
        const isSecondLevel = pages.length === 2
        const isThirdLevel = pages.length === 3
        const topSection = (isFeatured ? featuredTopLevel : topLevel)
        const filePath = c.template.parsed.path.replace('.', '')

        if (IGNORED.includes(topLevelKey)) return

        let parent = null
        if (isSecondLevel) {
            parent = `/${topLevelKey}/`
        } else if (isThirdLevel) {
            parent = `/${topLevelKey}/${pages[1]}/`
        }

        if (isTopLevel)
        {
            topSection[url] = {
                // data
            }
        } else if (isSecondLevel)
        {
            secondLevel[url] = {
                // data
            }
        } else if (isThirdLevel)
        {
            thirdLevel[url] = {
                // data
            }
        }
    })

    Object.values(thirdLevel).map((tl) => {
        secondLevel[tl.parent].pages.push(tl)
    })

    Object.values(secondLevel).map((sl) => {
        topLevel[sl.parent] ? topLevel[sl.parent].pages.push(sl) : featuredTopLevel[sl.parent].pages.push(sl)
    })

    const mergedData = {
        ...featuredTopLevel, ...topLevel,
        ...secondLevel,
        ...thirdLevel
    }

    const searchApi = []

    Object.values({...featuredTopLevel, ...topLevel }).forEach(s => {
        if (s.parent) return

        searchApi.push(s)
        s.pages.forEach(p => {
            searchApi.push({
                ...p,
                parentTitle: s.title,
            })
            p.pages.forEach(pp => {
                searchApi.push({
                ...pp,
                parentTitle: p.title,
                })
            })
        })
    })

    return {
        keyed: mergedData,
        search: searchApi
    }
}
```

`renderNavigation.js`
```js
module.exports = function(data) {
  pageData = data[0]
  current = data[1]

  let links = ''

  Object.values(pageData).forEach(tl => {
    if (tl.parent) return
    const tlIsActive = tl.url === current
    const tlShouldBeOpen = current.startsWith(tl.url)
    const tlHasPages = tl.pages.length > 0
    let output = `<li ${tlIsActive || tlShouldBeOpen ? 'class="open"' : ''}>
      <a ${tlIsActive ? 'class="active"' : ''}href="${tl.url}">
        ${tl.title}
      </a>${tlHasPages ? '<div class="toggler"></div>' : ''}`

    if (tlHasPages) {
      output+= `<ul>`
    }

    // second level pages
    tl.pages.forEach(sl => {
      const slIsActive = sl.url === current
      const slHasPages = sl.pages.length > 0
      output += `<li>
        <a ${slIsActive ? 'class="active"' : ''}href="${sl.url}">
          ${sl.title}
        </a>`

      if (slHasPages) {
        output+= `<ul>`
      }

      // bottom level pages
      sl.pages.forEach(bl => {
        const blIsActive = bl.url === current
        output += `<li>
          <a ${blIsActive ? 'class="active"' : ''}href="${bl.url}">
            ${bl.title}
          </a></li>`
      })

      if (slHasPages) {
        output+= '</ul>'
      }

      output += '</li>'
    })

    if (tlHasPages) {
      output+= '</ul>'
    }

    links += `${output}</li>`
  })

  return `<ul>${links}</ul>`
}
```