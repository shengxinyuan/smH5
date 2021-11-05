<template>
	<view>
		<view class="cont">
			<view class="cont_child" :style="{'background-image':'url('+list.coupon_image+')'}">
				<view class="child_title">
					送您500元现金红包
				</view>
				<view class="child_item" >
					<view class="its" :style="{'background-image':bachild}" v-for="(it,ind) in list.data" :key="ind">
						<view class="its_left">
							<text style="font-size: 26rpx;">￥</text> {{it.price}}
						</view>
						<view class="its_rig">
							<view class="its_rig_top">{{it.title}}</view>
							<view class="its_rig_b">满{{it.face_value}}可用</view>
						</view>
					</view>
				</view>
				<view class="child_button" @click="no_pop">
					<view class="button_top">
						立即收下
					</view>
					<view class="button_but">
						立即使用
					</view>
				</view>
				<image :src="list.coupon_image_two" mode="" class="child_img"></image>
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
				bgimage:'url(../../static/coupon_back.png)',
				bachild:'url(../../static/coups.png)'
			}
		},
		props:{
			// bgimage:{},
			king:{},
			king_nam:{},
			list:{}//数据
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
		width: 100%;height: 630rpx;
		border-radius: 20rpx;overflow: hidden;background-size: 100% 100%;
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
			color: #FCEAB1;font-size: 36rpx;
			position: absolute;top: 26%;left: 20%;
		}
		.child_item{
			
			height: 210rpx;width: 80%;
			position: absolute;left: 10%;bottom: 32%;
			overflow-y: scroll;
			.its{
				width: 100%;height: 170rpx;margin-bottom: 10rpx;
				background-size: 100% 100%;
				display: flex;
				.its_left{
					width: 32%;font-size: 34rpx;color: #F92140;
					line-height: 140rpx;text-align: center;
				}
				.its_rig{
					padding: 20rpx;
					.its_rig_top{
						color: #A9A18D;line-height: 60rpx;
					}
					.its_rig_b{
						color: #999;
					}
				}
			}
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
