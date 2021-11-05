<template>
	<!-- 店铺二维码 -->
	<view>
		<view class="nav_head">
			<view class="nav_l" @click="it_cli(1)" :class="{act:navnum == 1}">图文二维码</view>
			<view class="nav_l" @click="it_cli(2)" :class="{act:navnum == 2}">及简二维码</view>
		</view>
		<!-- 图文二维码 -->
		<view class="tabs-first" v-if="isShow01">
			<u-swiper height="980" :effect3d="true" :list="swiperList" :mode="mode" :autoplay="false" :bg-color="bgColor"
			:effect3d-previous-margin="120" @change="changeimg"></u-swiper>
			<view class="share-text">
				<text>{{shareText}}</text>
			</view>
			<view class="bottom-btn">
				<button class="btn" @click="openPopup">分享</button>
			</view>
		</view>
		<view v-show="canvas_hb_show" @click="canvas_hb_show = false" class="canvas_a">
			<canvas style="width: 520rpx; height: 980rpx;" canvas-id="my_codes" id="my_codes" type="2d"></canvas>
		</view>
		<!-- 极简二维码 -->
		<view class="tabs-second" v-if="!isShow01">
			<view class="code-box">
				<view class="code-logo">
					<image src="../../static/community/erweima.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="bottom-btn">
				<button class="btn" @click="openPopup">分享</button>
			</view>
		</view>
		
		
		<!-- 分享 弹出层 -->
		<view>
			<u-popup v-model="popupShow" mode="bottom" border-radius="20" :closeable="false">
				<view class="share-popup">
					<view class="divider-box">
						<u-divider half-width="60" fontSize="24">分享至</u-divider>
					</view>
					<view class="share-logo-box">
						<view class="left" @click="share(0)">
							<view class="share-logo">
								<image src="../../static/community/haoyou.png" mode="widthFix"></image>
								<view class="share-title">微信好友</view>
							</view>
						</view>
						<view class="right"  @click="share(1)">
							<view class="share-logo">
								<image src="../../static/community/pyq.png" mode="widthFix"></image>
								<view class="share-title">朋友圈</view>
							</view>
						</view>
					</view>
					<view class="popup-btn">
						<button class="btn" @click="closePopup">取消</button>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabsList: [{
						name: '图文二维码'
					}, {
						name: '极简二维码'
					}],
				current: 0,
				height: 80,
				activeColor: '#2b3f7d',
				isShow01: true,
				isShow02: false,
				popupShow: false,
				swiperList:[],
				mode:'none',
				bgColor:"#ffffff",
				shareText:'发送二维码给好友，吸引更多客流',
				codeImg:'',
				qrcode_img:'',
				canvas_hb_show:false,
				navnum:1
			}
		},
		onLoad() {
			this.page_reader()
			
		},
		methods: {
			//点击切换
			it_cli(e){
				this.navnum = e
				if(e == 1){
					this.isShow01 = true
				}else{
					this.isShow01 = false
				}
			},
			changeimg(e){
				this.canvas_hb_show = false
				console.log(e)
				if(this.swiperList){
					console.log(this.swiperList)
					this.codeImg = this.swiperList[e].image
					this.qrcode_img =  this.swiperList[e].member_id
				}
				
			},
			canvas(){
				let that = this
				var ctx = uni.createCanvasContext('my_codes',this)
				ctx.fillStyle='#CE3C39';
				ctx.fillRect(0,0,260,330);
				ctx.drawImage(that.codeImg, 0, 0, 260, 490)
				ctx.drawImage(that.qrcode_img, 95, 385, 70, 70)
				ctx.draw(false,(res)=>{
					// console.log(res)
					that.canvas_hb_show = true
					that.popupShow = true
					// that.com.msg('已生成')
				})
			},
			//
			page_reader(){
				this.$api.get('qrcode').then(res=>{
					// console.log(res)
					if(res.status == 1){
						//循环生成画布
						this.swiperList = res.data
						this.changeimg(0)
					}
				})
			},
			//分享
			openPopup(){
				// this.com.msg('正在生成')
				this.canvas()
				console.log(this.codeImg)
			},
			//取消
			closePopup(){
				this.popupShow = false
			},
			share(e){
				this.canvas()
				if(e == 0){
					let that = this
					uni.canvasToTempFilePath({
						canvasId:'my_codes',
						success(re) {
							console.log(re)
							uni.share({
							    provider: "weixin",
							    scene: "WXSceneSession",
							    type: 2,
							    imageUrl:re.tempFilePath,
							    success: function (res) {
							        console.log("success:" + JSON.stringify(res));
							    },
							    fail: function (err) {
							        console.log("fail:" + JSON.stringify(err));
							    }
							});
						},fail(err){
							console.log(err)
						},complete(es){
							console.log(es)
						}
					})
				}else{
					uni.canvasToTempFilePath({
						canvasId:'my_codes',
						success(re) {
							console.log(re)
							uni.share({
							    provider: "weixin",
							    scene: "WXSenceTimeline",
							    type: 2,
							    imageUrl: re.tempFilePath,
							    success: function (res) {
							        console.log("success:" + JSON.stringify(res));
							    },
							    fail: function (err) {
							        console.log("fail:" + JSON.stringify(err));
							    }
							});
						},fail(err){
							console.log(err)
						},complete(es){
							console.log(es)
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav_head{
		height: 90rpx;line-height: 86rpx;
		display: flex;text-align: center;
		color: #999;
		.nav_l{
			width: 50%;position: relative;
			&.act{
				color: #000;
				&:before{
					content: '';
					position: absolute;
					left: 40%;
					bottom: 0;
					transform: translateY(-50%);
					height: 7rpx;
					width: 20%;
					background-color: #2d407a;
					border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}
	}
	.canvas_a{
		position: fixed;;left: -550rpx;bottom: -1500rpx;
	}
	.tabs-box{
		border-bottom: solid 2upx #eeeeee;
	}
	.tabs-first{
		padding:0 0 30upx 0;
	}
	.share-text{
		margin: 20upx 0;
		text-align: center;
		font-size: 24upx;
		color: #999999;
	}
	.bottom-btn {
		width: 100%;
		padding: 20upx 30upx;
		position: fixed;
		bottom: 0;
		left: 0;
	
		.btn {
			font-size: 30upx;
			color: #FFFFFF;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			border-radius: 40upx;
		}
	}
	.tabs-second{
		.code-box{
			margin-top: 60upx;
			display: flex;
			justify-content: center;
			.code-logo{
				width: 490upx;
				height: 490upx;
				display: flex;
				image{
					width: 100%;
				}
			}
		}
	}
	.share-popup{
		padding-top: 40upx;
		.divider-box{
			
		}
		.share-logo-box{
			margin-top: 70upx;
			margin-bottom: 50upx;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			.left,.right{
				width: 30%;
				display: flex;
				justify-content: center;
				.share-logo{
					width: 100upx;
					text-align: center;
					image{
						width: 100%;
					}
					.share-title{
						font-size: 22upx;
						color: #666666;
						margin-top: 20upx;
					}
				}
			}
		}
		.popup-btn{
			
			.btn{
				padding: 12upx 0;
				font-size: 30upx;
				background-color: #FFFFFF;
			}
		}
	}
</style>
