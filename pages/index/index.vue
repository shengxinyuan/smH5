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
		<view class="inp_con">
			<!-- 实时金价 -->
			<view class="king_pic" :style="{backgroundColor: backgroundColor1}">
				<view class="king_pic_a">
					<zs-title :titleRed="'实时'" :title="'金价'" :page_show="true"></zs-title>
					<view class="times">
						<u-icon name="clock-fill" size="26" color="#3b4e85" style="margin-right: 10rpx;margin-top: 16rpx;"></u-icon>
						{{gold_price.time}}
					</view>
				</view>
				<!-- 表格 -->
				<view class="tabs">
					<view class="tabs_tr" :style="{backgroundColor: bg_tr}">
						<view>品种</view>
						<view>销售</view>
						<view>回购</view>
						<view>最高</view>
						<view>最低</view>
					</view>
					<view class="swipers_d">
						<view :class="ind % 2 != 0 ? 'tabs_tr' :'tabs_td'" v-for="(it,ind) in gold_price.data" :key="ind" :style="ind % 2 != 0 ? {backgroundColor: bg_tr} : {backgroundColor: bg_td}">
							<view>{{it.title}}</view>
							<view>{{it.new_price}}</view>
							<view>{{it.buy_price}}</view>
							<view style="color: #f5553f;">{{it.max_price}}</view>
							<view style="color: #5cb671;">{{it.min_price}}</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 九宫格 -->
			<view class="nine_g" :style="{backgroundColor: backgroundColor2}">
				<view class="nine_g_child" v-for="(it,ind) in index_data.label" :key="ind" v-if="ind <= 7" @click="go_textrue(it.id)">
					<view class="nine_g_child_tit">
						{{it.title}}
					</view>
					<view class="nine_g_child_cla">
						{{it.remark}}
					</view>
					<image :src="it.image" mode="aspectFill"></image>
				</view>
			</view>
			<!-- 筛选 -->
			<scroll-view class="scroll-view_H" scroll-x="true">
				<view id="demo1" class="nav_swiper" :class="{active: it.id == nav_ind }" @click="nac_cla(it.id)" v-for="(it,ind) in index_data.cates"
				 :key="ind">
					{{it.title}}
				</view>
			</scroll-view>
		</view>
		<view class="classify">
			<zs-shoplist-type :shop_list="shop_list" :lists="list" :cate_fist_id="nav_ind" :shop_subject_id="''" @shop_confim="shop_confim" :screen_label_list="label_list"></zs-shoplist-type>
			<view class=""
			style="height: 100rpx;display: flex;align-items: center;justify-content: center;" 
			v-if="shop_list.length > 0" @click="loading">
				{{ loadingText }}
			</view>
		</view>
	</view>
</template>

<script>
	// import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import dragButton from "@/components/drag-button/drag-button.vue";
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
				gold_price: [],
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
			}
		},
		onUnload() {
			uni.setStorageSync('coupon', 0) 
		},
		onReachBottom() {
			this.loading_more()
		},
		onLoad(op) {
			//用户id
			// let v = JSON.parse(op)
			this.get_label_list()
			console.log(op)
			var reg = new RegExp("(^|&)" + 'token' + "=([^&]*)(&|$)");
			console.log(reg);
			let r = window.location.search.substr(1).match(reg);	
			console.log(r)
			let tok = ''
			if(r !== null){
				tok = unescape(r[2])
				uni.setStorageSync('token',tok)
				var reg1 = new RegExp("(^|&)" + 'name' + "=([^&]*)(&|$)");
				let r1 = window.location.search.substr(1).match(reg1);	
				console.log(r1)
				this.name = unescape(r1[2])
				console.log(this.name)
				uni.setStorageSync('member_id',this.name)
				console.log('_________________________________@@@@@@@')
				this.page_render()
				console.log(uni.getStorageSync('member_id'))
			} else {
				this.wxAuthorize(op.data)
			}
			this.get_muban()
		},
		methods: {
			get_muban(){
				this.$api.get('manage',{member_id: this.name}).then(res=>{
					if(res.status== 1){
						this.muban = res.data.muban
						if (this.muban == 1) {
							this.backgroundColor1 = '#FFFFFF'
							this.backgroundColor2 = '#FFFFFF'
							this.bg_tr = '#fff0d7'
							this.bg_td = '#fffcf7'
						}
						if (this.muban == 2) {
							this.backgroundColor1 = '#f0f3f9'
							this.backgroundColor2 = '#E1E4EC'
							this.bg_tr = '#D5D9E4'
							this.bg_td = '#EAECF1'
						}
						if (this.muban == 3) {
							this.backgroundColor1 = '#FEFAFA'
							this.backgroundColor2 = '#FEDBD8'
							this.bg_tr = '#FEDBD8'
							this.bg_td = '#FDEEEC'
						}
					}
				})	
			},
			get_label_list(){
				this.$api.get('screen_label').then(res=>{
					if(res.status == 1){
						this.label_list = res.data
					}
				})
			},
			loading(){
				if (this.loadingText == '点击上拉加载更多') {
					this.loading_more()
				}
			},
			loading_more(){
				if (this.current_page === this.last_page) {
					this.loadingText = '没有更多了'
					return
				}
				if (this.loadingText === '正在加载中...') {
					return
				}
				this.loadingText = '正在加载中...'
				this.current_page = this.current_page + 1
				this.params.page = this.current_page
				if (this.filtrate == 1) {
					this.get_data(this.params)
					uni.showToast({
						title: '加载中了',
						icon: 'none'
					});
					return
				}
				uni.showToast({
					title: '加载中了',
					icon: 'none'
				});
				let params = {
					cate_fist_id: this.nav_ind,
					page: this.current_page,
					member_id: uni.getStorageSync('member_id')
				}
				this.get_data(params)
			},
			//code
			GetQueryString(code) {
				var reg = new RegExp("(^|&)" + code + "=([^&]*)(&|$)");
				  // var r = url.split('?')[1].match(reg);
				let r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			},
			//参数
			stateNum(state) {
				var reg = new RegExp("(^|&)" + state + "=([^&]*)(&|$)");
				// var r = url.split('?')[1].match(reg);
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
					// window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_base&state=${a}#wechat_redirect`;
			    }else {
					let state_s = this.stateNum('state') // state
					console.log(state_s)
					// this.stat = JSON.parse(state_s)
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
								console.log('_________________________________##')
								this.labels = 1
								this.page_render()
							}
						})	
					}
			    }  
			},
			page_render() {
				this.$api.get('index').then(res => {
					// console.log(res.data)
					if (res.status == 1) {
						this.index_data = res.data
						this.end_time = res.data.kill.title_end
						this.nav_ind = res.data.cates[0].id
						uni.setStorageSync('jinx', this.index_data.zhuanti) //精选专题
						this.nac_cla(res.data.cates[0].id)
						uni.stopPullDownRefresh()
					}
				})
				//实时金价
				this.$api.get('gold_price', {id: uni.getStorageSync('member_id')}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.gold_price = res
					}
				})
				this.$api.get('manageh5', {member_id: uni.getStorageSync('member_id')}).then(res => {
					console.log(res)
					if (res.status == 1) {
						this.king_user = res.data
					}
				})
			},
			//弹框隐藏
			nopop() {
				this.ptcoupon = false //普通优惠券状态
				this.xrcoupon = false //新人优惠券状态
			},
			//点击材质
			go_textrue(e) {
				let a = JSON.stringify(this.index_data.label)
				if (a) {
					this.com.navto('/pages/index/nine_nav?id=' + e + '&data=' + a)
				}
			},
			//团购进详情
			go_teamshop(e) {
				this.com.navto('../../pages/index/Activityshop_detail?shop_id=' + e + '&type=' + 1)
			},
			// 确定筛选
			shop_confim(e) {
				this.current_page = 1
				this.shop_list = []
				this.filtrate = 1
				let obj = {}
				obj = e
				obj.page = this.current_page
				obj.member_id = uni.getStorageSync('member_id')
				this.params = obj
				this.get_data(this.params)
			},
			//页面跳转
			go_pages(e) {
				this.com.navto(e)
			},
			//专题点击
			special_cli(id, type) {
				//定制
				if (type == 4) {
					this.com.navto('./customization')
				} else {
					this.com.navto('./Selected_topics?id=' + id + '&type=' + JSON.stringify(this.index_data.zhuanti))
				}
			},
			//导航栏点击
			nac_cla(e) {
				this.filtrate = 0
				this.page_login = false
				this.nav_ind = e
				this.current_page = 1
				this.shop_list = []
				//商品
				let params = {
					cate_fist_id: e,
					member_id: uni.getStorageSync('member_id'),
					page: this.current_page
				}
				this.get_data(params)
				this.get_screen_data()
			},
			get_screen_data(){
				//筛选条件
				this.$api.get('screen', {
					cate_id: this.nav_ind
				}).then(res => {
					if (res.status == 1) {
						this.list = res.data
					}
				})
			},
			get_data(params){
				uni.showLoading()
				this.$api.post('goods', params).then(res => {
					if (res.status == 1) {
						var a = res.data.current_page
						var b = res.data.last_page
						if (res.data.data) {
							this.last_page = res.data.last_page
							this.current_page = res.data.current_page
							this.shop_list = this.shop_list.concat(res.data.data) 
							console.log(this.shop_list)
							if (a == b) {
								this.loadingText = '没有更多了'
							} else {
								this.loadingText = '点击上拉加载更多'
							}
							uni.hideLoading()
							if (this.labels == 1) {
								if(this.stat.type == 1){
									this.labels = 0
									uni.navigateTo({
										url:'./shop_detail?shop_id=' + this.stat.id
									})
								}
							}
						}
					} else {
						uni.hideLoading()
					}
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	// page{
	// 	height: 100vh;
	// }
	.king_backimg {
		width: 750upx;
		height: 360upx;
		// background-size: 100% 100%;
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

	@import './index.scss'
</style>
