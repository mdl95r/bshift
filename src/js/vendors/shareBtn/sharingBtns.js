const getTemplate = ({ socials, position }) => {
	const items = socials.split(', ').map(el => {
		return `
					<div 
						class="sharing-btns-item ${el}" 
						data-social="${el}" 
						title="Share in ${el}">
					</div>
				`
	});
	return `<div data-position="${position}">${items.join('')}</div>`
}

export class SharingBtns {
	constructor(selector, options) {
		let defaultOptions = {
			socials: 'vk, reddit',
			position: 'horizontal',
			fixed: false
		}
		this.options = Object.assign(defaultOptions, options)
		this.$el = document.querySelector(selector)
		if (this.$el) {
			this.#render(this.options)
			this.#init()
		} else {
			console.error('#sharing-btns is not defined in markup!')
		}
	}

	#render(props) {
		this.$el.classList.add('sharing-btns');
		this.$el.innerHTML = getTemplate(props);
		const { fixed } = props
		if (fixed) {
			this.$el.classList.add('fixed');
		}
	}

	#init() {
		const items = this.$el.querySelectorAll('[data-social]');
		items.forEach(el => {
			el.addEventListener('click', function (e) {
				const currentSocial = e.target.dataset.social
				cases(currentSocial);
			})
		});
		const cases = (social) => {
			const currentUrl = window.location.href
			const currentTitle = document.title
			let currentDescription = document.querySelector('meta[name="description"]')
			currentDescription = currentDescription.getAttribute('content')
			let url = ''
			switch (social) {
				case 'vk':
					url = `https://vk.com/share.php?url=${currentUrl}&title=${encodeURIComponent(currentTitle)}&description=${encodeURIComponent(currentDescription)}`
					showPopup(url);
					break;

				case 'twitter':
					url = `https://twitter.com/share?url=${currentUrl}&title=${encodeURIComponent(currentTitle)}&description=${encodeURIComponent(currentDescription)}`
					showPopup(url);
					break;
				case 'facebook':
					url = `https://www.facebook.com/sharer.php?s=100?url=${currentUrl}&title=${encodeURIComponent(currentTitle)}&description=${encodeURIComponent(currentDescription)}`
					showPopup(url);
					break;
				case 'reddit':
					url = `https://www.reddit.com/submit?url=${currentUrl}&title=${encodeURIComponent(currentTitle)}&description=${encodeURIComponent(currentDescription)}`
					showPopup(url);
					break;

			}
		}
		const showPopup = (url) => {
			window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
		}
	}
}