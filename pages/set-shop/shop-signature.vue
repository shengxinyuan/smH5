<template>
	<!-- 编辑用户名 -->
	<view>
		<view class="zl-box">
			<u-input v-model="value" :type="type" :border="border" :clearable="true" />
		</view>
		<view class="zl-btn">
			<button class="btn" @click="save()">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'textarea',
				passwordIcon: true,
				border: false,
			}
		},
		onLoad(e){
			console.log(e)
			this.value = e.remark
		},
		methods: {
			save(){
				console.log(this.value)
				
				//写入数据库
				let params = {
					remark : this.value ,
				}
				console.log(params)
				
				this.$api.post('manage', params ).then(res=>{
					console.log(res)
					uni.showToast({
						remark : res.message
					})
					if(res.status == 1){
						uni.navigateBack() 
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.zl-box{
	padding: 30upx;
	border-top: solid 2upx #f8f8f8;
}
.zl-btn{
	padding: 0 30upx;
	margin-top: 200upx;
	.btn{
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
</style>
