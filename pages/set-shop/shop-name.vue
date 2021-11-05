<template>
	<!-- 编辑用户名 -->
	<view>
		<view class="zl-box">
			<u-input v-model="value" :type="type" :border="border" :clearable="clearable" />
		</view>
		<view class="zl-btn">
			<button class="btn" @click="save">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				type: 'text',
				passwordIcon: true,
				border: false,
				clearable:true,
				// id : '' ,
	
			}
		},
		onLoad(e){
			console.log(e)
			this.value = e.title
			// this.id = e.id
		},
		methods: {
			save(){
				let params = {
					title : this.value ,
					// id : this.id
				}
				this.$api.post('manage', params ).then(res=>{
					this.com.msg(res.message)
					uni.navigateBack()
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
