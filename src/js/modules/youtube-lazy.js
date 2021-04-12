const youtubeLazy = () => {
	const videos = document.querySelectorAll('.youtube');
	for (let i = 0; i < videos.length; i++) {
		videos[i].style.backgroundImage = 'url(https://i.ytimg.com/vi/' + videos[i].id + '/hq720.jpg)';
		videos[i].style.backgroundSize = 'contain';
		let play = document.createElement("div");
		play.setAttribute("class", "play");
		videos[i].appendChild(play);
		videos[i].onclick = function () {
			let iframe = document.createElement("iframe");
			let iframe_url = `https://www.youtube.com/embed/${this.id}?autoplay=1&autohide=1`;
			if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
			iframe.setAttribute("src", iframe_url);
			iframe.setAttribute("frameborder", '0');
			iframe.setAttribute('allowFullScreen', '');
			iframe.setAttribute('autoplay', '');
			iframe.style.width = this.style.width = "100%";
			iframe.style.height = this.style.height = "100%";
			iframe.style.position = this.style.position = "absolute";
			iframe.style.left = this.style.left = "50%";
			iframe.style.transform = this.style.transform = "translateX(-50%)";
			iframe.style.right = this.style.right = "0";
			this.parentNode.replaceChild(iframe, this);
		}
	}
}

export default youtubeLazy;