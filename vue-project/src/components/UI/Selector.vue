<template>
	<select
		v-model="selectV"
		@change="$store.commit('productModule/filterProducts', selectV)"
		class="form-select"
		aria-label="Default select example"
	>
		<option selected>All</option>
		<option v-for="option in options" :key="option" :value="option">
			{{ option }}
		</option>
	</select>
</template>

<script>
export default {
	name: 'Selection',

	data() {
		return {
			selectV: 'All',
		}
	},

	props: {
		options: [Array],
	},
}
</script>

<style scoped>
select {
	width: 20%;
	height: 100%;
}
</style>
