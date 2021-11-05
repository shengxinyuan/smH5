<template>
	<view class="zl-page zl-box">
		<block v-for="(item,index) in list" :key="index">
			<view class="bg-image">
				<image :src="item.bgImageUrl" mode="widthFix"></image>
				<view class="user-box">
					<view>
						<view class="user-name">{{item.userName}}</view>
						<view class="user-telephone">{{item.userTelephone}}</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						bgImageUrl:'../../static/set-shop/zfb_01.png',
						userName:'陈大力',
						userTelephone:'15912344567'
					},
					{
						bgImageUrl:'../../static/set-shop/yhk_01.png',
						userName:'王大力',
						userTelephone:'622***********4210'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.zl-box{
		padding: 20upx 30upx;
		.bg-image{
			width: 100%;
			margin-bottom: 20upx;
			display: flex;
			position: relative;
			image{
				width: 100%;
				border-radius: 10upx;
			}
			.user-box{
				width: 100%;
				height: 200upx;
				padding-left: 60upx;
				position: absolute;
				left: 0;
				bottom: 0;
				display: flex;
				align-items: center;
				.user-name{
					font-size: 32upx;
					font-weight: bold;
					color: #FFFFFF;
					margin-bottom: 20upx;
				}
				.user-telephone{
					font-size: 28upx;
					color: #FFFFFF;
				}
			}
		}
	}
</style>
