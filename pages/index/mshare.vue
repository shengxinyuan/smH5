<template>
	<view class="zl-box">
		<view class="box-one">
			<view class="title"><text>{{datas.title}}</text></view>
			<view class="text"><text>{{datas.remark}}</text></view>
			<view><text>成色：{{datas.texture}}</text></view>
			<view class="weight"><text>克重：{{datas.min_g + '-' + datas.max_g}}</text></view>
		</view>
		<view class="box-two">
			<u-checkbox-group v-for="(item,index) in datas.album" :key="index">
				<view style="display: flex;justify-content: space-between;flex-wrap: wrap;">
					<view class="photo-box" v-if="index != 0">
						<view class="photo">
							<image :src="item.img0" mode="aspectFill"></image>
						</view>
						<view class="checkbox">
							<u-checkbox v-model="item.checked" @change="checkboxChange($event,index)" shape="circle"
								active-color="#2d407a"></u-checkbox>
						</view>
					</view>
				</view>
			</u-checkbox-group>
		</view>
		<view class="bottom-box">
			<view class="min-box" @click="share(0)">
				<image src="https://zuanshi.semoh.cn/applet_static/index/haoyou.png" mode="aspectFill"></image>
				<view style="margin-top: 6upx;">微信好友</view>
			</view>
			<view class="min-box" @click="share(1)">
				<image src="https://zuanshi.semoh.cn/applet_static/index/pyq.png" mode="aspectFill"></image>
				<view style="margin-top: 6upx;">朋友圈</view>
			</view>
			<view class="min-box" @click="share(2)">
				<image src="https://zuanshi.semoh.cn/applet_static/index/lianjie.png" mode="aspectFill"></image>
				<view style="margin-top: 6upx;">分享链接</view>
			</view>
			<view class="min-box" @click="share(3)">
				<image src="https://zuanshi.semoh.cn/applet_static/index/save.png" mode="aspectFill"></image>
				<view style="margin-top: 6upx;">生成海报</view>
			</view>
		</view>
		<u-popup v-model="canvasShow" mode="center" z-index="9999">
			<view class="popup-box">
				<view class="canvas-box">
					<zs-lime-painter @success="path = $event" :board="base" isRenderImage>
					</zs-lime-painter>
				</view>
				<view class="save" @click="saveImage">保存到相册</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: '婚嫁双喜龙凤套链',
				text: '设计师将龙凤呈祥与花卉、双喜元素结合，寓意佳偶天成，天生一对，婚后生活幸福美满',
				purity: '足金999.9',
				weight: '18.16g-18.41g',
				checked: false,
				datas: [],
				array: [], //处理数据
				canvasShow: false,
				goods: [],
				member: [],
				goods_data: [],
				vip_type: false,
				base: {
					width: '520rpx',
					height: 'auto',
					background: '#FFFFFF',
					views: [{
							type: 'image',
							src: '',
							css: {
								left: '30rpx',
								top: '40rpx',
								width: '60rpx',
								height: '60rpx',
								radius: '50%',
							}
						},
						{
							type: 'text',
							text: '',
							css: {
								color: '#666',
								left: '110rpx',
								// top: '42rpx',
								top: '50rpx',
								fontSize: '30rpx',
							}
						},
						{
							type: 'image',
							src: '',
							css: {
								left: '100rpx',
								// left: '0rpx',
								top: '130rpx',
								background: '#ccc',
								// background: '#333',
								// width: 'auto',
								// height: 'auto',
								width:'280rpx',
								height: '280rpx',
							}
						},
						{
							type: 'text',
							text: '',
							css: {
								color: '#666',
								left: '30rpx',
								// top: '600rpx',
								top: '500rpx',
								fontSize: '26rpx',
							}
						},
						{
							type: 'text',
							text: '',
							css: {
								color: '#666',
								left: '30rpx',
								// top: '650rpx',
								top: '540rpx',
								fontSize: '26rpx',
							}
						},
						{
							type: 'text',
							text: '',
							css: {
								color: '#666',
								left: '30rpx',
								// top: '700rpx',
								top: '580rpx',
								fontSize: '26rpx',
							}
						},
						{
							type: 'text',
							text: '',
							css: {
								color: '#ff0000',
								left: '30rpx',
								// top: '740rpx',
								top: '620rpx',
								fontSize: '34rpx',
								fontWeight: 'bold'
							}
						},
						{
							type: 'image',
							src: '',
							css: {
								left: '180rpx',
								// top: '810rpx',
								top: '660rpx',
								background: '#ffffff',
								width: '160rpx',
								height: '160rpx',
							}
						},
						// {
						// 	type: 'text',
						// 	text: '扫一扫',
						// 	css: {
						// 		color: '#666',
						// 		left: '228rpx',
						// 		top: '850rpx',
						// 		fontSize: '22rpx',
						// 	}
						// },
						// {
						// 	type: 'text',
						// 	text: '￥',
						// 	css: {
						// 		color: '#666',
						// 		left: '30rpx',
						// 		top: '698rpx',
						// 		fontSize: '28rpx',
						// 		fontWeight: 'bold'
						// 	}
						// },
						// {
						// 	type: 'text',
						// 	text: '起',
						// 	css: {
						// 		color: '#333',
						// 		left: '180rpx',
						// 		top: '698rpx',
						// 		fontSize: '28rpx',
						// 		fontWeight: 'bold'
						// 	}
						// },
					]
				},
			}
		},
		onLoad(e) {
			console.log(JSON.parse(e.data))
			this.goods = JSON.parse(e.data)
			JSON.parse(e.data).album.forEach(a => {
				a.checked = false
			})
			this.datas = JSON.parse(e.data)
			console.log(this.datas)
			this.member = uni.getStorageSync('member_info')
			let vip = uni.getStorageSync('viptype')
			// console.log(vip)
			// 会员
			if (vip) {
				this.vip_type = true
			} else {
				this.vip_type = false
			}
			this.get_goods_qrcode()
			const condition = false;
			const person = {
			  id: 1,
			  name: "dby",
			  ...(condition && { age: 12 }),
			};
			console.log(condition,person);
		},
		methods: {
			// 保存画布到相册
			saveImage() {
				this.canvasShow = false
				uni.saveImageToPhotosAlbum({
					filePath: this.path,
					success(res) {
						uni.showToast({
							title: '已保存到相册',
							icon: 'success',
							duration: 1500
						})
					}
				})
			},
			checkboxChange(e, ind) {
				this.array = this.datas.album
				console.log(this.array)
				// for(let i in this.datas.album){
				// 	this.array.push(e.value)
				// 	console.log(this.array)
				// }
				// console.log(this.array)
				// this.datas.album.forEach(it => {
				// 	console.log(it)
				// 	if (index != 0) {
				// 		this.array.push(it)
				// 		console.log(it)
				// 	}
				// })
				// this.datas.album[e].checked = e.value
				// console.log(this.array)
			},
			// 生成商品详情二维码
			get_goods_qrcode() {
				let data = {
					id: this.datas.id,
					member_id: this.member.id
				}
				console.log(data)
				this.$api.get('goods_qrcode', data).then(res => {
					if (res.status == 1) {
						this.goods_data = res.data
					}
				})
			},
			share(e) {
				let that = this
				let data = this.datas.title + "\n" + this.datas.remark + '\n' + '成色：' + this.datas.texture + '\n' + '克重：' +
					this.datas.min_g + '-' + this.datas.max_g
				console.log(data)
				if (e == 0 || e == 1) {
					uni.setClipboardData({
						data: data,
						success: function() {
							uni.showToast({
								title: '文字已复制到剪贴板',
								icon: 'none'
							})
						}
					});
					console.log(this.array)
					let num = 0
					let arr = []
					this.array.forEach(b => {
						if (b.checked == true) {
							arr.push(b)
							uni.saveImageToPhotosAlbum({
								filePath: b.img0,
								success: function() {
									num++
									if (arr.length == num) {
										uni.showModal({
											title: '图片已保存，是否打开微信？',
											success(mod) {
												if (mod.confirm) {
													plus.runtime.openURL("weixin://")
												}
											}
										})
									}
								}
							})
						}
					})
				}
				if (e == 2) {
					//type 1 商品 0 首页
					let data = {
						id: this.datas.id,
						type: 1,
						name: this.member.id
					}
					console.log(data)
					// #ifdef MP-WEIXIN
					this.wxShare();
					// #endif
					// #ifdef APP
					uni.share({
						provider: "weixin",
						scene: "WXSceneSession",
						type: 0,
						href: `http://h5.semoh.cn/smsj/index.html#/pages/index/index?data=` + JSON.stringify(data),
						title: this.datas.title,
						summary: this.datas.remark,
						// imageUrl: this.datas.avatar,
						imageUrl: this.datas.image,
						success: function(res) {
							// console.log(res) 
						},
						fail: function(err) {
							// console.log(err)
							// that.com.msg('失败')
						}
					});
					// #endif
				}
				if (e == 3) {
					console.log(this.datas.comm_avatar,this.datas.image);
					let price = ''
					if (this.vip_type == true) {
						price = this.datas.price_vip
					} else {
						price = this.datas.price
					}
					this.canvasShow = true
					this.base.views[0].src = this.datas.comm_avatar
					this.base.views[1].text = this.datas.comm_title
					this.base.views[2].src = this.datas.image
					this.base.views[3].text = this.datas.title
					this.base.views[4].text = '款号：' + this.datas.model_no
					this.base.views[5].text = '最小金重：' + this.datas.min_g
					this.base.views[6].text = '￥' + this.goods_data.price
					this.base.views[7].src = this.goods_data.qrcode
				}
			}
		}
	}
</script>

<style>
	page {
		background-color: #F6F6F6;
	}
</style>

<style lang="scss">
	.zl-box {
		padding: 30upx;

		.box-one {
			font-size: 26upx;

			.text {
				margin: 10upx 0;
			}

			.weight {
				margin-top: 10upx;
			}
		}

		.box-two {
			margin-top: 40upx;

			.photo-box {
				position: relative;

				.photo {
					margin-right: 10upx;
					margin-bottom: 10upx;
					display: flex;

					image {
						width: 220upx;
						height: 220upx;
						border-radius: 10upx;
						background-color: #F1F1F1;
					}
				}

				.checkbox {
					position: absolute;
					right: -24upx;
					top: 0;
				}
			}
		}
	}

	.bottom-box {
		width: 100%;
		height: 180upx;
		padding: 0 50upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 998;

		.min-box {
			text-align: center;
			font-size: 22upx;
			color: #666666;

			image {
				width: 80upx;
				height: 80upx;
			}
		}
	}

	.popup-box {
		width: 100%;

		.canvas-box {
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.save {
			width: 100%;
			margin: 20rpx auto;
			width: 200rpx;
			height: 60rpx;
			line-height: 60rpx;
			background-color: #2d407a;
			border-radius: 40rpx;
			font-size: 24rpx;
			text-align: center;
			color: #fff;
		}
	}
</style>
