<template>
	<!-- 消息通知 -->
	<view class="news">
		<view class="list">
			<view class="list_s" @click="go_listnew(0)">
				<view class="left_s">
					<image src="/static/my/kefuimg.png" mode="aspectFill"></image>客服消息
				</view>
				<view class="num" v-if="badge.system_count">+{{badge.system_count}}</view>
			</view>
			<view class="list_s" @click="go_listnew(1)">
				<view class="left_s">
					<image src="/static/my/xitunimg.png" mode="aspectFill"></image>系统消息
				</view>
				<view class="num" v-if="badge.reward_count">+{{badge.reward_count}}</view>
			</view>
			<view class="list_s" style="border: none;" @click="go_listnew(2)">
				<view class="left_s">
					<image src="/static/my/wuliuimg.png" mode="aspectFill"></image>物流消息
				</view>
				<view class="num" v-if="badge.overdue_count">+{{badge.overdue_count}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				badge:0//未读消息
			}
		},
		onShow() {
			this.$api.get('message').then(res=>{
				console.log(res)
				if(res.status == 1){
					this.badge = res.data
				}
			})
		},
		methods: {
			go_listnew(e){
				if(e == 0){
					this.com.navto('../service/service')
				}else{
					this.com.navto('newList?cate_id='+e)
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
<style lang="scss" scoped>
	.news{
		padding: 20rpx 30rpx;
		width: 100%;
		display: flex;flex-wrap: wrap;
		.list{
			width: 100%;
			background-color: 10rpx;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			.list_s{
				padding: 20rpx 24rpx;
				width: 100%;
				border-bottom: 1rpx solid #f6f6f6;
				height: 140rpx;
				line-height: 140rpx;
				align-items: center;
				display: flex;
				justify-content: space-between;
				.left_s{
					height: 120rpx;
					line-height: 120rpx;
					align-items: center;
					display: flex;
					
					image{
					    width: 100rpx;
					    height: 100rpx;
					    border-radius: 50%;
						margin-right: 10rpx;
				    }
				}
				.num{
					width: 90rpx;
					height: 50rpx;
					background-color: #c13535;
					border-radius: 50rpx;
					line-height: 50rpx;
					text-align: center;
					color: #fff;
				}
			}
		}
	}
</style>