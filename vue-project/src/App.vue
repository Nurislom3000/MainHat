<template>
	<router-view></router-view>
</template>

<script>
import { locator } from '@/hooks/geoLocation.js'

export default {
	setup(props) {
		const { latitude, longitude, getLocation } = locator()

		return {}
	},

	methods: {
		enterUser() {
			if (JSON.parse(localStorage.getItem('user')) != null) {
				this.$store.state.usersModule.user = JSON.parse(
					localStorage.getItem('user')
				)
			} else {
				console.log('Hello')
			}
		},
	},

	mounted() {
		this.enterUser() // Hello
	},
}
</script>

<style>
html {
	overflow-x: hidden;
}
</style>
