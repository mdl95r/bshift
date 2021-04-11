import initCookiePopup from './modules/cookie-popup';
import youtubeLazy from './modules/youtube-lazy';
import lazy from './modules/lazyload';
import slider from './modules/slider';
import initGallery from './modules/lightgallery';
import header from './modules/header';
import initScrolling from './modules/scroll-to-section';

document.addEventListener('DOMContentLoaded', () => {
	initCookiePopup();
	header();
	youtubeLazy();
	lazy();
	slider();
	initScrolling();
	initGallery();
})