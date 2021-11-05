<template>
	<view>
		<view class="tab">
			<view class="tab_l">
				<view class="tab_l_child" @click="cli_tab(1)">
					<image src="../../static/tabbar/index-fill.png" v-if="tab_ind != 1" mode=""></image>
					<image src="../../static/tabbar/index.png" v-else mode=""></image>
					<view :class="tab_ind == 1 ? 'act' : ''">
						首页
					</view>
				</view>
				<view class="tab_l_child" @click="cli_tab(2)">
					<image src="../../static/tabbar/class.png" v-if="tab_ind != 2" mode=""></image>
					<image src="../../static/tabbar/calss-fill.png" v-else mode=""></image>
					<view :class="tab_ind == 2 ? 'act_s' : ''">
						产品分类
					</view>
				</view>
			</view>
			<view class="tab_c" @click="cli_tab(3)"> 
				<view class="tab_c_child">
					<image src="../../static/tabbar/shopsale.png" mode=""></image>
					<!-- <view :class="tab_ind == 3 ? 'act_s' : ''">
						福利商城
					</view> -->
				</view>
			</view>
			<view class="tab_l">
				<view class="tab_l_child" @click="cli_tab(4)">
					<image src="../../static/tabbar/cart.png"  v-if="tab_ind != 4" mode=""></image>
					<image src="../../static/tabbar/cart-fill.png" v-else mode=""></image>
					<view :class="tab_ind == 4 ? 'act_s' : ''">
						购物车
					</view>
				</view>
				<view class="tab_l_child" @click="cli_tab(5)">
					<image src="../../static/tabbar/my.png" v-if="tab_ind != 5" mode="" mode=""></image>
					<image src="../../static/tabbar/my-fill.png" v-else mode=""></image>
					<view :class="tab_ind == 5 ? 'act_s' : ''">
						我的
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
				
			}
		},
		props:{
			tab_ind:{
				default:1
			}
		},
		methods: {
			cli_tab(e){
				if(e==1){
					this.com.rel("../../pages/index/index")
				}else if(e==2){
					this.com.rel("../../pages/classify/classify")
				}else if(e==3){
					this.com.msg('敬请期待~')
					// this.com.rel("../../pages/selts/selts")	
				}else if(e==4){
					this.com.rel("../../pages/cart/cart")
				}else if(e==5){
					this.com.rel("../../pages/my/my")
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.tab{
		font-size: 26rpx;width: 100%;height: 110rpx;
		position: fixed;left: 0;bottom: 0;z-index: 999;
		background: url(../../static/tabbar/backimg.png);
		background-size: 100% 100%;
		display: flex;
		.tab_l{
			padding: 26rpx 20rpx 6rpx 10rpx;
			width: 43%;
			display: flex;justify-content: space-around;
			.tab_l_child{
				text-align: center;
				image{
					width: 42rpx;height: 42rpx;
				}
			}
			.act{
				color: #405186;
			}
			.act_s{
				color: #024C57;
			}
		}
		.tab_c{
			width: 14%;position: relative;text-align: center;
			.tab_c_child{
				position: absolute;left: 5rpx ;top: -30rpx;
				image{
					width: 100rpx;height: 98rpx;border-radius: 50%;
				}
			}
			
		}
	}
</style>
