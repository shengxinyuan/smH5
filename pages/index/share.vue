<template>
	<view>
		<view class="bgimage">
			<image :src="bg_img" mode="widthFix"></image>
		</view>
		<view class="zl-box">
			<view class="min-box">
				<input type="number" v-model="tel_value" placeholder="请输入手机号" maxlength="11" />
				<view class="two">
					<input class="code_input" type="number" v-model="code_value" placeholder="请输入验证码" maxlength="6" />
					<text class="right" v-if="code_show" @click="acquireCode">{{code_tit}}</text>
					<text class="right" style="background-color: #999;" v-else>{{ time }}s</text>
				</view>
			</view>
		</view>
		<view class="bottom-btn">
			<button class="btn" @click="backPage">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel_value:'',//手机号
				code_value:'',//验证码
				code_tit:'获取验证码',
				time:'60',
				code_show:true,//获取验证码
				invcode:0,//邀请码
				province:'',//省
				city:'',//市
				area:'',//区
				bg_img: '',
			}
		},
		onLoad(op) {
			this.get_bg_image()
			if(op.invcode){
				this.invcode = op.invcode
			}
		},
		onShow() {
			let that = this
			uni.getLocation({
			    type: 'wgs84',
			    success: function (res) {
					console.log(res)
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
					uni.request({
					    url: 'https://restapi.amap.com/v3/geocode/regeo?parameters', //仅为示例，并非真实接口地址。
						method:'GET',
					    data: {
					       key:'5007cf4d48895f2313d47e970b61252d',
						   location:res.longitude+','+ res.latitude
					    },
					    header: {
					        'custom-header': 'hello' //自定义请求头信息
					    },
					    success: (res) => {
					        console.log(res.data);
					        console.log(res.data.regeocode.addressComponent.city == '')
							that.province = res.data.regeocode.addressComponent.province
							that.city = res.data.regeocode.addressComponent.city == '' ? res.data.regeocode.addressComponent.province : res.data.regeocode.addressComponent.city
							that.area = res.data.regeocode.addressComponent.district
					    }
					});
			    }
			});
		},
		methods: {
			//获取验证码
			acquireCode(){
				if(this.tel_value == '' || !(/^1[3456789]\d{9}$/).test(this.tel_value)){
					uni.showToast({ icon:'none', title: '请检查手机号' })
				}else{
					this.time = 60
					this.code_show = false
					let setInt = setInterval(()=>{
						if(this.time ==0){
							this.code_tit = "再次获取"
							this.code_show = true
						}else{
							this.time -=1
						}
					},1000)
					this.$api.get('messagecode',{mobile:this.tel_value}).then(res=>{
						console.log(res)
					})
				}
			},
			backPage(){
				let data = {
					mobile:this.tel_value,
					note:this.code_value,
					bn:this.invcode,
					password:111111,
					province:this.province,
					city:this.city,
					area:this.area
				}
				this.$api.post('register',data).then(res=>{ 
					uni.showToast({ icon:'none', title: res.message })
					if(res.status == 1){
						uni.navigateTo({
							url: '/pages/login/download'
						})
						// setTimeout(function() {
						// 	uni.navigateTo({
						// 		url: '/pages/login/download'
						// 	})
						// }, 1000);
						// this.$api.post('coupon',{type:1,token:res.data.token}).then(res=>{
						// 	console.log(res)
						// })
					}
				})
			},
			get_bg_image(){
				this.$api.get('site').then(res=>{ 
					console.log(res)
					if(res.status == 1){
						this.bg_img = res.message.share_pic
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.bgimage {
		image {
			width: 100%;
		}
	}
	.zl-box{
		width: 100%;
		padding: 0 30upx;
		position: absolute;
		top: 1024upx;
		.min-box {
			width: 100%;
			padding: 60upx 30upx;
			background-color: #ffffff;
			border-radius: 20upx;
		
			input {
				height: 100upx;
				padding: 0 30upx;
				font-size: 30upx;
				border: solid 2upx #cccccc;
				border-radius: 10upx;
			}
		
			.two {
				margin-top: 40upx;
				display: flex;align-items: center;justify-content: space-between;
		
				.code_input {
					width: 50%;
				}
		
				.right {
					width: 36%;
					height: 100upx;
					font-size: 30upx;
					color: #FFFFFF;
					line-height: 100upx;
					text-align: center;
					background-color: #f63f39;
					border-radius: 10upx;
				}
			}
		
			.down-box {
				width: 100%;
				height: 100upx;
				line-height: 100upx;
				text-align: center;
				font-size: 30upx;
				color: #FFFFFF;
				background-color: #f63f39;
				border-radius: 10upx;
			}
		}
	}
	.bottom-btn{
		width: 100%;
		height: 130upx;
		padding: 0 30upx;
		display: flex;align-items: center;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 998;
		.btn{
			width: 100%;
			font-size: 34upx;
			color: #fff;
			background-color: #f63f39;
			border-radius: 8upx;
		}
	}
</style>
