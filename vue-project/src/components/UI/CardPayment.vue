<template>
	<div class="Payment">
		<div class="payingDialog">
			<div @click.prevent.stop class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">💵Payment</h5>
					</div>
					<div class="modal-body">
						<p>Write your card number</p>
						<input
							type="number"
							class="form-control"
							placeholder="XXXX XXXX XXXX XXXX"
							aria-label="Username"
							aria-describedby="basic-addon1"
							v-model="inpValue"
						/>
					</div>
					<div class="modal-footer">
						<button
							@click="$emit('hide', inpValue)"
							type="button"
							class="btn btn-primary"
						>
							Transfer
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CardPayment',

	data() {
		return {
			inpValue: '',
		}
	},
}
</script>

<style scoped>
.Payment {
	z-index: 12;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
}

.payingDialog {
	width: 40%;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
	-webkit-appearance: none;
}

input[type='number'],
input[type='number']:hover,
input[type='number']:focus {
	appearance: none;
	-moz-appearance: textfield;
}
</style>
