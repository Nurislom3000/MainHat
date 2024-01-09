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

					if (state.user.email == '' || state.user.pass == '') {
						alert('Please write your email and password')
					} else if (hasUser == true) {
						alert('This email has been already used. Enter another email')
					} else {
						dispatch('sendUser')
						state.user = {
							email: '',
							pass: '',
							basket: [],
						}
						router.push('/signed')
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
					} else {
						alert('Incorrect email or password')
					}
				})
		},
	},
}
