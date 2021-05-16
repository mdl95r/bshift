const upBtn = () => {
	const upBtn = document.querySelector('.js-up-btn');

	upBtn.addEventListener('click', function () {
		backToTop();
	});

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -40);
			setTimeout(backToTop, 0);
		}
	}

	window.addEventListener('scroll', function () {
		let height =
			(document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop;
		height >= document.body.scrollHeight / 2 ? upBtn.classList.add('up-btn_show') : upBtn.classList.remove('up-btn_show');
	})
}

export default upBtn