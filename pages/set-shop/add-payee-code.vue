<template>
	<view>
		<view class="add-payee-code-image">
			<image src="../../static/set-shop/add_code.png" mode="widthFix"></image>
		</view>
		<view class="bottom-box">
			<view class="notice">
				{{noticeText}}
			</view>
			<view class="bottom-btn">
				<button class="btn" @click="uploadcode">上传二维码</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeText:'*请上传真实有效的收款二维码图片，以便客户购买您的商品时能立即向您付款',
				type:0,
				image:'',//微信
				imagetwo:'',//支付宝
				wechat_image:'',
				alipay_image:''
			}
		},
		onLoad(e){ // 1微信 2支付宝
			console.log(e)
			this.type = e.id
			this.alipay_image = e.alipay_image
			this.wechat_image = e.wechat_image
		},
		methods: {
			uploadcode(){
				if(this.type == 1){
					let that = this
					uni.chooseImage({
						sourceType: ['camera '], //从相册选择
						success: (chooseImageRes) => {
							console.log(chooseImageRes)
							const tempFilePaths = chooseImageRes.tempFilePaths[0]
							console.log(chooseImageRes.tempFilePaths[0])
							uni.uploadFile({
								url: 'http://zuanshi.dis.wanheweb.com/api/uploads',
								filePath: tempFilePaths,
								name: 'file',
								formData: {
									'user': 'test'
								},
								header:{
									'token':uni.getStorageSync('token')
								},
								success: (up) => {
									that.image = JSON.parse(up.data).data
									// console.log(JSON.parse(up.data))
									// that.shopPhoto = that.image
									that.$api.post('manage',{wechat_image:that.image}).then(res=>{
										console.log(res)
										if(res.status == 1){
											uni.redirectTo({
												url:'set-payee?wechat_image='+that.image+'&alipay_image='+that.alipay_image
											})
										}
									})
								}
							});
						}
					});
				}else{
					let that = this
					uni.chooseImage({
						sourceType: ['camera '], //从相册选择
						success: (chooseImageRes) => {
							console.log(chooseImageRes)
							const tempFilePaths = chooseImageRes.tempFilePaths[0]
							console.log(chooseImageRes.tempFilePaths[0])
							uni.uploadFile({
								url: 'http://zuanshi.dis.wanheweb.com/api/uploads',
								filePath: tempFilePaths,
								name: 'file',
								formData: {
									'user': 'test'
								},
								header:{
									'token':uni.getStorageSync('token')
								},
								success: (up) => {
									that.imagetwo = JSON.parse(up.data).data
									// console.log(JSON.parse(up.data))
									// that.shopPhoto = that.image
									that.$api.post('manage',{alipay_image:that.imagetwo}).then(res=>{
										console.log(res)
										if(res.status == 1){
											uni.redirectTo({
												url:'set-payee?alipay_image='+that.imagetwo+'&wechat_image='+that.wechat_image
											})
										}
									})
								}
							});
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	.add-payee-code-image{
		width: 100%;
		display: flex;
		image{
			width: 100%;
		}
	}
	.bottom-box{
		position: fixed;
		bottom: 0;
		left: 0;
		.notice{
			padding: 16upx 30upx;
			background-color: #fde7e7;
			font-size: 22upx;
			color: #f9817d;
		}
		.bottom-btn{
			padding: 20upx 30upx;
			.btn{
				font-size: 30upx;
				color: #2b3f7d;
				border: solid 2upx #2b3f7d;
				border-radius: 40upx;
			}
		}
	}
</style>
