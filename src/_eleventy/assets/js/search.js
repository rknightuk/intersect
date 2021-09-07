(function (window, document) {
    // manage search
    const NO_MATCHES = '<a class="modal-search-result" tabindex="0"><svg class="no-results"><use xlink:href="#ghost"></use></svg>&nbsp;No Matches Found</a>'
    const SEARCH_INPUT_ID = 'search-input'
    const SEARCH_RESULT_CLASS = 'modal-search-result'
    const searchModal = document.getElementById('search-modal')
    const searchInput = document.getElementById(SEARCH_INPUT_ID)
    const searchResults = document.getElementById('search-results')
    const searchAlert = document.getElementById('search-alert')
    const bodyElement = document.getElementsByTagName('body')[0]

    showSearchModal = (query, type) => {
        if (searchModal.style.display === 'block') {
            searchInput.focus()
        }

        if (query)
        {
            searchModal.className += ' showAlert'
            searchAlert.innerHTML = `Showing ${type} for <strong>${query}</strong>`
            searchInput.value = `l ${query}`
        }

        searchModal.style.display = 'block'
        searchInput.focus()
        bodyElement.className += ' searching'
        disableScroll()
        searchResults.innerHTML = type === 'links' ? searchLinks(query) : searchPages('')
    }

    document.getElementById('search-trigger').addEventListener('click', (e) => {
        e.preventDefault()
        showSearchModal()
    })

    document.querySelectorAll('.domain-search').forEach(ds => {
        ds.addEventListener('click', (e) => {
            e.preventDefault()
            showSearchModal(e.target.text, 'links')
        })
    })

    closeSearchModal = () => {
        searchResults.innerHTML = ''
        searchInput.value = ''
        searchModal.style.display = 'none'
        searchAlert.innerHTML = ''
        searchModal.className = searchModal.className.replace('showAlert', '')
        bodyElement.className = bodyElement.className.replace('searching', '')
        searchInput.blur()
        enableScroll()
        const markInstance = new Mark(document.getElementsByClassName('content markdown-body')[0]);
        markInstance.unmark()
    }

    document.getElementById('search-closer').addEventListener('click', () => {
        closeSearchModal()
    })

    // listen for / to focus search
    // listen for esc to clear search
    document.addEventListener('keyup', function(e) {
        let triggerSearch = false
        let clearSearch = false
        let navigateSearchDirection = false
        if (event.key !== undefined) {
            triggerSearch = e.key === '/'
            clearSearch = e.key === 'Escape'
            if (e.key === 'ArrowDown')
            {
                navigateSearchDirection = 'down'
            } else if (e.key === 'ArrowUp')
            {
                navigateSearchDirection = 'up'
            }
        } else if (event.keyCode !== undefined) {
            // deprecated https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
            triggerSearch = e.keyCode === 191
            clearSearch = e.keyCode === 27
            if (e.keyCode === 40)
            {
                navigateSearchDirection = 'down'
            } else if (e.keyCode === 38)
            {
                navigateSearchDirection = 'up'
            }
        }

        if (triggerSearch) 
        {
            showSearchModal()
        } else if (clearSearch)
        {
            closeSearchModal()
        } else if (navigateSearchDirection)
        {
            navigateSearchResults(navigateSearchDirection)
        }
    })

    // https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/
    function disableScroll() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }

    function enableScroll() {
        window.onscroll = () => {}
    }

    navigateSearchResults = (direction) => {
        if (searchModal.style.display !== 'block') return

        const searchResults = document.getElementsByClassName(SEARCH_RESULT_CLASS)

        if (document.activeElement.id === SEARCH_INPUT_ID)
        {
            if (direction === 'up')
            {
                const results = document.querySelectorAll('[data-result-key]')
                if (results.length > 0) {
                    results[results.length - 1].focus()
                }
            } else {
                if (searchResults[0]) { 
                    searchResults[0].focus()
                }
            }
        } else if (document.activeElement.className.includes(SEARCH_RESULT_CLASS))
        {
            const currentId = parseInt(document.activeElement.dataset.resultKey, 10)
            let newId = currentId
            if (direction === 'up') {
                newId = newId - 1
            } else {
                newId = newId + 1
            }

            const newResult = document.querySelectorAll(`[data-result-key="${newId}"]`)[0]
    
            if (!newResult) {
                searchInput.focus()
            } else {
                newResult.focus()
            }
        }
    }

    searchInput.addEventListener('keyup', function(e) {
        let query = e.target.value.toLowerCase()
        let searchAllLinks = false
        if (query.startsWith('l '))
        {
            query = query.split('l ')[1]
            searchAllLinks = true
        }

        output = ''

        output = searchAllLinks ? searchLinks(query) : searchPages(query)

        searchResults.innerHTML = output
    })

    searchLinks = (query) => {
        let linkResults = []
        let output = ''

        searchIndex.links.forEach(s => {
            if (query === '' || s.title.toLowerCase().includes(query) || s.link.toLowerCase().includes(query))
            {
                linkResults.push(s)
            }
        })

        if (linkResults.length === 0)
        {
            output = NO_MATCHES
        } else {
            output = linkResults.map((r, i) => {
                return `
                    <div class="modal-search-result-wrapper">
                        <a data-result-key="${i}" target="_blank" rel="noopener" href="${r.link}" class="modal-search-result primary" tabindex="0">
                            ${r.title}
                        </a>
                        <a class="modal-search-result-page" href="${r.source.url}">${r.source.title}</a>
                    </div>
                `
            }).join('')
        }

        return output
    }

    searchPages = (query) => {
        let results = []
        let output = ''

        searchIndex.content.forEach(s => {
            if (query === '' || s.text.toLowerCase().includes(query))
            {
                results.push(s)
            }
        })

        if (results.length === 0)
        {
            output = NO_MATCHES
        } else {
            const chevron = '<svg><use xlink:href="#chevron-right"></use></svg>'
            output = results.map((r, i) => {
                let title = r.title
                const isPrimary = r.topLevel
                if (isPrimary) title = `<strong>${title}</strong>`
                return `
                    <a data-result-key="${i}" href="${r.url}?q=${query}" class="modal-search-result ${isPrimary ? 'primary' : 'secondary'}" tabindex="0">
                        <span class="parent-title">${r.parents.join(` ${chevron}`)}</span> ${!isPrimary ? `${chevron} ` : ''}${title}
                    </a>
                `
            }).join('')
        }

        return output
    }

    // highlight search params
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params.q)
    {
        const markInstance = new Mark(document.getElementsByClassName('content markdown-body')[0]);
        markInstance.mark(params.q);

        const firstMark = document.getElementsByTagName('mark')[0]
        if (firstMark)
        {
            firstMark.scrollIntoView({ behavior: 'smooth', inline: 'start' })
        }
    }

}(this, this.document));