<template>
	<view>
		<view class="header" style=" background-color: white;">
			
			<view class="input-view" >
				
				<input confirm-type="search" class="nav-bar-input" type="text" :disabled="true" placeholder="输入搜索关键词" @click="search">
				<view style="margin-top: 10rpx;" @click="camear">
					<u-icon name="camera" size="44" color="#666666"></u-icon>
				</view>
			</view>
			<view class="rig" style="color: white;">
				 
			</view>
		</view>
		<!-- tabbar -->
		<zs-tabbar :tab_ind="3"></zs-tabbar>
		<!-- tabbar -->
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

<style lang="scss" scoped>
.header{
	position: fixed;left: 0;top: 0;
	height: 145rpx;width: 100%;
	padding-top: 55rpx;padding-left: 30rpx;
	display: flex;
	z-index: 999;background-color: white;
	.input-view {
		display: flex;
		flex-direction: row;justify-content: space-between;
		width: 68%;
		flex: 1;
		height: 60rpx;
		border-radius: 15px;
		padding: 0 15px;
		margin: 7px 0;
		line-height: 60rpx;
		background-color: #eee;
		
		input{
			width: 86%;
			margin-top: 10rpx;
			font-size: 30rpx;
			
		}
	}
	.rig{
		width: 20%;
		line-height: 100rpx;text-align: center;
		font-size: 30rpx;
	}
}

</style>
