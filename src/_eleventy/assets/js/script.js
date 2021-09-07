(function (window, document) {
    // add copy buttons to code
    document.querySelectorAll('[data-copy]').forEach(cp => {
        const copy = document.createElement('div')
        copy.className = 'copy-button'
        copy.innerHTML = '<div>copy</div>'
        cp.appendChild(copy)
        copy.addEventListener('click', function(e) {
            text = e.currentTarget.parentElement.getElementsByTagName('code')[0].innerText
            navigator.clipboard.writeText(text).then(() => {
                copy.innerHTML = '<div>copied!</div>'
                setTimeout(() => {
                    copy.innerHTML = '<div>copy</div>'
                }, 750)
            })
        })
    })

    // listen for section toggles
    document.querySelectorAll('.toggler').forEach(t => {
        t.addEventListener('click', function(e) {
            const ul = e.currentTarget.parentElement
            if (ul.className.includes('open'))
            {
                ul.className = ul.className.replace('open', '')
            } else {
                ul.className += ' open'
            }
        })
    })

    // toggle sidebar
    document.getElementById('sidebar-trigger').addEventListener('click', function(e) {
        e.preventDefault()
        const wrapperEl = document.getElementById('intersect')
        const isActive = wrapperEl.className.includes('sidebar-toggled')
        if (isActive)
        {
            wrapperEl.className = wrapperEl.className.replace('sidebar-toggled', '')
        } else {
            wrapperEl.className += ' sidebar-toggled'
        }
    })

    // toggle theme
    document.getElementById('theme-trigger').addEventListener('click', function (e) {
        e.preventDefault()
        const body = document.getElementsByTagName('body')[0]
        const darkModeActivated = body.className.includes('dark')
        if (!body.className.includes('dark') && !body.className.includes('light')) {
            body.className = body.className += (' dark')
            return
        }
        if (darkModeActivated) {
            body.className = body.className.replace('dark', 'light')
        } else {
            body.className = body.className.replace('light', 'dark')
        }
    })

}(this, this.document));