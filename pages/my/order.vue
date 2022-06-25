<template>
 	<view class="content">
 		<view class="head">
 			<scroll-view scroll-x="true" class="swiper-box">
 				<view v-for="(item,index) in tabs" :key="index" class="swiper_it" :class="{title:current==item.id}" @click="tabClick(item.id,index)">
 					{{item.name}}
 					<view :class="{line:current==item.id}"></view>
 				</view>
 			</scroll-view>
 		</view>
 		<view class="box" v-if="page_show">
			<view v-if="list.length != 0">
				<zs-order-list :list="list" @order_detail="order_detail" @del_order="del_order" @cancel_detail="cancel_detail"></zs-order-list>
				<u-loadmore :status="moreStatus" margin-bottom="120" margin-top="20"/>
			</view> 
			<view v-else style="padding-top: 25%;"><u-empty text="暂无该类订单" mode="order"></u-empty> </view> 
 		</view>
 		<view v-else style="width: 100%;height: 100vh;padding: 28% 46%;"> 
 			<u-loading mode="flower" size="60"></u-loading>
 		</view>
		
		<zs-tabbar :tab_ind="5"></zs-tabbar>
 	</view>
 </template>
  
 <script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
 	export default { 	
 		data() {
 			return {
 				tabs: [{name:'全部',id:0}, {name:'待确认',id:20}, {name:'待收货',id:30}, {name:'已完成',id:50}, {name:'3D订单',id: '3d'}],
 				list:[],
 				current: 0,
 				isShow: true,
				page:1,
				page_show:false,
				queryParams: {
					page: 1,
					limit: 20,
					last_page: 1
				},
				moreStatus: 'loadmore',
				member_id: '',
				token: ''
 			}
 		},
 		onLoad(op) {
			
			this.member_id = uni.getStorageSync('member_id');
			this.token = uni.getStorageSync('token');
			this.state = op.state
			this.current_ind = op.index
			this.tabClick(0)
 		},
		onReachBottom() {
			if (this.queryParams.last_page === this.queryParams.page) {
				return;
			} else {
				this.queryParams.page += 1;
				this.queryList();
			}
		},
 		methods: {
			queryList(page){
				this.$api.get('shop/order/getAllOrder',{
					page: page || 1,
					status: this.current,
					limit: 10,
					manage_commercial_id: this.member_id
				}).then(res => {
					if(res.status === 1){
						this.page_show = true;
						this.list = this.queryParams.page === 1 ? res.data.data : [...this.list, ...res.data.data];
						this.queryParams.last_page = res.data.last_page;
						this.moreStatus = res.data.last_page === res.data.current_page ? 'nomore' : 'loadmore';
					}
					
				})
			},
			//订单详情
			order_detail({id, order_type, bn_id}){
				uni.navigateTo({ url: `./orderDetails?order_id=${bn_id}&order_type=${order_type}` })
			},
			cancel_detail(id){
				this.$api.put('orders',{ id, is_h5:1 }).then(res=>{
					uni.showToast({ icon:'none', title: res.message })
					if (res.status === 1) {
						this.queryList(1);
					}
				})
			},
			//页面滑动
			page_swiper(e){
				this.page_show = false
				this.queryParams.page = 1
				this.list = []
				this.current_ind = e.detail.current
				this.queryList(this.queryParams.page)
			},
			// 点击上方状态按钮
 			tabClick(id,index) {
				if (id === '3d') {
					const env = uni.getStorageSync('env');
					let envStr = '';
					if (env && env !== 'prod') {
						envStr = 'test-'
					}
					const queryStr = `?hideBar=1&env=${env}&member_id=${this.member_id}&token=${this.token}&h5UrlHost=${location.host}`;
					
					location.href = `https://${envStr}3d.semoh.cn/myOrderList${queryStr}`;
					return
				}
				this.page_show = false
				this.queryParams.page = 1
				this.list = []
 				this.current = id
				this.current_ind = index
				this.queryList(this.queryParams.page)
 			},
 			//删除
			del_order(e){
				let that = this
				uni.showModal({
					content:'您确定删除该订单吗？？',
					success(a) {
						if(a.confirm){
							that.$api.del('orders',{id:e,is_h5:1}).then(res=>{
								console.log(res)
								that.tabClick(that.current)
								that.com.msg(res.message)
							})
						}
					}
				})
			}
 		}
 	}
 </script>
 
 
 <style>
	page{
		background-color: #f6f6f6;
	}
 </style>
 <style lang="scss" scoped>
 	.content{
		background-color: #f6f6f6;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		padding-top: 70rpx;
 		.head {
 			width: 100%;
 			display: flex;
 			justify-content: space-between;
 			height: 80rpx;
 			line-height: 80rpx;
 			padding:0 2%;
 			background-color: #fff;color: #999999;
 			text-align: center;
			position: fixed;left: 0;top: 0;z-index: 20;
			.swiper-box{
				
				display: flex;white-space: nowrap;
				.swiper_it{
					display: inline-block;
					width: 20%;
				}
			}
 			.title {
 				font-size: 30rpx;color: #000000;
 				font-weight: bold;
 			}
 			.line {
 				width: 70rpx;
 				border-bottom: 8rpx solid #ff5810;
 				margin: 0 auto;
 				margin-top: -14rpx;
 				border-radius: 28rpx;
 			}
 		}
 		.box{
			width: 100%;
 			padding: 20rpx;
 		}
 		.goods{
 			width: 100%;
 				
 		}
 	}
 	
 </style>
 