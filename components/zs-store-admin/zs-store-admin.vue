<template>
	<view>
		<view class="orders_d">
			<view style="display: flex;justify-content: space-between;margin-bottom: 10rpx;">
				<view style="font-size: 30rpx;">
					店铺管理
				</view>
			</view>
			<view style="display: flex;flex-wrap: wrap;">
				<view class="orders_it" v-for="(it,ind) in store_admin" :key="ind" @click="goto_vip_set(ind)">
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
						img:'../../static/my/my_store.png',
						name:"我的店铺"
					},
					{
						img:'../../static/my/store_order.png',
						name:"店铺订单"
					},
					{
						img:'../../static/my/store_shez.png',
						name:"店铺设置"
					},
					{
						img:'../../static/my/pram_kingstore.png',
						name:"推广店铺"
					},
					{
						img:'../../static/my/king_priceshare.png',
						name:"金价分享"
					},
					{
						img:'../../static/my/tuoke.png',
						name:"引流拓客"
					},
					{
						img:'../../static/my/shejiao.png',
						name:"社交营销"
					},
					{
						img:'../../static/my/zhuanti.png',
						name:"精选专题"
					}
				]
			};
		},
		props:{
			skip:{
				type: Boolean,
			},
			menber_json:{},
			jinx:{}
		},
		methods:{
			goto_vip_set(ind){
				let that = this
				if(this.skip == true){
					if(ind == 0){
						uni.showModal({
							content:"你还不是VIP,是否开通?",
							success(a) {
								if(a.confirm){
									that.com.navto('../../pages/my/vip_member')
								}
							}
						})
					}else if(ind == 1){
						uni.navigateTo({ url: '../../pages/shop-orders/shop-orders' })
					}else if(ind == 2){
						uni.navigateTo({ url: '../../pages/set-shop/set-shop' })
					} else if(ind == 3){
						uni.navigateTo({ url: '../../pages/community/shop-code' })
					} else if(ind == 4){
						uni.navigateTo({ url: '../../pages/community/my-gold-prices' })
					}else if(ind == 5){
						uni.navigateTo({ url: '../../pages/community/talk' })
					} else if(ind == 6){
						uni.navigateTo({ url: '../../pages/community/community' })
					} else if(ind == 7){
						uni.navigateTo({ url: '../../pages/index/Selected_topics?id='+this.jinx[1].id+'&type='+JSON.stringify(this.jinx) })
					}
				}
			
			},
		}
	}
</script>

<style lang="scss" scoped>
.orders_d{
	padding: 30rpx;background-color: white;margin-top: 26rpx;border-radius: 20rpx;
	background-image: url(../../static/my/dianbu_bgimage.png);
	background-size: 100% 100%;
	.orders_it{
		width: 25%;text-align: center;margin: 16rpx 0;
		image{
			width: 54rpx;height: 58rpx; 
		}
		view{
			margin-top: 16rpx;
		}
		
	}
}
</style>
