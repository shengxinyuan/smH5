<template>
	<view>
		<button type="default" @click="yes">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			yes(){
				uni.redirectTo({
					url:'./addAddress?id='+1323
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
