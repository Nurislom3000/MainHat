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
				<h2>For : {{ product.for }}</h2>
				<h2>Type : {{ product.type }}</h2>
				<h2>
					Sizes:
					<button
						v-size-color
						@click="this.product.size = 'L'"
						class="btn btn-outline-secondary"
					>
						L
					</button>
					<button
						v-size-color
						@click="this.product.size = 'XL'"
						class="btn btn-outline-secondary"
					>
						XL
					</button>
					<button
						v-size-color
						@click="this.product.size = 'XXL'"
						class="btn btn-outline-secondary"
					>
						XXL
					</button>
					<button
						v-size-color
						@click="this.product.size = '3XL'"
						class="btn btn-outline-secondary"
					>
						3XL
					</button>
				</h2>

				<div class="selling">
					<button
						v-change-color="product.id"
						@click="
							$store.dispatch('productModule/AddToCart', product.id), shower()
						"
						type="button"
						class="btn btn-lg btn-primary"
					>
						Add to basket
					</button>
					<button
						style="margin-left: 10%"
						type="button"
						class="btn btn-lg btn-outline-success"
						@click="payingDialog = true"
					>
						Buy now
					</button>
				</div>
			</div>
		</div>
	</div>

	<Transition class="bought" name="bounce">
		<Toast class="toaster" v-if="show" />
	</Transition>

	<Transition name="bounce">
		<CardPayment
			:shower="shower"
			@click="payingDialog = false"
			@hide="hidePayingDialog"
			v-show="payingDialog"
		/>
	</Transition>
</template>

<script>
import axios from 'axios'

export default {
	props: {
		shower: [Function],
	},

	data() {
		return {
			payingDialog: false,
			show: false,
			product: [],
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
				})
		},

		shower() {
			this.show = true
			setTimeout(() => {
				this.show = false
			}, 1000)
		},

		hidePayingDialog(event) {
			console.log(event)
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
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px !important;
}

.text {
	width: 40%;
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

.bounce-enter-active {
	animation: bounce-in 0.5s;
}
.bounce-leave-active {
	animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}

.bought {
	position: fixed;
	right: 40px;
	bottom: 40px;
	width: 200px;
}

@media (max-width: 992px) {
	.container {
		margin: 0;
		min-width: 100% !important;
	}

	h2 {
		font-size: 30px;
	}

	.btn-outline-secondary {
		font-size: 40%;
	}

	.btn-primary {
		font-size: 100%;
	}

	.btn-outline-success {
		font-size: 100%;
	}

	.imgs {
		width: 50%;
		height: 70%;
	}
}

@media (max-width: 768px) {
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.imgs {
		max-width: 50%;
		min-width: 350px;
	}

	.text {
		text-align: center;
		width: 100%;
	}
	.selling {
		margin-top: 5%;
	}

	.bought {
		top: 5%;
		right: 5%;
	}
}

@media (max-width: 576px) {
	.imgs {
		min-width: 300px;
		margin-top: 10%;
	}
	h1 {
		font-size: 80px;
	}
	h2 {
		font-size: 25px;
	}
	.selling {
		margin-top: 10%;
		font-size: 80%;
	}
}
</style>
