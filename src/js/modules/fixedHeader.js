const initFixedHeader = () => {
	const header = document.querySelector('.header');
	const siteInfo = document.querySelector('.js-site-info');
	const hero = document.querySelector('.hero');
	
	window.addEventListener('scroll', () => {
		const currentScroll = window.pageYOffset;
		if (currentScroll >= (siteInfo ? siteInfo.offsetHeight : 0) + header.offsetHeight) {
			header.classList.add('header_fixed');
			if (hero) {
				hero.style.paddingTop = `${header.offsetHeight}px`;
			}

		} else {
			header.classList.remove('header_fixed');
			if (hero) {
				hero.style.paddingTop = '';
			}
		}
	})
}

export default initFixedHeader