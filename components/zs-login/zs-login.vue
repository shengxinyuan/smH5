<template>
	<view class="page">
		<view class="page_it">
			<u-loading mode="circle" size="60" color="red"></u-loading>
			<view class="">
				正在加载中....
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style lang="scss" scoped>
	.page{
		width: 100%;
		.page_it{
			width: 30%;
			text-align: center;
			margin: 30% 35%;
			view{
				line-height: 80rpx;
			}
		}
	}

</style>
