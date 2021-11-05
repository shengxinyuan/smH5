<template>
	<view class="pages">
		<view class="title">
			{{list.content}}
		</view>
		<view class="">
			下单时间：{{list.create_time}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:''
			};
		},
		onLoad(op) {
			console.log(op)
			this.$api.get('message?id='+op.id).then(res=>{
				console.log(res)
				if(res.status == 1){
					this.list = res.data
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
.pages{
	padding: 3%;
}
</style>
