<template>
	<!-- 金店管理 -->
	<view class="zl-page">
		<view class="box-one">
			<view class="zl-heads">
				<view class="heads"> 
					<text>金店logo</text>
				</view>
				<view class="images" @click="shopLogoPopup">
					<image class="shop-photo" :src="shopPhoto" mode="aspectFill"></image>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店名称</text>
				</view>
				<view class="nick-name" @click="skipShopName">
					<text>{{data.title}}</text>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店签名</text>
				</view>
				<view class="nick-name" @click="skipShopSignature">
					<text class="u-line-1">{{data.remark||'还没设置签名~'}}</text>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>客服电话</text>
				</view>
				<view class="nick-name" @click="skipServiceTel">
					<text>{{data.telephone||'还没设置手机号~'}}</text> 
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店地址</text>
				</view>
				<view class="nick-name" @click="skipShopAddress">
					<text>{{data.province}}{{data.city}}{{data.area}}{{data.address}}</text>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店客服二维码</text>
				</view>
				<view class="images" @click="skipServiceCode">
					<image class="shop-code" :src="data.qr_code" @click="imgpreview(data.qr_code)" mode="aspectFill"></image>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="box-two">
			<view class="zl-heads">
				<view class="heads">
					<text>金店数据</text>
				</view>
				<view class="nick-name" @click="skipShopData">
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>商城证书</text>
				</view>
				<view class="nick-name" @click="skipShopCertificate">
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店金价</text>
				</view>
				<view class="nick-name" @click="skipShopGoldPrice">
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="box-there">
			<view class="zl-heads" @click="skipSetPayee">
				<view class="heads">
					<text>收款设置</text>
				</view>
				<view class="nick-name">
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads" @click="skipSetWithdraw">
				<view class="heads">
					<text>提现设置</text>
				</view>
				<view class="nick-name">
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				image:'',
				data : [] ,
				shopPhoto: '',
				shopName: '',
				shopSignature: '',
				shopTelephone: '',
				shopAddress: '',
				show: false,
				text: 'uni.request',
				avatar:''
			}
		},
		onLoad(op) {
		},
		onShow(){
			this.$api.get("manage").then(res=>{
				console.log(res)
				this.data = res.data
				this.shopPhoto=res.data.avatar
			})
		},
		methods: {
			//图片预览
			imgpreview(e){
				let arr = []
				arr.push(e)
				uni.previewImage({
					urls:arr
				})
			},
			shopLogoPopup() {
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
								that.shopPhoto = that.image
								that.$api.post('manage',{avatar:that.image}).then(res=>{
									console.log(res)
									that.com.msg(res.message)
								})
								
							}
						});
						
					}
				});
			},
			skipShopName() {
				uni.navigateTo({
					url: './shop-name?title='+this.data.title+'&id='+this.data.id
				})
			},
			skipShopSignature() {
				uni.navigateTo({
					url: './shop-signature?remark='+this.data.remark
				})
			},
			//客服电话
			skipServiceTel() {
				uni.navigateTo({
					url: './service-tel?telephone='+this.data.telephone+'&is_display='+this.data.is_telephone
				})
			},
			//金店地址
			skipShopAddress() {
				uni.navigateTo({
					url: './shop-address?province='+this.data.province+'&city='+this.data.city+'&area='+this.data.area+'&address='+this.data.address+'&is_address='+this.data.is_address
				})
			},
			//二维码
			skipServiceCode() {
				uni.navigateTo({
					url: 'service-code?is_qr_code='+this.data.is_qr_code+'&qr_code='+this.data.qr_code
				})
			},
			//金店数据
			skipShopData() {
				uni.navigateTo({
					url: 'shop-data?id='+this.data.id
				})
			},
			//商城证书
			skipShopCertificate() {
				uni.navigateTo({
					url: 'shop-certificate?sign='+this.data.sign+'&certificate='+this.data.certificate
				})
			},
			//金店金价
			skipShopGoldPrice() {
				uni.navigateTo({
					url: 'shop-gold-price'
				})
			},
			//收款设置
			skipSetPayee() {
				uni.navigateTo({
					url: 'set-payee?wechat_image='+this.data.wechat_image+'&alipay_image='+this.data.alipay_image
				})
			},
			//提现设置
			skipSetWithdraw() {
				this.com.navto('../set-shop/set-withdraw')
			},
		}
	}
</script>

<style lang="scss">
	.box-one,
	.box-two,
	.box-there {
		background-color: #FFFFFF;
		border-top: solid 20upx #F8F8F8;
	}

	.zl-head {
		padding: 20upx 30upx;
		border-bottom: solid 2upx #F8F8F8;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.zl-heads {
		width: 100%;
		height: 100upx;
		padding: 0 30upx;
		border-bottom: solid 2upx #F8F8F8;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.heads {
		font-size: 28upx;
	}

	.images {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		image{
			width: 80rpx;height: 86rpx;
		}
		.shop-photo {
			width: 25%;
			border-radius: 100%;
			background-color: #F6F6F6;
		}

		.shop-code {
			width: 80rpx;height: 80rpx;
		}
	}

	.nick-name {
		width: 70%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 26upx;
		color: #999999;
	}

	.icon {
		font-size: 32upx;
		color: #CCCCCC;
		margin-left: 10upx;
	}

	.shop-logo-popup {
		width: 100%;
		font-size: 32upx;
		padding: 0 30upx;

		.take-picture,
		.album {
			height: 110upx;
			line-height: 110upx;
			text-align: center;
			border-bottom: solid 2upx #F8F8F8;
		}

		.cancel {
			height: 140upx;
			line-height: 140upx;
			text-align: center;
			border-bottom: solid 2upx #F8F8F8;
			color: #ff3b3b;
		}
	}
</style>
