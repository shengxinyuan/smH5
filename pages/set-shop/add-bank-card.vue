<template>
	<view class="zl-box">
		<view class="add-box">
			<view class="add-min-box">
				<view class="title">银行卡账号：</view>
				<input class="input" v-model="valueId" type="text" :placeholder="placeholder01" />
			</view>
			<view class="add-min-box">
				<view class="title">银行卡姓名：</view>
				<input class="input" v-model="valueName" type="text" :placeholder="placeholder02" />
			</view>
			<view class="add-min-box">
				<view class="title">绑定手机号码：</view>
				<input class="input" v-model="valueTelephone" type="text" :placeholder="placeholder03" maxlength="11"/>
			</view>
			<view class="add-min-box">
				<view class="title">请输入验证码：</view>
				<input class="input" v-model="valueCode" type="text" :placeholder="placeholder04" />
				
				<view class="get-code" @click="go_note" v-if="code_show">{{timetit}}</view>
				<view class="get-code" v-else>{{time}}</view>
				
			</view>
		</view>
		<view class="bottom-btn">
			<button class="btn" @click="skipSetWithdraws">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				valueId:'',
				placeholder01:'请输入银行卡账号',
				valueName:'',
				placeholder02:'请输入您的真实姓名',
				valueTelephone:'',
				placeholder03:'请输入绑定手机号码',
				valueCode:'',
				placeholder04:'请输入验证码',
				timetit:'获取验证码',
				time:60,
				setInt:'',
				code_show:true,
				note:'',
				xg_id:'',//修改时id
			}
		},
		onUnload() {
			clearInterval(this.time)
		},
		onLoad(op) {
			console.log(op)
			if(op.datas){
				this.xg_id = JSON.parse(op.datas)
				this.valueId = this.xg_id.account_number
				this.valueName = this.xg_id.name
				this.valueTelephone = this.xg_id.mobile
			}
		},
		methods: {
			//保存
			skipSetWithdraws(){
				if(this.valueId =='' || this.valueName =="" || this.valueTelephone == '' || this.valueCode == ""){
					this.com.msg('请确认信息填写完整')
					return false
				}else if(this.note != this.valueCode){
					this.com.msg('验证码错误')
					return false
				}
				let data = {
					type:1,
					account_number:this.valueId,
					name:this.valueName,
					mobile:this.valueTelephone,
					id:this.xg_id == undefined ? '' : this.xg_id
				}
				this.$api.post('information',data).then(res=>{
					console.log(res)
					if(res.status == 1){
						if(this.xg_id != '' || this.xg_id !== undefined){
							this.com.redto('../set-shop/set-withdraw?tit='+'修改成功')
						}else{
							this.com.redto('../set-shop/set-withdraw?tit='+'提交成功')
						}
					}
				})
			},
			//获取验证码
			go_note(){
				if(this.valueTelephone == '' || !(/^1[3456789]\d{9}$/).test(this.valueTelephone)){
					this.com.msg('请检查手机号')
				}else{
					this.time = 60
					this.code_show = false
					this.setInt = setInterval(()=>{
						if(this.time ==0){
							this.timetit = "再次获取"
							this.code_show = true
							clearInterval(this.setInt)
						}else{
							this.time -=1
						}
					},1000)
					this.$api.get('messagecode',{mobile:this.valueTelephone}).then(res=>{
						console.log(res)
						if(res.status == 1){
							this.note = res.data.note
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.zl-box{
		
		.add-box{
			margin-bottom: 40upx;
			.add-min-box{
				height: 110upx;
				display: flex;
				align-items: center;
				border-top: solid 2upx #eeeeee;
				position: relative;
				.title{
					width: 35%;
					font-size: 28upx;
					padding-left: 30upx;
				}
				.input{
					font-size: 26upx;
				}
				.get-code{
					width: 174upx;
					height: 52upx;
					border: solid 2upx #2b3f7d;
					font-size: 26upx;
					color: #2b3f7d;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 26upx;
					position: absolute;
					right: 30upx;
				}
			}
		}
		.bottom-btn {
			width: 100%;
			padding: 0 30upx;
			margin-top: 100upx;
		
			.btn {
				font-size: 30upx;
				color: #FFFFFF;
				background-image: linear-gradient(90deg,
					#2b3f7d 0%,
					#1b2c60 100%);
				border-radius: 40upx;
			}
		}
	}
</style>
