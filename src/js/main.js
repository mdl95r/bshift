
document.addEventListener('DOMContentLoaded', () => {
	const burgerBtn = document.querySelector('.js-burger-btn'),
		menuList = document.querySelector('.js-menu-list'),
		hero = document.querySelector('.hero'),
		links = document.querySelectorAll('.js-nav-link'),
		currentSection = document.querySelectorAll('.js-section');

	lightGallery(document.getElementById('lightgallery'), {
		selector: '.media__item'
	});

	const lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
	});

	if (hero) {
		new Swiper('.hero .swiper-container', {
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			autoplay: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		})
	}

	burgerBtn.addEventListener('click', function (e) {
		e.preventDefault();
		this.classList.toggle('header__burger-btn_active');
		burgerBtn.classList.contains('header__burger-btn_active') ? menuList.classList.add('header__nav-list_active')
			: menuList.classList.remove('header__nav-list_active')
	})

	window.addEventListener('resize', () => {
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
		const headerHeight = document.querySelector('.header').offsetHeight;
		const offset = currentSection.offsetTop;
		scrollTo(headerHeight, offset);
	}

	const scrollTo = (height, offset) => {
		window.scrollTo({
			top: offset - height,
			behavior: 'smooth',
		})
	}

	window.addEventListener('scroll', () => {
		const currentScroll = window.pageYOffset
		currentSection.forEach((item) => {
			const offsetTop = item.offsetTop - 50
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
})