<template>
	<Header />
	<NoBasket v-if="basket == undefined" />
	<div v-else>
		<button v-update-server class="buy btn btn-secondary">Pay</button>
		<Purchased />
	</div>
</template>

<script>
import Purchased from '@/components/Purchased.vue'
import NoBasket from '@/components/NoBasket.vue'
export default {
	computed: {
		basket() {
			try {
				return JSON.parse(localStorage.getItem('user')).basket[0]
			} catch (error) {
				return undefined
			}
		},
	},
	components: { NoBasket, Purchased },
}
</script>

<style scoped>
.buy {
	position: fixed;
	right: 10px;
	bottom: 10px;
	width: 5%;
	background: #212529;
}
</style>
