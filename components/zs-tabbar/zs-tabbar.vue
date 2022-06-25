<template>
	<view class="tab">
		<view class="tab_l">
			<view class="tab_l_child" @click="cli_tab(1)">
				<image src="https://zuanshi.semoh.cn/applet_static/tabbar/index-fill.png" v-if="tab_ind != 1" mode=""></image>
				<image src="https://zuanshi.semoh.cn/applet_static/tabbar/index.png" v-else mode=""></image>
				<view :class="tab_ind == 1 ? 'act' : ''">
					首页
				</view>
			</view>
			<view class="tab_l_child" @click="cli_tab(2)">
				<image src="https://zuanshi.semoh.cn/applet_static/tabbar/my.png" v-if="tab_ind != 2" mode=""></image>
				<image src="https://zuanshi.semoh.cn/applet_static/tabbar/my-fill.png" v-else mode=""></image>
				<view :class="tab_ind === 2 ? 'act' : ''">
					客服
				</view>
			</view>
		</view>
		<view class="tab_c" @click="cli_tab(3)">
			<view class="tab_c_child">
				<image src="https://sermer-app-oss.oss-cn-hangzhou.aliyuncs.com/front-end-static/3d.png" mode=""></image>
				<view :class="tab_ind == 3 ? 'act_s' : ''">
				</view>
			</view>
		</view>
		<view class="tab_l">
			<view class="tab_l_child" @click="cli_tab(4)">
				<image src="https://zuanshi.semoh.cn/applet_static/tabbar/cart.png" v-if="tab_ind != 4" mode=""></image>
				<image src="https://zuanshi.semoh.cn/applet_static/tabbar/cart-fill.png" v-else mode=""></image>
				<view :class="tab_ind == 4 ? 'act' : ''">
					购物车
				</view>
			</view>
			<view class="tab_l_child" @click="cli_tab(5)">
				<image src="https://zuanshi.semoh.cn/applet_static/tabbar/my.png" v-if="tab_ind != 5" mode=""></image>
				<image src="https://zuanshi.semoh.cn/applet_static/tabbar/my-fill.png" v-else mode=""></image>
				<view :class="tab_ind == 5 ? 'act' : ''">
					我的
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
		props: {
			tab_ind: {
				default: 1
			}, //当前样式
		},
		methods: {
			cli_tab(e) {
				if (e == 1) {
					uni.reLaunch({
						url: '/pages/index/index'
					});
				} else if (e == 2) {
					uni.reLaunch({
						url: '/pages/customer_service/customer_service'
					});
				} else if (e == 3) {
					const token = uni.getStorageSync('token');
					const member_id = uni.getStorageSync('member_id');
					const env = uni.getStorageSync('env');
					
					let envStr = '';
					if (env && env !== 'prod') {
						envStr = 'test-'
					}
					const queryStr = `?hideBar=1&env=${env}&member_id=${member_id}&token=${token}&h5UrlHost=${location.host}`;
					
					location.href = `https://${envStr}3d.semoh.cn${queryStr}`;
				} else if (e == 4) {
					uni.reLaunch({
						url: '/pages/cart/cart'
					});
				} else if (e == 5) {
					uni.reLaunch({
						url: '/pages/my/order'
					});
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.tab {
		font-size: 20rpx;
		color: #999;
		width: 100%;
		height: 130rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 999;
		background: url(https://zuanshi.semoh.cn/applet_static/tabbar/backimg.png);
		background-size: 100% 100%;
		display: flex;

		.tab_l {
			padding: 30rpx 20rpx 6rpx 10rpx;
			width: 44%;
			display: flex;
			justify-content: space-around;

			.tab_l_child {
				text-align: center;

				image {
					width: 40rpx;
					height: 40rpx;
				}
			}

			.act {
				color: #2d407a;
			}

			.act_s {
				color: #2d407a;
			}
		}

		.tab_c {
			width: 14%;
			position: relative;
			text-align: center;

			.tab_c_child {
				position: absolute;
				left: 5rpx;
				top: -30rpx;

				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
				}
			}

		}
	}
</style>
