<template>
	<router-view></router-view>
</template>

<script>
import { locator } from '@/hooks/geoLocation.js'

export default {
	setup() {
		locator()
	},

	methods: {
		enterUser() {
			if (JSON.parse(localStorage.getItem('user')) != null) {
				this.$store.state.usersModule.user = JSON.parse(
					localStorage.getItem('user')
				)
			}
		},
	},

	mounted() {
		this.enterUser()
	},
}
</script>

<style>
html {
	overflow-x: hidden;
}
</style>
