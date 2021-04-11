const initCookiePopup = () => {
	const needToShowCookiePopup = !localStorage.getItem('cookieHide');
	const cookiePopup = document.querySelector('.cookie-popup ');
	const cookieBtn = document.querySelector('.js-cookie-popup');

	if (needToShowCookiePopup) {
		setTimeout(function () {
			cookiePopup.classList.remove('cookie-popup_hidden')
		}, 1000)
		cookieBtn.addEventListener('click', function () {
			localStorage.setItem('cookieHide', 'true');
			cookiePopup.classList.add('cookie-popup_hide');
		})
	} else {
		cookiePopup.remove();
	}
}

export default initCookiePopup