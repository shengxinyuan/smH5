<template>
	<view class="content__" v-show="pages_if">
		<view class="king_backimg">
			<image class="imga" :src="king_user.avatar" mode="aspectFill" 
			v-if="!king_user.image"></image>
			<image class="imga" :src="king_user.image" mode="aspectFill" 
			v-if="king_user.image"></image>
			<view class="king_position">
				<image class="imgb" :src="king_user.avatar" mode="aspectFill"></image>
				<view class="position_name">
					<view>{{king_user.title}}</view>
					<view>{{king_user.telephone}}</view>
				</view>
			</view>
		</view>
		<!-- 内容部分 -->
		<view>
			<u-tabs ref="tabs" :is-scroll="true" name="title" :list="firstList" active-color="#2d407a" inactive-color="#2d407a" font-size="30" :current="first" @change="changeFirst"></u-tabs>
			<u-tabs ref="tabs" :is-scroll="true" name="title" :list="secondList" active-color="#2d407a" inactive-color="#2d407a" font-size="24" :current="second" @change="changeSecond"></u-tabs>
		</view>
		<view style="padding-top: 200rpx;" v-if="shop_list.length === 0">
			<u-empty text="暂无商品" mode="list"></u-empty>
		</view>
		<scroll-view v-else scroll-y="true" class="goods-list">
			<view class="cont_item" v-for="(item,i) in shop_list" :key="i" @click="go_shopdetail(item)">
				<view class="img-box">
					<image class="images" :src="item.image" mode="aspectFit"></image>
				</view>
				<view class="base-cont">
					<view class="title">
						{{item.title}}
					</view>
					
					<view class="index-cont">
						<view class="item-sale">
							已售{{item.sale}}件
						</view>
						<view class="price">
							<text><text style="">￥</text>{{item.price}}</text>
						</view>
					</view>
				</view>
				
			</view>
			<u-loadmore :status="moreStatus" margin-bottom="120" margin-top="20"/>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				puytcopup: 0, //普通优惠券
				tops: 0,
				swiperCurrent: 0,
				swiperCurrent_b: 0,
				backgroundColor: '', //标题栏背景色
				headcolor: '#fff', //消息颜色
				indexbackcolor: 'rgba(255,2555,255,0.28)', //导航栏搜索框背景色
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
				pages_if: true,
				code:'',
				member_id:'',
				stat:'',
				lv: 0,
				name:'',
				params: {},
				filtrate: 0,
				current_page: 1,
				last_page: 1,
				loadingText: '点击上拉加载更多',
				labels: 1,
				label_list: {},
				backgroundColor1: '#FFFFFF',
				backgroundColor2: '#FFFFFF',
				bg_tr: '#fff0d7',
				bg_td: '#fffcf7',
				muban: 1,
				
				
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
			var reg = new RegExp("(^|&)" + 'token' + "=([^&]*)(&|$)");
			let tokenUrlQuery = window.location.search.substr(1).match(reg);	
			let token = ''
			if(tokenUrlQuery !== null){
				token = unescape(tokenUrlQuery[2])
				uni.setStorageSync('token',token);
				var reg1 = new RegExp("(^|&)" + 'name' + "=([^&]*)(&|$)");
				let nameUrlQuery = window.location.search.substr(1).match(reg1);	
				console.log('nameUrlQuery', nameUrlQuery)
				this.member_id = unescape(nameUrlQuery[2])
				this.getAllCategory();
				uni.setStorageSync('member_id',this.member_id)
				this.query_member_info()
			} else {
				this.wxAuthorize(op.data)
			}
			// this.get_muban()
			
		},
		methods: {
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
						this.isCustom = this.firstList[this.first] && this.firstList[this.first].member_id > 0 ? 1 : 0;
						this.queryList();
					}
				}).catch(() => {
					uni.hideLoading()
				})
			},
			queryList () {
				if (this.isCustom === 1) {
					this.$api.get('shop/getAllGood', {
						cate_id: this.firstList[this.first].id,
						cate_second_id: this.secondList && this.secondList[this.second] && this.secondList[this.second].id,
						member_id: this.member_id,
						sale: 1,
						price: 1,
						page: this.queryParams.page,
						limit: this.queryParams.limit,
					}).then((res) => {
						uni.hideLoading()
						if (res.status == 1) {
							this.shop_list = this.queryParams.page === 1 ? res.data.data : [...this.shop_list, ...res.data.data];
							this.queryParams.last_page = res.data.last_page;
							this.moreStatus = res.data.last_page === res.data.current_page ? 'nomore' : 'loadmore';
						}
					}).catch(() => {
						uni.hideLoading()
					})
				} else {
					this.$api.get('shop/getSurmerGood', {
						cate_first_id: this.firstList[this.first].id,
						cate_id: this.secondList && this.secondList[this.second] && this.secondList[this.second].id,
						member_id: this.member_id,
						page: this.queryParams.page,
						limit: this.queryParams.limit,
					}).then((res) => {
						uni.hideLoading()
						if (res.status == 1) {
							this.shop_list = this.queryParams.page === 1 ? res.data.data : [...this.shop_list, ...res.data.data];
							this.queryParams.last_page = res.data.last_page;
							this.moreStatus = res.data.last_page === res.data.current_page ? 'nomore' : 'loadmore';
						}
					}).catch(() => {
						uni.hideLoading()
					})
				}
			},
			// 一级目录切换
			changeFirst (index) {
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
			changeSecond (index) {
				this.second = index;
				this.queryParams.page = 1;
				setTimeout(() => {
					this.queryList();
				}, 0)
			},
			go_shopdetail (item) {
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
			   let link =  window.location.href;  
			   let code =  this.GetQueryString('code') // code
			   console.log(code)
			    // 如果拿到code，调用授权接口，没有拿到就跳转微信授权链接获取   
			    if (code == null || code == "") {  
					let appid = 'wxa41c78ae3465d0fa';	
					let uri = encodeURIComponent(link);
					window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_base&state=${a}#wechat_redirect`;
			    }else {
					let state_s = this.stateNum('state') // state
					this.stat = JSON.parse(a)
					//店铺用户id
					if(this.stat.name){
						console.log(this.stat)
						uni.setStorageSync('member_id',this.stat.name)
						console.log(code)
						this.$api.get('wechat_login',{code:code}).then(res=>{
							console.log(res.message)
							if(res.status== 1){
								uni.setStorageSync('token',res.data.token)
								this.labels = 1
								this.query_member_info()
							}
						})	
					}
			    }  
			},
			query_member_info() {
				this.$api.get('manageh5', {member_id: uni.getStorageSync('member_id')}).then(res => {
					console.log(res)
					if (res.status == 1) {
						this.king_user = res.data
					}
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	.king_backimg {
		width: 750upx;
		height: 360upx;
		position: relative;

		.imga {
			width: 100%;
			height: 100%;
		}

		.king_position {
			position: absolute;
			left: 30upx;
			bottom: 60upx;
			display: flex;

			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				border: 2rpx solid white;
			}

			.position_name {
				color: white;
				padding-left: 10rpx;

				view:nth-child(1) {
					margin-top: 10rpx;
					font-size: 30rpx;
				}
			}
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
	
	.goods-list {
		width: 100%;
		border-top: 1px solid #eee;
		.cont_item {
			margin: 0 32rpx;
			background-color: white;
			overflow: hidden;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #eee;
			color: rgb(96, 98, 102);
			.img-box {
				margin: 20rpx 0;
				margin-right: 32rpx;
				width: 200rpx;
				height: 200rpx;
				.images {
					display: block;
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
					display: block;
				}
			}
			.base-cont {
				flex: 1;
				overflow: hidden;
				font-size: 24rpx;
				.title {
					font-size: 32rpx;
					margin-bottom: 10rpx;
					height: 80rpx;
					color: #414141;
				}
			}
			.index-cont {
				display: flex;
				font-size: 24rpx;
				text-align: right;
				font-size: 30rpx;
				.item-sale {
					width: 400rpx;
					text-align: left;
					font-size: 24rpx;
				}
				.price {
					flex: 1;
					text-align: right;
					color: #ea5b72;
				}
			}
		}
	}

</style>
