<template>
	<div class="card" style="width: 18rem">
		<img :src="product.imgURL" class="card-img-top" alt="..." />
		<div class="card-body">
			<h5 class="card-title">{{ product.title }}</h5>
			<p class="card-text">${{ product.price }}</p>

			<button
				v-change-color="product.id"
				class="btn btn-primary"
				@click="
					$store.dispatch('productModule/AddToCart', product.id), shower()
				"
			>
				Add
			</button>

			<button
				class="btn btn-info"
				@click="$router.push(`/products/${product.id}`)"
			>
				Info
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'productCard',

	props: {
		product: [Object],
		shower: [Function],
	},
}
</script>

<style scoped>
.card {
	margin: 10px;
	margin-bottom: 66px;
}

img {
	width: 100%;
	height: 80%;
}

.btn-info {
	margin-left: 5%;
}
</style>
