<template>
	<view>
		<view class="header_bait">
			<view class="toubu">
				<view class="header_left" @click="goto_top">
					<u-icon name="arrow-left" size="54"></u-icon>
				</view>
				<view class="center">
					<view class="center_it" > 
						确认支付
					</view>
				</view>
				<view class="head_share">
					<!-- 剩余支付 2分钟 -->
				</view>
			</view>
			<view class="price_num">
				￥ <text>{{shop_data.shop_price}}</text>
			</view>
		</view>
		<view class="payments">
			<view class="payment_item" v-for="(it,ind) in list" :key="ind">
				<view class="item_child">
					<view class="it_l">
						<image :src="it.img" mode=""></image>
					</view>
					<view class="it_c">
						{{it.name}}
						<view class="it_c_child">
							{{it.remake}}
						</view>
					</view>
				</view>
				<view class="item_child_r">
					 <view @click="radion(it.name,ind)">
						<label class="radio"><radio :checked="it.display" /></label>
						
					</view>
				</view>
			</view>
			<view class="payment_img p1" v-if="img_show == 2">
				<view class="posi">
					<view class="names" @click="clone(pay_img.bank_name)"> {{pay_img.bank_name}} </view>
					<view class="kaihuh"  @click="clone(pay_img.bank)">
						{{pay_img.bank}}
					</view>
				</view>
				<view class="pay_kah" @click="clone(pay_img.bank_num)">{{pay_img.bank_num}}</view>
			</view>
			<view class="payment_img" v-if="img_show == 4">
				<image :src="pay_img.alipay_image" mode="aspectFill">
			</view>
			<view class="payment_img" v-if="img_show == 5">
				<image :src="pay_img.wechat_image" mode="aspectFill">
			</view>
			<view class="img_top" v-if="img_show == 2 || img_show == 4 || img_show == 5">
				<view class="img_top_tit">
					请上传支付凭证，需要审核
				</view>
				<u-upload ref="uUpload" :action="action" width="670rpx" height="320rpx" max-count="1" :header="token"></u-upload>
			</view>
		</view>
		<view class="but">
			<zs-button :buttitle="title" @but_cli="payment"></zs-button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				action: 'http://zuanshi.dis.wanheweb.com/api/uploads',
				token:{
					token:uni.getStorageSync('token') //图片请求头 
				},
				list:[	
					
					{
						img:'../../static/my/payment/zhifub.png',
						name:'支付宝支付',
						remake:'需扣除0.6%的手续费，方便快捷',
						display:true
					},
					{
						img:'../../static/my/payment/weixin.png',
						name:'微信支付',
						remake:'需扣除0.6%的手续费，方便快捷',
						display:false
					},
					{
						img:'../../static/my/payment/yhka.png',
						name:'银行卡支付',
						remake:'无需手续费，需人工确认',
						display:false
					},
					{
						img:'../../static/my/payment/yue.png',
						name:'余额支付',
						remake:'可以余额 0 ',
						display:false
					},
					
					{
						img:'../../static/my/payment/zfb_zhuanz.png',
						name:'支付宝转账',
						remake:'无需手续费，需人工确认',
						display:false
					},
					{
						img:'../../static/my/payment/zhuanzhang.png',
						name:'微信转账',
						remake:'无需手续费，需人工确认',
						display:false
					},
				],
				title:'立即支付',
				img_show:0,
				order_return:'',
				shop_data:'',//要
				image_det:'',//图片
				pay_img:'',
				lists:[] 
			}
		},
		onLoad(e) {
			// console.log(JSON.parse(e.data))
			// console.log(JSON.parse(e.shop))
			
			this.order_return = e.data
			this.shop_data = JSON.parse(e.shop)
			this.page_reader()
				
		},
		methods:{
			page_reader(){
				this.$api.get('bank_info').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.pay_img = res.data
						this.list = [
								
								{
									img:'../../static/my/payment/zhifub.png',
									name:'支付宝支付',
									remake:'需扣除'+res.data.alipay_money+'%的手续费，方便快捷',
									display:true
								},
								{
									img:'../../static/my/payment/weixin.png',
									name:'微信支付',
									remake:'需扣除'+res.data.wechat_money+'%的手续费，方便快捷',
									display:false
								},
								{
									img:'../../static/my/payment/yhka.png',
									name:'银行卡支付',
									remake:'无需手续费，需人工确认',
									display:false
								},
								{
									img:'../../static/my/payment/yue.png',
									name:'余额支付',
									remake:'可以余额'+this.shop_data.menber_price,
									display:false
								},
								
								{
									img:'../../static/my/payment/zfb_zhuanz.png',
									name:'支付宝转账',
									remake:'无需手续费，需人工确认',
									display:false
								},
								{
									img:'../../static/my/payment/zhuanzhang.png',
									name:'微信转账',
									remake:'无需手续费，需人工确认',
									display:false
								},
							]
					}
				})
			},
			//复制
			clone(e){
				let that = this
				uni.setClipboardData({
				    data: e,
				    success: function () {
				       that.com.msg('已复制')
				    }
				});
			},
			//返回上一页
			goto_top(){
				uni.navigateBack()
			},
			//单选
			radion(e,ind){
				this.list.forEach(i=>{
					if(e == i.name){
						i.display = true
					}else{
						i.display = false
					}
				})
				this.img_show = ind
			},
			//支付宝
			zfb_alipay(e){
				uni.requestPayment({
					provider: 'alipay',
					orderInfo:e,
					success: function(res) {
					   uni.showToast({
					   		title:'支付成功，正在跳转到订单列表..',icon:'none'
					   })
					  let aq = 2
					  let time = setInterval(()=>{
					  	aq -=1
					  	if(aq == 0){
					  		uni.redirectTo({
					  			url:'../my/order?state='+20+'&index='+2
					  		})
					  		clearInterval(time)
					  	}
					  },1000)
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
						console.log(res)
					   uni.showToast({
							title:'支付成功，正在跳转到订单列表..',icon:'none'
					   })
					   let aq = 2
					   let time = setInterval(()=>{
					   	aq -=1
					   	if(aq == 0){
					   		uni.redirectTo({
					   			url:'../my/order?state='+20+'&index='+2
					   		})
					   		clearInterval(time)
					   	}
					   },1000)
					},fail: function(err) { 
						console.log(err)
						uni.showToast({
							title:'支付失败',icon:'none'
						})
					}
				});
			},
			//支付
			payment(){
				
				// console.log(this.img_show)
				//余额支付判断
				if(this.img_show == 3 && this.shop_data.menber_price - this.shop_data.shop_price <= 0){ 
					this.com.msg('您的余额不足，请切换支付方式')
					return false
				}
				//请求参数
				let data = {
					bn_id:this.order_return,
					vip_id:this.shop_data.vip,
					type:this.img_show,
					image:this.image_det
				}
				this.$api.post('pay',data).then(res=>{
					console.log(res)
					
					if(res.status == 1){
						//支付宝
						if(this.img_show == 0){
							this.zfb_alipay(res.data)
						//微信
						}else if(this.img_show == 1){
							this.weixin(res.data)
						}else if(this.img_show == 2 ||this.img_show == 4||this.img_show == 5){
							//获取上传的图片
							this.lists = this.$refs.uUpload.lists;
							if(this.lists.length != 0){
								this.image_det = this.lists[0].response.data
							}
							
							if(this.image_det){
								this.com.msg('已提交审核，通过后将会发货~')
								let aq = 2
								let time = setInterval(()=>{
									aq -=1
									if(aq == 0){
										uni.redirectTo({
											url:'../my/order?state='+10+'&index='+1
										})
										clearInterval(time)
									}
								},1000)
							}else{
								this.com.msg('请上传支付成功截图')
							}
						}else if(this.img_show == 3){
							this.com.msg('支付成功，正在跳转到订单列表..')
							let aq = 2
							let time = setInterval(()=>{
								aq -=1
								if(aq == 0){
									uni.redirectTo({
										url:'../my/order?state='+20+'&index='+ 2
									})
									clearInterval(time)
								}
							},1000)
						}
					}else{
						this.com.msg(res.message)
					}
					
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
.header_bait{
	width: 100%;height: 280rpx;padding-top: 60rpx;
	position: fixed;left: 0;top: 0;z-index: 99;
	background-image: url(../../static/my/pay_bgomg.png);
	background-size: 100% 100%;
	.toubu{
		
		padding: 0 16rpx;
		line-height: 100rpx;
		display: flex;justify-content: space-between;
		color: #fff;
		.header_left{
			width: 20%;
		}
		.center{
			width: 60%;font-size: 32rpx;
			.center_it{
				// text-align: center;
				padding-left: 16%; 
				position: relative;
				&.active{
					color: #2d407a;
					&:before{
						content: '';
						position: absolute;
						left: 22%;
						bottom: 20%;
						transform: translateY(-50%);
						height: 7rpx;
						width: 56%;
						background-color: #2d407a;
						border-radius: 0 4px 4px 0;
						opacity: .8;
					}
				}
			}
		}
		.head_share{
			white-space: nowrap;
		}
	}
	.price_num{
		width: 100%;text-align: center;color: #fff;
		line-height: 80rpx;
		text{
			font-size: 40rpx;
		}
	}
}
.payments{
	width: 100%;padding: 0 4%;
	margin-top: 300rpx;
	.payment_item{
		width: 100%;
		display: flex;justify-content: space-between;margin-top: 20rpx;
		border-bottom: 1rpx solid #eee;height: 100rpx;
		.item_child{
			display: flex;
			.it_l{
				width: 58rpx;height: 56rpx;margin-right: 20rpx;line-height: 100rpx;
				image{
					width: 100%;height: 100%;
				}
			}
			.it_c{
				font-size: 32rpx;
				.it_c_child{
					font-size: 28rpx;color: #999;
				}
			}
		}
		.item_child_r{
			line-height: 100rpx;
		}
	}
	.p1{
		background-image: url(../../static/yhka.png);background-size: 100% 320rpx;
	}
	.payment_img{
		margin-top: 40rpx;width: 100%;
		height: 320rpx;
		position: relative;
		image{
			width: 100%;
			height: 100%;
		}
		.posi{
			position: absolute;left: 140rpx;top: 40rpx;
			.names{
				font-size: 36rpx;color: #CDA750;font-weight: bold;
			}
			.kaihuh{
				font-size: 28rpx;color: #CDA750;
			}
		}
		
		.pay_kah{
			position: absolute;left: 60rpx;bottom: 100rpx;
			line-height: 66rpx;font-size: 32rpx;
		}
		
	}
	.img_top{
		margin-top: 28rpx;
		.img_top_tit{
			font-size: 28rpx;color: #999;padding-left: 22rpx;
		}
	}
}
.but{
	width: 100%;
	position: fixed;left: 0;bottom: 30rpx;z-index: 22;
}
</style>
