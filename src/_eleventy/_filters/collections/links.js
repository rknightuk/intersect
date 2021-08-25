const markdownLinkExtractor = require('markdown-link-extractor')
const { parseDomain, fromUrl } = require('parse-domain')

extractLinks = (content, sourceTitle, sourceUrl) => {
  let links = []

  markdownLinkExtractor(content, true).forEach(link => {
    if (link.href.startsWith('/') // internal links
      || (!link.href.startsWith('http')) // only links, no images/mailto/etc
      || link.href.startsWith('https://almanac.rknight.me/') // remove links to pages on almanac
      || link.href === 'https://rknight.me') return // remove links to my site

    links.push({
      title: link.text.replace(/"/g, ''),
      href: link.href,
      sourceTitle,
      sourceUrl,
    })
  })

  return links
}

countDomains = (links) => {
  let domains = {}

  links.forEach(link => {
    const result = parseDomain(fromUrl(link.href)).icann
    const domain = `${result.domain}.${result.topLevelDomains.join('.')}`

    if (domains[domain])
    {
       domains[domain].count = domains[domain].count + 1
    } else {
      domains[domain] = {
        domain,
        count: 1
      }
    }
  })

  return Object.values(domains).sort((a,b) => (a.count < b.count) ? 1 : ((b.count < a.count) ? -1 : 0))
}

module.exports = function(data) {
  let collection = data.items
  let links = []

  collection.forEach((c) => {
    links = [...links, ...extractLinks(c.template.inputContent, c.data.title, c.data.page.url)]
  })

  // sort by length of title. Longer title, probably more descriptive
  links = Object.values(links).sort((a,b) => (a.title.length < b.title.length) ? 1 : ((b.title.length < a.title.length) ? -1 : 0))

  const beforeLength = links.length

  // remove duplicates, keep the ones with the longest titles
  const fullLinks = {}
  links = links.filter(l => {
    const normalised = (l.href.endsWith('/') ? l.href.slice(0, -1) : l.href)
      .replace('http://', '')
      .replace('https://', '')

    if (fullLinks[l.href]) return false
    fullLinks[l.href] = true
    return true
  })

  if (beforeLength !== links.length)
  {
    console.log(`[INTERSECT] Removed ${beforeLength - links.length} duplicate links`)
  }

  links = links.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))

  return {
    charts: countDomains(links),
    links,
  }
}
