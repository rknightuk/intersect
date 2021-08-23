const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const markdownItImageSize = require('@jochenlinnemann/markdown-it-imsize')
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = function(eleventyConfig) {
	// Don't use .gitignore otherwise the CSS won't copy over on compile
	eleventyConfig.setUseGitIgnore(false)

	// add navigation plugin
	eleventyConfig.addPlugin(eleventyNavigationPlugin)

	// pass through images in section
	eleventyConfig.addPassthroughCopy("src/pages/**/*.jpg");
	eleventyConfig.addPassthroughCopy("src/pages/**/*.png");
	eleventyConfig.addPassthroughCopy("src/pages/**/*.gif");

	// add `data-copy` to all code highlights for copy button
	eleventyConfig.addPlugin(syntaxHighlight, {
		preAttributes: {
			'data-copy': '',
		},
		alwaysWrapLineHighlights: true,
	})

	// pass img assets through
	eleventyConfig.addPassthroughCopy({ "src/_eleventy/assets/img": "assets/img" })

	// pass favicons etc through
	eleventyConfig.addPassthroughCopy({ "src/_eleventy/assets/favicons": "./" })

	// only the minified css and js is needed
	eleventyConfig.addPassthroughCopy({ "src/_eleventy/assets/css/dist.min.css": "assets/css/dist.min.css" })
	eleventyConfig.addPassthroughCopy({ "src/_eleventy/assets/js/dist.min.js": "assets/js/dist.min.js" })

	// Add markdown plugins
	eleventyConfig.setLibrary("md", markdownIt({
		html: true,
		breaks: true,
		linkify: true,
	}).use(markdownItAnchor, { // Add anchors to headings
		permalink: true,
		permalinkClass: 'heading-anchor',
		permalinkSymbol: '#',
		level: 2,
	}).use(markdownItImageSize)) // support image sizes ![image](image.jpg =100x100))

	// Custom renderers for navigation, breadcrumbs, and TOC
	eleventyConfig.addFilter("renderNavigation", require('./src/_eleventy/_filters/renderers/renderNavigation.js'))
	eleventyConfig.addFilter("renderToc", require('./src/_eleventy/_filters/renderers/renderTOC/BuildTOC'))

	// ordered list of pages with index to get order and title from a url
	eleventyConfig.addCollection("pages", require('./src/_eleventy/_filters/collections/pages.js'));

	// extracts all links (web only, ignores images) from pages
	eleventyConfig.addCollection("linkData", require('./src/_eleventy/_filters/collections/links.js'));

	// Stringify an object
	// usage {{ myObject | objectDebug | safe }}
	eleventyConfig.addFilter('objectDebug', function(value) {
		return `<pre>${JSON.stringify(value, '', 2)}</pre>`
	})

	return {
		passthroughFileCopy: true,
		dir: {
			input: "src/pages",
			output: "public",
			includes: "../_eleventy/_includes",
			data: "../_eleventy/_data"
		}
	}
}