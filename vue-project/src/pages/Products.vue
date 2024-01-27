<template>
	<Header />
	<br />
	<Selector />
	<div class="products">
		<div class="productList">
			<productCard
				v-for="product in products"
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
	computed: {
		...mapState({
			products: state => state.productModule.products,
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
</style>
