import axios from 'axios'

export const usersModule = {
	state: {
		user: {
			email: '',
			pass: '',
			basket: [],
		},
	},

	mutations: {
		updateEmail(state, newVal) {
			state.user.email = newVal
		},
		updatePassword(state, newVal) {
			state.user.pass = newVal
		},
	},

	actions: {
		async sendUser({ state }) {
			state.user.id = Date.now()
			localStorage.setItem('user', JSON.stringify(state.user))
			await axios.post('https://b1fc734675d7d28d.mokky.dev/users', state.user)
		},

		async checkUser({ state, dispatch }, router) {
			await axios
				.get('https://b1fc734675d7d28d.mokky.dev/users')
				.then(response => {
					const hasUser = response.data.some(
						user => user.email == state.user.email
					)

					function isValidEmail(email) {
						let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

						return emailRegex.test(email)
					}

					if (isValidEmail(state.user.email) && state.user.pass.length >= 3) {
						dispatch('sendUser')
						router.push('/signed')
					} else if (state.user.email == '' || state.user.pass == '') {
						alert('Please write your email and password')
					} else if (hasUser == true) {
						alert('This email has been already used. Enter another email')
					} else {
						alert('Incorrect email or Password')
					}
				})
		},

		async getUsers({ state }, router) {
			await axios
				.get('https://b1fc734675d7d28d.mokky.dev/users')
				.then(response => {
					const hasUser = response.data.find(
						user =>
							user.pass == state.user.pass && user.email == state.user.email
					)

					if (hasUser != undefined) {
						state.user = hasUser
						router.push('/signed')
						localStorage.setItem('user', JSON.stringify(state.user))
						console.log(hasUser)
					} else {
						alert('Incorrect email or password')
					}
				})
		},
	},
}
