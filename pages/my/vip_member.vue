<template>
	<view>
		<view class="header">
			<view class="header_l">
				<image :src="pag_data.avatar" alt="">
				<view class="header_l_child">
					<view>{{pag_data.nickname}}</view>
					<text v-if="huiy_show">{{pag_data.vip_date}} 到期</text>
				</view>
			</view>
			<view class="header_r" v-if="huiy_show" @click="go_imment">
				<text>立即续费</text>
			</view>
		</view>
		<view class="cont">
			<zs-title :title="'专享特权'" ></zs-title>
			<view class="nav_nine">
				<view class="nav_items" v-for="(it,ind) in list.top" :key="ind" @click="">	
					<image :src="it.image" mode=""></image>
					<view>
						{{it.title}}
					</view>
				</view>
			</view> 
			<!-- 小喇叭 -->
			<view class="trumpet">
				<image src="../../static/my/trumpet.png" mode=""></image>
				<text>{{list.title}}</text> 
			</view>
			<!-- //购买 -->
			<view class="buy_vip">
				<view class="vip_item" :class="it.id == buy_ind ? 'vip_item_act' : ''" v-for="(it,ind) in list.end" v-if="ind != 0" :key="ind" 
				@click="buy_cli(it)">
					<view class="it_top">
						{{it.title}}
					</view>
					<view class="it_c">
						￥<text>{{it.money}}</text>
					</view>
					<view class="it_bot">
						￥{{it.old_money}}
					</view>
				</view>
			</view>
			<view class="buy_vip_s">
				<view class="vip_item">
					<view class="it_top">
						邀请好友免费享会员
					</view>
					<view class="it_c"></view>
					<view class="it_bot">
						邀请{{list.people_invited}}名好友注册并开通会员即可享受{{list.is_year == 0? list.number_year+'月' : list.number_year+'年'}}免费会员哦
					</view>
					<view class="it_but">
						<u-icon name="plus-people-fill" color="#daa856" size="60"></u-icon>
						<view class="it_but_share" v-if="list.people_invited != 0" >
							立即分享
						</view>
						<view class="it_but_share" v-else @click="go_getvip">
							立即领取
						</view>
					</view>
				</view>
				<view class="vip_item" :class="buy_ind == it.id ? 'vip_item_act' : ''" 
				  v-for="(it,ind) in list.end" :key="ind" v-if="ind == 0" @click="buy_cli(it)">
					<view class="it_top">
						{{it.title}}
					</view>
					<view class="it_c">
						￥<text>{{it.money}}</text>
					</view>
					<view class="it_bot">
						{{it.title}}
					</view>
				</view>
			</view>
			<!-- //开通按钮 -->
			<view class="op_but" @click="go_imment">
				立即开通
			</view>
			<view style="font-size: 26rpx;color: #999;padding: 0 20rpx;line-height: 36rpx;margin-bottom: 60rpx ;">
				<u-parse :html="list.title2"></u-parse>
			</view>
			<!-- 问答 -->
			<zs-title :title="'专享特权'" ></zs-title>
			<view class="nav_nine">
				<view class="nav_items" v-for="(it,ind) in list.middle" :key="ind" @click="cli_quest(it.content)">	
					<image :src="it.image" mode=""></image>
					<view>
						{{it.title}}
					</view>
				</view>
			</view>
			<!-- 回答 -->
			<view class="answer"> 
				<!-- <view class="answer_title">
					{{}}
				</view> -->
				<u-parse :html="title_val"></u-parse>
			</view>
		</view>
		<!-- //支付定位 -->
		<view class="pay_posi" v-if="buy_ind != -1">
			<view class="pay_posi_l">
				{{datas.title}}
				<view>￥{{datas.money}}</view>
			</view>
			<view class="pay_posi_l_r" @click="go_imment">
				立即开通
			</view>
		</view>
		<u-popup v-model="show" mode="bottom">
			<view class="pupop">
				<view class="pupop_title">
					选择支付方式
				</view>
				<view class="pupop_item" v-for="(pay,ind) in pay" :key="ind" @click="pay_type(ind)">
					<view>
						<label class="radio">
							<view class="">
								<radio :checked="ind == pay_ind" />
								{{pay.name}}
							</view>
							<u-icon name="zhifubao-circle-fill" size="40rpx" color="#007AFF" v-if="ind == 0"></u-icon>
							<u-icon name="weixin-circle-fill" size="40rpx" color="#18B566" v-else-if="ind == 1"></u-icon>
							<u-icon name="rmb-circle-fill" size="40rpx" color="#F0AD4E" v-else></u-icon> 
						</label>
					</view>
				</view>
				<zs-button buttitle="支付" @but_cli="immediately_k(buy_ind)"></zs-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
				buy_ind:-1,
				huiy_show:false,
				datas:'',
				show:false,
				pay:[
					{
						name:'支付宝'
					},
					{
						name:'微信支付'
					},
					{
						name:'余额支付'
					}
				],
				pay_ind:0,
				title_val:''
			}
		},
		onLoad(op) {
			// console.log(op.it)
			this.pag_data = uni.getStorageSync('menber_json')
			
			this.page_reader()
			let vip = uni.getStorageSync('viptype')
			console.log(vip)
			// 会员
			if(vip){
				this.huiy_show = true
			}else{
				this.huiy_show = false
			}
		},
		onUnload() {
			clearInterval(this.time)
		},
		methods:{
			page_reader(){
				this.$api.get('vip').then(res=>{
					console.log(res)
					this.list = res.data
					this.title_val = res.data.middle[0].content
				})
			},
			//领取vip
			go_getvip(){
				this.$api.put('vip').then(res=>{
					console.log(res)
					this.com.msg(res.message)
				})
			},
			//选择支付方式
			pay_type(e){
				console.log(e)
				this.pay_ind = e
			},
			//购买会员类型
			buy_cli(e){
				this.buy_ind = e.id
				this.datas = e
			},
			//问答
			cli_quest(e){
				this.title_val = e
			},
			//支付宝
			zfb_alipay(e){
				uni.requestPayment({
					provider: 'alipay',
					orderInfo:e,
					success: function(res) {
					   uni.showToast({
					   		title:'支付成功..',icon:'none'
					   })
					   this.show = false
					  // let aq = 2
					  // this.time = setInterval(()=>{
					  // 	aq -=1
					  // 	if(aq == 0){
							// uni.navigateBack()
					  // 		clearInterval(this.time)
					  // 	}
					  // },1000)
					},
					fail: function(err) {
						uni.showToast({
							title:'失败',icon:'none'
						})
					}
				});
			},
			//微信
			weixin(arr){
				uni.requestPayment({
					provider: 'wxpay',
					orderInfo:{
						"appid": arr.appid,
						"noncestr": arr.noncestr,
						"package": 'Sign=WXPay', // 固定值，以微信支付文档为主
						"partnerid": arr.partnerid,
						"prepayid": arr.prepayid,
						"timestamp": arr.timestamp,
						"sign": arr.sign // 根据签名算法生成签名
					},
					success: function(res) { 
						// console.log(res)
					   uni.showToast({
							title:'支付成功..',icon:'none'
					   })
					   this.show = false
					   // let aq = 2
					   // this.time = setInterval(()=>{
					   // 	aq -=1
					   // 	if(aq == 0){
					   // 		uni.navigateBack()
					   // 		clearInterval(this.time)
					   // 	}
					   // },1000)
					},fail: function(err) { 
						console.log(err)
						uni.showToast({
							title:'支付失败',icon:'none'
						})
					}
				});
			},
			//支付
			immediately_k(e){
				//支付宝				
				this.$api.post('vippay',{vip_id:this.buy_ind,type:this.pay_ind}).then(res=>{
					console.log(res)
					if(res.status == 1){
						if(this.pay_ind == 0){ 
							this.zfb_alipay(res.data)
						}else if(this.pay_ind == 1){
							this.weixin(res.data)
						}else {
							this.show = false
							uni.showToast({
								title:'支付成功..',icon:'none'
							})
						}
					}
				})
			},
			//立即开通
			go_imment(){
				if(this.buy_ind == -1){
					this.com.msg('请选择开通类型')
				}else{
					this.show = true
				}
			}
		}
		
	}
</script>

<style scoped lang="scss">
	.pupop{
		padding: 20rpx 40rpx;color: #F0AD4E;
		.pupop_title{
			font-size: 32rpx;text-align: center;line-height: 77rpx;
		}
		.pupop_item{
			line-height: 100rpx;
			.radio{
				display: flex;justify-content: space-between;
			}
		}
	}
	.pay_posi{
		position: fixed;left: 0;bottom: 0;z-index: 99;
		width: 100%;background-color: #F1F1F1;display: flex;justify-content: space-between;padding: 16rpx 4%;
		.pay_posi_l{
			view{
				font-size: 32rpx;color: #daa856;font-weight: bold;
			}
		}
		.pay_posi_l_r{
			background-image: linear-gradient(90deg,#f1dab0,#ffcb6b);padding: 0 20rpx;line-height: 60rpx;height: 60rpx;margin-top: 10rpx;
			text-align: center;color: #52300f;font-size: 34rpx;
			border-radius: 50rpx;
		}
	}
	//问答
	.answer{
		width: 100%;padding: 40rpx;border-radius: 20rpx;
		background-color: #fdf6ec;margin-bottom: 150rpx;
		.answer_title{
			color: #60451a;font-size: 38rpx;text-align: center;font-weight: bold;
		}
		.answer_names{
			color: #60451a;font-size: 32rpx;font-weight: bold;line-height: 68rpx; 
		}
		.answer_cont{
			font-size: 30rpx;color: #999;line-height: 40rpx;
		}
	}
	.cont{
		width: 100%;padding: 0 3%;
		.nav_nine{
			display: flex;margin-top: 20rpx;padding: 20rpx;
			.nav_items{
				width: 20%;text-align: center;
				image{
					width: 100rpx;height: 100rpx;
				}
				view{
					line-height: 66rpx;color: #65390a;white-space: nowrap;font-size: 26rpx;
				}
			}
		}
		.trumpet{
			background-color: #fbf7eb;padding: 8rpx 0;border-radius: 50rpx;line-height: 40rpx;
			color: #66615a;display: flex;line-height: 58rpx;font-size: 26rpx;white-space: nowrap;
			image{
				width: 60rpx;
				height: 60rpx;margin-right: 10rpx;margin-left: 8rpx;
			}
		}
		//购买会员
		.buy_vip{
			width: 100%;
			margin-top: 24rpx;display: flex;justify-content: space-between;
			.vip_item{
				width: 30%;text-align: center;border: 4rpx solid #F1F1F1;padding: 20rpx;
				border-radius: 20rpx;
				.it_top{
					font-size: 30rpx;line-height: 66rpx;font-weight: bold;white-space: nowrap;
				}
				.it_c{
					color: #daa856;
					text{
						font-size: 38rpx;font-weight: bold;line-height: 76rpx;
					}
				}
				.it_bot{
					color: #999;text-decoration: line-through;line-height: 60rpx;
				}
			}
			.vip_item_act{
				background-color: rgba(218,168,86,0.26);border: 4rpx solid #ffcb6b;
			}
		}
		.buy_vip_s{
			width: 100%;
			margin-top: 24rpx;display: flex;justify-content: space-between;
			.vip_item{
				width: 30%;text-align: center;border: 4rpx solid #F1F1F1;padding: 20rpx;
				border-radius: 20rpx;
				.it_top{
					font-size: 30rpx;line-height: 66rpx;font-weight: bold;
					white-space: nowrap;
				}
				.it_c{
					color: #daa856;
					text{
						font-size: 38rpx;font-weight: bold;line-height: 76rpx;
					}
				}
				.it_bot{
					color: #999;line-height: 40rpx;
				}
				.it_but{
					display: flex;justify-content: space-between;line-height: 50rpx;
					.it_but_share{
						background-color: #daa856;margin-top: 10rpx;
						;padding: 0 20rpx;border-radius: 40rpx; 
					}
				}
			}
			.vip_item:nth-child(1){
				width: 66%;
			}
			.vip_item_act{
				background-color: rgba(218,168,86,0.26);border: 4rpx solid #ffcb6b;
			}
		}
		//立即开通
		.op_but{
			width: 96%;background-image: linear-gradient(90deg,#f1dab0,#ffcb6b);
			line-height: 90rpx;text-align: center;color: #52300f;font-size: 34rpx;font-weight: bold;
			border-radius: 50rpx;margin: 40rpx 0 20rpx 2%;
		}
	}
	.header{
		width: 100%;height: 300rpx;
		background-image: url(../../static/my/vip_backimg.png);
		background-size: 100% 100%;
		display: flex;justify-content: space-between;
		.header_l{
			padding-left: 52rpx;padding-top: 100rpx;display: flex;
			image{
				width: 100rpx;height: 100rpx;border-radius: 50%;margin-right: 20rpx;
			}
			.header_l_child{
				view{
					font-size: 34rpx;line-height: 60rpx;font-weight: bold;
				}
				text{
					color: #999;
				}
			}
		}
		.header_r{
			margin-right: 52rpx;padding-top: 130rpx;color: #fff;
			text{
				display: inline-block;
				padding: 10rpx 28rpx;border-radius: 50rpx;
				background-color: rgba(0,0,0,0.4);
			}
		}
	}
</style>
