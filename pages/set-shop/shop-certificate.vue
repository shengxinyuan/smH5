<template>
	<view>
		<view class="zl-top-title-box">
			<text class="titles">*您设置的证书将会对商城订单统一加收相关费用</text>
		</view>
		<view class="zl-down">
			<view>
				<view class="hang-sign-box">
					<view class="hang-sign-title">挂签</view>
					<view class="hang-sign-switch">
						<u-switch v-model="checked" size="26" active-color="#2d407a" inactive-color="#cccccc" @change="change"></u-switch>
					</view>
				</view>
				<view class="log-box hang-sign">
					<view class="log">
						<image src="../../static/vip-order/guaqian_01.png" mode="widthFix"></image>
					</view>
					<view class="log-title">{{hangSignTitle}}</view>
				</view>
			</view>
			<view class="certificate">
				<view class="hang-sign-box">
					<view>证书</view>
					<view class="hang-sign-switch">
						<u-switch v-model="checked02" size="26" active-color="#2d407a" inactive-color="#cccccc" @change="changetwo"></u-switch>
					</view>
				</view>
				<view class="log-box zhengshu">
					<view class="log">
						<image src="../../static/vip-order/zhengshu.png" mode="widthFix"></image>
					</view>
					<view class="log-title">{{zhengshuTitle}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				checked02: false,
				hangSignTitle: '国家珠宝玉石适量监督检验中心',
				zhengshuTitle: '北京市中工商联珠宝检测中心',
			}
		},
		onLoad(e){
			console.log(e)
			this.checked = e.sign == 1 ? true : false
			this.checked02 = e.certificate == 1 ? true : false
		},
		methods: {
			change(e) {
				console.log(e)
				let arr = 0
				arr = e == true ? 1 : 2
				this.$api.post('manage',{sign:arr}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.com.msg(res.message)
					}
				})
			},
			changetwo(e) {
				console.log(e)
				let arr = 0
				arr = e == true ? 1 : 2
				this.$api.post('manage',{sign:arr}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.com.msg(res.message)
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.zl-top-title-box {
		background-color: #fffaf0;
		padding: 10upx 30upx;
		color: #f5b47f;

		.titles {
			font-size: 22upx;
		}
	}
	
	.zl-down{
		padding: 10upx 30upx;
	}

	.hang-sign-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		font-weight: bold;
		margin-top: 20upx;

		.hang-sign-switch {
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}

	.log-box {
		display: flex;
		align-items: center;

		.log {
			width: 5%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.log-title {
			font-size: 22upx;
			color: #000000;
			padding-left: 10upx;
		}
	}

	.hang-sign {
		padding: 20upx 0;
		border-bottom: solid 2upx #eeeeee;
	}

	.zhengshu {
		padding-top: 20upx;
	}
</style>
