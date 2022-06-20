<template>
	<view>
		<view class="sure" v-if="shop_det.status == 10">待支付</view>
		<view class="sure" v-if="shop_det.status == 20">待发货</view>
		<view class="sure" v-if="shop_det.status == 25">商家已确认收款，待发货</view>
		<view class="sure" v-if="shop_det.status == 30">待收货</view>
		<view class="sure" v-if="shop_det.status == 40">待评价</view>
		<view class="sure" v-if="shop_det.status == 50">已完成</view>
		<view class="sure" v-if="shop_det.status == 60 && shop_det.return_type == 1">审核中</view>
		<view class="sure" v-if="shop_det.status == 60 && shop_det.return_type == 2">已拒绝</view>
		<view class="sure" v-if="shop_det.status == 60 && shop_det.return_type == 3">售后成功</view>
		<view class="toast_order" v-if="shop_det.status != 20">
			<view class="toast_but">
				<view></view>
				<view class="toast_but_r"  v-if="shop_det.status == 10">
					<view class="toast_but_no" v-if="!isCustom" @click="no_order(shop_det.id)">
						取消订单
					</view>
					<view class="toast_but_pay" v-if="isCustom" @click="confirmPay">
						确认支付
					</view>
					<view class="toast_but_pay" @click="goto_pages">
						去支付
					</view>
				</view>
				<view  class="toast_but_r"  v-if="shop_det.status == 30 && !isCustom">
					<view class="toast_but_no" @click="order_logist_wl(shop_det.bn)">查看物流</view> <!-- // -->
					<view class="toast_but_pay" @click="sure_details(shop_det.id)">确认收货</view> <!-- // -->
				</view>
				<view  class="toast_but_r"  v-if="shop_det.status == 30 && isCustom">
					<view class="toast_but_no" @click="order_logist_wl(shop_det.bn)">查看物流</view> <!-- // -->
					<view class="toast_but_pay" @click="custom_sure_details(shop_det.id)">确认收货</view> <!-- // -->
				</view>
				<view class="toast_but_r"  v-if="shop_det.status == 50 && !isCustom">
					<view class="toast_but_no" @click="shouh">售后服务</view> <!-- // -->
					<view class="toast_but_pay" @click="del_order(shop_det.id,shop_det.status)">删除订单</view> <!-- // -->
				</view>

			</view>
		</view>
		
		<!-- 地址 -->
		<view class="address">
			<view class="address_l">
				收货地址 <text>{{shop_det.sf_change == 0 ? '到付' : '邮寄'}}</text>
			</view>
			<view class="address_r">
				<view class="address_r_l" v-if="shop_det.address_id">
					{{shop_det.address_id.province + shop_det.address_id.city + shop_det.address_id.area +shop_det.address_id.address}} 
					<view>
						{{shop_det.address_id.contact}} {{shop_det.address_id.mobile}}
					</view>
				</view>
			</view>
		</view>
		
		<!-- 商品汇总 -->
		<view class="st_data">
			<view class="statis">
				<view class="statis_l">
					合计
				</view>
				<view class="statis_r" style="color: #ee453f;">
					￥{{shop_det.total}}
				</view>
			</view>
		</view>
		
		<!-- 商品 -->
		<view class="shop">
			<view class="shop_title">
				<view class="title_l">
					订单编号：{{shop_det.bn}}
				</view>
			</view>
			<view class="shop_list"  v-for="(its,ind) in shop_det.order_goods" v-if="!isCustom && shop_det.order_goods">
				<image :src="its.image" mode="aspectFill"></image>
				<view class="list_right">
					<view>
						<view class="title">{{its.title}}</view>
						<view class="Specifications">金重：{{its.sku.weight}}g<text class="num"> 条码：{{its.sku.bar_code}}</text></view>
						<view class="list_right_its">
						</view>
					</view>
				</view>
			</view>
			<view v-if="isCustom && shop_det.order_goods" class="shop_list">
				<image v-if="shop_det.order_goods.image" :src="shop_det.order_goods.image.split(',')[0]" mode="aspectFill"></image>
				<view class="list_right">
					<view>
						<view class="title">{{shop_det.order_goods.title}}</view>
						<view class="Specifications"></view>
						<view class="list_right_its">
						</view>
						
					</view>
						
				</view>
			</view>
			
		</view>
		
		<view class="st_data" style="margin-bottom: 60rpx;">
			<view class="statis" v-if="shop_det.message">
				<view class="" style="flex-shrink: 0;">备注：</view>
				<textarea style="background-color: #EEEEEE;padding: 20rpx;border-radius: 10rpx;height: 100rpx;color: #999;" v-model="shop_det.message || '无'"
				placeholder="备注" :disabled="true" />
			</view>
			<!-- 工费 -->
			<view class="statis">
				<view class="statis_l">
					订单编号
				</view>
				<view class="statis_r">
					<text @click="make(shop_det.bn)">复制</text>{{shop_det.bn}}
				</view>
			</view>
			<view class="statis">
				<view class="statis_l">
					创建时间
				</view>
				<view class="statis_r"  >
					{{shop_det.create_time}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				timestamp: 0,
				order_id: 0,
				order_type: '0',
				shop_det: '',
				status: '',
				all_goods_price: 0,
				all_labor_price: 0,
				all_total: 0,
			}
		},
		onLoad(params) {
			this.order_id = params.order_id;
			this.order_type = params.order_type;
			this.queryOrderInfo()
		},
		computed: {
			isCustom() {
				return this.order_type == 1;
			}
		},
		methods:{
			queryOrderInfo(){
				if (this.isCustom) {
					this.$api.get('shop/order/getOrderDetail',{ bn: this.order_id, type: 1 }).then(res => {
						if(res.status == 1 && res.data[0]){
							const data = res.data[0];
							this.shop_det = data;
							this.shop_det.address_id = this.shop_det.address;
							this.shop_det.bn = this.order_id;
							for (let i in data.order_goods) {
								this.all_goods_price += (((data.order_goods[i].total/1)-(data.order_goods[i].labor_price/1))/1)
								this.all_labor_price += (data.order_goods[i].labor_price/1)
								this.all_total += (data.order_goods[i].total/1)
							}
						}
					})
				} else {
					this.$api.get('order_goods',{ id: this.order_id, is_h5: 1 }).then(res => {
						if(res.status == 1){
							this.shop_det = res.data
							let data = new Date()
							let state = data.getTime()
							let end_time = res.data.cancel_time * 1000
							let reslut = end_time - state
							this.timestamp = Math.floor(reslut / 1000)
							for (let i in res.data.order_goods) {
								this.all_goods_price += (((res.data.order_goods[i].total/1)-(res.data.order_goods[i].labor_price/1))/1)
								this.all_labor_price += (res.data.order_goods[i].labor_price/1)
								this.all_total += (res.data.order_goods[i].total/1)
							}
						}
					})
				}
			},
			confirmPay() {
				uni.showModal({
					content:'请您确定金额已经支付到对方账户',
					success: (status) => {
						if(status.confirm){
							this.$api.post('shop/order/payeeConfirm', {bn: this.shop_det.bn}).then(res=>{
								if (res.status == 1){
									this.queryOrderInfo()
								}
							})
						}
					}
				})
			},
			//物流
			order_logist_wl(e){
				uni.navigateTo({ url: '../my/logistr?cont='+e })
			},
			shouh(){
				uni.navigateTo({ url: '../service/service' })
			},
			// 自定义商品确认收货
			custom_sure_details(){
				uni.showModal({
					content:'您确定收到货物了吗？',
					success: (a) => {
						if(a.confirm){
							this.$api.post('shop/order/receiveConfirm', {bn: this.shop_det.bn}).then(res=>{
								if(res.status == 1){
									this.queryOrderInfo()
								}
							})
						}
					}
				})
			},
			//确认收货
			sure_details(e){
				let that = this
				uni.showModal({
					content:'您确定收到货物了吗？',
					success(a) {
						if(a.confirm){
							that.$api.put('orders',{id:e,type:1}).then(res=>{
								if(res.status == 1){
									that.com.redto('./order?state='+ 30 +'&index='+ 3)
								}else{
									that.com.msg(res.message)
								}
							})
						}
					}
				})
			},
			//删除订单
			del_order(e,ty){
				let that = this
				uni.showModal({
					content:'您确定删除该订单吗？？',
					success(a) {
						if(a.confirm){
							that.$api.del('orders',{id:e}).then(res=>{
								console.log(res)
								if(res.status == 1){
									that.com.redto('../my/order?state='+ 50 +'&index='+ 5)
								}else{
									that.com.msg(res.message)
								}
							})
						}
					}
				})
			},
			//复制订单号
			make(e){
				uni.setClipboardData({
					data: e,
					success: function () {
						console.log('success');
					}
				})
			},
			//取消订单
			no_order(e){
				let that = this
				uni.showModal({
					content:'确认取消该订单吗？',
					success(re) {
						if(re.confirm){
							that.$api.put('orders',{id:e,type:2}).then(res=>{
								if(res.status == 1){
									that.com.redto('./order?state='+ 10 +'&index='+ 1)
								}else{
									that.com.msg(res.message)
								}
							})
						}
					}
				})
			},
			goto_pages(){
				let payment_data={
					vip:this.shop_det.vip,
					menber_price:this.shop_det.member_money,
					shop_price:JSON.parse(this.shop_det.total)
				}
				// uni.navigateTo({
				// 	url:'../my/payments?data='+this.shop_det.bn+'&shop='+JSON.stringify(payment_data)
				// })
				uni.redirectTo({
					url:'../index/payment_order?data='+this.shop_det.bn+'&shop='+JSON.stringify(payment_data)
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6;
	}
</style>
<style scoped lang="scss">
	.sure{
		padding: 3%;font-size: 38rpx;font-weight: bold;
	}
	.toast_order{
		width: 100%;background-color: #fff;padding: 3%;
		.toast_title{
			font-size: 30rpx;font-weight: bold;margin-bottom: 30rpx;
		}
		.toast_but{
			display: flex;justify-content: space-between;
			.toast_but_r{
				
				width: 60%;
				display: flex;justify-content: space-around;
				.toast_but_no{
					height: 60rpx;line-height: 56rpx;
					font-size: 28rpx;color: #999;border: 2rpx solid #999;border-radius: 50rpx;padding: 0 20rpx;
				}
				.toast_but_pay{
					height: 60rpx;line-height: 56rpx;
					font-size: 28rpx;color: #fff;background-color: #ee453f; border-radius: 50rpx;padding: 0 20rpx;
				}
			}
		}
	}
	.address{
		display: flex;justify-content: space-between;padding: 20rpx 3%;background-color: white;margin-top: 20rpx;
		.address_l{
			width: 32%;white-space: nowrap;
			color: #999;
			text{
				display: inline-block;color: white;background-color: #2b3f7d;padding: 0 16rpx;margin-left: 14rpx;border-radius: 50rpx;
			}
		}
		.address_r{
			display: flex;
			color: #333;
			.address_r_l{
				text-align: right;line-height: 40rpx;
			}
			.address_r_r{
				line-height: 80rpx;margin-left: 28rpx;color: #999;
			}
		}
	}
	.st_data{
		margin: 20rpx 0;
		.statis{
			width: 100%;background-color: white;display: flex;justify-content: space-between;align-items: center;
			padding: 20rpx 3%;font-size: 30rpx;
			textarea{
				width: 100%;font-size: 28rpx;
			}
			.statis_r{
				text{
					color: #293c79;margin-right: 28rpx;
				}
			}
		}
	}
	.shop{
		width: 100%;padding: 20rpx 3% 0 3%;background-color: white;
		.shop_title{
			width: 100%;display: flex;justify-content: space-between;padding-bottom: 20rpx;border-bottom: 1rpx solid #eee;
			line-height: 50rpx  ;
			.title_l{
				color: #999;font-size: 30rpx;
			}
			.title_r{
				color: #273b76;font-size: 32rpx;
			}
		}
		.shop_list{
			width: 100%;
			display: flex;
			// align-items: center;
			border-bottom: 1rpx solid #f6f6f6;
			padding: 20rpx 0;
			image{
				width: 200rpx;
				height: 200rpx;
			}
			.list_right{
				width: 430rpx;
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
				.list_right_its{
					display: flex;flex-wrap: wrap;
					text{
						display: inline-block;padding: 2rpx 10rpx;background-color: #eee;font-size: 24rpx;margin: 4rpx 10rpx 4rpx 0;white-space: nowrap;
						border-radius: 6rpx;color: #999;
					}
				}
				.title{
					font-weight: bold;font-size: 32rpx;
					width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
					
				}
				.price{
					width: 100%;line-height: 70rpx;
					color: #ba1a30;display: flex;justify-content: space-between;
					text{
						color: #999999;
						// text-decoration: line-through;
					}
				}
				.Specifications{
					width: 100%;color: #999;line-height: 60rpx;
					display: flex;
					justify-content: space-between;
					.num{
						color: #999;
					}
				}
			}
		}
		.heji{
			line-height: 80rpx;border-top: 2rpx solid #eee;
			.heji_l{
				font-size: 26rpx;color: #999;margin-right: 26rpx;
			}
			.heji_r{
				font-size: 28rpx;
				text{
					color: #ba1a30;font-size: 34rpx;
				}
			}
		}
	}
	
</style>
