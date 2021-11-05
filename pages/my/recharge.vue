<template>
	<view class="">
		<zs-wallets :pageType="1" :buttitle="'充值'" @but_cli="but_cli"></zs-wallets>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onNavigationBarButtonTap() {
			this.com.navto('./particulars?type='+4)
		},
		methods:{
			but_cli(num,val){
				// console.log(num,val.toFixed(2))
				this.$api.post('top_up',{total:val.toFixed(2),type:num}).then(res=>{
					console.log(res)
					if(res.status == 1){
						if(num == 1){
							this.zfb_alipay(res.data)
						}else{
							this.weixin(res.data)
						}
					}
				})
			},
			//支付宝
			zfb_alipay(e){
				uni.requestPayment({
					provider: 'alipay',
					orderInfo:e,
					success: function(res) {
					   uni.showToast({
					   		title:'充值成功..',icon:'none'
					   })
					},
					fail: function(err) {
						uni.showToast({
							title:'失败',icon:'none'
						})
					}
				});
			},
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
							title:'充值成功..',icon:'none'
					   })
					},fail: function(err) { 
						console.log(err)
						uni.showToast({
							title:'支付失败',icon:'none'
						})
					}
				});
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
	
</style>
