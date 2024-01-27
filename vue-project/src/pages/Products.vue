<template>
	<Header />
	<br />
	<div class="controller">
		<Selection :options="options" />
	</div>
	<div class="products">
		<div class="productList">
			<productCard
				v-for="product in filteredProducts"
				:key="product.id"
				:product="product"
				:shower="this.shower"
			/>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
	data() {
		return {
			options: ['head', 'body', 'knee', 'foot'],
		}
	},

	computed: {
		...mapState({
			products: state => state.productModule.products,
			filteredProducts: state => state.productModule.filteredProducts,
		}),
	},
	methods: {
		...mapActions({
			getProducts: 'productModule/getProducts',
		}),
	},
	mounted() {
		this.getProducts()
	},
}
</script>

<style scoped>
.products {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 3%;
}
.productList {
	width: 100%;
	margin-top: 2%;
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
}

.controller {
	display: flex;
	justify-content: space-around;
}
</style>
