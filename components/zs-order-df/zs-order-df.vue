<template>
	<view class="">
		<view class="order_time" v-for="(item,index) of list" :key="index">
			<view class="order_box">
				<view class="order_head" @click="order_detail(item.bn)">
					订单编号：<text class="time">{{item.bn,10}}</text> 
					<text class="sure" v-if="item.status == 10">待付款</text>
				</view>
				<view v-if="item.notCustom && item.data[0]">
					<view class="shop_list"  v-for="(its,ind) in item.data[0]">
						<image v-if="its.goods" :src="its.goods.image" mode="aspectFill" @click="order_detail(item.bn,10)"></image>
						<view class="list_right" v-if="its.goods">
							<view @click="order_detail(item.bn,10)">
								<view class="title">{{its.goods.title}}</view>
								<view class="Specifications">金重：{{its.goods.weight}}g<text class="num"> 条码：{{its.goods.bar_code}}</text></view>
								<view class="shop_list_label">
									<!-- <text v-if="its.goods.is_height == 1">
										金价：￥{{((its.gold_price/1)/(its.goods.weight/1)).toFixed(2)}}/g</text>
									<text v-if="its.goods.is_height == 2">金价：￥0.00/g</text>
									<text v-if="its.goods.is_height == 1">工费：￥{{(((its.labor_price/1)+(its.labor_price_add/1))/(its.goods.weight/1)).toFixed(2)}}/g </text>
									<text v-if="its.goods.is_height == 2">工费：￥0.00/g</text> -->
								</view>
								<view class="price">
									<!-- <text>￥{{(its.total/1).toFixed(2)}}</text>
									<text style="color: #999;"> *{{its.count}}</text> -->
								</view>
							</view>
								
						</view>
					</view>
				</view>
				<view v-if="!item.notCustom && item.good">
					<view class="shop_list">
						<image v-if="item.good.image" :src="item.good.image.split(',')[0]" mode="aspectFill" @click="order_detail(item.bn,10)"></image>
						<view class="list_right">
							<view @click="order_detail(item.bn,10)">
								<view class="title">{{item.good.title}}</view>
								<view class="Specifications"></view>
								<view class="shop_list_label">
								</view>
								<view class="price">
									<!-- <text>￥{{(item.price)}}</text>
									<text style="color: #999;"> *{{its.count}}</text> -->
								</view>
							</view>
								
						</view>
					</view>
				</view>
				
				<view class="foot_s">
					<view>
						<view>合计:<text class="money">￥{{item.total}}</text></view>
					</view> <!-- 位置 -->
					<view class="foot_child">
						<view class="go_buy_s" v-if="item.status == 10" @click="no_order(item.id,index)">取消订单</view> <!-- // -->
						<view class="go_buy" v-if="item.status == 10" @click="order_detail(item.bn,10)">去支付
							<!-- <u-count-down :timestamp="item.t_times" :show-hours="false"></u-count-down> -->
						</view> <!-- // -->
						<view class="go_buy_s" v-if="item.status == 20" @click="order_logist(item)">退款</view>  <!-- // -->
						<view class="go_buy_s" v-if="item.status == 20" @click="order_logist_wl(item)">查看物流</view> <!-- // -->
						<view class="go_buy" v-if="item.status == 20" @click="sure_details(item.id)">确认收货</view> <!-- // -->
						<view class="go_buy" v-if="item.status == 30" @click="go_immed(item)">立即评价</view>
						<view class="go_buy_s" v-if="item.status == 40" @click="del_order(item.id,item.status)">删除订单</view> <!-- // -->
						<view class="go_buy" v-if="item.status == 50 && item.return_type == 1" @click="shen_details(item.id)">撤销</view> 
						<view class="go_buy" v-if="item.status == 50 && item.return_type == 2" @click="order_logist(item)">再次申请</view> <!-- // -->
						<view class="go_buy" v-if="item.status == 50 && item.return_type == 3" @click="del_order(item.id,item.status)">删除订单</view> <!-- // -->
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			list:{}
		},
		methods:{
			//取消订单
			no_order(e,i){
				let that = this
				uni.showModal({
					content:'确认取消该订单吗？',
					success(re) {
						if(re.confirm){
							that.$emit('cancel_detail', e, i)
						}
					}
				})
			},
			//订单详情
			order_detail(e,status){
				console.log(e)
				this.$emit('order_detail',e,status)
			},
			//确认收货
			sure_details(e){
				let that = this
				uni.showModal({
					content:'您确定收到货物了吗？',
					success(a) {
						if(a.confirm){
							that.$api.put('orders',{id:e,type:1}).then(res=>{
								console.log(res)
								if(res.status == 1){
									that.com.redto('./order?state='+ 20 +'&index='+ 2)
								}else{
									that.com.msg(res.message)
								}
							})
						}
					}
				})
			},
			shen_details(e){
				this.$api.put('orderreturn',{id:e}).then(res=>{
					console.log(res)
				})
			},
			//删除订单
			del_order(e,ty){
				let that = this
				uni.showModal({
					content:'您确定删除该订单吗？？',
					success(a) {
						if(a.confirm){
							that.$api.put('orders',{id:e}).then(res=>{
								console.log(res)
								if(res.status == 1){
									if(ty == 50){
										that.com.redto('./order?state='+ 50 +'&index='+ 5)
									}else{
										that.com.redto('./order?state='+ 40 +'&index='+ 4)
									}
								}else{
									that.com.msg(res.message)
								}
							})
						}
					}
				})
			},
			//删除
			del_details(e){
				this.$emit('del_details',e)
			},
			// 评论
			go_immed(e){
				this.$emit('go_immed',e)
			},
			//取消
			order_quxiao(e){
				this.$emit('order_quxiao',e)
			},
			//退款
			order_logist(e){
				this.com.navto('./applyRefund?cont='+JSON.stringify(e))
			},
			//物流
			order_logist_wl(e){
				this.com.navto('./logistics?cont='+JSON.stringify(e))
			}
		}
	}
</script>

<style lang="scss" scoped>
.order_time{
	margin-bottom: 20rpx;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	background-color: #fff;
	border-radius: 10rpx;
	.order_box{
		width: 100%;
		padding:0 30rpx;
		display: flex;
		flex-wrap: wrap;
		.order_head{
			width: 100%;
			height: 90rpx;
			line-height: 90rpx;
			border-bottom: 1rpx solid #eee;
			font-size: 28rpx;
			color: #333333;
			display: flex;
			.time{
				font-size: 26rpx;
				color: #777777;
			}
			.sure{
				color: #ce4718;
				margin-left: auto;
			}
		}
		.shop_list{
			width: 100%;
			height: 250rpx;
			display: flex;
			align-items: center;
			image{
				width: 200rpx;
				height: 200rpx;
			}
			.list_right{
				width: 430rpx;
				height: 200rpx;
				margin-left: 20rpx;
				position: relative;
				.go_buy_abs{
					position: absolute;
					right: 10rpx;bottom: 6rpx;
					// background-image: url('/static/course/add_03.png') ;
					background-repeat: no-repeat;
					background-size: cover;
					width: 146rpx;
					height: 53rpx;margin-left: 25rpx;
					color: #fff;
					text-align: center;
					line-height: 53rpx;z-index: 20;
				}
				.title{
					line-height: 60rpx;font-weight: bold;
					width: 100%;
					
				}
				.price{
					width: 100%;line-height: 70rpx;
					color: #ba1a30;display: flex;justify-content: space-between;
				}
				.Specifications{
					width: 100%;color: #999;font-size: 26rpx;
					display: flex;
					.num{
						color: #999;margin-left: 20rpx;
					}
				}
				.shop_list_label{
					
					text{
						display: inline-block;background-color: #eee;font-size: 24rpx;margin: 5rpx 10rpx 5rpx 0;
						padding: 0 4rpx;border-radius: 5rpx;
						color: #999;
					}
				}
			}
		}
		.around{
			width: 100%;
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1rpx solid #eee;
			.money{
				color: #ba1a30;
			}
			.time{
				font-size: 26rpx;
				color: #999;
			}
		}
		.foot{
			width: 100%;
			height: 100rpx;
			margin-top: 35rpx;
			.foot_child{
				width: 100%;
				display: flex;
				justify-content: space-around;
				
			}
			.go_buy{
				width: 88%;line-height: 80rpx;height: 80rpx;
				background:  linear-gradient(#f82222,#b51616);
				border-radius: 50rpx;
				background-repeat: no-repeat;
				background-size: cover;
				color: #fff;
				text-align: center;
			}
			
			.go_buy_s{
				width: 48%;line-height: 80rpx;height: 80rpx;
				color: #f82222;
				border-radius: 80rpx;
				background-size: cover;
				text-align: center;border: 1rpx solid #f82222;
			}
			
		}
		//订单
		.foot_s{
			width: 100%;
			padding: 2% 0;
			display: flex;
			justify-content: space-between;
			.money{
				color: #ba1a30;
			}
			.foot_child{
				display: flex;
			}
			.go_buy{
				background:  linear-gradient(#f82222,#b51616);
				border-radius: 50rpx;
				background-repeat: no-repeat;
				background-size: cover;
				width: 146rpx;
				height: 60rpx;margin-left: 25rpx;
				color: #fff;
				text-align: center;
				line-height: 60rpx;
			}
			.go_buy_s{
				border: 1rpx solid #999;
				border-radius: 50rpx;
				background-repeat: no-repeat;
				background-size: cover;
				width: 146rpx;
				height: 60rpx;margin-left: 25rpx;
				color: #999;
				text-align: center;
				line-height: 60rpx;
			}
		}
	}
	
}
</style>
