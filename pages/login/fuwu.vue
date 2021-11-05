<template>
	<view>
		<view class="text">
			<u-parse :html="content.registration_protocol"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:''
				
			}
		},
		onLoad() {
			this.$api.get('site').then(res=>{
				console.log(res)
				if(res.status == 1){
					this.content = res.message
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
.text{
	padding: 0 3%;
}
</style>
