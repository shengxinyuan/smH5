<template>
	<view>
		<view>
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="changeTabs" :height="height" :font-size="30"
			 :bar-width="50" :bar-height="6" :active-color="activeColor"></u-tabs>
		</view>

		<!-- 全部订单 -->
		<view class="zl-page">
			<block v-for="(firstItem,firstIndex) in goodsList" :key="firstIndex" :id="id">
				<view class="tabs-first">
					<view class="tabs-first-title">
						<view class="orders-number">订单编号：{{firstItem.ordersNumber}}</view>
						<view class="orders">{{firstItem.orders}}</view>
					</view>
					<view class="goods-box">
						<view class="good-photo">
							<image :src="firstItem.goodsPhoto" mode="widthFix"></image>
						</view>
						<view class="goods-details">
							<view class="goods-title">{{firstItem.title}}</view>
							<view class="goods-text-one">
								<text>金重：{{firstItem.weight}}g</text>
								<text>条码：{{firstItem.bar_code}}</text>
							</view>
							<view class="goods-text-two">
								<view class="goods-text-two-min-box">
									<text>金料：￥{{firstItem.money01}}</text>
								</view>
								<view class="goods-text-two-min-box">
									<text>工费：￥{{firstItem.money02}}</text>
								</view>
								<view class="goods-text-two-min-box">
									<text>商城售价：￥{{firstItem.money03}}</text>
								</view>
							</view>
							<view class="money-box">
								<text class="rmb">￥</text>
								<text class="integer">{{firstItem.integer}}</text>
								<text class="fractional-part">{{firstItem.fractionalPart}}</text>
							</view>
						</view>
					</view>
					<view class="goods-down-box">
						<view class="left">
							<text class="sum">共1件</text>
							<text class="profit">利润：</text>
							<text class="price">￥754.1</text>
						</view>
						<view class="right" v-if="firstItem.id == 1">
							<view class="btn-one">取消订单</view>
							<view class="btn-two" @click="openPopup">平台下单</view>
						</view>
						<view class="right" v-if="firstItem.id == 2">
							<view class="btn-one">取消订单</view>
							<view class="btn-there">查看物流</view>
						</view>
						<view class="right" v-if="firstItem.id == 3">
							<view class="one">删除订单</view>
							<view class="two">售后</view>
							<view class="there">评价</view>
						</view>
					</view>
				</view>
			</block>
			
			<!-- 平台下单 弹出层 -->
			<u-popup v-model="popupShow" mode="center" border-radius="10" :closeable="false" width="560">
				<view class="popup-box">
					<view class="popup-up">
						<view class="notice">请注意！</view>
						<view class="text">该订单买家是否通过</view>
						<view class="text">微信、支付宝或其他线下支付方式</view>
						<view class="text">给您付款之后再回流订单至奢美</view>
						<view class="text">奢美不会接触您的客户</view>
					</view>
					<view class="popup-btn">
						<button class="btn-one">卖家已付款，回流订单至奢美</button>
						<button class="btn-two" @click="closePopup">买家未付款，暂不回流</button>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '全部订单'
					}, {
						name: '待确认'
					}, {
						name: '待收货'
					},
					{
						name: '已完成'
					}
				],
				current: 0,
				height: '78',
				activeColor: '#2d407a',
				goodsList: [{
						id: '1',
						ordersNumber: '12345678910',
						orders: '待确认',
						goodsPhoto: '../../static/vip-order/img_01.png',
						title: '足金项链环环相扣',
						weight: '4.7g',
						styleNumber: 'ZJJZ00271',
						money01: '1872.00',
						money02: '15.03',
						money03: '2399',
						integer: '1887',
						fractionalPart: '.05'
					},
					{
						id: '2',
						ordersNumber: '12345678910',
						orders: '待收货',
						goodsPhoto: '../../static/vip-order/img_01.png',
						title: '足金项链环环相扣',
						weight: '4.7g',
						styleNumber: 'ZJJZ00271',
						money01: '1872.00',
						money02: '15.03',
						money03: '2399',
						integer: '1887',
						fractionalPart: '.05'
					},
					{
						id: '3',
						ordersNumber: '12345678910',
						orders: '已完成',
						goodsPhoto: '../../static/vip-order/img_01.png',
						title: '足金项链环环相扣',
						weight: '4.7g',
						styleNumber: 'ZJJZ00271',
						money01: '1872.00',
						money02: '15.03',
						money03: '2399',
						integer: '1887',
						fractionalPart: '.05'
					}
				],
				popupShow: false
			}
		},
		methods: {
			changeTabs(index) {
				this.current = index
				if (index !== 0) {
					this.isShow01 = false
				} else {
					this.isShow01 = true
				};
				if (index !== 1) {
					this.isShow02 = false
				} else {
					this.isShow02 = true
				};
				if (index !== 2) {
					this.isShow03 = false
				} else {
					this.isShow03 = true
				}
			},
			openPopup(){
				this.popupShow = true
			},
			closePopup(){
				this.popupShow = false
			}
		}
	}
</script>

<style lang="scss">
	.tabs-first {
		border-top: solid 10upx #f6f6f6;
		background-color: #FFFFFF;
		padding: 20upx 30upx;

		.tabs-first-title {
			padding: 20upx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 26upx;

			.orders-number {
				color: #999999;
			}

			.orders {
				color: #2d407a;
			}
		}
	}

	.goods-box {
		display: flex;
		padding: 30upx 0;
		border-top: solid 2upx #eeeeee;
		border-bottom: solid 2upx #eeeeee;

		.good-photo {
			width: 23%;
			display: flex;

			image {
				width: 100%;
				border-radius: 10upx;
			}
		}

		.goods-details {
			margin-left: 20upx;

			.goods-title {
				font-size: 28upx;
			}

			.goods-text-one {
				margin-top: 20upx;
				margin-bottom: 10upx;
				font-size: 22upx;
				color: #666666;

				text {
					margin-right: 30upx;
				}
			}

			.goods-text-two {
				display: flex;
				flex-wrap: wrap;
				font-size: 20upx;
				color: #777777;

				.goods-text-two-min-box {
					padding: 4upx 14upx;
					background-color: #f6f6f6;
					margin-right: 20upx;
					margin-bottom: 10upx;
					border-radius: 6upx;
				}
			}

			.money-box {
				margin-top: 10upx;

				.rmb {
					font-size: 22upx;
				}

				.integer {
					font-size: 30upx;
					font-weight: bold;
				}

				.fractional-part {
					font-size: 22upx;
				}
			}
		}
	}

	.goods-down-box {
		padding-top: 20upx;
		display: flex;
		align-items: center;

		.left {
			width: 35%;

			.sum {
				font-size: 22upx;
				color: #999999;
			}

			.profit {
				font-size: 24upx;
			}

			.price {
				font-size: 28upx;
				font-weight: bold;
				color: #ed4440;
			}
		}

		.right {
			width: 65%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			text-align: center;

			.btn-one {
				width: 37%;
				height: 52upx;
				line-height: 52upx;
				font-size: 24upx;
				color: #999999;
				background-color: #FFFFFF;
				border-radius: 26upx;
				border: solid 2upx #999999;
				margin-right: 20upx;
			}

			.btn-two {
				width: 37%;
				height: 52upx;
				line-height: 52upx;
				font-size: 24upx;
				color: #ffffff;
				background-image: linear-gradient(0deg,
					#eb4241 0%,
					#ef463f 100%);
				border-radius: 26upx;
			}
			.btn-there {
				width: 37%;
				height: 52upx;
				line-height: 52upx;
				font-size: 24upx;
				color: #999999;
				background-color: #FFFFFF;
				border-radius: 26upx;
				border: solid 2upx #999999;
			}
			.one{
				width: 37%;
				height: 52upx;
				line-height: 52upx;
				font-size: 24upx;
				color: #999999;
				background-color: #FFFFFF;
				border-radius: 26upx;
				border: solid 2upx #999999;
				margin-right: 20upx;
			}
			.two{
				width: 24%;
				height: 52upx;
				line-height: 52upx;
				font-size: 24upx;
				color: #999999;
				background-color: #FFFFFF;
				border-radius: 26upx;
				border: solid 2upx #999999;
				margin-right: 20upx;
			}
			.there{
				width: 24%;
				height: 52upx;
				line-height: 52upx;
				font-size: 24upx;
				color: #999999;
				background-color: #FFFFFF;
				border-radius: 26upx;
				border: solid 2upx #999999;
			}
		}
	}
	.popup-box{
		padding: 40upx;
		.popup-up{
			text-align: center;
			.notice{
				font-size: 34upx;
				font-weight: bold;
				margin-bottom: 50upx;
			}
			.text{
				font-size: 26upx;
				color: #666666;
				margin-bottom: 8upx;
			}
		}
		.popup-btn{
			padding: 10upx;
			margin-top: 50upx;
			.btn-one{
				padding: 4upx 0;
				font-size: 24upx;
				color: #FFFFFF;
				background-image: linear-gradient(90deg, 
						#2b3f7d 0%, 
						#1b2c60 100%);
				border-radius: 34upx;
			}
			.btn-two{
				padding: 4upx 0;
				margin-top: 20upx;
				font-size: 24upx;
				color: #999999;
				background-color: #FFFFFF;
				border-radius: 34upx;
				border: solid 2upx #999999;
			}
		}
	}
</style>
