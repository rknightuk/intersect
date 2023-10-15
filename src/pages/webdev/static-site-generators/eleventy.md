---
title: Eleventy
---

[Eleventy](https://www.11ty.dev) is my [static site generator](/webdev/static-site-generators) of choice for my personal sites and projects.


## Ignore `.gitignore`

By default, Eleventy [won't watch files](https://www.11ty.dev/docs/ignores/) listed in your `.gitignore`. You can tell it to not do that:

```js
eleventyConfig.setUseGitIgnore(false)
```

## Changing Directory Locations

I tend to do this so I can have the source of my project inside a directory instead of all of it in the root. In `.eleventy.js`:

```js
return {
    dir: {
        input: "src/pages",
        output: "public",
    }
}
```

## Copy Assets and Files to the Output

If you want non-template files copied through to your final build (like css files or images), you can use a passthrough in `.eleventy.js`:

```js
eleventyConfig.addPassthroughCopy({ "src/pages/_eleventy/assets": "assets" })
```

## Filters

[Filters](https://www.11ty.dev/docs/filters/) allow you to extend the template engines to modify content. I'm probably misusing these in some places. Below is an example of a filter to strip `/index.html` from some paths I had on my [personal site](https://rknight.me).

```js
eleventyConfig.addFilter('stripIndex', function(path) {
    return path.replace('/index.html', '/');
})
```

## Using Local plugins

`.eleventy.js`
```js
eleventyConfig.addFilter("myPlugin", require('./path/to/plugin.js'))
```

`plugin.js`

```js
module.exports = function() {
    return 'my plugin'
}
```

## Object Debug

```js
// .eleventy.js
eleventyConfig.addFilter('objectDebug', function(value) {
    return `<pre>${JSON.stringify(value, '', 2)}</pre>`
})

// layout.njk
{% raw %}{{ myObject | objectDebug | safe }}{% endraw %}
```

## Highlight Lines in Code Blocks

Lines are zero-indexed.

<pre>
```lang/1
const myFunction = () => {
    return 'Hello'
}
```
</pre>

Outputs:

```js/1
const myFunction = () => {
    return 'Hello'
}
```

## Ignore Nunjucks in Markdown Files

```yaml
templateEngineOverride: njk,md
```

```md
// index.md
{% raw %}{% aShortCode %}{% endraw %}
{% raw %}{{ aVariable }}{% endraw %}
```

## Post Archive by Year

```liquid{% raw %}
{% set datePrinted = false %}
{% set currentYear = 1000 %}
{% set started = false %}

{%- for post in collections.posts %}
    {% set postYear = post.data.date.getFullYear() %}

    {% if postYear != currentYear %}
        {% if started %}
            </ul>
        {% endif %}
        <p>{{ postYear }}<p>
        <ul>
        {% set started = true %}
    {% endif %}

    <li>
        {{ post.data.title }}
    </li>

    {% set currentYear = postYear %}
{% endfor %}
{% endraw %}
```


## Automatic Ordering for Eleventy Navigation

[Eleventy Navigation](https://www.11ty.dev/docs/plugins/navigation/) is a great plugin for generating navigation and breadcrumbs. One of the properties is `order` to indicate the order of the pages. This is great if you have a few pages but if you have hundreds (like this site does) you can get some unexpected results like random ordering, especially if you have _some_ ordered but not others.

To solve this, I create a `pageIndex` collection by mapping through the ordered collection of pages:

```js
// .eleventy.js
eleventyConfig.addCollection('pageIndex', function(collections) {
    let pageIndex = {}
    let index = 1

    collection.getFilteredByGlob("src/pages/**/*.md")
    .sort() // sort by whatever attribute, I used URL
    .forEach(c => {
        pageIndex[c.data.page.url] = index
        index++
    })
})

// pageIndex output
{
    '/': 1,
    '/a/': 2,
    '/a/subpage/': 3,
    '/s/': 4
}
```

Then use this collection to get the count in `pages.11tydata.js`:

```js
module.exports = {
  eleventyComputed: {
    eleventyNavigation: (data) => {
        let order = 0
        const indexCollection = data.collections.pageIndex
        if (indexCollection)
        {
            const pageIndex = indexCollection[data.page.url]
            if (pageIndex) order = pageIndex.order
        }
        return {
            // key, title, etc
            order,
        }
    },
```

## Links

- [Eleventy Docs](https://www.11ty.dev/docs/)
- [andy-piccalilli/11ty-base: Eleventy base project](https://github.com/andy-piccalilli/11ty-base?utm_source=pocket_mylist)
- [List of Supported Languages in Prism](https://prismjs.com/#supported-languages)
- [reeseschultz/11r: America's favorite Eleventy blog template.](https://github.com/reeseschultz/11r)
- [patrickxchong/eleventy-plugin-svg-sprite: A high performance Eleventy universal plugin that compiles a directory of SVG files into a single SVG Sprite and adds shortcodes to embed SVG Sprite and SVG content in Eleventy templates.](https://github.com/patrickxchong/eleventy-plugin-svg-sprite)
- [Learn Eleventy From Scratch - Piccalilli](https://piccalil.li/course/learn-eleventy-from-scratch/)
- [philhawksworth/eleventyone: A scaffold for a quick start building with the Eleventy SSG](https://github.com/philhawksworth/eleventyone)
- [I Finally Understand Eleventy's Data Cascade.](https://benmyers.dev/blog/eleventy-data-cascade/)
- [maxboeck/eleventastic: An Eleventy Starter Kit](https://github.com/maxboeck/eleventastic)
- [Learn how to display a directory treeview with your 11ty syntax highlighter](https://mastereleventy.com/blog/prism-treeview/)
- [Add a Sitemap to Eleventy - 11ty Recipes](https://11ty.recipes/recipes/add-a-sitemap/)
- [Eleventy/11ty Recipes](https://11ty.recipes/)
- [charisrooda/eleventy-data-starter: This is a starter template if you want to work with JSON data.](https://github.com/charisrooda/eleventy-data-starter)
- [A Set of Useful 11ty Filters | Aleksandr Hovhannisyan](https://www.aleksandrhovhannisyan.com/blog/useful-11ty-filters/)
- [11ty/eleventy-base-blog: A starter repository for a blog web site using the Eleventy static site generator.](https://github.com/11ty/eleventy-base-blog)
- [Organizing the Eleventy config file | Lene Saile](https://www.lenesaile.com/en/blog/organizing-the-eleventy-config-file/)
- [Build a Blogroll with Eleventy | Ben Myers](https://benmyers.dev/blog/eleventy-blogroll/)
- [Automatically generate open graph images in Eleventy | bnijenhuis](https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/)