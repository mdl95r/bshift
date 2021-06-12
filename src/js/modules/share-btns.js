import { SharingBtns } from '../vendors/shareBtn/sharingBtns'

const sharingBtn = () => {
	if (document.querySelector('#sharing-btns')) {
		new SharingBtns('#sharing-btns', {
			socials: 'vk, facebook, twitter, reddit',
		})
	}
}

export default sharingBtn