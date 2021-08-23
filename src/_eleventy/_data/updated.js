const { AssetCache } = require('@11ty/eleventy-cache-assets')
const { exec } = require("child_process")

module.exports = async function() {
    let asset = new AssetCache('intersect_updated_pages')
    let results = []

    if (asset.isCacheValid('1d')) {
        console.log('[INTERSECT] Loading updated pages from cache')
        results = await asset.getCachedValue()
        return results
    }

    getGitLog = function () {
        return new Promise((resolve, reject) => {
            exec('git log --name-only --oneline -n 25', (error, stdout, stderr) => {
                if (error) {
                    reject(error)
                    return
                }
                resolve(stdout)
            })
        })
    }

    results = (await getGitLog()).split('\n').filter(l => {
        return l.startsWith('src/pages') && l.includes('.md')
    }).map(l => {
        let path = l.replace('src/pages', '')
            .replace('index.md', '')
            .split('/')
            .filter(p => {
                return !p.includes('.md')
            })
            .join('/')

        return path.endsWith('/') ? path : `${path}/`
    })

    results = [...new Set(results)].splice(0, 10)

    console.log('[INTERSECT] Loading updated pages from git log')
    await asset.save(results, "json")

    return results
}