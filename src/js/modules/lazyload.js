import LazyLoad from "vanilla-lazyload"

const lazy = () => {
	const lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
	});
}

export default lazy