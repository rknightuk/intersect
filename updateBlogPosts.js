// this data file writes the results to the blog-posts/index.md 
// so it can then be rendered and the links counted

const BLOG_POST_FILE = 'src/pages/blog-posts/index.md'
const BLOG_POST_TITLE = '---\ntitle: Blog posts\n---\n\n'

const fetch = require('node-fetch')
const fs = require('fs')

fetchPosts = async () => {
    const posts = await fetch('https://rknight.me/posts.json')
    .then(res => res.json())
    .then(json => {
        return json.posts
    })

    const formatted = posts.map(p => {
        return `- [${p.title}](${p.url}) ${p.date}`
    })

    fs.writeFileSync(BLOG_POST_FILE, `${BLOG_POST_TITLE} ${formatted.join('\n')}`)
}

fetchPosts()