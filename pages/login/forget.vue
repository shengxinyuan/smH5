<template>
	<view class="forget">
		<view style="width: 100%;">
			<view class="phone" v-if="type == 2">
				账号：{{mobile}}
			</view>
			<view class="write">
				<input type="text" v-model="phone" placeholder="输入手机号" maxlength="11"/>
			</view>
			<view class="write">
				<input type="text" v-model="note" placeholder="输入验证码"/>
				<text class="give" v-if="code_show" @click="acquireCode">{{code_tit}}</text>
				<text style="margin-right: 20rpx;" v-else>{{ time }}s</text>
			</view>
			<view class="write" style="border: none;">
				<input type="text" v-model="pass" placeholder="输入新密码"/>
			</view>
			<view class="login_s" @click="changepassword">确定</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				type:0,//1 登录跳 2 个人跳
				phone:'',
				pass:'',
				note:'',
				code:"",//获取到的验证码
				code_tit:'获取验证码',
				time:60,
				code_show:true,//提示语显示
				mobile:''
			}
		},
		onLoad(op) {
			this.type = op.type
			if(op.mobile){
				this.mobile = op.mobile
			}
		},
		methods:{
			//获取验证码
			acquireCode(){
				if(this.phone == '' || !(/^1[3456789]\d{9}$/).test(this.phone)){
					this.com.msg('请检查手机号')
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
					this.$api.get('messagecode',{mobile:this.phone}).then(res=>{
						console.log(res)
					})
				}
				
			},
			//修改
			changepassword(){
				let data = {
					mobile:this.phone,
					password:this.pass,
					note:this.note
				}
				this.$api.post('changepassword',data).then(res=>{
					console.log(res)
					this.com.msg(res.message)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.forget{
		background-color: #f6f6f6;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		.phone{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			padding: 0 30rpx;
		}
		.write{
			width: 100%;
			display: flex;
			justify-content: space-between;
			background-color: #fff;
			height: 120rpx;
			align-items: center;
			border-bottom: 1rpx solid #dedede;
			padding: 0 30rpx;
			.give{
				padding:10rpx 20rpx;
				border: 1rpx solid #1E3066;
				color: #1E3066;
				border-radius: 35rpx;
				font-size: 28rpx;
			}
		}
		.login_s{
			width: 94%;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			border-radius: 50rpx;
			background-color: #1E3066;
			color: #fff;
			margin: 200rpx auto;
		}
	}
</style>
