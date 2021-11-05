<template>
	<view style="padding: 3% 4%;">
		<view class="head_type">
			<view class="head_type_l" v-if="pageType != 1">
				到账
			</view>
			<view class="head_type_l" v-else>
				充值方式
			</view>
			<view class="head_type_r">
				<view class="type_r_child">
					<label class="radio" @click="radio_cli(1)">
						<text>
							<u-icon name="zhifubao-circle-fill" color="#1596e8" size="40"></u-icon>支付宝
						</text>
					  <radio  :checked="pay_type == 1" />
					</label>        
				</view>
				<view class="type_r_child" v-if="pageType == 1">
					 <label class="radio" @click="radio_cli(2)">
						 <text>
							 <u-icon name="weixin-circle-fill" color="#09bb07" size="40"></u-icon>微信
						</text>
						 <radio  :checked="pay_type == 2" />
					</label>
				</view>
				<view class="type_r_child" v-else>
					 <label class="radio" @click="radio_cli(2)">
						 <text>
							 <u-icon name="rmb-circle-fill" color="#d0a450" size="40"></u-icon>银行卡
						</text>
						 <radio  :checked="pay_type == 2" />
					</label>
				</view>
			</view>
		</view>
		<view class="pay_sty" v-if="pageType != 1">
			<view class="head_type_l">
				提现金额 <text >可用余额 {{money}} 元</text><text @click="quanb(money)" style="color: orange;">全部提现</text>
			</view>
			<view class="pay_sty_inp">
				<text>￥</text>
				<input type="number" v-model="value" @blur="ok_inp"/>
			</view>
			<view class="pay_sty_pass"> 
				服务费<text>￥ {{fuwu_money}}</text>
			</view>
			<view class="pay_sty_pass">
				费率 <text v-if="pay_type == 1">{{feil}}%</text>
					 <text v-else>{{bank}}%</text>
			</view>
			<view class="pay_sty_pass">
				注：保留整数
			</view>
		</view>
		<view class="pay_sty" v-else>
			<view class="head_type_l">
				充值金额
			</view>
			<view class="pay_sty_inp">
				<text>￥</text>
				<input type="number" v-model="value" @blur="ok_inp"/>
			</view>
			<view class="pay_sty_pass">
				注：保留整数
			</view>
		</view> 
		<view class="go_buts" @click="but_cli">
			{{buttitle}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pay_type:1,
				value:''
				
			};
		},
	
		props:{
			buttitle:{
				default:'申请提现'
			},//文字展示
			pageType:{
				default:1
			},//页面类型
			money:{}, 
			feil:{},// 支付宝费率
			bank:{}, //银行卡费率
		},
		
		computed:{
			fuwu_money(){
				let arr = 0
				if(this.pay_type == 1){ //支付宝
					arr = this.feil / 100
				}else{
					arr = this.bank / 100
				}
				let at = arr * this.value
				return at.toFixed(2)
			},
		},
		methods:{
			quanb(e){
				this.value = e
			},
			radio_cli(e){
				console.log(e)
				this.pay_type = e
			}, 
			ok_inp(e){
				this.value = Math.floor(e.detail.value)
			},
			but_cli(){
				// console.log(this.fuwu_money,this.value)
				
				let arr =this.value - this.fuwu_money
				this.$emit('but_cli',this.pay_type,arr.toFixed(2))
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
	.go_buts{
		width: 90%;background-color: #283b77;color: #FFFFFF;padding: 20rpx;text-align: center;margin-left: 5%;border-radius: 50rpx;margin-top: 60rpx;
		font-size: 32rpx;
	}
	.pay_sty{
		background-color: #FFFFFF;border-radius: 16rpx;padding: 20rpx;margin-top: 22rpx;
		.head_type_l{
			font-weight: bold;font-size: 34rpx;
			text{
				font-weight: none;font-size: 28rpx;margin-left: 24rpx;color: #999;
			}
		}
		.pay_sty_inp{
			display: flex;border-bottom: 1rpx solid #F1F1F1;padding-top: 28rpx;font-size: 38rpx;
			input{
				font-size: 48rpx;font-weight: bold;margin-left: 14rpx;
			}
		}
		.pay_sty_pass{
			color: #999;margin-top: 16rpx;display: flex;justify-content: space-between;
		}
	}
.head_type{
	background-color: #FFFFFF;border-radius: 16rpx;padding: 20rpx;justify-content: space-between;display: flex;
	.head_type_l{
		font-weight: bold;font-size: 34rpx;
	}
	.head_type_r{
		padding-right: 10rpx;
		.type_r_child{
			
			line-height: 90rpx; 
			font-size: 32rpx;
			.radio{
				width: 240rpx;
				display: flex;justify-content: space-between;
				
			}
		}
	}
}
</style>
