<template>
	<view>
		<!-- tabbar -->
		<zs-tabbar :tab_ind="5"></zs-tabbar>
		<!-- tabbar -->
		<!-- 头部 -->
		<view class="header" :style="{ 'background-color': backgroundColor }">
			<view class="header_va">
			</view>
			<view class="rig" >
				<view class="" 	style="margin-right: 40rpx;" @click="go_pages('./setting')">
					<u-icon name="setting" size="46"></u-icon> 设置
				</view>
				<view class="" @click="go_pages('../information/information')">
					<u-icon name="chat" size="46"></u-icon> 消息
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="my_cont">
			<!-- //个人 -->
			<view class="userinfo">
				<view class="userinfo_ch">
					<view class="userinfo_img" @click="go_pages('./user_text')">
						<!-- <image :src="menber.avatar" class="user_imga" mode=""></image> -->
						<image  :src="menber.avatar"  class="user_imga" mode=""></image>
						<image src="../../static/userimg.png" class="user_imgb" v-show="huiy_show" mode=""></image>
					</view>
					<view class="userinfo_text">
						<view class="text_top">
							<view class="user_name"> {{menber.nickname}} </view>
							<view class="user_qda" v-if="!menber.if_sign" @click="qiandao(1)"><u-icon name="order"></u-icon>立即签到</view>
							<view class="user_qda" v-else @click="qiandao(2)"><u-icon name="checkmark-circle"></u-icon> 今日已签到</view>
						</view>
						<view class="user_phone">
							手机号：{{menber.mobile}}
						</view>
						<view class="user_invite">
							<view @click="qrcode_show = true">
								邀请码<u-icon name="arrow-right"></u-icon>
							</view>
							<view @click="copy_yqm(menber.bn)">
								复制邀请码<u-icon name="arrow-right"></u-icon>
							</view>
							<view @click="my_yaoq">
								我的邀请人
							</view>
						</view>
					</view>
				</view>
				<!-- 统计 -->
				<view class="statistics">
					<view class="statistics_it" @click="go_pages('./collect')">
						<view class="it_num">{{menber.collect}}</view>
						<view class="it_name">我的收藏</view>
					</view>
					<view class="statistics_it" @click="go_pages('./my_footprint')">
						<view class="it_num">{{menber.history}}</view>
						<view class="it_name">我的足迹</view>
					</view>
					<view class="statistics_it" @click="go_pages('./discontcoupon')">
						<view class="it_num">{{menber.coupon}}</view>
						<view class="it_name">优惠券</view>
					</view>
					<view class="statistics_it" @click="go_pages('./gold')">
						<view class="it_num">{{menber.gold}}</view>
						<view class="it_name">我的金币</view>
					</view>
				</view>
				<!-- 会员 -->
				<view class="posi_hy" v-if="huiy_show">
					<view class="posi_hy_it" @click="go_pages('./vip_member')">
						<view class="">
							<image class="imageb" src="../../static/my/hiuy.png" mode="" ></image>
						</view>
						<view class="">
							我的会员 <u-icon name="arrow-right" color="#606c90"></u-icon>
						</view>
					</view>
					<view class="posi_hy_it">
						<view class="" @click="skipSetShop">
							<image class="imagea" src="../../static/my/dianpu.png" mode=""></image>店铺管理
						</view>
						<view class="" @click="skipShopGoldPrice">
							商城金价 <u-icon name="arrow-right" color="#606c90"></u-icon>
						</view>
					</view>
					<view class="posi_hy_it">
						<view class="" @click="skipTalk">
							<image class="imagea" src="../../static/my/dianpu.png" mode=""></image>引流拓客
						</view>
						<view class="" @click="skipCommunity">
							社区营销<u-icon name="arrow-right" color="#606c90"></u-icon>
						</view>
					</view>
					
				</view>
				<!-- 非会员 -->
				<view class="posi_hy" v-else>
					<view class="posi_hy_it" @click="go_pages('./vip_member')">
						<view class="">
							<image class="imageb" src="../../static/my/kaitunhy.png" mode="" ></image>
						</view>
						<view class="">
							自购省分享赚 <u-icon name="arrow-right" color="#606c90"></u-icon>
						</view>
					</view>
					<view class="posi_hy_it">
						<view class="">
							<image class="imagea" src="../../static/my/dianpu.png" mode=""></image>独立店铺
						</view>
						<view class="">
							金价可控<u-icon name="arrow-right" color="#606c90"></u-icon>
						</view>
					</view>
					<view class="posi_hy_it">
						<view class="">
							<image class="imagea" src="../../static/my/dianpu.png" mode=""></image>订单回流
						</view>
						<view class="">
							一件代发<u-icon name="arrow-right" color="#606c90"></u-icon>
						</view>
					</view>
					
				</view>
			</view>
			<!-- //订单 -->
			<view class="padding_cont">
				<view class="orders">
					<view style="display: flex;justify-content: space-between;margin-bottom: 38rpx;"  @click="go_order(0,0)">
						<view style="font-size: 30rpx;">
							我的订单
						</view>
						<view style="color: #999;">
							全部订单 ＞
						</view>
					</view>
					<view style="display: flex;">
						<view class="orders_it" v-for="(it,ind) in order" :key="ind"  @click="go_order(it.type,it.ind)">
							<image :src="it.img" mode=""></image>
							<view class="">
								{{it.name}}
							</view>
						</view>
					</view>
				</view>
				<!-- //钱包 -->
				<view class="orders_b" @click="go_pages('./wallets')">
					<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
						<view style="font-size: 30rpx;">
							<image src="../../static/my/wellet.png" mode=""></image> 我的钱包
						</view>
						<view style="color: #999;">
							查看收益 ＞
						</view>
					</view>
					<view style="display: flex;justify-content: space-around;">
						<view class="orders_it" v-for="(it,ind) in wallet" :key="ind">
							<view class="it_num">
								{{it.num}}
							</view>
							<view class="">
								{{it.name}}
							</view>
						</view>
					</view>
				</view>
				<!-- //我的团队 -->
				<view class="orders_c">
					<view class="orders_c_child" @click="go_pages('./my_team')"> 
						<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
							<view style="font-size: 30rpx;">
								<image src="../../static/my/tuandui.png" mode=""></image> 我的团队
							</view>
						</view>
						<view style="display: flex;justify-content: space-around;">
							<view class="orders_it" style="border-right: 1rpx solid #f6dc9c;">
								<view class="it_num">
									{{menber.team}}人
								</view>
								<view class="">
									累计
								</view>
							</view>
							<view class="orders_it">
								<view class="it_num">
									{{menber.today_team}}人
								</view>
								<view class="">
									今日新增
								</view>
							</view>
						</view>
					</view>
					<!-- //城市 -->
					<view class="orders_c_child">
						<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
							<view style="font-size: 30rpx;">
								<image src="../../static/my/city.png" mode=""></image> 城市合伙人中心
							</view>
						</view>
						<view class="order_childs_a" v-if="partner" @click="go_pages('./city_partnerCenter')">
							<view class="orders_it" style="border-right: 1rpx solid #f6dc9c;">
								<view class="it_num">
									{{memberpar.partner_member}}人
								</view>
								<view class="">
									累计
								</view>
							</view>
							<view class="orders_it">
								<view class="it_num">
									{{memberpar.commission}}
								</view>
								<view class="">
									本月收益
								</view>
							</view>
						</view>
						<!-- 非申请 -->
						<view class="order_childs_a" v-else>
							<view class="orders_it" style="border-right: 1rpx solid #f6dc9c;">
								<view class="it_num">
									{{menber.city_count}}市
								</view>
								<view class="">
									已申请
								</view>
							</view>
							<view class="orders_it" @click="go_pages_pros(menber.if_partner)">
								<view class="it_num_but">
									立即加入
								</view>
								<view class="">
									诚邀加盟
								</view>
							</view>
						</view> 
					</view>
				</view>
				<!-- 店铺管理 -->
				<zs-store-admin :skip='huiy_show' :jinx="jinx"></zs-store-admin>
				<!-- 综合管理 -->
				<zs-synth-admin></zs-synth-admin>
				
			</view>
			<!-- 为您推荐 -->
			<image class="tuij" src="../../static/my/tuijain_bgimg.png" mode=""></image>
			<!-- 商品列表 -->
			<view style="position: relative;padding: 0 2%;">
				<zs-shopping-list :shop_list="shop_tuij"></zs-shopping-list>
				
			</view>
		</view>
		<!-- 签到 -->
		<zs-popup v-if="qd_show" :king="'金币'" :king_nam="'+'+ gold_nums" :bgimage="bgimage" @nopop="no_pop"></zs-popup>
		<!-- //二维码 -->
		<zs-popup v-if="qrcode_show" :bgimage="qrcode_image" @nopop="no_pop"></zs-popup>
		<!-- 我的邀请人 -->
		<u-popup v-model="show" mode="center">
			<view class="my_yaoq">
				<view class="my_yaoq_name">
					邀请人: {{menber.recommend_name}}
				</view>
				<view class="my_yaoq_phone">
					联系电话: {{menber.recommend_phone}}
				</view>
				<view class="my_yaoq_typebut">
					<view @click="show = false">	
						返回
					</view>
					<view @click="kao_yqr(menber.recommend_phone)">
						拨打电话
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				partner:true,
				gold_nums:0,
				backgroundColor:"",//导航背景
				huiy_show:false,//会员状态
				show:false,//我的邀请人
				bgimage:'url(../../static/my/qiandao.png)',
				qd_show:false,//popup组件显示
				qiandao_if:false,//签到按钮状态
				qrcode_show:false,//二维码显示
				qrcode_image:'',
				order:[
					{
						img:'../../static/my/daifu.png',
						name:'待付款',type:10,ind:1
					},
					{
						img:'../../static/my/daifa.png',
						name:'待发货',type:20,ind:2
					},
					{
						img:'../../static/my/daishou.png',
						name:'待收货',type:30,ind:3
					},
					{
						img:'../../static/my/daipinj.png',
						name:'待评价',type:40,ind:4
					},
					{
						img:'../../static/my/shouhou.png',
						name:'售后',type:60,ind:6
					},
				],
				wallet:[
					{
						num:0,
						name:"待返利(元)"
					},
					{
						num:0,
						name:"可提现(元)"
					},
					{
						num:0,
						name:"累计返现(元)"
					}
				],
				menber:'',//个人信息
				shop_tuij:'',
				jinx:'',
				memberpar:'',//业绩
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			this.page_info()
		},
		//页面滑动
		onPageScroll(e){
			this.backgroundColor = 'rgba(255,220,89, ' + e.scrollTop / 80 + ')' 

		},
		onShow() {
			this.page_info()
			// let vip = uni.getStorageSync('viptype')
			// console.log(vip)
			// // 会员
			// if(vip){
			// 	this.huiy_show = true
			// }else{
			// 	this.huiy_show = false
			// }
			this.jinx = uni.getStorageSync('jinx')
		},
		methods: {
			page_info(){
				this.$api.get('member').then(res=>{
					console.log(res)
					if(res.status == 1){
						uni.stopPullDownRefresh()
						let date = new Date().getTime()
						let end = res.data.vip_time * 1000
						if(end  <= date){
							uni.setStorageSync("viptype", false)
							this.huiy_show = false
						}else{
							uni.setStorageSync("viptype", true)
							this.huiy_show = true
						}
						uni.setStorageSync('member_info_img',res.data.avatar)
						uni.setStorageSync('menber_json',res.data)
						// 合伙人
						if(res.data.if_partner != 1){
							this.partner = false
						}else{
							this.partner = true
						}
						this.menber = res.data
						this.qrcode_image = res.data.qrcode
						this.wallet = [
							{
								num:res.data.rebate_money,
								name:"待返利(元)"
							},
							{
								num:res.data.money,
								name:"可提现(元)"
							},
							{
								num:res.data.total_money,
								name:"累计返现(元)"
							}
						]
						this.$api.get('memberpartner').then(res=>{
							console.log(res)
							if(res.status==1){
								this.memberpar = res.data
							}
						})
					}
				})
				//推荐商品
				this.$api.get('hotgoods').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_tuij = res.data
					}
				})
				
			},
			//订单详情
			go_order(e,ind){
				this.com.navto('./order?state='+e+'&index='+ind)
			},
			//页面跳转
			go_pages(e){
				this.com.navto(e)
			},
			go_pages_pros(e){
				console.log(e)
				if(e == 2 || e == 3){
					this.com.navto('./goto_vip')
				}else if(e == 0){
					this.com.msg('正在审核中~')
				}
			},
			//我的邀请人
			my_yaoq(){
				this.show = true
			},
			// 联系邀请人
			kao_yqr(e){
				uni.makePhoneCall({
					phoneNumber:e
				})
			},
			//签到
			qiandao(e){
				if(e==1){
					this.qd_show = true
					this.$api.put('gold').then(res=>{
						console.log(res)
						this.gold_nums = res.message
						this.page_info()
					})
				}else{
					this.com.msg('您已经签到过了')
				}
			},
			//关闭组件
			no_pop(){
				this.qd_show = false
				this.qrcode_show = false
			},
			copy_yqm(e){
				console.log(e)
				uni.setClipboardData({
				    data: e,
				    success: function () {
				        console.log('success');
				    }
				});
			},
			skipSetShop(){
				uni.navigateTo({
					url:'../set-shop/set-shop'
				})
			},
			skipShopGoldPrice(){
				uni.navigateTo({
					url:'../set-shop/shop-gold-price'
				})
			},
			skipTalk(){
				uni.navigateTo({
					url:'../community/talk'
				})
			},
			skipCommunity(){
				uni.navigateTo({
					url:'../community/community'
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style lang="scss" scoped>
	.tuij{
		width: 100%;height: 80rpx;
	}
	.padding_cont{
		width: 100%;
		padding: 3%;
		
		.orders{
			padding: 30rpx;background-color: white;margin-top: 56rpx;border-radius: 20rpx;
			.orders_it{
				width: 20%;text-align: center;
				image{
					width: 50rpx;height: 44rpx;
				}
				view{
					margin-top: 16rpx;
				}
				
			}
		}
		.orders_b{
			padding: 30rpx;background-color: white;margin-top: 20rpx;border-radius: 20rpx;
			image{
				width: 36rpx;height: 36rpx;margin-right: 12rpx;
			}
			.orders_it{
				width: 30%;text-align: center;
				
				view{
					margin-top: 16rpx;
				}
				.it_num{
					font-size: 32rpx;color: #293d79;white-space: nowrap;text-overflow: ellipsis;overflow: hidden; 
				}
			}
		}
		.orders_c{
			width: 100%;margin-top: 20rpx;display: flex;justify-content: space-between;
			.orders_c_child{
				width: 49%;background-color: white;padding: 30rpx;border-radius: 20rpx;
				.order_childs_a{
					display: flex;justify-content: space-around;
					.it_num_but{
						background-color: #e45050;color: #fff;border-radius: 20rpx;padding-bottom: 4rpx;
					}
				}
			}
			
			image{
				width: 36rpx;height: 36rpx;margin-right: 12rpx;
			}
			.orders_it{
				width: 50%;text-align: center;
				
				view{
					margin-top: 16rpx;
				}
				.it_num{
					font-size: 28rpx;color: #293d79;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
				}
			}
		}
		.orders_d{
			padding: 30rpx;background-color: white;margin-top: 26rpx;border-radius: 20rpx;
			background-image: url(../../static/my/dianbu_bgimage.png);
			background-size: 100% 100%;
			.orders_it{
				width: 20%;text-align: center;
				image{
					width: 70rpx;height: 60rpx; 
				}
				view{
					margin-top: 16rpx;
				}
				
			}
		}
	}
	
	//会员
	.posi_hy{
		width: 90%;height: 110rpx;background-color: #1f3167;margin-left: 5%;border-radius: 16rpx;
		display: flex;justify-content: space-around;padding-top: 6rpx;
		position: relative;
		.imageb{
			position: absolute;left: -20rpx;top: 6rpx;height: 50rpx;width: 220rpx;
		}
		.posi_hy_it{
			width: 30%;text-align: center;
			.imagea{
				width: 34rpx;height: 34rpx;margin: 0 10rpx;
			}
			view:nth-child(1){
				padding-top: 6rpx;
				color: #fff0a6;
				height: 46rpx;
				
			}
			view:nth-child(2){
				color: #606c90;
				line-height: 50rpx;
			}
		}
	}
	//数据统计
	.statistics{
		width: 100%;height: 116rpx;
		margin-top: 22rpx;display: flex;
		margin-bottom: 16rpx;
		.statistics_it{
			width: 25%;text-align: center;
			.it_num{
				line-height: 60rpx;font-size: 30rpx;
			}
		}
	}
	//邀请人弹框
	.my_yaoq{
		width: 500rpx;text-align: center;
		padding: 40rpx;border-radius: 20rpx;
		.my_yaoq_name{
			font-size: 34rpx;
		}
		.my_yaoq_phone{
			line-height: 66rpx;
		}
		.my_yaoq_typebut{
			display: flex;justify-content: space-around;
			view{
				width: 170rpx;line-height: 60rpx;border-radius: 50rpx;height: 60rpx;
				font-size: 32rpx;
			}
			view:nth-child(1){
				border: 1rpx solid #999;
			}
			view:nth-child(2){
				background-color: #1d2f64;color: #fff;
			}
		}
	}
	.my_cont{
		width: 100%;padding-bottom: 136rpx;
		.userinfo{
			padding-top: 150rpx;width: 100%;height: 500rpx;
			background-image: url(../../static/my/backimg.png);
			background-size: 100% 100%;
			
			position: relative;
			.userinfo_ch{
				display: flex;
			}
			.userinfo_img{
				width: 20%;height: 160rpx;margin-left: 50rpx;
				padding-top: 20rpx;
				.user_imga{
					width: 120rpx;height: 120rpx;border-radius: 50%;
				}
				.user_imgb{
					width: 170rpx;height: 180rpx;position: absolute;left: 10rpx;top: 120rpx;
				}
			}
			.userinfo_text{
				width: 76%;height: 160rpx;padding-right: 4%;
				.text_top{
					display: flex;justify-content: space-between;
					.user_name{
						font-size: 34rpx;font-weight: bold;
					}
					.user_qda{
						font-size: 26rpx;
						background-color: #1d2f65;color: #e1cea5;border-radius: 50rpx;line-height: 48rpx;padding: 0 10rpx;
					}
				}
				.user_phone{
					font-size: 26rpx;line-height: 44rpx;color: #5c5743;
				}
				.user_invite{
					font-size: 26rpx;
					display: flex;justify-content: space-around;
					view{
						background-color: #ffe388;border-radius: 20rpx;padding: 2rpx 12rpx;
					}
				}
			}
		}
	}
.header{
	position: fixed;left: 0;top: 0;
	height: 140rpx;width: 100%;
	padding: 50rpx 3% 0 3%;
	display: flex;justify-content: space-between;
	z-index: 999;
	.header_va{
		font-size: 40rpx;line-height: 90rpx;
	}
	.rig{
		line-height: 100rpx;
		font-size: 30rpx;
		display: flex;
	}
}
</style>
