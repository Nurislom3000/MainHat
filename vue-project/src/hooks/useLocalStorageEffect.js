import { ref, watch, computed } from 'vue'

export default function useLocalStorageEffect(key) {
	const storageValue = ref(localStorage.getItem(key))

	const value = computed({
		get: () => storageValue.value,
		set: newValue => {
			storageValue.value = newValue
			localStorage.setItem(key, newValue)
		},
	})

	watch(storageValue, newValue => {
		value.value = newValue
	})

	return value
}
