<template>
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
			@click="this.$store.dispatch(`${formFunction}`, this.$router)"
			type="submit"
			class="btn btn-primary"
		>
			Submit
		</button>
		<br />
		<slot />
	</form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	props: {
		formFunction: [String],
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
</style>
