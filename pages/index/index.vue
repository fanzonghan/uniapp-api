<template>
	<view>

	</view>
</template>

<script>
	import {
		getIndexData
	} from '@/api/api.js';
	export default {
		components: {

		},
		data() {
			return {
				
			}
		},
		onLoad() {
			getIndexData().then(res=>{
				
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">

</style>