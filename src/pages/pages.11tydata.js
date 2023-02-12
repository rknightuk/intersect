const markdownLinkExtractor = require('markdown-link-extractor')
const fs = require('fs')

// https://github.com/philhawksworth/hawksworx.com/blob/8c96ba2541c8fd6fe6f521cdb5e17848c231636c/src/site/_filters/squash.js
squashContent = function(text) {
  const URL_REGEX = /(http|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g
  var content = new String(text);

  // all lower case, please
  var content = content.toLowerCase();

  content = content.toLowerCase().replace(URL_REGEX, '')

  // remove all html elements and new lines
  var re = /(&lt;.*?&gt;)/gi;
  var result = unescape(content.replace(re, ''));

  //remove newlines, and punctuation
  result = result.replace(/\.|\,|\?|-|—|\n/g, '');
  //remove repeated spaces
  result = result.replace(/[ ]{2,}/g, ' ');

  // put spaces back before links
  result = result.replace(/http/g, ' http')

  // remove tabs
  result = result.replace(/\t/g, '')

  return result.replace(/[^\w\s]/gi, '');
}

countLinks = (content) => {
  let linkCount = 0

  markdownLinkExtractor(content, true).forEach(link => {
    if (link.href.startsWith('/') // remove internal links
      || (!link.href.startsWith('http')) // only links, no images/mailto/etc
      || link.href.startsWith('https://almanac.rknight.me/') // remove links to pages on almanac
      || link.href === 'https://rknight.me') return // remove direct links to my site

    linkCount++
  })

  return linkCount
}

getParent = (url, slug) => {
  return url ? url.split(slug)[0].split('/').filter(u => u).pop() : null
}

module.exports = {
  layout: "base",
  eleventyComputed: {
    eleventyNavigation: (data) => {
      let order = 0
      const indexCollection = data.collections.pages.pageIndex
      if (indexCollection)
      {
        const pageIndex = indexCollection[data.page.url]
        if (pageIndex) order = pageIndex.order
      }
      return {
        key: data.page.fileSlug,
        parent: getParent(data.page.url, data.page.fileSlug),
        title: data.title,
        order,
      }
    },
    data: (data) => {
      const inputPath = data.page.inputPath.replace('./', '')
      const md = fs.readFileSync(`${process.cwd()}/${inputPath}`, 'utf-8')
      let parentUrl = data.page.url.split(data.page.fileSlug)[0]
      if (parentUrl === '/') parentUrl = ''

      let pageIndex = data.collections.pages.pageIndex
      let breadcrumbPartsHTML = []
      let breadcrumbParts = []
      const CHEVRON = '<svg class="breadcrumb-divider"><use xlink:href="#chevron-right"></use></svg>'
      if (pageIndex) {
        let parts = data.page.url.split('/').filter(u => u)

        while (parts.length > 0) {
          const breadcrumbUrl = `/${parts.join('/')}/`
          const pageData = pageIndex[breadcrumbUrl]
          if (!pageData) break
          breadcrumbPartsHTML.unshift(`<a href="${breadcrumbUrl}">${pageData.title}</a>`)
          breadcrumbParts.unshift(pageData.title)
          parts.pop()
        }
      }

      // remove the last element for parents
      breadcrumbParts.pop()

      if (data.page.url === '/')
      {
        breadcrumbPartsHTML = ['<a href="/">Introduction</a>']
      }

      return {
        linkCount: countLinks(md),
        githubLink: `${data.config.githubLink}/blob/main/${inputPath}`,
        historyLink: `${data.config.githubLink}/commits/main/${inputPath}`,
        parent: getParent(data.page.url, data.page.fileSlug),
        breadcrumbsHTML: breadcrumbPartsHTML.join(CHEVRON),
        breadcrumbs: breadcrumbParts,
        parentUrl,
        contentIndex: squashContent(md),
        filePath: `/${inputPath}`,
      }
    }
  }
}
