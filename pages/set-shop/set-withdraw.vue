<template>
	<view class="zl-page zl-box">
		<view v-if="page_show">
			<view class="add-box" v-if="zfb == ''">
				<view class="add-min-box" @click="skipAddAlipay" >
					<view class="add-btn one">
						<u-icon class="icon jiahao" name="plus"></u-icon>
					</view>
					<view class="add-title zhifubao">添加支付宝</view>
				</view>
			</view>
			<!-- 支付宝 -->
			<view class="add-boss" v-else @click="alipay(zfb,0)" @longpress="del_s(zfb.id)">
				<view class="boss_top">
					{{zfb.name}}
				</view>
				<view class="boss_but">
					{{zfb.account_number}}
				</view>
			</view>
			<view class="add-box" v-if="yhk == ''">
				<view class="add-min-box two" @click="skipAddBankCard" >
					<view class="add-btn two">
						<u-icon class="icon jiahao" name="plus"></u-icon>
					</view>
					<view class="add-title yinhangka">添加银行卡</view>
				</view>
			</view>
			<view class="add-bos_s" v-else @click="alipay(yhk,1)" @longpress="del_s(yhk.id)">
				<view class="boss_top">
					{{yhk.name}}
				</view>
				<view class="boss_but">
					{{yhk.account_number}}
				</view>
			</view>
		</view>
		<view v-else>
			<zs-login></zs-login>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zfb:[],
				yhk:[],
				page_show:false
			}
		},
		onLoad(op) {
			if(op.tit){
				this.com.msg(op.tit)
			}
			this.page_reader()
		},
		methods: {
			page_reader(){
				this.$api.get('withdrawal').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.page_show = true
						res.data.forEach(o=>{
							if(o.type==0){ //支付宝
								this.zfb = o
								console.log(this.zfb)
							}else{
								this.yhk = o
								console.log(this.yhk)
							}
						})
					}
				})
			},
			//修改支付宝
			alipay(e,type){
				if(type == 0){ //支付宝
					this.com.navto('./add-alipay?datas=' + JSON.stringify(e))
				}else{ //银行卡
					this.com.navto('./add-bank-card?datas=' + JSON.stringify(e))
				}
			},
			
			//支付宝
			skipAddAlipay(){
				uni.redirectTo({
					url:'./add-alipay'
				})
			},
			//银行卡
			skipAddBankCard(){
				uni.redirectTo({
					url:'./add-bank-card'
				})
			},
			// 长按删除
			del_s(e){
				let that = this
				uni.showModal({
					content:'确定要删除吗？',
					success(a) {
						if(a.confirm){
							that.$api.del('withdrawal',{id:e}).then(res=>{
								console.log(res)
								if(res.status == 1){
									that.com.redto('../set-shop/set-withdraw?tit='+'删除成功')
								}
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
		background-color: #F6F6F6;
	}
</style>
<style lang="scss">
	.zl-box{
		padding: 20upx 30upx;
	}
	.add-boss{
		width: 100%;
		height: 200upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		margin-bottom: 20upx;
		background-image: url(../../static/set-shop/zfb_01.png);background-size: 100% 100%;
		padding: 40rpx 38rpx;color: #fff;
		.boss_top{
			font-size: 42rpx;line-height: 66rpx;
		}
	}
	.add-bos_s{
		width: 100%;
		height: 200upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		margin-bottom: 20upx;
		background-image: url(../../static/set-shop/yhk_01.png);background-size: 100% 100%;
		padding: 40rpx 38rpx;color: #fff;
		.boss_top{
			font-size: 42rpx;line-height: 66rpx;
		}
	}
	.add-box{
		width: 100%;
		height: 200upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		margin-bottom: 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.add-min-box{
			display: flex;
			align-items: center;
			.add-btn{
				width: 40upx;
				height: 40upx;
				border-radius: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.icon{
					font-size: 28upx;
					color: #FFFFFF;
				}
			}
			.add-title{
				height: 40upx;
				line-height: 40upx;
				font-size: 32upx;
				padding-left: 20upx;
			}
			.one{
				background-color: #02a9f1;
			}
			.zhifubao{
				color: #02a9f1;
			}
			.two{
				background-color: #2b3f7d;
			}
			.yinhangka{
				color: #2b3f7d;
			}
		}
	}
</style>
