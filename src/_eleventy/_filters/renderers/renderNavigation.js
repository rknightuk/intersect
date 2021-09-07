module.exports = function(data) {
	const pages = data[0]
	const currentPage = data[1]

	let links = []
	let currentTopLevel = ''

	const renderNavListItem = (page, isTopLevel) => {
		if (isTopLevel) currentTopLevel = page.url
		const isCurrentPage = page.url === currentPage.url
		let isOpen = isTopLevel && isCurrentPage || isTopLevel && currentPage.url.startsWith(currentTopLevel)

		data = `
		<li
			${isOpen ? 'class="open"' : ''}
		>
			<a 
				${isCurrentPage ? 'class="active"' : ''}
				href="${page.url}"
			>
				${page.title}
			</a> ${page.children && page.children.length && isTopLevel ? '<div class="toggler"><svg class="toggler-closed"><use xlink:href="#chevron-right"></use></svg><svg class="toggler-open"><use xlink:href="#chevron-down"></use></svg></div>' : ''}
			${page.children && page.children.length ? `<ul>${page.children.map(c => renderNavListItem(c)).join('')}</ul>` : ''}
		</li>
		`
		return data
	}

	data = pages.map(p => renderNavListItem(p, true))


	return `<ul>${data.join('')}</ul>`
}
  