<template>
	<view class="">
		<view class="order_time" v-for="(item,index) of list" :key="index" v-if="item.status !=10">
			<view class="order_box">
				<view class="order_head" @click="order_detail(item.id)">
					订单编号：<text class="time">{{item.bn_id}}</text> 
					
					<text class="sure" v-if="item.status == 10">待付款</text>
					<text class="sure" v-if="item.status == 20">待发货</text>
					<text class="sure" v-if="item.status == 30">待收货</text>
					<text class="sure" v-if="item.status == 40">待评价</text>
					<text class="sure" v-if="item.status == 50">已完成</text>
					<!-- <text class="sure" v-if="item.status == 60 && item.return_type == 1">审核中</text>
					<text class="sure" v-if="item.status == 60 && item.return_type == 2">已拒绝</text>
					<text class="sure" v-if="item.status == 60 && item.return_type == 3">售后成功</text> -->
					<text class="sure" v-if="item.status ==70">已取消</text>
				</view>
				<view class="shop_list" v-if="item.goods">
					<image :src="item.goods.image" mode="aspectFill" @click="order_detail(item.id)"></image>
					<view class="list_right">
						<view @click="order_detail(item.id)">
							<view class="title">{{item.goods.title}}</view>
							<view class="Specifications">金重：{{item.goods.weight}}g<text class="num"> 条码：{{item.goods.bar_code}}</text></view>
							<view class="shop_list_label">
								<text v-if="item.goods.is_height == 1">
									金价：￥{{((item.gold_price/1)/(item.goods.weight/1)).toFixed(2)}}/g</text>
								<text v-if="item.goods.is_height == 2">金价：￥0.00/g</text>
								<text v-if="item.goods.is_height == 1">工费：￥{{(((item.labor_price/1)+(item.labor_price_add/1))/(item.goods.weight/1)).toFixed(2)}}/g </text>
								<text v-if="item.goods.is_height == 2">工费：￥0.00/g</text>
							</view>
							<view class="price"><text>￥{{(item.total/1).toFixed(2)}}</text>
							 <text style="color: #999;"> *{{item.count}}</text></view>
						</view>
					</view>
				</view>
				
				<view class="foot_s">
					<view class="around">
						<view>合计:<text class="money">￥{{item.total}}</text></view>
					</view>
					<view class="foot_child">
						<view class="go_buy_s" v-if="item.status == 10" @click="no_order(item.id,index)">取消订单</view> <!-- // -->
						<view class="go_buy" v-if="item.status == 10" @click="order_detail(item.id)">去支付</view> <!-- // -->
						<!-- <view class="go_buy_s" v-if="item.status == 30" @click="order_logist(item)">退款</view>  -->
						<view class="go_buy_s" v-if="item.status == 30" @click="order_logist_wl(item.bn_id)">查看物流</view>
						<view class="go_buy" v-if="item.status == 30" @click="sure_details(item.id)">确认收货</view> <!-- // -->
						<view class="go_buy" v-if="item.status == 40" @click="go_immed(item)">立即评价</view>
						<view class="go_buy_s" v-if="item.status == 50" @click="del_order(item.id,item.status)">删除订单</view> <!-- // -->
						<!-- <view class="go_buy" v-if="item.status == 50" @click="shouh">售后服务</view> -->
						<view class="go_buy" v-if="item.status == 60 && item.return_type == 2" @click="shouh">再次申请</view> <!-- // -->
						<view class="go_buy" v-if="item.status == 60 && item.return_type == 3" @click="del_order(item.id,item.status)">删除订单</view> <!-- // -->
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
			list:{
				type:Array
			}
		},
		methods:{
			//取消订单
			no_order(e,i){
				this.$api.put('orders',{id:e,is_h5:1}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.com.msg(res.message)
						this.com.redto('./order?state='+ 10 +'&index='+ 1)
						// this.$forceUpdate()
					}else{
						this.com.msg(res.message)
					}
				})
			},
			//订单详情
			order_detail(e){
				console.log(e)
				this.$emit('order_detail',e)
			},
			//售后
			shouh(){
				this.com.navto('../service/service')
			},
			//确认收货
			sure_details(e){
				let that = this
				uni.showModal({
					content:'您确定收到货物了吗？',
					success(a) {
						if(a.confirm){
							that.$api.put('orders',{id:e,type:1,is_h5:1}).then(res=>{
								console.log(res)
								if(res.status == 1){
									uni.switchTab({
										url:'../../pages/my/order?state='+ 30
									})
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
					if(res.status == 1){
						this.com.tab('./order?state='+ 50 +'&index='+ 5)
					}else{
						this.com.msg(res.message)
					}
				})
			},
			//删除订单
			del_order(e,ty){
				this.$emit('del_order',e)
			},
			//删除
			del_details(e){
				this.$emit('del_details',e)
			},
			// 评论
			go_immed(e){
				// this.com.navto('../my/evaluate?list='+JSON.stringify(e))
				uni.navigateTo({
					url:'../my/evaluate?list='+JSON.stringify(e)
				})
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
				this.com.navto('./logistr?cont='+e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	//订单页样式
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
				// border-bottom: 1rpx solid #f6f6f6;
				
				image{
					width: 200rpx;
					height: 200rpx;
					border-radius: 14rpx;
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
				display: flex;
				justify-content: space-between;
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
