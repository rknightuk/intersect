const { AssetCache } = require('@11ty/eleventy-cache-assets')
const { exec } = require("child_process")
const glob = require('glob')

module.exports = async function() {
    let asset = new AssetCache('intersect_updated_pages')
    let results = []
    let updateKeyed = {}

    if (asset.isCacheValid('1d')) {
        console.log('[INTERSECT] Loading updated pages from cache')
        results = await asset.getCachedValue()
        return results
    }

    getUpdatedForFile = function(filename) {
        return new Promise((resolve, reject) => {
            exec(`git log -1 --date=iso --format="%ad" -- ${filename}`, (error, stdout, stderr) => {
                if (error) {
                    reject(error)
                    return
                }                    
                resolve(stdout)
            })
        })
    }

    getFileList = function() {
        return new Promise((resolve, reject) => {
            glob('src/pages/**/*.md', (error, files) => {
                if (error) {
                    reject(error)
                    return
                }
                resolve(files)
            })
        })
    }

    fileList = (await getFileList())

    for (let index = 0; index < fileList.length; index++) {
        const file = fileList[index]
        const updated = (await getUpdatedForFile(file)).split(' ')[0]
        const fileData = {
            file: file
                .split('\n')[0]
                .replace('src/pages', '')
                .replace('index.md', '')
                .replace('.md', '/'),
            updated,
        }

        results.push(fileData)
        updateKeyed[fileData.file] = updated
    }

    results = results.sort((a,b) => (a.updated < b.updated) ? 1 : ((b.updated < a.updated) ? -1 : 0))

    const data = {
        files: results,
        key: updateKeyed,
    }

    console.log('[INTERSECT] Loading updated pages from git log')
    await asset.save(data, "json")

    return data
}