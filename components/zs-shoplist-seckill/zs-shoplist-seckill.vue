<template>
	<view class="cont">
		<view class="cont_list_two" >
			<view class="cont_item" v-for="(it,ind) in lists" :key="ind" @click="go_shopdetail(it.id)" >
				<view class="item_img">
					<!-- <image class="imagea" src="../../static/zhek.png" mode="aspectFill"></image> -->
					<image class="images" :src="it.image" mode="aspectFill"></image>
				</view>
				<view class="it_text">
					<view class="it_tit">
						{{it.title}}
					</view>
					<view class="seckill_pic">
						秒杀价
					</view>
					<view class="it_selt_r">
						剩余{{it.stock}}件
					</view>
					<view class="it_text_cen">
						<view style="display: flex;padding-top: 6rpx;">
							<view class="it_price">
								￥{{it.price}}
							</view>
							<view class="it_selt_l">
								<text>￥{{it.price_make}}</text>
							</view>
						</view>
						<view class="go_seck">
							去抢购
						</view>
					</view>
					<!-- <view class="it_label">
						<view>精品</view>
					</view> -->
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{name:'新品'},
					{name:'热销'},
				],
				type:0,//商品列表
				heat_ind: -1,// 导航
				price_type:2
			};
		},
		props:{
			lists:{},
			types:{},
			titles:{},//状态
			second:{} //秒数
		},
		methods:{
			go_shopdetail(e){
				if(this.titles){
					if(this.titles == '抢购中' ){
						this.com.navto('../../pages/index/Activityshop_detail?shop_id='+e+'&type='+this.types+'&second='+this.second)
					}else{
						this.com.msg('本轮秒杀已经结束，请期待下一期')
					}
				}else{
					this.com.navto('../../pages/index/Activityshop_detail?shop_id='+e+'&type='+this.types)
				}
				
				
			},
			cli_type(e){
				console.log(e)
				if(this.type == 1){
					this.type = 2
				}else{
					this.type = 1
				}
			},
			//筛选点击
			shai_cli(e,type){
				console.log(type)
				this.heat_ind = e
				if(type == 2){
					this.price_type = 1
				}else{
					this.price_type = 2
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.cont_list_two{
	width: 100%;padding-bottom: 60rpx;
	.cont_item{
		width: 100%;margin-right: 2%;
		border-radius: 16rpx;background-color: white;
		margin-top: 20rpx;overflow: hidden; padding: 20rpx 20rpx 10rpx 10rpx;
		display: flex;
		
		.item_img{
			// position: relative;
			// .imagea{
			// 	width: 70rpx;height: 84rpx;
			// 	position: absolute;left: 22rpx;top: 0;
			// 	z-index: 20;
			// }
			.images{
				width: 240rpx;
				height:240rpx;
			}
		}
		.it_text{
			width: 100%;
			.it_tit{
				font-size: 30rpx;width: 96%;height: 80rpx;overflow: hidden;
			}
			.seckill_pic{
				display: inline-block;font-size: 26rpx;color: white;margin-top: 15rpx;
				padding: 0 16rpx;background-color: #e8372f;
			}
			.it_text_cen{
				width: 100%;
				display: flex;white-space: nowrap;justify-content: space-between;
				margin: 8rpx 0;
				.it_price{
					font-weight: bold;font-size: 30rpx;
					width: 150rpx;color: #e8372f;
				}
				.it_selt_l{
					padding-top: 4rpx;display: flex;
					text{
						font-size: 26rpx;color: #999;text-decoration: line-through;
					}
					
				}
				.go_seck{
					display: inline-block;padding: 6rpx 20rpx 8rpx 20rpx;border-radius: 50rpx;background-color: #e8372f;color: white;
				}
			}
			.it_label{
				width: 100%;display: flex;
				view{
					font-size: 22rpx;
					padding: 0 8rpx;border: 2rpx solid #DD524D;color: #DD524D;
					border-radius: 6rpx;
				}
			}
			.it_selt_r{
				color: #998;font-size: 26rpx;margin-top: 14rpx;
				
			}
		}
		
	}
}

</style>
