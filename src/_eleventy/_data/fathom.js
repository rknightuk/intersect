const fetch = require('node-fetch')
const fathomApi = require('fathom-api')
const { AssetCache } = require('@11ty/eleventy-cache-assets')

require('dotenv').config()

module.exports = async function() {
    const apiKey = process.env.FATHOM_API_KEY

    if (!apiKey) return { popularPages: [] }

    let asset = new AssetCache('intersect_fathom_pageviews')
    let pageviews = []

    if (asset.isCacheValid('1d')) {
        console.log('[INTERSECT] Loading Fathom from cache')
        pageviews = await asset.getCachedValue()
        return {
            popularPages: pageviews,
        }
    }

    console.log('[INTERSECT] Loading Fathom from API')

    const api = fathomApi({
        apiKey,
        version: 1
    })

    pageviews = await api.aggregation.get({
        entity: 'pageview',
        entity_id: 'DLRLHTGG',
        aggregates: ['pageviews'],
        field_grouping: 'pathname',
        sort_by: 'pageviews:desc',
    })

    await asset.save(pageviews, "json")

    return {
        popularPages: pageviews,
    }
}