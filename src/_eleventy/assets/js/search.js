(function (window, document) {
    // manage search
    const searchModal = document.getElementById('search-modal')
    const bodyElement = document.getElementsByTagName('body')[0]

    showSearchModal = (query, type) => {
        searchModal.style.display = 'block'
        bodyElement.className += ' searching'
        disableScroll()
    }

    document.getElementById('search-trigger').addEventListener('click', (e) => {
        e.preventDefault()
        showSearchModal()
    })

    closeSearchModal = () => {
        searchModal.style.display = 'none'
        searchModal.className = searchModal.className.replace('showAlert', '')
        enableScroll()
        const markInstance = new Mark(document.getElementsByClassName('content markdown-body')[0]);
        markInstance.unmark()
    }

    document.getElementById('search-closer').addEventListener('click', () => {
        closeSearchModal()
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
