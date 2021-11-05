<template>
	<view>
		<view class="submit-success-box-one">
			<view>
				<view class="one-title">订单提交成功~</view>
				<view class="orders-number">
					<view>订单编号：2010101054086116</view>
					<view class="copy">复制</view>
				</view>
			</view>
		</view>
		<view class="submit-success-box-two">
			<view class="two-title">支付金额</view>
			<view class="prices">
				<text class="rmb">￥</text>
				<text class="integer">2117</text>
				<text class="fractional-part">.00</text>
			</view>
		</view>
		<view class="submit-success-box-there">
			<view class="wxzf-image">
				<image src="../../static/shop-orders/wxzf.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

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
		background-color: #F6F6F6;
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
