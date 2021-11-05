<template>
	<view class="">
		<zs-wallets @but_cli="but_cli" :money="money" :feil="feil" :bank="bank" :pageType="2"></zs-wallets>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				money:'',
				feil:'',
				bank:''
			}
		},
		onLoad(op) {
			console.log(op)
			this.money = op.money
			this.feil = op.feil
			this.bank = op.bank
			this.member = uni.getStorageSync('member_info')
		},
		onNavigationBarButtonTap() {
			this.com.navto('./particulars?type='+1)
		},
		methods:{
			//提现成功
			
			but_cli(e,money){
				let that = this
				let data = {
					price:money,
					member_account_id:e,
					title:e == 1?'支付宝' : '银行卡'
				}
				this.$api.post('withdrawal',data).then(res=>{
					console.log(res)
					if(res.status == 1){
						uni.showModal({
							title:'提现申请提交成功',
							content:'平台审核通过后会向您的账户进行转账，请耐心等待',
							confirmText:'继续提现',
							cancelText:"返回钱包",
							success(a) {
								if(a.confirm){
								
								}else{
									uni.navigateBack()
								}
							}
						})
					}
				})
				
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>
