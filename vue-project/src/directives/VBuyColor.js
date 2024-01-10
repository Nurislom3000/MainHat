export default {
	mounted(el, binding) {
		el.addEventListener('click', () => {
			el.style.backgroundColor = 'green'

			setTimeout(() => {
				el.style.backgroundColor = '#0d6efd'
			}, 1000)
		})
	},
}
