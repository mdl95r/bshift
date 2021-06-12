import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

const slider = () => {
	const hero = document.querySelector('.hero');
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
	const sliderBlock = document.querySelector('.slider-block');
	if (sliderBlock) {
		new Swiper('.slider-block .swiper-container', {
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
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
}

export default slider