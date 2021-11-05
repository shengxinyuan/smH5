<template>
	<view class="service-tel-box">
		<view class="tel">
			<view>
				<u-input v-model="value" :type="type" maxlength="11"/>
			</view>
		</view>
		<view class="show-switch-box">
			<view class="show-switch-up">
				<view>商城中展示:</view>
				<u-switch v-model="status" active-color="#2d407a" size="40" @change="change"></u-switch>
			</view>
			<view class="show-switch-down">
				<u-icon class="icon warning" name="warning"></u-icon>
				<text>商城显示开关按钮可以控制商城是否显示此信息。</text>
			</view>
			<view class="zl-btn">
				<button class="btn" @click="save()">保存</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:'',
				type:'number',
				placeholder:'请输入电话',
				status:'' ,
				selecttype:1
			}
		},
		onLoad(e){
			console.log(e)
			this.value = e.telephone
			this.status = e.is_display == 2 ? false : true ;
			
			console.log(this.status)
		},
		methods: {
			//选择状态
			change(e) {
				console.log(e);
				if(e== true){
					this.selecttype = 1
				}else{
					this.selecttype = 2
				}
			},
			save(){
				//写入数据库
				let params = {
					telephone : this.value ,
					is_telephone : this.selecttype,
					// id : this.id
				}
				
				this.$api.post('manage', params ).then(res=>{
					console.log(res)
					this.com.msg(res.message)
					if(res.status == 1){
						let a = this.status ? 1 : 2 ;
						uni.navigateBack() 
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.service-tel-box {
		padding-left: 30upx;

		.tel {
			padding: 30upx 0;
			border-top: solid 2upx #f8f8f8;
			border-bottom: solid 2upx #f8f8f8;
			input{
				font-size: 30upx;
			}
		}

		.show-switch-box {
			margin-top: 30upx;
			padding-right: 30upx;

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
