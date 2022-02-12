const initSiteInfo = () => {
	const siteInfo = document.querySelector('.js-site-info');
	const siteinfoBtn = document.querySelector('.js-close-btn');
	const needToShowSiteInfo = !localStorage.getItem('siteInfoHide');
	const menuList = document.querySelector('.js-menu-list');

	if (siteInfo) {
		if (needToShowSiteInfo) {
			siteInfo.classList.remove('site-info_hidden');
			siteinfoBtn.addEventListener('click', function() {
				siteInfo.classList.add('site-info_hidden');
				localStorage.setItem('siteInfoHide', 'true');
				menuList.removeAttribute('style');
			})
		} else {
			siteInfo.remove();
		}
	}
}

export default initSiteInfo