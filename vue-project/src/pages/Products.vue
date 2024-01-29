<template>
	<Header />
	<br />
	<div class="controller">
		<select
			v-model="gender"
			class="form-select"
			aria-label="Default select example"
		>
			<option selected value="All">All</option>
			<option value="both">both</option>
			<option value="man">man</option>
			<option value="woman">woman</option>
		</select>

		<div class="input-group mb-3">
			<span class="input-group-text" id="basic-addon1">🔎</span>
			<input
				v-model="searchV"
				type="text"
				class="form-control"
				placeholder="Search"
				aria-label="Search"
				aria-describedby="basic-addon1"
			/>
		</div>

		<Selection :options="options" />
	</div>
	<div class="products">
		<div class="productList">
			<productCard
				v-for="product in genderFilter"
				:key="product.id"
				:product="product"
				:shower="this.shower"
				class="card"
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
			gender: 'All',
			searchV: '',
		}
	},

	computed: {
		...mapState({
			products: state => state.productModule.products,
			filteredProducts: state => state.productModule.filteredProducts,
		}),

		searcher() {
			return this.filteredProducts.filter(product =>
				product.title.toLowerCase().includes(this.searchV.toLowerCase())
			)
		},

		genderFilter() {
			if (this.gender != 'All') {
				return this.searcher.filter(product => product.for == this.gender)
			} else {
				return this.searcher
			}
		},
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

<style>
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

.input-group {
	width: 50%;
}

.form-select {
	width: 20%;
	height: 100%;
}

@media (max-width: 1200px) {
	.productList {
		grid-template-columns: 33% 33% 33%;
	}
}

@media (max-width: 903px) {
	.productList {
		grid-template-columns: 30% 30% 30%;
		grid-gap: 5%;
	}
}
</style>
