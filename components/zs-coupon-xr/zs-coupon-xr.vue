<template>
	<view>
		<view class="cont">
			<view class="cont_child" :style="{'background-image':bgimage}">
				<view class="child_title">
					88元大礼包
				</view>
				<view class="child_item">
					<view class="item_i" v-for="it in 6">
						<view class="it_top">
							<text style="font-size: 24rpx;">￥</text> 500
						</view>
						<view class="it_but">
							满300减25
						</view>
					</view>
				</view>
				<view class="but_tit" @click="no_pop">立即收下</view>
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
				bgimage:'url(../../static/coupon.png)',
				bachild:'url(../../static/coups.png)'
			}
		},
		props:{
			// bgimage:{},
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
	width: 100%;height: 100vh;background-color: rgba(0,0,0,0.6);padding: 60% 16%;
	position: fixed;left: 0; top: 0;z-index: 20;
	.cont_child{
		width: 100%;height: 640rpx;
		border-radius: 10rpx;overflow: hidden;background-size: 100% 100%;
		position: relative;
		//按钮
		.child_button{
			width: 70%;z-index: 22;
			position: absolute;left: 15%;bottom: 6%; 
			.button_top{
				line-height: 72rpx;text-align: center;color: #B47837;border-radius: 40rpx;
				background-color: #fceab1;
			}
			.button_but{
				line-height: 70rpx;text-align: center;color: #fceab1;border-radius: 40rpx;
				background-color: #F92140;margin-top: 20rpx;box-sizing: border-box;border: 1rpx solid #fceab1;
			}
		}
		.child_title{
			color: #f92140;font-size: 40rpx;font-weight: bold;
			position: absolute;top: 20%;left: 30%;
		}
		.child_item{
			height: 220rpx;width: 80%;
			position: absolute;left: 10%;bottom: 30%;
			overflow-y: scroll;
			display: flex;flex-wrap: wrap;
			.item_i{
				width: 48%;height: 120rpx; background-image: url(../../static/coupom_item.png);background-size: 100% 100%;
				margin: 1% 1%;
				color: #fff;padding-left: 15%;
				.it_top{
					font-size: 36rpx;line-height: 60rpx;
				}
				.it_but{
					font-size: 26rpx;
				}
			} 
		}
		.but_tit{
			color: #fff;text-align: center;position: absolute;bottom: 11%;left: 38%;font-size: 32rpx;
		}
		.child_img{
			width: 100%;height: 140px; 
			position: absolute;left: 0;bottom: 0;
		}
	}
	.no_but{
		width: 60rpx;height: 60rpx;
		margin: 40rpx 220rpx; 
		image{
			width: 60rpx;height: 60rpx;
		}
	}
}

</style>
