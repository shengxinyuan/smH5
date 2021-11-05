<template>
	<!-- 精选专题详情 -->
	<view class="zl-page">
		<view class="head-image">
			<image src="../../static/selection/hunjia_02.png" mode="widthFix"></image>
		</view>
		<view class="selection-tabs">
			<u-tabs :list="list" :is-scroll="true" :current="current" @change="changeTabs" :height="height" :font-size="28"
			 :bar-width="30" :bar-height="4" :active-color="activeColor" :bg-color="bgColor"></u-tabs>
		</view>
		<view style="padding: 0 3%;position: relative;padding-top: 80rpx;">
			<!-- <zs-shopping-list></zs-shopping-list> -->
			<zs-shoplist-type></zs-shoplist-type>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '婚庆三金'
					}, {
						name: '裸钻专区'
					}, {
						name: '定制专区'
					},
					{
						name: '宝宝专区'
					},
					{
						name: '宝宝专区'
					}
				],
				current: 0,
				height: '50',
				activeColor: '#2d407a',
				bgColor:'#F8F8F8',
			}
		},
		methods: {
			changeTabs(index) {
				this.current = index
				if (index !== 0) {
					this.isShow01 = false
				} else {
					this.isShow01 = true
				};
				if (index !== 1) {
					this.isShow02 = false
				} else {
					this.isShow02 = true
				};
				if (index !== 2) {
					this.isShow03 = false
				} else {
					this.isShow03 = true
				}
			}
		}
	}
</script>

<style lang="scss">
	.head-image{
		width: 100%;
		display: flex;
		image{
			width: 100%;
		}
	}
	.selection-tabs{
		margin-top: 30upx;
	}
</style>
