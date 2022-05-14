<template>
	<view>
		<view class="submit-success-box-one">
			<view>
				<view class="one-title">订单提交成功~</view>
				<view class="orders-number">
					<view>订单编号：{{order_code}}</view>
					<view class="copy" @click="copy_code(e)">复制</view>
				</view>
				<view class="click_fun">
					<view @click="order_kan(1)">
						返回首页
					</view>
					<view @click="order_kan(2)">
						查看订单
					</view>
				</view>
			</view>
		</view>
		<view class="submit-success-box-two">
			<view class="two-title">支付金额</view>
			<view class="prices">
				<text class="rmb">￥</text>
				<text class="integer">{{shop.shop_price}}</text>
			</view>
		</view>
		<view class="submit-success-box-there">
			<view class="wxzf-image" @click="long(manage_user.wechat_image)">
				<image :src="manage_user.wechat_image" mode="widthFix"></image> 
			</view>
		</view>
		<view class="submit-success-box-there" style="margin-bottom: 50rpx;"> 
			<view class="wxzf-image" @click="long(manage_user.alipay_image)">
				<image :src="manage_user.alipay_image" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_code:'',
				shop:'',
				manage_user:''
			}
		},
		onLoad(op) {
			console.log(op)
			this.page_reader()
			this.order_code = op.data
			this.shop = JSON.parse(op.shop)
			
		},
		methods: {
			page_reader(){
				this.$api.get('manageh5',{member_id:uni.getStorageSync("member_id")}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.manage_user = res.data
					}
				})
			},
			//复制
			copy_code(e){
				uni.setClipboardData({
				    data: e,
				    success: function () {
						this.com.msg('复制成功')
				        console.log('success')
				    }
				});
			},
			//微信长按
			long(e){
				let arr = []
				arr.push(e)
				// 预览图片
				uni.previewImage({ 
					urls: arr,
				}); 
			}, 
			order_kan(e){
				if(e  == 1){
					this.com.rel('./index')
				}else{
					uni.reLaunch({ 
						url:'/pages/my/order?state='+10+'&index='+1
					})
				}
			}
		}
	}
</script>

<style>
	page{
		background-color: #f6f6f6; 
	}
</style>

<style lang="scss">
	.prices {
		color: #ea3a4a;
		text-align: center;
		margin-top: 40upx;
	
		.rmb {
			font-size: 32upx;
		}
	
		.integer {
			font-size: 48upx;
			font-weight: bold;
		}
	
		.fractional-part {
			font-size: 32upx;
		}
	}
	.submit-success-box-one{
		width: 100%;
		height: 230upx;
		display: flex;
		justify-content: center;
		align-items: center;
		
		.one-title{
			text-align: center;
			font-size: 30upx;
		}
		.orders-number{
			font-size: 30upx;
			color: #999999;
			margin-top: 30upx;
			position: relative;
			.copy{
				width: 70upx;
				font-size: 22upx;
				color: #2b3f7d;
				text-align: center;
				border: solid 2upx #2b3f7d;
				position: absolute;
				right: -90upx;
				top: 0;
			}
		}
		.click_fun{
			display: flex;justify-content: space-around;
			margin: 20rpx 0;
			view{
				color: #007AFF;
			}
		}
	}
	.submit-success-box-two{
		margin-top: 40upx;
		.two-title{
			font-size: 26upx;
			text-align: center;
		}
	}
	.submit-success-box-there{
		display: flex;
		justify-content: center;
		margin-top: 30upx;
		.wxzf-image{
			width: 74%;
			display: flex;
			image{
				width: 100%;
			}
		}
	}
</style>
