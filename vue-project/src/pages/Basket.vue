<template>
	<Header />
	<NoBasket v-if="basket == undefined" />
	<div v-else>
		<Payed />
		<Purchased />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Purchased from '@/components/Purchased.vue'
import NoBasket from '@/components/NoBasket.vue'
import Payed from '@/components/Payed.vue'

let basket = ref(JSON.parse(localStorage.getItem('user')).basket[0])
</script>
