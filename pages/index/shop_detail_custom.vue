<template>
	<view class="container">
			<!-- banner轮播 -->
			<view class="carousel">
				
				<swiper :circular="true" :autoplay="true" :duration="400" :interval="3000"
					@change="swiperChange">
					<swiper-item class="swiper-item" v-for="(item,index) in shop_det.album" :key="index"
						@click="banner_cli(index)">
						<view class="image-wrapper">
							<image :src="item" class="loaded" mode="aspectFill"></image>
						</view>
						</image>
					</swiper-item>
				</swiper>
				
				<view class="swiper-dots">
					<text class="num">{{swiperCurrent+1}}</text>
					<text class="sign">/</text>
					<text class="num" v-if="shop_det.album">{{shop_det.album.length}}</text>
				</view>
			</view>
			<view class="introduce-section">
				<view class="price-box">
					<view class="price-box_l" >
						<text class="price-tip">¥</text>
						<text class="price">{{shop_det.price}}</text>
					</view>
				</view>
			</view>
			<view class="shopping_text">
				<view class="shop_names">
					<text class="zp">正品</text>
					<text class="shopname">{{shop_det.title}}</text>
				</view>
				<view class="shop_introduce">
					{{shop_det.remark}}
				</view>
			</view>
			<view class="text-des">
				<text>{{shop_det.remark}}</text>
			</view>

			<!-- 规格 -->
			<view class="specification">
				<view class="child" v-for="(it,ind) in stynumber">
					{{it.name}}：{{it.num}}
				</view>
			</view>
			
			<view id="details_parse" class="detail-desc">
				<view class="d-header">
					<text>宝贝详情</text>
				</view>
				<view class="image-wrapper" v-for="(item,index) in shop_det.image" :key="index">
					<u-image width="100%" :src="item" mode="widthFix"></u-image>
				</view>
			</view>
			<!-- //推荐 -->
			<view id="tuijina">
				<image style="width: 100%;height: 80rpx;margin-top: 20rpx;" src="../../static/my/tuijain_bgimg.png" mode=""></image>
				<view style="margin-bottom: 120rpx;">
					<zs-shopping-list :shop_list="shop_list"></zs-shopping-list>
				</view>
			</view>

			<view class="add_bottom">
				<view class="add_con">
					<view class="three_icons" @click="skipIndex">
						<image src="/static/index/index.png" mode="widthFix"></image>
						<view>首页</view>
					</view>
					<view class="three_icons" @click="goto_cart">
						<image src="/static/index/cart.png" mode="widthFix"></image>
						<view>购物车</view>
					</view>
					<view class="anniu">
						<view class="add_car" @click="openPopup('cart')">加入购物车</view>
						<view class="buy" @click="openPopup('buy')">立即购买</view>
					</view>
				</view>
			</view>
			
			<!-- 规格-模态层弹窗 -->
			<u-popup v-model="popupShow" mode="bottom">
				<scroll-view scroll-y="true" >
					<view class="attr-content" @click.stop style="height: 300rpx;position: relative;">
						
						<view style="position: fixed;bottom: 0;left: 0;right: 0;padding: 0 20rpx;background-color: #FFFFFF;">
							<view style="margin: 20rpx 0;display: flex;align-items: center;justify-content: space-between;">
								<view style="font-weight: bold;">数量</view>
								<u-number-box v-model="buy_num" :max="stocks" :min="1" :step="1" :long-press="false" @change="valChange">
								</u-number-box>
							</view>
							<button class="btn" @click="buy" v-if="shop_type == 'buy'">立即购买</button>
							<button class="btn" @click="addCart" v-else>加入购物车</button>
						</view>
					</view>
				</scroll-view>
			</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buy_num: 1,
				swiperCurrent: 0,
				shop_id: 0,
				shop_det: '', //商品信息
				shop_list: [], //推荐
				stynumber: [],
				popupShow: false,
				btnTxt: '',
				shop_type: 'buy',
				stocks: 0,
			};
		},
		onLoad(options) {
			this.shop_id = options.shop_id;
			this.queyGoodInfo();
		},
		methods: {
			valChange(e) {
				this.buy_num = e.value
			},
			queyGoodInfo() {
				this.$api.get('custom/queryGoodsDetail', {
					id: this.shop_id
				}).then(res => {
					if (res.status == 1) {
						res.data.album = res.data.album.split(',');
						res.data.image = res.data.image.split(',');
						this.stocks = res.data.stock;
						this.shop_det = res.data;
						this.stynumber = [{
								name: '库存',
								num: res.data.stock
							},
							{
								name: '销量',
								num: res.data.sale,
							}
						];
					}
				});
				
				//推荐商品
				this.$api.post('goods',{
					is_recommend: 1,
					member_id: uni.getStorageSync("member_id")
				}).then(res => {
					if (res.status == 1) {
						this.shop_list = res.data.data
					}
				})

			},
			openPopup (type) {
				this.popupShow = true;
				this.shop_type = type;
			},
			//购买
			buy () {
				let data = {
					goods_id: this.shop_id,
					count: this.buy_num,
					isCustom: 1,
				}
				this.com.navto('./confirm_payment?data=' + JSON.stringify(data));
			},
			//加购物车
			addCart () {
				this.$api.post('shop/cart', {
					shop_goods_id: this.shop_id,
					count: 1,
				}).then(res => {
					this.popupShow = false;
					this.com.msg(res.message)
				})
			},
			
			// 去购物车
			goto_cart() {
				uni.switchTab({
					url: '../cart/cart'
				})
			},
			// 去首页
			skipIndex(){
				uni.switchTab({
					url: './index'
				})
			},
			//轮播指示点
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			//点击轮播图放大
			banner_cli(e) {
				let arr = [];
				this.shop_det.album.forEach((i, index) => {
					arr.push(i)
				})
				uni.previewImage({
					urls: arr,
					loop: true
				});
			},

		},
	}
</script>

<style>
	page {
		background: #f1f1f1;
	}
</style>
<style lang="scss" scoped>
	uni-image {
	    display: block;
	}
	
	.video-popup {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .6);
		z-index: 999;
	
		.video {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
	
			video {
				width: 100%;
				height: 500rpx;
			}
		}
	}
	page {
		padding-bottom: 160upx;
	}
	.teturn_top{
		width: 90rpx;height: 90rpx;
		position: fixed;right: 3%;bottom: 130rpx;background-color: #FFFFFF;
		border-radius: 50%;text-align: center;line-height: 90rpx;font-size: 40rpx;
		box-shadow: 1px 1px 3px #888888;
	}
	.header_bait {
		width: 100%;
		height: 160rpx;
		background-color: white;
		padding-top: 60rpx;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;

		.toubu {
			padding: 0 3%;
			display: flex;
			justify-content: space-between;align-items: center;

			.center {
				width: 60%;
				line-height: 100rpx;
				font-size: 30rpx;
				display: flex;

				.center_it {
					width: 25%;
					text-align: center;
					position: relative;

					&.active {
						color: #2d407a;

						&:before {
							content: '';
							position: absolute;
							left: 31%;
							bottom: 20%;
							transform: translateY(-50%);
							height: 6rpx;
							width: 38%;
							background-color: #2d407a;
							border-radius: 4px;
							opacity: .8;
						}
					}
				}
			}
		}
	}

	.header {
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 4%;
		position: absolute;
		left: 0;
		top: 60rpx;
		z-index: 20;

		.header_left {
			// text-align: center;
			// padding-top: 12rpx;
			// width: 80rpx;
			// height: 80rpx;
			// background-color: rgba(0, 0, 0, 0.5);
			// border-radius: 50%;
			// color: #fff;
			image{
				width: 64upx;
				height: 64upx;
			}
		}
	}

	.icon-you {
		/* font-size: $font-base + 2upx; */
		color: #888;
	}

	.carousel {
		height: 722upx;
		position: relative;
		.video-wrapper{
			width: 100%;
			height: 100%;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
		// video {
		// 	width: 750rpx;
		// 	height: 720rpx;
		// }
		video{
			width: 100%;
			height: 724upx;
		}
		.swiper-dots {
			position: absolute;
			right: 30rpx;
			bottom: 20rpx;
			background-color: rgba(0, 0, 0, 0.5);
			display: inline-block;
			padding: 4rpx 18rpx 6rpx 18rpx;
			border-radius: 50rpx;
			color: #fff;
			font-size: 24upx;
		}

		swiper {
			height: 100%;
		}

		.image-wrapper {
			width: 100%;
			height: 100%;
		}

		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			position: relative;
			.bofang{
				position: absolute;
				top: 46%;
				width: 76rpx;height: 76rpx
			}
			.loaded {
				width: 100%;
				height: 100%;
			}
			
		}
	

	}

	.trabecula {
		width: 100%;
		background-color: #1e2f65;
		height: 62rpx;
		color: #fff;
		line-height: 62rpx;
		padding: 0 3%;font-size: 26upx;
	}

	/* 标题简介 */
	.introduce-section {
		background: #fff;
		padding: 30upx;

		.title {
			font-size: 32upx;
			/* color: $font-color-dark; */
		}

		.price-box {
			display: flex;
			justify-content: space-between;
			align-items: center;
			// font-size: 26upx;

			/* color:$uni-color-primary; */
			.price-box_l {
				display: flex;align-items: center;
				image{
					width: 58upx;
					height: 24upx;
					margin-left: 16upx;
				}
				.m-price-tip{
					font-size: 22upx;
					color: #e95069;
					margin-left: 20upx;
				}
			}

			.price-box_r {
				text-align: center;
				display: flex;align-items: center;
				image {
					width: 38rpx;
					height: 38rpx;
				}

				view {
					font-size: 18rpx;
				}
				.min-box{
					margin-right: 20upx;
				}
				
			}
		}

		.price {
			font-size: 54rpx;
			font-weight: bold;
			margin: 0 10rpx;
		}

		.m-price {
			color: #e95069;
			font-size: 30upx;
			margin-left: 10upx;
		}

		.coupon-tip {
			align-items: center;
			padding: 4upx 10upx;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx);
		}

		.bot-row {
			display: flex;
			align-items: center;
			height: 50upx;

			/* font-size: $font-sm; */
			/* color: $font-color-light; */
			text {
				flex: 1;
			}
		}
	}

	.shop_names {
		background-color: white;
		font-size: 30rpx;
		// padding: 0 3%;
		display: flex;align-items: center;

		.zp {
			font-size: 20rpx;
			background-image: linear-gradient(90deg, 
					#ff4362 0%, 
					#fd5538 100%);
			padding: 0 4rpx;
			color: white;
			border-radius: 6rpx;
		}
		.shopname{
			font-weight: bold;
			padding-left: 10upx;
		}
	}

	.shopping_text {
		background-color: #fff;
		padding: 0 0 20upx 3%;
		display: flex;

		.shop_introduce {
			
		}
	}
	.text-des{
		padding: 0 20upx 20upx 20upx;
		font-size: 24upx;
		background-color: #FFFFFF;
	}
	.Rapid_delivery {
		padding: 20upx;
		color: #999;
		font-size: 22upx;
		background-color: #FFFFFF;
		display: flex;align-items: center;
		image{
			width: 24upx;
			height: 24upx;
			margin-right: 16upx;
		}
	}
	.text-item {
		padding: 0 20rpx 20upx 20upx;
		color: #333;
		font-size: 24upx;
		background-color: #FFFFFF;
		.text-box{
			width: 100%;
			height: 70upx;
			padding: 0 30upx;
			background-color: #f6f8ff;
			border-radius: 8rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	// 规格
	.specification {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		font-size: 24rpx;
		margin-bottom: 20rpx;
		background-color: white;
		padding: 0 3%;
		line-height: 50rpx;
		color: #666;

		.child {
			width: 35%;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.child:nth-child(3n+3) {
			width: 30%;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	/* 评价 */
	.eva-section {
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;

		.section_title {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.tit_l {
				display: flex;
				align-items: center;

				.pk {
					display: inline-block;
					width: 12rpx;
					height: 100%;
					background-image: linear-gradient(#445589, #fff);
					margin-right: 16rpx;
				}
				.pj{
					font-size: 28upx;
				}
				.numbers{
					font-size: 22upx;
				}
			}
		}

		.eva-box {
			width: 100%;

			.eval_con {
				width: 100%;
				display: flex;
				background-color: white;
				padding: 2%;
				flex-wrap: wrap;
				border-bottom: 1rpx solid #f6f6f6;

				.order_head {
					width: 100%;
					height: 80rpx;
					display: flex;
					justify-content: space-between;

					.img {
						display: flex;

						image {
							width: 80rpx;
							height: 80rpx;
							border-radius: 80rpx;
							background-color: #eee;
						}

						.shop_name {
							width: 180rpx;
							line-height: 80rpx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							font-size: 28rpx;
							margin-left: 20rpx;
							font-weight: bold;
						}
					}

					.order_time {
						width: 40%;
						line-height: 70rpx;
						text-align: right;
						font-size: 26rpx;
						color: #999;
					}
				}

				.order_con {
					width: 100%;
					font-size: 30rpx;
					line-height: 52rpx;
					padding: 6rpx 0;
				}

				.order_img {
					width: 100%;
					display: flex;

					image {
						width: 216rpx;
						height: 216rpx;
						margin: 10rpx;
						background-color: #eee;
					}
				}
			}
		}
	}

	/*  详情 */
	.detail-desc {
		background: #fff;
		margin-top: 16upx;

		.d-header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: 30upx;
			/* font-size: $font-base + 2upx; */
			/* color: $font-color-dark; */
			position: relative;

			text {
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}

			&:after {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc;
			}
		}
	}

	/* 规格选择弹窗 */
	.attr-content {
			padding: 10upx 30upx;
	
			.a-t {
				display: flex;
	
				image {
					width: 170upx;
					height: 170upx;
					flex-shrink: 0;
					margin-top: -40upx;
					border-radius: 8upx;
				}
	
				.right {
					display: flex;
					flex-direction: column;
					padding-left: 24upx;
					/* font-size: $font-sm + 2upx; */
					/* color: $font-color-base; */
					line-height: 42upx;
	
					.price {
						/* font-size: $font-lg; */
						/* color: $uni-color-primary; */
						margin-bottom: 10upx;
					}
	
					.selected-text {
						margin-right: 10upx;
					}
				}
			}
	
			.attr-list {
				display: flex;
				flex-direction: column;
				/* font-size: $font-base + 2upx; */
				/* color: $font-color-base; */
				padding-top: 30upx;
				padding-left: 10upx;
			}
	
			.jg_sty {
				font-size: 24rpx;
				padding: 20rpx;
				width: 100%;
				background-color: #f6f6f6;
				border-radius: 20rpx;
				margin: 10rpx 0;
				border: 1rpx solid #f6f6f6;
				position: relative;
				&.jactive {
					color: #2d407a;
					background-color: #f6f8ff;
					border: 2upx solid #2d407a;
				}
	
				.jg_sty_t {
					display: flex;
					align-items: center;
					line-height: 40rpx;
	
					view {
						width: 50%;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
	
					view:nth-child(1) {
						// margin: 10rpx 0;
					}
				}
	
				.jg_sty_b {
					display: flex;
					line-height: 40rpx;
					justify-content: space-between;
	
					view {
						width: 50%;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
	
					.jg_r {
						color: #ef2d2d;
	
						text {
							font-size: 32rpx;
							font-weight: bold;
						}
					}
				}
				.jg_r {
					color: #ef2d2d;
					position: absolute;
					top: 38%;
					right: 0;
					text {
						font-size: 32rpx;
						font-weight: bold;
					}
				}
			}
	
			.item-list {
				padding: 20upx 0 0;
				display: flex;
				flex-wrap: wrap;
	
				text {
					font-size: 24rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					background: #eee;
					margin-right: 20upx;
					margin-bottom: 20upx;
					border-radius: 40upx;
					min-width: 60upx;
					height: 50upx;
					padding: 0 40upx;
					/* font-size: $font-base; */
					/* color: $font-color-dark; */
				}
	
				.selected {
					background: #f6f8ff;
					border: 2rpx solid #2d407a;
					color: #2d407a;
				}
			}
			.btn {
				height: 66upx;
				width: 100%;
				font-size: 30upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: #273b76;
				/* font-size: $font-base + 2upx; */
				color: #fff;
				margin: 60upx auto 60upx;
			}
		}

	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}

		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;

			border-radius: 10upx 10upx 0 0;
			background-color: #fff;

			.btn {
				height: 66upx;
				width: 91%;
				line-height: 66upx;
				border-radius: 100upx;
				background: #273b76;
				/* font-size: $font-base + 2upx; */
				color: #fff;
				margin: 30upx auto 60upx;
			}
		}

		@keyframes showPopup {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@keyframes hidePopup {
			0% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}

		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}

			100% {
				transform: translateY(0%);
			}
		}

		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}

			100% {
				transform: translateY(120%);
			}
		}
	}

	/* 购买 */
	.add_bottom {
		z-index: 99;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		display: flex;align-items: center;
		border-top: 1rpx solid #e2e2e2;

		.add_con {
			width: 695rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;align-items: center;

			.s_icon {
				margin-left: 27rpx;
			}

			.three_icons {
				width: 100rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 20rpx;
				color: #333;
			
				view {
					width: 100%;
					text-align: center;
					margin-top: 10upx;
				}
			
				image {
					width: 36upx;
					height: auto;
				}
			}

			.anniu {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				width: 400rpx;

				.add_car {
					width: 45%;
					height: 62rpx;
					line-height: 62rpx;
					background-image: linear-gradient(90deg, 
							#354a8b 0%, 
							#1b2c60 100%);
					border-radius: 30upx;
					font-size: 24rpx;
					color: #ffffff;
					text-align: center;
				}

				.buy {
					width: 45%;
					height: 62rpx;
					line-height: 62rpx;
					background-image: linear-gradient(90deg, 
							#f3c44f 0%, 
							#f2b827 50%, 
							#f0ab00 100%);
					border-radius: 30upx;
					font-size: 24rpx;
					color: #ffffff;
					text-align: center;
					margin-left: 10upx;
				}
			}
		}
	}
</style>
