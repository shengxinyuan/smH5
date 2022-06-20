<template>
	<view class="zl-page"><strong></strong>
	
		<view class="tabs-box">
			<!-- 邮寄 --> 
			<view class="tabs-first-box" > 
				<!-- 邮寄地址 --> 
				<view class="first-box-one" @click="go_pages_add">
					<view > 
						<view v-if="address.id">
							<view class="user-box">
								<view class="user-name">{{address.contact}}</view>
								<view class="user-telephone">{{address.mobile}}</view>
							</view>
							<view class="user-address">
								<text>{{address.province + address.city + address.area + address.address}}</text>
							</view>
						</view>
						<view v-else>
							请先添加地址
						</view>
						<view>
							<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
						</view>
					</view>
					
					<view>
						<image src="/static/vip-order/vip_01.png" mode="widthFix"></image>
					</view>
				</view>
				
				<!-- 商品详情列表 -->
				<view class="first-box-five">
					<view>
						<view class="goods-box">
							<view class="good-photo">
								<image :src="good_info.album && good_info.album[0]" mode="aspectFill"></image>
							</view>
							<view class="goods-details">
								<view class="goods-title">名称：{{ good_info.title }}</view>
								<view class="goods-text-one">
									<text>单价：{{ good_info.price }}</text>
								</view>
								<view class="goods-text-one">
									<text>数量：{{ count }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>

				<!-- 商品订单列表 -->
				<view class="first-box-six">
					<view class="first-box-six-min-v">
						<view>
							<text>商品金额</text>
						</view>
						<view v-show="total_price">{{good_info.price}} * {{ count }} = ￥{{ total_price }}</view>
					</view>
					
					<view class="first-box-six-min-v">
						<view>运费(包邮)</view>
						<view>￥0</view>
					</view>
					
					<view class="first-box-six-min-v-bottom" @click="input_show = !input_show">
						<view class="min-v-left">
							<view>订单备注</view>
							<view class="min-v-search">选填</view>
						</view>
						<view v-if="!input_show">
							<u-icon class="icon xiangyou" name="arrow-down"></u-icon>
						</view>
						<view v-if="input_show">
							<u-icon class="icon xiangyou" name="arrow-up"></u-icon>
						</view>
					</view>
					<textarea v-if="input_show" v-model="textarea_val" placeholder="请输入备注~" />
				</view>
			</view>
		</view>
		<!--  底部-->
		<view class="tabs-second-box" >
			<!-- 代发底部展示 -->
			<view class="second-box-five">
				<view class="bottom-v">
					<view class="money-box">
						<text class="rmb">￥</text>
						<text class="integer">{{ total_price }}</text>
					</view>
					<view class="bottom-v-right" >
						<view class="right-right" @click="submit_order">
							<view >提交订单</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textarea_val: '',
				input_show: false,
				count: 0,
				goods_id: '',
				member_id: '',
				good_info: {},
				address: {},
				loading: false,
			}
		},
		onLoad (option) {
			const params = JSON.parse(option.data);
			this.count = params.count;
			this.goods_id = params.goods_id;
			
			this.member_id = uni.getStorageSync('member_id');
			this.queyGoodInfo();
		},
		computed: {
			total_price () {
				return ((Number(this.good_info.price) || 0) * this.count).toFixed(2)
			}
		},
		onShow() {
			//获取地址
			if(uni.getStorageSync('address_bier')){
				this.address = uni.getStorageSync('address_bier');
			}
		},
		methods: {
			//页面跳转
			go_pages(e){
				uni.navigateTo({ url: e })
			},
			go_pages_add(){
				uni.navigateTo({ url: '../my/receiving?type=0&is_mine=0' })
			},
			// 获取自定义商品详情
			queyGoodInfo() {
				this.$api.get('custom/queryGoodsDetail', {
					id: this.goods_id
				}).then(res => {
					if (res.status == 1) {
						res.data.album = res.data.album.split(',');
						res.data.image = res.data.image.split(',');
						this.good_info = res.data;
					}
				});
			},
			//提交订单
			submit_order(){
				if (!this.address.id) {
					uni.showToast({
						title: '下单钱请先选择收货地址！',
					})
					return
				}
				this.loading = true;
				this.$api.post('shop/order/submit', {
					manage_commercial_id: this.member_id,
					message: this.textarea_val,
					address_id: this.address.id,
					count: this.count,
					goods_id: this.goods_id,
					total: (Number(this.good_info.price) || 0) * this.count
				}).then(res => {
					this.loading = false;
					uni.showToast({
						title: res.message,
						icon: 'none'
					})
					if (res.status === 1) {
						setTimeout(()=>{
							uni.reLaunch({
								url: '/pages/my/order?index=1&status=10'
							})
						}, 1000)
					}
				}).catch(() => {
					this.loading = false;
					uni.showToast({
						title: res.message,
						icon: 'none'
					})
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6
	}
</style>
<style lang="scss" scoped>
	.pesfwei{
		width: 600rpx;
		height: 800rpx;
		image{
			width: 100%;height: 100%;
		}
	}
	.zl-page{
		width: 100%;
	}
	.xiangyou {
		font-size: 30upx;
		color: #666666;
	}

	.zl-top-title-box {
		background-color: #2d407a;
		padding: 10upx 30upx;
		color: #feebc0;
		z-index: 20;position: fixed;left: 0;top: 0;width: 100%;
		.warning {
			font-size: 32upx;
			margin-right: 10upx;
		}

		.titles {
			font-size: 26upx;
		}
	}

	.tabs-box {
		// margin-top: 60rpx;
		padding: 2% 3%;
		.tabs-box_top{
			width: 100%;display: flex;justify-content: space-between;
			.top_left{
				width: 80%;
			}
			.top_right{
				line-height: 60rpx;color: #dd2626;
			}
		}
	}

	.tabs-first-box {
		padding-bottom: 10upx;
	}

	.first-box-one {
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
		position: relative;

		.user-box {
			display: flex;

			.user-name {
				font-size: 28upx;
			}

			.user-telephone {
				padding-left: 20upx;
				font-size: 26upx;
				color: #999999;
			}
		}

		.user-address {
			font-size: 26upx;
			margin-top: 20upx;
		}
	}

	.first-box-one>view:first-of-type {
		padding: 30upx 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.first-box-one>view:last-of-type {
		width: 100%;

		image {
			width: 100%;
			position: absolute;
			bottom: 0;
		}
	}

	.first-box-two,
	.first-box-there,
	.first-box-four,
	.first-box-five,
	.second-box-there {
		padding: 20upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
	}

	.first-box-two>view>view:first-of-type {
		width: 100%;
		display: flex;

		.express-left {
			width: 50%;
			display: flex;

			.express-sf {
				width: 10%;
				display: flex;
				align-items: center;

				image {
					width: 100%;
				}
			}

			.sf {
				font-size: 28upx;
				padding-left: 10upx;
			}
		}

		.express-btns {
			width: 50%;
			display: flex;
			font-size: 28upx;
			text-align: center;
			justify-content: flex-end;
			align-items: center;
			.express-send {
				padding: 6rpx 20rpx 2rpx 20rpx;
				line-height: 34upx;
				background-color: #eeeeee;
				border-radius: 18upx;
				color: #666666;
				margin:0 10upx;
				&.express_go {
					background-color: #2d407a;
					color: white;
				}
			}
			
		}
	}

	.first-box-two>view>view:nth-of-type(2) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30upx;
		padding: 30upx 0;
		border-top: solid 2upx #eeeeee;

		.parcel-left {
			width: 16%;
			display: flex;

			.parcel-bj {
				width: 31%;
				display: flex;
				align-items: center;

				image {
					width: 100%;
				}
			}

			.baojia {
				font-size: 28upx;
				padding-left: 10upx;
			}
		}

		.parcel-right {
			font-size: 26upx;
			color: #999999;

			.zhuyi {
				color: #f8c35c;
			}
		}
	}

	.parcel-btns {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.sf-title,
		.tpy-title {
			font-size: 30upx;
			font-weight: bold;
		}

		.sf-cost,
		.tpy-cost {
			font-size: 22upx;
		}

		.parcel-sf {
			width: 45%;
			padding: 18upx 0;
			text-align: center;
			
			border-radius: 6upx;
			box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.04);
			position: relative;
			
			.triangle-topright-box {
				position: absolute;
				top: 0;
				right: 0;

				.triangle-topright {
					width: 0;
					height: 0;
					border-top: 36upx solid #2d407a;
					border-left: 46upx solid transparent;

					.duihao {
						font-size: 20upx;
						color: #FFFFFF;
						position: absolute;
						top: 0;
						right: 0;
					}
				}
			}

		}
		.backimg{
			background-image: url(../../static/index/back.png);background-size: 100% 100%;
		}
		.parcel-tpy {
			width: 46%;
			padding: 18upx 0;
			text-align: center;
			margin-left: 20upx;
			border-radius: 6upx;
			box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.04);
		}
	}

	.first-box-two>view>view:last-of-type {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-top: 20upx;

		.premium {
			font-size: 28upx;

			.premium-pay {
				color: #ea3a4a;
				font-weight: bold;
			}
		}
	}

	.certificate {
		margin-top: 20upx;
	}

	.hang-sign-box {
		display: flex;
		align-items: center;
		font-size: 28upx;
		font-weight: bold;

		.hang-sign-title {
			width: 15%;
		}

		.hang-sign-text {
			width: 25%;
			color: #ed4440;
		}

		.hang-sign-switch {
			width: 60%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}

	.log-box {
		display: flex;
		align-items: center;

		.log {
			width: 5%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.log-title {
			font-size: 22upx;
			color: #000000;
			padding-left: 10upx;
		}
	}

	.hang-sign {
		padding: 20upx 0;
		border-bottom: solid 2upx #eeeeee;
	}

	.zhengshu {
		padding-top: 20upx;
	}

	.first-box-four>view {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.choose-box-left {
			display: flex;
			align-items: center;

			.yuan {
				width: 30upx;
				height: 30upx;line-height: 30rpx;
				border-radius: 100%;color: white;text-align: center;
				background-color: #dd2626;
			}

			.choose-box-title {
				padding-left: 10upx;
				font-size: 28upx;
			}
		}

		.packing-charge-right {
			display: flex;
			align-items: center;
			font-size: 26upx;

			.packing-charge-title {
				color: #999999;
			}

			.packing-charge-pay {
				color: #ed4440;
				padding-left: 10upx;
			}

			.xiangyou {
				margin-left: 20upx;
			}
		}
	}

	.goods-box {
		display: flex;

		.good-photo {
			width: 25%;
			display: flex;

			image {
				width: 166rpx;
				height: 166rpx;background-color: #eee;
				border-radius: 10upx;
			}
		}

		.goods-details {
			margin-left: 20upx;

			.goods-title {
				font-size: 32upx;
			}

			.goods-text-one {
				margin-top: 20upx;
				margin-bottom: 10upx;
				font-size: 26upx;
				color: #666666;

				text {
					margin-right: 30upx;
				}
			}

			.goods-text-two {
				display: flex;
				font-size: 26upx;
				color: #777777;

				.goods-text-two-min-box {
					margin: 6rpx 0;
					padding: 4upx 14upx;
					background-color: #f6f6f6;
					margin-right: 20upx;
					border-radius: 6upx;
					text{
						white-space: nowrap;
					}
				}
			}

			.money-box {
				margin-top: 50upx;
				padding-right: 20rpx;
				padding-bottom: 30upx;

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

	.money-box {
		color: #ea3a4a;

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

	.aggregate-box {
		padding-top: 20upx;
		border-top: solid 2upx #eeeeee;
		font-size: 26upx;

		.aggregate-title {
			color: #666666;
			margin-right: 40upx;
		}

		.aggregate-text {
			margin-right: 30upx;
		}
	}

	.first-box-six,
	.second-box-four {
		padding: 0 30upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;

		.first-box-six-min-v {
			padding: 30upx 0;
			font-size: 26upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: solid 2upx #eeeeee;

			.min-v-right {
				display: flex;
				align-items: center;

				.min-v-text {
					color: #ea3a4a;
				}

				.xiangyou {
					margin-left: 20upx;
				}
			}
		}

		.first-box-six-min-v-bottom {
			padding: 30upx 0;
			font-size: 26upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.min-v-left {
				display: flex;
				align-items: center;

				.min-v-search {
					color: #999999;
					margin-left: 50upx;
				}
			}

			.xiangyou {
				font-size: 30upx;
				color: #666666;
				margin-left: 20upx;
			}
			
		}
		textarea{
			font-size: 28rpx;padding: 20rpx;
			height: 240rpx;border: solid 2rpx #F6F6F6;
		}
	}

	.first-box-seven {
		position: fixed;
		bottom: 0;
		left: 0;

		.notice-text {
			padding: 20upx 30upx;
			font-size: 22upx;
			color: #ec9f67;
			background-color: #fffaf0;
		}

		.seven-bottom-v {
			height: 100upx;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20upx;

			.bottom-v-right {
				display: flex;
				align-items: center;

				.right-left {
					text {
						padding-right: 10upx;
					}

					.total-profit {
						font-size: 26upx;
						color: #999999;
					}

					.super-vip {
						display: flex;
						margin-top: 10upx;
						font-size: 28upx;
						color: #2d407a;

						.super-vip-log {
							width: 7%;
							display: flex;
							align-items: center;
							margin-right: 10upx;

							image {
								width: 100%;
							}
						}
					}
				}

				.right-right {
					padding: 18upx 30upx;
					margin-left: 10upx;
					background-color: #ef463f;
					font-size: 26upx;
					color: #FFFFFF;
					border-radius: 34upx;
				}
			}
		}
	}
	
	.popup-one-box{
		padding: 30upx;
		.popup-one-title{
			margin-top: 20upx;
			margin-bottom: 30upx;
			font-size: 30upx;
			font-weight: bold;
			text-align: center;
		}
		.popup_img{
			width: 100%;
			height: 880rpx;
			image{
				width: 100%;height: 100%;
			}
		}
	}

	.tabs-second-box {
		width: 100%;
		padding-bottom: 250upx;
	}

	.second-box-one {
		padding: 30upx 20upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
		position: relative;
	}

	.second-box-one>view:first-of-type {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.second-box-one>view>view:first-of-type {
		width: 80%;
		display: flex;
		align-items: center;

		.send-image {
			width: 7%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.mail-box {
			padding-left: 20upx;

			.user-box {
				display: flex;

				.user-name {
					font-size: 28upx;
				}

				.user-telephone {
					padding-left: 20upx;
					font-size: 26upx;
					color: #999999;
				}
			}

			.user-address {
				font-size: 26upx;
				margin-top: 20upx;
			}
		}
	}

	.second-box-one>view:last-of-type {
		width: 100%;

		image {
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	.second-box-two {
		padding: 50upx 20upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
		position: relative;
	}

	.second-box-two>view:first-of-type {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.second-box-two>view>view:first-of-type {
		width: 80%;
		display: flex;
		align-items: center;

		.put-image {
			width: 7%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.add-address {
			font-size: 26upx;
			margin-left: 20upx;
		}
	}

	.second-box-two>view:last-of-type {
		width: 100%;

		image {
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	.second-box-five {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;

		.notice-text {
			padding: 20upx 30upx;
			font-size: 22upx;
			color: #ec9f67;
			background-color: #fffaf0;
		}

		.open-super-members-bgimg {
			width: 100%;
			display: flex;
			position: relative;

			image {
				width: 100%;
			}

			.open-super-members-box {
				width: 100%;
				padding: 0 30upx;
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}

	.open-super-members-box>view:first-of-type {
		width: 80%;
		height: 68upx;
		display: flex;
		align-items: center;

		.open-super-members-log {
			width: 5%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.open-super-members-title {
			font-size: 26upx;
			font-weight: bold;
			color: #1c2c5c;
			margin-left: 20upx;
		}

		.open-super-members-price {
			padding: 4upx 10upx;
			margin-left: 20upx;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			font-size: 24upx;
			color: #fff0cd;
			border-radius: 4upx;
		}
	}

	.bottom-v {
		width: 100%;
		height: 100upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20upx;

		.bottom-v-right {
			display: flex;
			align-items: center;

			.right-left {
				padding-right: 10upx;
				font-size: 24upx;
				color: #999999;
			}

			.right-right {
				padding: 18upx 30upx;
				margin-left: 10upx;
				background-color: #ef463f;
				font-size: 26upx;
				color: #FFFFFF;
				border-radius: 34upx;
			}
		}
	}
</style>
