<template>
	<view>
		<view class="cont">
			<view class="cont_child" :style="{'background-image':bgimage}">
				<view class="cont_text">
					<text class="text_a"> {{king}} </text> <text class="text_b">{{king_nam}} </text>
				</view>
			</view>
			<view class="no_but" @click="no_pop">
				<image src="../../static/my/no_but.png" mode=""></image>
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
			bgimage:{},
			king:{},
			king_nam:{}
		},
		methods: {
			no_pop(){
				this.$emit('nopop')
			}
		}
	}
</script>

<style scoped lang="scss">
.cont{
	width: 100%;height: 100vh;background-color: rgba(0,0,0,0.6);padding: 60% 20%;
	position: fixed;left: 0; top: 0;
	.cont_child{
		width: 440rpx;height: 440rpx;background-color: #fff;
		border-radius: 20rpx;overflow: hidden;background-size: 100% 100%;
		position: relative;
		.cont_text{
			position: absolute;left: 170rpx;bottom: 40rpx;
			
			.text_a{
				color: #af8a59;margin-right: 20rpx;
			}
			.text_b{
				font-size: 34rpx;
			}
		}
	}
	.no_but{
		width: 60rpx;height: 60rpx;
		margin: 40rpx 180rpx;
		image{
			width: 60rpx;height: 60rpx;
		}
	}
}

</style>
