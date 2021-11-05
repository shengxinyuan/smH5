<template>
	<view class="service-tel-box">
		<view class="tel">
			<view class="u-upload-box" @click="shopLogoPopup">
				<!-- <u-upload :action="action" ref="uUpload" :header="token"
				:max-count="1"
				:width="width"
				:height="height"></u-upload> -->
				<image class="shop-photo" :src="shopPhoto" mode="aspectFill"></image>
			</view>
		</view>
		<view class="show-switch-box">
			<view class="show-switch-up">
				<view>商城中展示:</view>
				<u-switch v-model="checked" active-color="#2d407a" size="40" @change="change"></u-switch>
			</view>
			<view class="show-switch-down">
				<u-icon class="icon warning" name="warning"></u-icon>
				<text>商城显示开关按钮可以控制商城是否显示此信息。</text>
			</view>
			<view class="zl-btn">
				<button class="btn" @click="save">保存</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				token:{
					token:uni.getStorageSync('token')
				},
				width: 230,
				height: 230,
				checked: false,
				lists:[],
				image:'',
				shopPhoto: '',
			}
		},
		onLoad(e){
			console.log(e)
			this.checked = e.is_qr_code == 1 ? true : false
			this.shopPhoto = e.qr_code
		},
		methods: {
			change(e) {
				this.checked = e
			},
			//保存
			save(){
				// console.log(this.lists)
				let arr = {
					qr_code:this.shopPhoto,
					is_qr_code:this.checked ? 1 : 2
				}
				this.$api.post("manage",arr).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.com.msg(res.message)
						uni.navigateBack()
					}
					
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
							}
						});
						
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.service-tel-box {
		padding: 0 30upx;

		.tel {
			padding: 30upx 0;
			border-top: solid 2upx #f8f8f8;
			border-bottom: solid 2upx #f8f8f8;

			input {
				font-size: 30upx;
			}
			.u-upload-box{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 400rpx;height: 400rpx;
				}
			}
		}

		.show-switch-box {
			margin-top: 30upx;

			.show-switch-up {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 28upx;
			}

			.show-switch-down {
				margin-top: 20upx;
				font-size: 22upx;
				color: #f9817d;

				.icon {
					font-size: 30upx;
					margin-right: 10upx;
				}
			}

			.zl-btn {
				margin-top: 60upx;

				.btn {
					height: 80upx;
					line-height: 80upx;
					font-size: 28upx;
					color: #FFFFFF;
					background-image: linear-gradient(90deg,
						#2b3f7d 0%,
						#1b2c60 100%);
					border-radius: 40upx;
				}
			}
		}
	}
</style>
