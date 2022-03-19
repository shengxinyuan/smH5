<template>
	<view class="content">

		<!-- 自定义头部 -->
		
		<view class="input-view">
			<view class="king_position">
				<image class="imgb" :src="king_user.avatar" mode="aspectFill"></image>
				<view class="position_name">
					{{king_user.title}}
				</view>
			</view>
			<u-search bg-color="#fff" placeholder="搜索商品" v-model="keyword" :show-action="false" :disabled="true" @click="search"></u-search>
		</view>

		<view class="king_backimg">
			<u-swiper :list="banner_list" height="500"></u-swiper>
		</view>
		
		<!-- 实时金价 -->
		<view class="king_pic_a">
			<zs-title :titleRed="'实时'" :title="'金价'" :page_show="true"></zs-title>
			<view class="txt" v-if="gold_price">
				<text class="red">{gold_price}</text>元 / 克
			</view>
		</view>
		<!-- 九宫格 -->
		<view class="nine_g">
			<view class="nine_g_child" v-for="(it,ind) in index_data.label" :key="ind" v-if="ind <= 7"
				@click="go_textrue(it.id)">
				<view class="nine_g_child_tit">
					{{it.title}}
				</view>
				<view class="nine_g_child_cla">
					{{it.remark}}
				</view>
				<image :src="it.image" mode="aspectFill"></image>
			</view>
		</view>
		
		<!-- 每周上新 -->
		<view class="king_pic_a">
			<zs-title :title="'每周上新'" :page_show="true"></zs-title>
		</view>
		
		<swiper class="swiper_two" @change="swiperChange_b" :autoplay="true" :circular="true" :interval="4000"
			:duration="500">
			<swiper-item v-for="(it,ind) in index_data.news" :key="ind" style="height: 540rpx;"
				@click="news_shop(it.shop_goods_id)">
				<image :src="it.image" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="swiper-dots">
			<view :class="swiperCurrent_b == ind ? 'bann_h_act' : 'bann_h'" v-for="(its,ind) in index_data.news"
				:key="ind"></view>
		</view>
		
		<!-- 内容部分 -->
		<view class="goods-tabs">
			<u-tabs ref="tabs" :is-scroll="true" name="title" :list="firstList" active-color="#010000" bg-color="transparent"
				inactive-color="#010000" :show-bar="false" font-size="30" height="50" :current="first" @change="changeFirst"></u-tabs>
			<u-tabs ref="tabs" :is-scroll="true" name="title" :list="secondList" active-color="#010000" bg-color="transparent"
				inactive-color="#6a6456" :show-bar="false" font-size="18" height="50" :current="second" @change="changeSecond"></u-tabs>
		</view>
		<view style="padding-top: 200rpx;" v-if="shop_list.length === 0">
			<u-empty text="暂无商品" mode="list"></u-empty>
		</view>
		<scroll-view v-else scroll-y="true" class="goods-list">
			<view class="cont_list" >
				<view class="cont_item" v-for="(it,ind) in shop_list" :key="ind" @click="go_shopdetail(it)">
					<image class="images" :src="it.image" mode="aspectFill"></image>
					<view class="it_tit">
						{{it.title}}
					</view>
					<view class="it_price" >
						<text style="font-size: 22rpx;">￥</text>{{ it.price }}
					</view>
					<view class="it_selt">
						<view class="it_selt_r">
							已售{{it.sale}}件
						</view>
					</view>
				</view>
			</view>
			
			<u-loadmore :status="moreStatus" margin-bottom="120" margin-top="20" />
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search_txt: '',
				puytcopup: 0, //普通优惠券
				tops: 0,
				swiperCurrent: 0,
				swiperCurrent_b: 0,
				backgroundColor: '', //标题栏背景色
				headcolor: '#fff', //消息颜色
				indexbackcolor: 'rgba(255,2555,255,0.4)', //导航栏搜索框背景色
				end_time: '', //秒杀到期
				end_seckill: '00:00:00:00', //倒计时
				nav_ind: 0, //导航
				show: true,
				value1: 1,
				index_data: '', //首页数据
				shop_list: '',
				list: '',
				huiy_show: false, //会员状态
				// coupon_data:'',//优惠券
				ptcoupon: false, //普通优惠券状态
				xrcoupon: false, //新人优惠券状态
				second: '',
				king_user: '',
				code: '',
				member_id: '',
				stat: '',
				lv: 0,
				name: '',
				params: {},
				filtrate: 0,
				current_page: 1,
				last_page: 1,
				loadingText: '点击上拉加载更多',
				labels: 1,
				label_list: {},
				keyword: '',
				shop_list: [],
				firstList: [],
				secondList: [],
				first: 0,
				second: 0,
				isCustom: 0,
				queryParams: {
					page: 1,
					limit: 20,
					last_page: 1
				},
				moreStatus: 'loadmore',
				banner_list: [],
				gold_price: ''
			}
		},
		onUnload() {
			uni.setStorageSync('coupon', 0)
		},
		onReachBottom() {
			if (this.queryParams.last_page === this.queryParams.page) {
				return;
			} else {
				this.queryParams.page += 1;
				this.queryList();
			}
		},
		onLoad(op) {
			const urlQuery = this.urlParse()
			if (urlQuery.token) {
				this.member_id = urlQuery.name
				uni.setStorageSync('token', urlQuery.token);
				uni.setStorageSync('member_id', this.member_id);
				uni.setStorageSync('env', urlQuery.env || 'pre');
				
				this.getAllCategory();
				this.query_member_info();
				this.query_index_data();
			} else {
				this.wxAuthorize(op.data)
			}
		},
		
		methods: {
			//每周上新的指示点
			swiperChange_b(e) {
				const index = e.detail.current;
				this.swiperCurrent_b = index;
			},
			//每周上线进详情
			news_shop(e) {
				this.com.navto('./shop_detail?shop_id=' + e)
			},
			urlParse() {
				let url = window.location.search;
				let obj = {};
				let reg = /[?&][^?&]+=[^?&]+/g;
				let arr = url.match(reg);
				if (arr) {
					arr.forEach((item) => {
						let tempArr = item.substring(1).split('=');
						let key = decodeURIComponent(tempArr[0]);
						let val = decodeURIComponent(tempArr[1]);
						obj[key] = val;
					});
				}
				return obj;
			},
			search() {
				this.com.navto('./search');
			},
			//点击材质
			go_textrue(e) {
				let a = JSON.stringify(this.index_data.label)
				if (a) {
					this.com.navto('/pages/index/nine_nav?id=' + e + '&data=' + a)
				}
			},
			getAllCategory() {
				uni.showLoading({
					mask: true
				})
				this.$api.get('category/getAllCategory', {
					manage_commercial_id: this.member_id,
				}).then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						this.firstList = res.data;
						this.secondList = this.firstList[this.first].children;
						this.isCustom = this.firstList[this.first] && this.firstList[this.first].member_id > 0 ?
							1 : 0;
						this.queryList();
					}
				}).catch(() => {
					uni.hideLoading()
				})
			},
			query_index_data () {
				this.$api.get('index').then(res => {
					if (res.status == 1) {
						this.index_data = res.data
					}
				})
			},
			queryList() {
				if (this.isCustom === 1) {
					this.$api.get('shop/getAllGood', {
						cate_id: this.firstList[this.first].id,
						cate_second_id: this.secondList && this.secondList[this.second] && this.secondList[this
							.second].id,
						member_id: this.member_id,
						sale: 1,
						price: 1,
						page: this.queryParams.page,
						limit: this.queryParams.limit,
					}).then((res) => {
						uni.hideLoading()
						if (res.status == 1) {
							this.shop_list = this.queryParams.page === 1 ? res.data.data : [...this.shop_list, ...
								res.data.data
							];
							this.queryParams.last_page = res.data.last_page;
							this.moreStatus = res.data.last_page === res.data.current_page ? 'nomore' : 'loadmore';
						}
					}).catch(() => {
						uni.hideLoading()
					})
				} else {
					this.$api.get('shop/getSurmerGood', {
						cate_first_id: this.firstList[this.first].id,
						cate_id: this.secondList && this.secondList[this.second] && this.secondList[this.second]
							.id,
						member_id: this.member_id,
						page: this.queryParams.page,
						limit: this.queryParams.limit,
					}).then((res) => {
						uni.hideLoading()
						if (res.status == 1) {
							this.shop_list = this.queryParams.page === 1 ? res.data.data : [...this.shop_list, ...
								res.data.data
							];
							this.queryParams.last_page = res.data.last_page;
							this.moreStatus = res.data.last_page === res.data.current_page ? 'nomore' : 'loadmore';
						}
					}).catch(() => {
						uni.hideLoading()
					})
				}
			},
			// 一级目录切换
			changeFirst(index) {
				this.first = index;
				this.isCustom = this.firstList[index] && this.firstList[index].member_id > 0 ? 1 : 0;
				this.second = 0;
				this.secondList = this.firstList[index].children;
				this.queryParams.page = 1;
				setTimeout(() => {
					this.queryList();
				}, 0)
			},
			// 二级目录切换
			changeSecond(index) {
				this.second = index;
				this.queryParams.page = 1;
				setTimeout(() => {
					this.queryList();
				}, 0)
			},
			go_shopdetail(item) {
				if (this.isCustom) {
					this.com.navto('../../pages/index/shop_detail_custom?shop_id=' + item.id)
				} else {
					this.com.navto('../../pages/index/shop_detail?shop_id=' + item.id)
				}
			},
			//code
			GetQueryString(code) {
				var reg = new RegExp("(^|&)" + code + "=([^&]*)(&|$)");
				let r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			},
			//参数
			stateNum(state) {
				var reg = new RegExp("(^|&)" + state + "=([^&]*)(&|$)");
				let r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			},
			wxAuthorize(a) {
				let link = window.location.href;
				let code = this.GetQueryString('code') // code
				console.log(code)
				// 如果拿到code，调用授权接口，没有拿到就跳转微信授权链接获取   
				if (code == null || code == "") {
					let appid = 'wxa41c78ae3465d0fa';
					let uri = encodeURIComponent(link);
					window.location.href =
						`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_base&state=${a}#wechat_redirect`;
				} else {
					let state_s = this.stateNum('state') // state
					this.stat = JSON.parse(a)
					//店铺用户id
					if (this.stat.name) {
						console.log(this.stat)
						uni.setStorageSync('member_id', this.stat.name)
						console.log(code)
						this.$api.get('wechat_login', {
							code: code
						}).then(res => {
							console.log(res.message)
							if (res.status == 1) {
								uni.setStorageSync('token', res.data.token)
								this.labels = 1
								this.query_member_info()
							}
						})
					}
				}
			},
			query_member_info() {
				this.$api.get('manage', {
					member_id: uni.getStorageSync('member_id')
				}).then(res => {
					if (res.status == 1) {
						this.king_user = res.data
					}
				})
				this.$api.get('member').then(res => {
					if (res.status == 1) {
						if (res.data && res.data.banner_list) {
							this.banner_list = res.data.banner_list.map((item) => ({image: item.image_url}))
						} else {
							this.banner_list = [{image: 'https://img.alicdn.com/imgextra/i3/O1CN01ywGbA51tlwYSmJGWI_!!6000000005943-0-tps-1170-859.jpg'}]
						}
					}
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #fbefd7;
	}
	.input-view {
		padding: 36rpx 10rpx 10rpx;
		background-color: #f1f1f1;
		.king_position {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 18rpx;
			image {
				width: 48rpx;
				height: 48rpx;
				border-radius: 50%;
				border: 2rpx solid white;
			}
		
			.position_name {
				padding-left: 20rpx;
				font-size: 32rpx;
				color: #bf9139;
				view:nth-child(1) {
					margin-top: 10rpx;
					font-size: 30rpx;
				}
			}
		}
	}
	.rig{
		width: 18%;
		line-height: 94rpx;text-align: center;
		font-size: 26rpx;padding-right: 20rpx;
	}

	.king_backimg {
		width: 750upx;
		position: relative;
		.imga {
			width: 100%;
			height: 100%;
		}

		
	}

	.scroll-view_H {
		display: flex;
		white-space: nowrap;
		line-height: 90rpx;
		height: 90rpx;
		border-bottom: 1rpx solid #eee;

		.nav_swiper {
			width: 20%;
			text-align: center;
			display: inline-block;
			position: relative;

			&.active {
				color: #2d407a;

				&:before {
					content: '';
					position: absolute;
					left: 35%;
					bottom: 10%;
					transform: translateY(-50%);
					height: 7rpx;
					width: 30%;
					background-color: #2d407a;
					border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}
	}

	.classify {
		width: 100%;
		margin-bottom: 50rpx;
		background-color: #F6F6F6;
	}
	
	.goods-tabs {
		margin-top: 24rpx;
	}
	// .goods-list {
	// 	width: 100%;
		
	// 	border-top: 1px solid #eee;
	// 	.list {
	// 		width: 100%;
	// 		display: flex;
	// 		flex-wrap: wrap;
	// 		padding: 0 3%;
	// 		.item {
	// 			width: 49%;
	// 			margin-right: 2%;
	// 			border-radius: 8px;
	// 			background-color: white;
	// 			margin-top: 5px;
	// 			overflow: hidden;
	// 			position: relative;
	// 			padding-bottom: 5px;
	// 		}
	// 	}
		

	// 	.cont_item {
	// 		margin: 0 32rpx;
	// 		background-color: white;
	// 		overflow: hidden;
	// 		display: flex;
	// 		align-items: center;
	// 		border-bottom: 1px solid #eee;
	// 		color: rgb(96, 98, 102);

	// 		.img-box {
	// 			margin: 20rpx 0;
	// 			margin-right: 32rpx;
	// 			width: 200rpx;
	// 			height: 200rpx;

	// 			.images {
	// 				display: block;
	// 				width: 200rpx;
	// 				height: 200rpx;
	// 				border-radius: 10rpx;
	// 				display: block;
	// 			}
	// 		}

	// 		.base-cont {
	// 			flex: 1;
	// 			overflow: hidden;
	// 			font-size: 24rpx;

	// 			.title {
	// 				font-size: 32rpx;
	// 				margin-bottom: 10rpx;
	// 				height: 80rpx;
	// 				color: #414141;
	// 			}
	// 		}

	// 		.index-cont {
	// 			display: flex;
	// 			font-size: 24rpx;
	// 			text-align: right;
	// 			font-size: 30rpx;

	// 			.item-sale {
	// 				width: 400rpx;
	// 				text-align: left;
	// 				font-size: 24rpx;
	// 			}

	// 			.price {
	// 				flex: 1;
	// 				text-align: right;
	// 				color: #ea5b72;
	// 			}
	// 		}
	// 	}
	// }
	.king_pic_a{
		margin: 32rpx 16rpx;
		display: flex;
		align-items: center;
		.txt{
			margin-left: 60rpx;
			color: #999;
			line-height: 60rpx;
		}
		.red {
			color: #f00;
		}
	}
	.nine_g {
		border-radius: 10rpx;
		padding: 8rpx 16rpx;
		margin: 0 16rpx;
		box-sizing: border-box;
		display: flex;flex-wrap: wrap;justify-content: space-between;
		background-color: #fff;
		.nine_g_child{
			width: 23%;
			height: 200rpx;
			margin-right: 1%;
			margin: 10rpx 1% 10rpx 0;
			position: relative;
			image{
				width: 100%;height: 200rpx;position: absolute;left: 0;top: 0;
			}
			.nine_g_child_tit{
				width: 70%;text-align: center;
				position: absolute;left: 15%;top: 10%;
				z-index: 20;
				white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
			}
			.nine_g_child_cla{
				width: 100%;text-align: center;color: #ccae70;
				position: absolute;left: 0;top: 34%;font-size: 20rpx;
				z-index: 20;
				white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
			}
		}
	}
	
	
	.swiper_two{
		margin: 0 16rpx;
		height: 360rpx;
		image{
			width: 100%;height: 342rpx;border-radius: 10rpx;
		}
		.swiper_item_cont{
			color: #999;font-size: 24rpx;
			height: 88rpx;line-height: 40rpx;overflow: hidden;text-overflow: ellipsis;
		}
	}
	.swiper-dots {
		bottom: 10rpx;display: flex;justify-content: center;align-items: center;
		height: 30upx;
		background-size: 100% 100%;
		.bann_h{
			width: 70rpx;
			height: 10rpx;
			// background-color: rgba(255,255,255,0.3);
			background-color: #eee;
			border-radius: 40rpx;
		}
		.bann_h_act{
			width: 70rpx;
			height: 10rpx;
			background-color: rgba(0,0,0,0.6);
			border-radius: 40rpx;
		}
		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}
	
		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
	
	.cont_list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding: 0 3%;
	
		.cont_item {
			width: 49%;
			margin-right: 2%;
			border-radius: 16rpx;
			background-color: white;
			margin-top: 10rpx;
			overflow: hidden;
			position: relative;
			padding-bottom: 10rpx;
	
			.imagea {
				width: 56rpx;
				height: 70rpx;
				position: absolute;
				left: 22rpx;
				top: 0;
				z-index: 20;
			}
	
			.images {
				width: 350rpx;
				height: 350rpx;
				// background: url(https://zuanshi.semoh.cn/applet_static/loading.gif) no-repeat center;
				// background-size: 100% 84%;
			}
	
			.it_tit {
				padding-left: 10rpx;
				font-size: 28rpx;
				width: 100%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				line-height: 56rpx;
			}
	
			.it_price {
				padding-left: 10rpx;
				font-weight: bold;
				font-size: 30rpx;
			}
	
			.it_selt {
				padding-left: 10rpx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				line-height: 40rpx;
	
				.it_selt_l {
					display: flex;
	
					text {
						color: #ea5b72;
						font-size: 30rpx;
					}
	
					image {
						width: 60rpx;
						height: 24rpx;
						margin-top: 10rpx;
					}
				}
	
				.it_selt_r {
					width: 150rpx;
					color: #998;
					font-size: 22rpx;
					text-align: right;
					margin-right: 20rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	
		.cont_item:nth-child(2n+2) {
			margin-right: 0;
		}
	}
</style>
