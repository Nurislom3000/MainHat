<template>
	<Header />
	<div class="products">
		<div class="productList">
			<div
				v-for="product in products"
				:key="product.id"
				class="card"
				style="width: 18rem"
			>
				<img :src="product.imgURL" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">{{ product.title }}</h5>
					<p class="card-text">${{ product.price }}</p>

					<button
						class="btn btn-primary"
						@click="
							$store.dispatch('productModule/AddToCart', product.id), shower()
						"
					>
						Add
					</button>
				</div>
			</div>
		</div>
	</div>

	<Transition class="bought" name="bounce">
		<div v-if="show">
			<div style="z-index: 11">
				<div
					id="liveToast"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
				>
					<div class="toast-header">
						<strong class="me-auto">✅</strong>
						<span>You have bought It</span>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
	data() {
		return {
			show: false,
		}
	},

	computed: {
		...mapState({
			products: state => state.productModule.products,
		}),
	},

	methods: {
		...mapActions({
			getProducts: 'productModule/getProducts',
		}),

		shower() {
			this.show = true
			setTimeout(() => {
				this.show = false
			}, 1000)
		},
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

.card {
	margin: 10px;
	margin-bottom: 66px;
}

img {
	width: 100%;
	height: 80%;
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
	width: 14%;
}
</style>
