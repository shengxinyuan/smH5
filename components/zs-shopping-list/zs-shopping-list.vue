<template>
	<view class="cont">
		<view class="cont_item" v-for="(it,ind) in shop_list" :key="ind" @click="go_shopdetail(it.id)" >
			<image class="imagea" v-if="it.is_recommend == 1" src="../../static/zhek.png" mode="aspectFill"></image> <!-- 爆款推荐 -->
			<image class="images" :src="it.image" mode="aspectFill"></image>
			<view class="it_tit">
				{{it.title}}
			</view>
			<view class="it_selt">
				<view class="it_price">
					￥{{ it.price }}
				</view>
				<!-- <view class="it_selt_l">
					<text>￥{{ it.price_vip }}</text><image src="../../static/pifa.png" mode=""></image>
				</view> -->
				<view class="it_selt_r">
					已售{{ it.sale }}件
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			shop_list:{}
		},
		methods:{
			go_shopdetail(e){
				this.com.navto('../../pages/index/shop_detail?shop_id='+e)
			}
		}
	}
</script>

<style lang="scss" scoped>
.cont{
	width: 100%;padding: 0 2%;
	display: flex;flex-wrap: wrap;
	.cont_item{
		width: 49%;margin-right: 2%;
		border-radius: 16rpx;background-color: white;
		margin-top: 20rpx;overflow: hidden; 
		position: relative;padding-bottom: 10rpx;
		.imagea{
			width: 56rpx;height: 70rpx;
			position: absolute;left: 22rpx;top: 0;
			z-index: 20;
		}
		.images{
			width: 350rpx;
			height: 350rpx;
		}
		.it_tit{
			padding-left: 10rpx;
			font-size: 28rpx;width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 56rpx;
		}
		.it_price{
			color: #ea5b72;
			font-weight: bold;font-size: 30rpx;
		}
		.it_selt{
			padding-left: 10rpx;
			width: 100%;display: flex;justify-content: space-between;
			line-height: 40rpx;
			// .it_selt_l{
			// 	display: flex;
			// 	text{
			// 		color: #ea5b72;font-size: 26rpx;
			// 	}
			// 	image{
			// 		width: 60rpx; height: 24rpx;margin-top: 10rpx;
			// 	}
			// }
			.it_selt_r{
				width: 150rpx;
				color: #998;font-size: 22rpx;text-align: right;margin-right: 20rpx;
				white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
			}
		}
	}
	.cont_item:nth-child(2n+2){
		margin-right: 0;
	}
}
</style>
