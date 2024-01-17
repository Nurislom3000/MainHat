import axios from 'axios'

export default {
	mounted(el, ID) {
		let user = JSON.parse(localStorage.getItem('user'))

		async function updateUserServer() {
			try {
				await axios
					.patch(`https://b1fc734675d7d28d.mokky.dev/users/${ID.value}`, {
						basket: JSON.parse(localStorage.getItem('user')).basket,
					})
					.then(response => {
						console.log(response.data)
						user.basket = []
						localStorage.setItem('user', JSON.stringify(user))
					})
			} catch (error) {
				console.log(error)
			}
		}

		el.addEventListener('click', () => {
			updateUserServer()
		})
	},

	name: 'update-server',
}
