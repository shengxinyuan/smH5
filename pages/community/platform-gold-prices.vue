<template>
	<view class="zl-box">
		<view class="tabs-box">
			<stzhang-tab :modelData="modelData" :initIndex="initIndex" @change="tabsChange" />
		</view>

		<!-- 店铺金价 -->
		<view class="tabs-one-box" v-if="isShow01">
			<view class="tabs-one-title">
				<text>更新时间：{{updateTime}}</text>
			</view>
			<view class="tabs">
				<view class="tabs_tr">
					<view>品种</view>
					<view>最新价</view>
					<view>买入价</view>
					<view>卖出价</view>
					<view>涨跌</view>
				</view>
				<view :class="ind % 2 != 0 ? 'tabs_tr' :'tabs_td'" v-for="(it,ind) in 5" :key="ind">
					<view>黄金99.95</view>
					<view>360.00</view>
					<view>357.01</view>
					<view>359.80</view>
					<view> <text v-if="ind %2 == 0" style="color: #5cb671;">↑ 2.23</text><text style="color: #f5553f;" v-else>↓ 2.23</text> </view>
				</view>
			</view>
			<view class="scan-code-box">
				<view class="scan-code-min-box">
					<view class="scan-code-logo">
						<image src="../../static/community/erweima.png" mode="widthFix"></image>
					</view>
					<view class="scan-code-title">{{scanCodeTitle}}</view>
				</view>
			</view>
			<view class="bottom-box">
				<view class="share-box">
					<view class="share-min-box">
						<view class="share-logo">
							<image src="../../static/community/haoyou.png" mode="widthFix"></image>
						</view>
						<view class="share-title">微信好友</view>
					</view>
				</view>
				<view class="share-box">
					<view class="share-min-box">
						<view class="share-logo">
							<image src="../../static/community/pyq.png" mode="widthFix"></image>
						</view>
						<view class="share-title">朋友圈</view>
					</view>
				</view>
				<view class="share-box">
					<view class="share-min-box">
						<view class="share-logo">
							<image src="../../static/community/lianjie.png" mode="widthFix"></image>
						</view>
						<view class="share-title">分享链接</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="isShow02">
			<view class="tabs-one-title">
				<text>更新时间：{{updateTime}}</text>
			</view>
			<view class="tabs">
				<view class="tabs_tr">
					<view class="tab-min-box">品种名称</view>
					<view class="tab-min-box">产品名称</view>
					<view class="tab-min-box">价格</view>
				</view>
				<view :class="ind % 2 != 0 ? 'tabs_tr' :'tabs_td'" v-for="(it,ind) in 5" :key="ind">
					<view class="tab-min-box">周大福</view>
					<view class="tab-min-box">黄金99.95</view>
					<view class="tab-min-box">357.01</view>
				</view>
			</view>
			<view class="scan-code-box">
				<view class="scan-code-min-box">
					<view class="scan-code-logo">
						<image src="../../static/community/erweima.png" mode="widthFix"></image>
					</view>
					<view class="scan-code-title">{{scanCodeTitle}}</view>
				</view>
			</view>
			<view class="bottom-box">
				<view class="share-box">
					<view class="share-min-box">
						<view class="share-logo">
							<image src="../../static/community/haoyou.png" mode="widthFix"></image>
						</view>
						<view class="share-title">微信好友</view>
					</view>
				</view>
				<view class="share-box">
					<view class="share-min-box">
						<view class="share-logo">
							<image src="../../static/community/pyq.png" mode="widthFix"></image>
						</view>
						<view class="share-title">朋友圈</view>
					</view>
				</view>
				<view class="share-box">
					<view class="share-min-box">
						<view class="share-logo">
							<image src="../../static/community/lianjie.png" mode="widthFix"></image>
						</view>
						<view class="share-title">分享链接</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import stzhangTab from "@/components/stzhang-tab/stzhang-tab.vue"
	
	export default {
		components: {
			stzhangTab
		},
		data() {
			return {
				modelData: [{
						label: '平台金价'
					},
					{
						label: '其他金价'
					}
				],
				initIndex: 0,
				isShow01: true,
				isShow02: false,
				updateTime: '2020/10/14 13:52:32',
				scanCodeTitle:'扫码下载'
			}
		},
		methods: {
			tabsChange(index) {
				if (index !== 0) {
					this.isShow01 = false
				} else {
					this.isShow01 = true
				};
				if (index !== 1) {
					this.isShow02 = false
				} else {
					this.isShow02 = true
				}
			}
		}
	}
</script>

<style lang="scss">
	.zl-box {
		padding: 20upx 40upx;
	}
	.tabs-one-title{
		font-size: 22upx;
		color: #666666;
		margin: 20upx 0;
	}
	.tabs{
		width: 100%;
		font-size: 20upx;
		.tabs_tr{
			display: flex;
			view{
				width: 20%;text-align: center;height: 68rpx;line-height: 70rpx;background-color: #fff0d7;
				margin: 2rpx;border-radius: 4rpx;
				white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
			}
			.tab-min-box{
				width: 33.3%;text-align: center;height: 68rpx;line-height: 70rpx;background-color: #fff0d7;
				margin: 2rpx;border-radius: 4rpx;
				white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
			}
		}
		.tabs_td{
			display: flex;
			view{
				width: 20%;text-align: center;height: 68rpx;line-height: 70rpx;background-color: #fffcf7;
				margin: 2rpx;border-radius: 4rpx;
				white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
			}
			.tab-min-box{
				width: 33.3%;text-align: center;height: 68rpx;line-height: 70rpx;background-color: #fffcf7;
				margin: 2rpx;border-radius: 4rpx;
				white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
			}
		}
	}
	.scan-code-box{
		margin-top: 150upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.scan-code-min-box{
			width: 200upx;
			.scan-code-logo{
				width: 200upx;
				height: 200upx;
				display: flex;
				image{
					width: 100%;
				}
			}
			.scan-code-title{
				margin-top: 20upx;
				font-size: 26upx;
				font-weight: bold;
				text-align: center;
				color: #2d407a;
			}
		}
	}
	.bottom-box{
		width: 100%;
		padding-bottom: 50upx;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		.share-box{
			width: 33.3%;
			display: flex;
			justify-content: center;
			.share-min-box{
				
				.share-logo{
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 80upx;
						height: 80upx;
					}
				}
				.share-title{
					font-size: 22upx;
					text-align: center;
					margin-top: 10upx;
				}
			}
		}
	}
</style>
