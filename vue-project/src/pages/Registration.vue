<template>
	<div class="reg">
		<Header />
		<br />
		<form @submit.prevent.stop>
			<div class="mb-3">
				<label for="exampleInputEmail1" class="form-label">Email address</label>
				<input
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
					@input="passwordUpdate"
					type="password"
					class="form-control"
					id="exampleInputPassword1"
				/>
			</div>

			<button
				@click="$store.dispatch('getUsers', this.$router)"
				class="btn btn-primary"
			>
				Submit
			</button>
			<br />
			<router-link to="/sign">or create an account</router-link>
		</form>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	data() {
		return {
			IUser: {
				email: '',
				password: '',
			},
		}
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

.reg {
	background: #353535;
	height: 100vh;
	color: white;
}
</style>
