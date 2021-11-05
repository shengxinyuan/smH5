<template>
	<view>
		<view class="con">
			<view class="jint" v-show="page_show">
				
			</view>
			<view class="title">
				<view class="title_red">
					{{titleRed}}
				</view>
				<view class="title_bla">
					{{title}}
				</view>
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
		props:{
			titleRed:{},
			title:{},
			page_show:{
				default:false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.con{
	display: flex;
	.jint{
		margin-top: 10rpx;
		width: 10rpx;height: 40rpx;
		background-image: linear-gradient(#d5b260,#fff2ce,#d5b260);
	}
	.title{
		font-size: 30rpx;line-height: 60rpx;padding-left: 20rpx;
		font-weight: bold;display: flex;
		.title_red{
			color: red;
		}
	}
}
</style>
