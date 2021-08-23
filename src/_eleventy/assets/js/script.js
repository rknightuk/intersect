(function (window, document) {
    // scroll to active menu item
    const container = document.getElementById('menu')
    const items = container.getElementsByClassName('active')

    if (items[0].closest('.open'))
    {
        container.scrollTo({
            top: items[0].closest('.open').offsetTop - 70
        })   
    }

    // add copy buttons to code
    document.querySelectorAll('[data-copy]').forEach(cp => {
        const copy = document.createElement('div')
        copy.className = 'copy-button'
        cp.appendChild(copy)
        copy.addEventListener('click', function(e) {
            text = e.currentTarget.parentElement.getElementsByTagName('code')[0].innerText
            navigator.clipboard.writeText(text).then(() => {
                copy.className = `${copy.className} checked`
                setTimeout(() => {
                    copy.className = 'copy-button'
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

    // manage sidebar
    // https://purecss.io/layouts/side-menu/
    function getElements() {
        return {
            layout: document.getElementById('layout'),
            menu: document.getElementById('menu'),
            menuLink: document.getElementById('menuLink')
        };
    }

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/);
        var length = classes.length;
        var i = 0;

        for (; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll() {
        var active = 'active';
        var elements = getElements();

        toggleClass(elements.layout, active);
        toggleClass(elements.menu, active);
        toggleClass(elements.menuLink, active);
    }
    
    function handleEvent(e) {
        var elements = getElements();
        
        if (e.target.id === elements.menuLink.id) {
            toggleAll();
            e.preventDefault();
        } else if (elements.menu.className.includes('active')) {
            toggleAll();
        }
    }
    
    document.addEventListener('click', handleEvent);

}(this, this.document));