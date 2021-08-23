const FEATURED = [
  '/',
  '/meta/',
]

module.exports = function(collection) {
  const featuredPages = []
  const standardPages = []
  let pageIndex = {}
  let featuredIndex = 1
  let standardIndex = 100

  collection.getFilteredByGlob("src/pages/**/*.md")
    .sort((a,b) => (a.data.page.url > b.data.page.url) ? 1 : ((b.data.page.url > a.data.page.url) ? -1 : 0))
    .forEach(c => {
      if (FEATURED.includes(c.data.page.url))
      {
        featuredPages.push(c)
        pageIndex[c.data.page.url] = { order: featuredIndex, title: c.data.title }
        featuredIndex++
      } else {
        standardPages.push(c)
        pageIndex[c.data.page.url] = { order: standardIndex, title: c.data.title }
        standardIndex++
      }
    })

  return {
    data: [
      ...featuredPages,
      ...standardPages,
    ],
    pageIndex,
  }
}
