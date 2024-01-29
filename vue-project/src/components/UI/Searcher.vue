<template>
	<div class="input-group mb-3">
		<span class="input-group-text" id="basic-addon1">🔎</span>
		<input
			v-model="inpValue"
			@input="$store.commit('productModule/searchProducts', inpValue)"
			type="text"
			class="form-control"
			placeholder="Search"
			aria-label="Search"
			aria-describedby="basic-addon1"
		/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'Search',

	computed: {
		...mapGetters({
			searchProducts: 'productModule/searchProducts',
		}),
	},

	data() {
		return {
			inpValue: '',
		}
	},

	mounted() {
		console.log(this.searchProducts)
	},
}
</script>

<style scoped>
.input-group {
	width: 40%;
}
</style>
