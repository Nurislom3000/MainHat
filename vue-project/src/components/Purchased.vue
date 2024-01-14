<template>
	<div class="all">
		<div class="basket">
			<div
				v-for="purchased in user.basket"
				:key="purchased.id"
				class="row card"
				style="width: 18rem"
			>
				<img :src="purchased.imgURL" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">{{ purchased.title }}</h5>
					<p class="card-text">
						${{ purchased.price * purchased.count }} =>
						{{ purchased.count }} pieces
					</p>
					<span class="count">
						<button
							@click="minus(purchased.id)"
							href="#"
							class="href btn btn-primary"
						>
							-
						</button>
						<button
							@click="plus(purchased.id)"
							href="#"
							class="href btn btn-primary"
						>
							+
						</button>
					</span>
					<button @click="delProduct(purchased.id)" class="btn btn-danger">
						Delete
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {},
		}
	},

	methods: {
		userAdder() {
			try {
				this.user = JSON.parse(localStorage.getItem('user'))
				console.log(this.user)
			} catch (error) {
				this.user = undefined
				console.log(this.JSON.parse(localStorage.getItem('user')))
			}
		},
		delProduct(ID) {
			const delID = this.user.basket.findIndex(product => product.id == ID)
			this.user.basket.splice(delID, 1)
			localStorage.setItem('user', JSON.stringify(this.user))
			console.log(this.userExists)
		},
		plus(ID) {
			const plusID = this.user.basket.findIndex(product => product.id == ID)
			this.user.basket[plusID].count += 1
			localStorage.setItem('user', JSON.stringify(this.user))
		},
		minus(ID) {
			const minusID = this.user.basket.findIndex(product => product.id == ID)
			if (this.user.basket[minusID].count > 1) {
				this.user.basket[minusID].count--
			} else {
				console.log(1)
			}
		},
	},

	mounted() {
		this.userAdder()
	},
}
</script>

<style scoped>
.all {
	display: flex;
	margin-left: 5%;
	margin-top: 2%;
}

.basket {
	width: 100%;
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
}
.card {
	margin-bottom: 66px;
}

img {
	padding: 0;
	width: 100%;
	height: 70%;
}

.btn-danger {
	margin-left: 10%;
}

.href {
	border-radius: 0;
}
</style>
