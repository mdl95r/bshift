const initScrolling = () => {
	const currentSection = document.querySelectorAll('.js-section');
	const links = document.querySelectorAll('.js-nav-link');

	window.addEventListener('scroll', () => {
		const currentScroll = window.pageYOffset
		const header = document.querySelector('.header');

		currentSection.forEach((item) => {
			const offsetTop = item.offsetTop - header.offsetHeight
			const height = item.offsetHeight
			const offsetBottom = offsetTop + height
			if (currentScroll >= offsetTop && currentScroll <= offsetBottom) {
				const dataId = item.dataset.section
				const activeMenu = document.querySelector(`.js-nav-link[data-menu="${dataId}"]`);
				links.forEach((item) => {
					item.classList.remove('header__nav-link_active');
				})
				activeMenu.classList.add('header__nav-link_active');
			}
		})
	})
}

export default initScrolling