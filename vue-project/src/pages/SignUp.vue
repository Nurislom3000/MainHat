<template>
	<Header />

	<form @submit.prevent.stop>
		<div class="mb-3">
			<label for="exampleInputEmail1" class="form-label">Email address</label>
			<input
				:value="IUser.email"
				@input="emailUpdate"
				type="email"
				class="form-control"
				id="exampleInputEmail1"
			/>
			<div id="emailHelp" class="form-text">
				We'll never share your email with anyone else.
			</div>
		</div>
		<div class="mb-3">
			<label for="exampleInputPassword1" class="form-label">Password</label>
			<input
				:value="IUser.password"
				@input="passwordUpdate"
				type="password"
				class="form-control"
				id="exampleInputPassword1"
			/>
		</div>

		<button
			@click="this.$store.dispatch('checkUser', this.$router), cleanInputs()"
			type="submit"
			class="btn btn-primary"
		>
			Submit
		</button>
	</form>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
	data() {
		return {
			IUser: {
				email: '',
				password: '',
			},
		}
	},

	computed: {
		...mapState({
			user: state => state.usersModule.user,
		}),
	},

	methods: {
		...mapMutations({
			updateEmail: 'updateEmail',
			updatePassword: 'updatePassword',
		}),

		emailUpdate(event) {
			this.updateEmail(event.target.value)
		},
		passwordUpdate(event) {
			this.updatePassword(event.target.value)
		},

		cleanInputs() {
			this.IUser = {
				email: '',
				password: '',
			}
		},
	},
}
</script>

<style scoped>
form {
	margin-top: 8%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
