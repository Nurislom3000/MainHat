<template>
	<Header />
	<NoBasket v-if="basket() == undefined" />
	<div v-else>
		<Payed />
		<Purchased />
	</div>
</template>

<script setup>
import Purchased from '@/components/Purchased.vue'
import NoBasket from '@/components/NoBasket.vue'
import Payed from '@/components/Payed.vue'

function basket() {
	try {
		return JSON.parse(localStorage.getItem('user')).basket[0]
	} catch (error) {
		return undefined
	}
}
</script>
