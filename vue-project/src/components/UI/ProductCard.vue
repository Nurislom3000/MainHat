<template>
	<button
		@click="$router.push(`/products/${product.id}`)"
		class="card"
		style="width: 18rem"
	>
		<img :src="product.imgURL" class="card-img-top" alt="..." />
		<div class="card-body">
			<h5 class="card-title">{{ product.title }}</h5>
			<p class="card-text">${{ product.price }}</p>
		</div>
	</button>
</template>

<script>
export default {
	name: 'productCard',

	props: {
		product: [Object],
	},
}
</script>

<style scoped>
.card {
	margin: 10px;
	margin-bottom: 66px;
	padding: 0;
	text-align: left;
	transition-duration: 0.3s;
}

.card:hover {
	background-color: rgb(243, 243, 243);
	box-shadow: 5px 5px 5px rgb(193, 193, 193);
}

img {
	width: 100%;
	height: 80%;
}

@media (max-width: 903px) {
	.card {
		margin: 0;
		margin: 0 auto;
		max-width: 100%;
		height: 100%;
		color: #181818;
	}

	h5 {
		font-size: 90%;
	}
}

@media (max-width: 479px) {
	img {
		height: 67%;
	}

	h5 {
		font-size: 65%;
	}

	.card {
		height: 90%;
	}

	p {
		font-size: 70%;
	}
}

@media (max-width: 405px) {
	img {
		height: 73%;
	}
	.card {
		height: 93%;
	}

	h5 {
		font-size: 90%;
	}
}

@media (max-width: 387px) {
	img {
		height: 68%;
	}
}
</style>
