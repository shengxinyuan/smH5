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
			<u-swiper :list="banner_list" height="400"></u-swiper>
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
				@click="go_sm_detail(it.shop_goods_id)">
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
				inactive-color="#6a6456" :show-bar="false" font-size="22" height="50" :current="second" @change="changeSecond"></u-tabs>
			<view class="filter-box" v-if="!isCustom">
				<view class="item" @click="price_change">
					价格
					<u-icon name="arrow-down" v-if="price_type == 1"></u-icon>
					<u-icon name="arrow-up" v-if="price_type == 2"></u-icon>
				</view>
				<u-icon name="grid" size="40"></u-icon>
				<view class="item" @click="showFilter = true">筛选</view>
				<u-popup v-model="showFilter" mode="right">
					<view class="popups">
						<view class="" style="height: 100rpx;"></view>
						<!-- 多选标签 -->
						<view class="item">
							<view class="item_tit">
								{{goods_label.name}}
							</view>
							<view class="item_child">
								<view class="child_v" 
								v-for="(item,index) in goods_label.data" 
								:key="index"
								@click="cli_item(item,index)" 
								:class="{active:item.status == 2}">
									{{item.title}}
								</view>
							</view>
						</view>
						<view class="item">
							<view class="item_tit">
								金重
							</view>
							<view class="item_child">
								<view class="child_v">
									<input type="text" placeholder="最低" v-model="min_g" name="" id="">
								</view>
								<view class="u-m-l-10 u-m-r-10" style="color: #999999;">一</view>
								<view class="child_v">
									<input type="text" placeholder="最高" v-model="max_g">
								</view>
							</view>
						</view>
				
						<view class="but">
							<view @click="reset">
								重置
							</view>
							<view @click="shop_confim">确定</view>
						</view>
						<view class="" style="height: 100rpx;"></view>
					</view>
				</u-popup>
			</view>
		</view>
		<view style="padding-top: 200rpx;" v-if="shop_list.length === 0">
			<u-empty text="暂无商品" mode="list"></u-empty>
		</view>
		<scroll-view v-else scroll-y="true" class="goods-list">
			<view class="cont_list" >
				<view class="cont_item" v-for="(it,ind) in shop_list" :key="it.id" @click="go_shopdetail(it)">
					<image class="images" :src="it.image" mode="aspectFill"></image>
					<view class="it_tit">
						{{it.title}}
					</view>
					<view class="it_price" >
						<text style="font-size: 22rpx;">￥</text>{{ it.price }}
						<text class="item_sale">
							已售{{it.sale}}件
						</text>
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
				showFilter: false,
				swiperCurrent: 0,
				swiperCurrent_b: 0,
				index_data: '', //首页数据
				shop_list: '',
				list: '',
				king_user: '',
				code: '',
				member_id: '',
				lv: 0,
				name: '',
				params: {},
				filtrate: 0,
				current_page: 1,
				last_page: 1,
				loadingText: '点击上拉加载更多',
				goods_label: {},
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
				gold_price: '',
				price_type: '', // 价格排序 1-降序 2-升序	
				min_g: '', //最小重量
				max_g: '', //最大重量
				hasGoDetail: false
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
			console.log('onLoad', op)
			const urlQuery = this.urlParse()
			if (urlQuery.token) {
				this.getData(urlQuery);
			} else {
				this.wxAuthorize(op.data)
			}
		},
		methods: {
			getData(params) {
				const { name, token, id, type, env } = params;
				this.member_id = name;
				uni.setStorageSync('token', token);
				uni.setStorageSync('member_id', name);
				uni.setStorageSync('env', env || 'prod');
				
				this.getAllCategory();
				this.query_member_info();
				this.query_index_data();
				
				if(type == 1 && !this.hasGoDetail){
					this.hasGoDetail = true;
					this.go_sm_detail(id)
				}
			},
			//重置
			reset() {
				this.min_g = '';
				this.max_g = '';
				this.goods_label.data.forEach(item=>{
					item.status = 1;
				});
				this.queryParams.page = 1;
				this.queryList();
				this.showFilter = false;
			},
			//确定
			shop_confim() {
				let aid = ''
				let arr = []
				this.goods_label.data.forEach(item=>{
					if (item.status == 2) {
						arr.push(item.id)
					}
					aid = arr.join(',')
				})
				this.showFilter = false;
				this.queryParams.page = 1;
				this.queryList({
					shop_good_label_id: aid,
					min_g: this.min_g,
					max_g: this.max_g
				});
			},
			// 点击多选标签
			cli_item(v, i){
				if (v.status == 1) {
					v.status = 2
				} else {
					v.status = 1
				}
			},
			// 价格筛选
			price_change() {
				if (this.price_type == '') {
					this.price_type = 1;
				} else if (this.price_type == 1) {
					this.price_type = 2;
				} else if (this.price_type == 2) {
					this.price_type = 1;
				}
				this.queryParams.page = 1;
				this.queryList()
			},
			// 每周上新的指示点
			swiperChange_b(e) {
				this.swiperCurrent_b = e.detail.current;
			},
			// 每周上线进详情
			go_sm_detail(id) {
				uni.navigateTo({url: `./shop_detail?shop_id=${id}`})
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
			// 跳转搜索页
			search() {
				uni.navigateTo({url: './search'});
			},
			//点击材质
			go_textrue(id) {
				const label = JSON.stringify(this.index_data.label)
				if (label) {
					uni.navigateTo({url: `/pages/index/nine_nav?id=${id}&data=${label}`});
				}
			},
			// 获取目录
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
						this.changeFirst(0)
					}
				}).catch(() => {
					uni.hideLoading()
				})
			},
			
			// 请求产品列表
			queryList(data) {
				uni.showLoading({
					mask: true
				})
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
					const query = {
						cate_fist_id: this.firstList[this.first].id,
						shop_label_cate_id: this.secondList && this.secondList[this.second] && this.secondList[this.second].id,
						page: this.queryParams.page,
						limit: this.queryParams.limit,
						price: this.price_type,
					}
					if (data) {
						if (data.min_g) query.min_g = data.min_g;
						if (data.max_g) query.max_g = data.max_g;
						if (data.shop_good_label_id) query.shop_good_label_id = data.shop_good_label_id;
					}
					this.$api.post('goods', query).then((res) => {
						uni.hideLoading()
						if (res.status == 1) {
							const list = this.price_type ? res.data.data : res.data.data.sort((a, b) => b.sort-a.sort);
							this.shop_list = this.queryParams.page === 1 ? list : [...this.shop_list, ...list];
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
				if (this.isCustom) {
						this.second = 0;
						this.secondList = this.firstList[index].children;
						this.queryParams.page = 1;
						setTimeout(() => {
							this.queryList();
						}, 0)
				} else {
					this.$api.get('screen', {
						cate_id: this.firstList[index].id
					}).then(res => {
						if (res.status == 1) {
							const list = res.data.find(item => item.name === '款式标签')
							this.second = 0;
							this.secondList = list.data;
							setTimeout(() => {
								this.queryList();
							}, 0)
						}
					})
				}
			},
			// 二级目录切换
			changeSecond(index) {
				this.second = index;
				this.queryParams.page = 1;
				setTimeout(() => {
					this.queryList();
				}, 0)
			},
			
			// code （原代码）
			GetQueryString(code) {
				var reg = new RegExp("(^|&)" + code + "=([^&]*)(&|$)");
				let r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			},
			// 参数 （原代码）
			stateNum(state) {
				var reg = new RegExp("(^|&)" + state + "=([^&]*)(&|$)");
				let r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			},
			// 微信鉴权 （原代码）
			wxAuthorize(data) {
				let link = window.location.href;
				let code = this.GetQueryString('code') // code
				console.log('code',code, link)
				// 如果拿到code，调用授权接口，没有拿到就跳转微信授权链接获取   
				if (code == null || code == "") {
					let appid = 'wxa41c78ae3465d0fa';
					let uri = encodeURIComponent(link);
					window.location.href =
						`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_base&state=${data}#wechat_redirect`;
				} else {
					const urlData = JSON.parse(data);
					//店铺用户id
					if (urlData.name) {
						this.$api.get('wechat_login', {
							code: code
						}).then(res => {
							if (res.status == 1) {
								this.getData(Object.assign({}, urlData, {token: res.data.token, env: 'prod'}));
							}
						})
					}
				}
			},
			// 获取用户信息
			query_member_info() {
				this.$api.get('manage', {
					member_id: uni.getStorageSync('member_id')
				}).then(res => {
					if (res.status == 1) {
						this.king_user = res.data
						if (res.data && res.data.banner_list && res.data.banner_list.length) {
							this.banner_list = res.data.banner_list.map((item) => ({image: item.image_url}))
						} else {
							this.banner_list = [{image: 'https://img.alicdn.com/imgextra/i3/O1CN01ywGbA51tlwYSmJGWI_!!6000000005943-0-tps-1170-859.jpg'}]
						}
					}
				})
				this.$api.get('screen_label').then(res => {
					if (res.status == 1) {
						this.goods_label = res.data;
					}
				})
			},
			// 获取每周上新数据
			query_index_data () {
				this.$api.get('index').then(res => {
					if (res.status == 1) {
						this.index_data = res.data
					}
				})
			},
			// 跳转产品详情
			go_shopdetail(item) {
				if (this.isCustom) {
					uni.navigateTo({url: `../../pages/index/shop_detail_custom?shop_id=${item.id}`});
				} else {
					this.go_sm_detail(item.id)
				}
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
	.filter-box {
		color: #666;
		background-color: #fff;
		margin: 0 24rpx 10rpx 24rpx;
		padding: 0 100rpx;
		border-radius: 4rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		font-size: 24rpx;
		.item {
			flex: 1;
			text-align: center;
		}
	}
	
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
				font-size: 30rpx;
				color: #f00;
				.item_sale {
					color: #666;
					font-size: 22rpx;
					font-weight: normal;
					float: right;
					margin-right: 10rpx;
				}
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
	
	.popups {
		padding: calc(var(--status-bar-height) + 80rpx) 30rpx calc(var(--window-bottom) + 130rpx) 30rpx;
		width: 640rpx;
		position: relative;
	
		.but {
			text-align: center;
			margin-top: 50rpx;
			left: 0;
			right: 0;
			bottom: calc(var(--window-bottom) + 20rpx);
			width: 100%;
			font-size: 26upx;
			display: flex;
			justify-content: space-around;
			height: 70rpx;
			line-height: 68upx;
	
			view {
				width: 45%;
				border-radius: 50rpx;
			}
	
			view:nth-child(1) {
				border: 1rpx solid #666;
				background-color: white;
			}
	
			view:nth-child(2) {
				border: 1rpx solid #2A3E7B;
				background-color: #2A3E7B;
				color: white;
			}
		}
	
		.item {
			.item_tit {
				text-align: left;
				font-weight: bold;
				font-size: 26upx;
			}
	
			.item_child {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				font-size: 24upx;
				align-items: center;
				.child_v {
					width: 31%;
					margin: 16rpx 1%;
					overflow: hidden;
					white-space: nowrap;
					height: 56rpx;
					background-color: #f5f5f5;
					line-height: 54rpx;
					border-radius: 50rpx;
	
					&.active {
						background-color: #f6f8ff;
						border: 1rpx solid #2d407a;
						color: #2d407a;
					}
	
					input {
						height: 56rpx;
						font-size: 24rpx;
					}
				}
			}
		}
	}
</style>
