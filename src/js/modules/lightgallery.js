import "lightgallery.js"

const initGallery = () => {
	const allGallery = document.querySelectorAll('.js-lightgallery');
	allGallery.forEach((elem) => {
		lightGallery((elem), {
			selector: '.media-block__img'
		});
	})
}

export default initGallery