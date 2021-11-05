<template>
	<view>
		<view class="orders_d">
			<view style="display: flex;justify-content: space-between;margin-bottom: 10rpx;">
				<view style="font-size: 30rpx;">
					综合管理
				</view>
			</view>
			<view style="display: flex;flex-wrap: wrap;">
				<view class="orders_it" v-for="(it,ind) in store_admin" :key="ind" @click="go_page(ind)">
					<image :src="it.img" mode=""></image>
					<view class="">
						{{it.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				store_admin:[
					{
						img:'../../static/my/app_share.png',
						name:"app分享"
					},
					{
						img:'../../static/my/Platform.png',
						name:"平台咨讯"
					},
					{
						img:'../../static/my/xinshou.png',
						name:"新手教程"
					},
					{
						img:'../../static/my/fankui.png',
						name:"意见反馈"
					},
					{
						img:'../../static/my/guany_me.png',
						name:"关于我们"
					},
					{
						img:'../../static/my/lianxi_kf.png',
						name:"联系客服"
					},
					{
						img:'../../static/my/pint_kingpic.png',
						name:"平台金价"
					}
				]
			};
		},
		methods:{
			go_page(e){
				if(e==0){
					this.com.navto('../../pages/community/shop-code')
				}else if(e==1){
					this.com.navto('../../pages/community/platform-ask')
				}else if(e==2){
					this.com.navto('../../pages/my/olie_course')
				}else if(e==3){
					this.com.navto('../../pages/my/fankui')
				}else if(e==4){
					this.com.navto('../../pages/my/aboutus')
				}else if(e==5){
					this.com.navto('../../pages/service/service')
				}else if(e==6){
					this.com.navto('../../pages/community/platform-gold-prices')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.orders_d{
	padding: 30rpx;background-color: white;margin-top: 26rpx;border-radius: 20rpx;
	.orders_it{
		width: 25%;text-align: center;margin: 16rpx 0;
		image{
			width: 52rpx;height: 50rpx;
		}
		view{
			margin-top: 16rpx;
		}
		
	}
}
</style>
