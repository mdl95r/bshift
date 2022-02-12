const header = () => {
	const burgerBtn = document.querySelector('.js-burger-btn');
	const menuList = document.querySelector('.js-menu-list');
	const links = document.querySelectorAll('.js-nav-link');
	const siteInfo = document.querySelector('.js-site-info');
	const header = document.querySelector('.header');

	burgerBtn.addEventListener('click', function (e) {
		e.preventDefault();
		this.classList.toggle('header__burger-btn_active');

		if (siteInfo && !siteInfo.classList.contains('site-info_hidden')) {
			const { y: yOffset } = header.getBoundingClientRect();
			menuList.style.top = `${yOffset + header.offsetHeight}px`;
		}

		burgerBtn.classList.contains('header__burger-btn_active') ? menuList.classList.add('header__nav-list_active')
			: menuList.classList.remove('header__nav-list_active')
	})

	window.addEventListener('resize', () => {
		menuList.classList.remove('header__nav-list_active');
		burgerBtn.classList.remove('header__burger-btn_active');
	})

	window.addEventListener('scroll', () => {
		menuList.classList.remove('header__nav-list_active');
		burgerBtn.classList.remove('header__burger-btn_active');
	})

	links.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			if (menuList.classList.contains('header__nav-list_active')) {
				menuList.classList.remove('header__nav-list_active');
				burgerBtn.classList.remove('header__burger-btn_active');
			}
			const dataset = item.dataset.menu
			offsetToSection(dataset);
		})
	})

	const offsetToSection = (id) => {
		const currentSection = document.querySelector(`.js-section[data-section="${id}"]`);
		const headerHeight = header.offsetHeight;
		const offset = currentSection.offsetTop;
		scrollTo(headerHeight, offset);
	}

	const scrollTo = (height, offset) => {
		window.scrollTo({
			top: offset - height,
			behavior: 'smooth',
		})
	}
}

export default header