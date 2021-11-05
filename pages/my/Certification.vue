<template>
	<view>
		<view class="sos_sty">
			根据国家快递法律相关规定，发件人需实名认证。请输入您本人真实身份信息，否则无法代发。您的信息我们也将保密！
		</view>
		<view class="inputs">
			<view class="inputs_l">
				姓名
			</view>
			<input type="text" value="" v-model="name" placeholder="请输入真实姓名" />
		</view>
		<view class="inputs">
			<view class="inputs_l">
				身份证号
			</view>
			<input type="text" value="" v-model="user_id" placeholder="请输入身份证号" />
		</view>
		<view class="">
			<zs-button @but_cli="but_cli"> </zs-button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				name:'',
				user_id:''
			}
		},
		onLoad() {
			this.$api.get('info').then(res=>{
				console.log(res)
				if(res.status == 1){
					this.name = res.data.truename
					this.user_id = res.data.id_number
				}
			})
		},
		methods:{
			but_cli(){
				this.$api.put('info',{truename:this.name,id_number:this.user_id}).then(res=>{
					console.log(res)
					this.com.msg(res.message)
					if(res.status == 1){
						
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style lang="scss" scoped>
	.inputs{
		background-color: #fff;padding: 3%;margin-bottom: 2rpx;
		display: flex;justify-content: space-between;
		input{
			width: 70%;
			text-align: right;
		}
	}
	.sos_sty{
		width: 100%;padding: 2% 3%;background-color: #fffaf0;color: #f9dcc2;margin-bottom: 24rpx;
	}
</style>
