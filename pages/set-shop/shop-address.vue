<template>
	<view class="service-tel-box">
		<view class="tel">
			<view @click="openPicker">
				<u-picker 
				mode="region" 
				v-model="show" 
				:params="params" 
				:default-region="defaultRegion"
				@confirm="confirm">
				</u-picker>
				<view>{{value}}</view>
			</view>
			<u-input v-model="address" type="text" placeholder="请输入详细地址"/>
		</view>
		<view class="show-switch-box">
			<view class="show-switch-up">
				<view>商城中展示:</view>
				<u-switch v-model="checked" active-color="#2d407a" size="40" @change="change"></u-switch>
			</view>
			<view class="show-switch-down">
				<u-icon class="icon warning" name="warning"></u-icon>
				<text>商城显示开关按钮可以控制商城是否显示此信息。</text>
			</view>
			<view class="zl-btn">
				<button class="btn" @click="save">保存</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultRegion: ["江苏省", "苏州市", "相城区"],
				params: {
					province: true,
					city: true,
					area: true,
				},
				checked: false,
				show: false,
				value: '选择省市区',
				address: '' ,
				province : '' ,
				city : '' ,
				area: '' ,
				is_address:1
			}
		},
		onLoad(e) {
			console.log(e)
			this.province = e.province
			this.city = e.city
			this.area = e.area
			this.address = e.address
			if(e.province){
				this.value = e.province + e.city + e.area
				this.defaultRegion = [e.province, e.city, e.area]
			}
			this.checked = e.is_address == 1 ? true : false
			this.is_address = e.is_address
		},
		methods: {
			//选择状态
			change(e) {
				console.log(e);
				if(e== true){
					this.is_address = 1
				}else{
					this.is_address = 2
				}
			},
			confirm(e) {
				console.log(e);
				this.value = e.province.label + e.city.label + e.area.label
				this.defaultRegion = [e.province.label , e.city.label , e.area.label]
				this.province = e.province.label
				this.city = e.city.label
				this.area = e.area.label
			},
			openPicker() {
				this.show = true
			},
			save(){		
				let params = {
					address: this.address ,
					province : this.province ,
					city : this.city ,
					area: this.area ,
					is_address:this.is_address
				}
				
				console.log(params)
				
				this.$api.post('manage', params ).then(res=>{
					console.log(res)
					uni.showToast({
						telephone : res.message,
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
	.service-tel-box {
		padding-left: 30upx;
		

		.tel {
			padding: 30upx 0;
			font-size: 30upx;
			border-top: solid 2upx #f8f8f8;
			border-bottom: solid 2upx #f8f8f8;
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
