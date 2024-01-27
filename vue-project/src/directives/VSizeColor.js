export default {
	mounted(el) {
		el.addEventListener('focus', () => {
			el.style.backgroundColor = '#6c757d'
			el.style.color = 'white'
		})

		el.addEventListener('blur', () => {
			el.style.backgroundColor = 'white'
			el.style.color = '#788087'
		})
	},

	name: 'size-color',
}
