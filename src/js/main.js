import initCookiePopup from './modules/cookie-popup';
import youtubeLazy from './modules/youtube-lazy';
import lazy from './modules/lazyload';
import slider from './modules/slider';
import initGallery from './modules/lightgallery';
import header from './modules/header';
import initScrolling from './modules/scroll-to-section';
import upBtn from './modules/upBtn';
import sharingBtn from './modules/share-btns';
import initFixedHeader from './modules/fixedHeader';
import initSiteInfo from './modules/siteInfo';

document.addEventListener('DOMContentLoaded', () => {
	initCookiePopup();
	header();
	youtubeLazy();
	lazy();
	slider();
	initScrolling();
	initGallery();
	upBtn();
	sharingBtn();
	initFixedHeader();
	initSiteInfo();
})