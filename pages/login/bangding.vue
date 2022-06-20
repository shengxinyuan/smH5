<template>
	<!-- 绑定手机号 -->
	<view class="login">
		<view class="box">
			<view class="message">
				<input type="text" value="" placeholder="手机号码" v-model="phone" maxlength="11"/>
			</view>
			<view class="message">
			    <input type="text" placeholder="验证码" v-model="codes"/>
				<view class="tack" v-if="yzm_show" @click="getcode">{{get_code_tit}}</view>
				<view class="but" v-else>{{ time }}s</view>
			</view>
			<view class="message">
				<view class="left_s">
				    <input type="text" placeholder="请输入邀请码" v-model="bn"/>
				</view>
			</view>
			<view class="login_s" @click="go_ind">登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pass_type:'password',
				phone:'',//手机
				pass:'',
				yzm_show:true,
				get_code_tit:"获取验证码",
				bn:'',
				codes:"",//验证码
				note:'',
				time:60,
				noclick:true
			}
		},
		methods: {
			// 获取验证码
			getcode(){
				this.time = 60
				if(this.phone =='' || !(/^1[3456789]\d{9}$/.test(this.phone))){
					uni.showToast({ icon:'none', title: '请检查手机号' })
				}else{
					this.yzm_show = false//字段状态
					this.$api.get('messagecode',{mobile:this.phone}).then(res=>{
						console.log(res)
						if(res.status == 1){
							this.note = res.data.note
							
							let tim = setInterval(()=>{
								this.time--
								if(this.time == 0){
									clearInterval(tim)
									this.hq_note = '重新获取'
									this.yzm_show = true
								}
							},1000)
						}else{
							uni.showToast({ icon:'none', title: res.message })
						}
					})
				}
			},
			//点击下一步
			go_ind(){
				let arr = this.bn == ''? 0 : this.bn
				if(this.phone == '' || this.codes == ''){ 
					uni.showToast({ icon:'none', title: '请填写手机号或验证码' })
				}else if(this.note != this.codes){
					uni.showToast({ icon:'none', title: '验证码错误' })
				}else{
					this.$api.post('bindingphone',{mobile:this.phone,note:this.codes,openid:uni.getStorageSync('openid'),bn:arr}).then(res=>{
						console.log(res)
						if(res.status == 1){
							let date = new Date().getTime()
							let end = res.data.member_info.vip_time * 1000
							if(end  <= date){
								uni.setStorageSync("viptype", false)
							}else{
								uni.setStorageSync("viptype", true)
							}
							
							uni.setStorageSync("token",res.data.token)
							uni.setStorageSync("member_info",res.data.member_info)
							uni.setStorageSync('member_info_img',res.data.member_info.avatar)
							uni.setStorageSync('coupon',0)
							uni.showToast({
								title:'请稍后...',icon:'loading',duration:2000
							})
							let arr = 2
							let time = setInterval(()=>{
								if(arr == 0){
									clearInterval(time)
									uni.reLaunch({ url: '../index/index' })
								}else{
									arr -= 1 
								}
							},1000)
						}else{
							uni.showToast({ icon:'none', title: res.message })
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login_s{
		width: 90%;margin-left: 5%;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		border-radius: 50rpx;
		background-color: #1E3066;
		color: #fff;
		margin-top: 100rpx;
	}
    .login{
		width: 100%;
		height: 100vh;
		background-color: #f6f6f6;
		display: flex;
		flex-wrap: wrap;
		padding: 30rpx 0;
		.box{
			width: 100%;
			.message{
				width: 100%;
				background-color: #fff;
				padding: 0 30rpx;
				display: flex;
				height: 120rpx;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1rpx solid #f6f6f6;
				.tack{
					padding: 20rpx;
					background-color: #1E3066;
					color: #fff;
					border-radius: 40rpx;
				}
			}
		}
	}
</style>
