<template>
	<div>
		<Header />
		<div class="container">
			<div class="imgs">
				<img :src="product.imgURL" alt="image kan't be loaded ☹️" />
			</div>
			<br />
			<div class="text">
				<h1>{{ product.title }}</h1>
				<h2>Price : ${{ product.price }}</h2>
				<h2>For : {{ Info.for }}</h2>
				<h2>Type : {{ Info.type }}</h2>
				<h2>
					Sizes:
					<button class="btn btn-outline-secondary">L</button>
					<button class="btn btn-outline-secondary">XL</button>
					<button class="btn btn-outline-secondary">XXL</button>
					<button class="btn btn-outline-secondary">3XL</button>
				</h2>

				<div class="selling">
					<button type="button" class="btn btn-lg btn-success">
						Add to basket
					</button>
					<button
						style="margin-left: 10%"
						type="button"
						class="btn btn-lg btn-outline-success"
					>
						Buy now
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			product: [],
			Info: '',
		}
	},
	methods: {
		async productInfo() {
			await axios
				.get('https://b1fc734675d7d28d.mokky.dev/products')
				.then(response => {
					this.product = response.data.filter(
						product => product.id == this.$route.params.id
					)[0]
					this.Info = this.product.info
					this.Sizes = this.product.sizes
				})
		},
	},

	mounted() {
		this.productInfo()
	},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

.container {
	padding: 3%;
	min-width: 1000px;
	display: flex;
	justify-content: space-between;
}

h1 {
	font-family: 'Dancing Script', cursive;
	font-optical-sizing: auto;
	font-size: 100px;
	margin-bottom: 5%;
}

h2 {
	font-size: 40px;
	margin-top: 20px;
}

.imgs {
	width: 38%;
}
img {
	width: 100%;
	height: 100%;
	border: 3px solid #d9d9d9c9;
	border-radius: 20px;
	padding: 20px;
}

.btn-outline-secondary {
	margin-left: 10px;
}

.selling {
	margin-top: 20%;
}
</style>
