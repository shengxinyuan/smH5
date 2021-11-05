<template>
	<view>
		<view class="wallet_rent">
			<view class="wallet_rent_l">
				<view class="rent_l_top">
					 可提现金额(元)
				</view>
				<view class="rent_l_but">
					{{stdata.money}}
				</view>
			</view>
			<view class="wallet_rent_r">
				<view class="rent_r_it" @click="go_pages('./withdraw?money='+stdata.money+'&feil='+stdata.alipay_rate+'&bank='+stdata.bank_rate)">
					<u-icon name="red-packet-fill" size="34" style="margin-right: 14rpx;"></u-icon> 提现
				</view>
				<view class="rent_r_it" @click="go_pages('./recharge')">
					<u-icon name="rmb-circle-fill" size="36" style="margin-right: 14rpx;"></u-icon>	充值
				</view>
			</view>
		</view>
		<!-- 统计 -->
		<view class="num_t">
			<view class="num_t_item" v-for="(it,ind) in list" :key="ind" >
				<view > {{it.name}}</view> 
				<view> {{it.price}} </view>
			</view>
		</view>
		<!-- 列表 -->
		<view class="recharg_it">
			<view class="recharg_it_child" @click="go_pages('./particulars?type='+1)">
				<view class="">
					<u-icon name="order" size="44" color="#999" style="margin-right: 20rpx;"></u-icon>
					提现明细
				</view>
				<view>
					<u-icon name="arrow-right" size="38" color="#999" style="margin-right: 20rpx;"></u-icon>
				</view>
			</view>
			<view class="recharg_it_child" @click="go_pages('./particulars?type='+2)">
				<view class="">
					<u-icon name="red-packet" size="44" color="#999" style="margin-right: 20rpx;"></u-icon>
					返利明细
				</view>
				<view>
					<u-icon name="arrow-right" size="38" color="#999" style="margin-right: 20rpx;"></u-icon>
				</view>
			</view>
			<view class="recharg_it_child" @click="go_pages('./particulars?type='+3)">
				<view class="">
					<u-icon name="bag" size="44" color="#999" style="margin-right: 20rpx;"></u-icon>
					消费明细
				</view>
				<view>
					<u-icon name="arrow-right" size="38" color="#999" style="margin-right: 20rpx;"></u-icon>
				</view>
			</view>
			<view class="recharg_it_child" @click="go_pages('./particulars?type='+4)">
				<view class="">
					<u-icon name="rmb-circle" size="44" color="#999" style="margin-right: 20rpx;"></u-icon>
					充值明细
				</view>
				<view>
					<u-icon name="arrow-right" size="38" color="#999" style="margin-right: 20rpx;"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				stdata:'',
				list:[]
			}
		},
		onNavigationBarButtonTap(e) {
			this.com.navto("wallets_theory?cont="+this.stdata.data)
		},
		onShow() {
		 	this.money()
		},
		methods:{
			//钱包
			money(){
				this.$api.get('money').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.stdata = res.data
						this.list = [
							{
								name:'总收入(元)',
								price:res.data.total_money
							},
							{
								name:'待返利(元)',
								price:res.data.rebate_money
							},
							{
								name:'已提现(元)',
								price:res.data.have_withdrawal
							}
						]
					}
				})
			},
			go_pages(e){
				this.com.navto(e) 
			}
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style scoped lang="scss">
	//列表
	.recharg_it{
		width: 100%;padding: 3%;
		.recharg_it_child{
			background-color: #fff;padding: 30rpx;display: flex;justify-content: space-between;
			margin-bottom: 5rpx;
		}
	}
	.num_t{
		width: 100%;background-color: #21346b;height: 120rpx;display: flex;
		border-top: 1rpx solid #3a4b7e;color: #fff;
		.num_t_item{
			width: 33%;padding-left: 24rpx;padding-top: 14rpx;
			border-right: 2rpx solid #3a4b7e;
			view:nth-child(1){
				line-height: 50rpx;font-size: 28rpx;
			}
			view:nth-child(2){
				font-size: 34rpx;
			}
		}
		.num_t_item:last-child{
			border-right: 0;
		}
	}
.wallet_rent{
	width: 100%;background-color: #21346b;height: 280rpx;display: flex;justify-content: space-between;padding: 0 3%;
	.wallet_rent_l{
		
		.rent_l_top{
			color: #fff;line-height: 80rpx;margin-top: 30rpx;
		}
		.rent_l_but{
			color: #ffe1bb;font-size: 44rpx;
		}
	}
	.wallet_rent_r{
		color: #FFFFFF; 
		.rent_r_it{
			margin: 30rpx 0;background-color: rgba(255,255,255,0.3);padding: 18rpx 40rpx;border-radius: 40rpx;
		}
	}
}
</style>
