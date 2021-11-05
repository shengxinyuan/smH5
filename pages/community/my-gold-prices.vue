<template>
	<view class="zl-box">
		<view class="tabs-box">
			<!-- <stzhang-tab :modelData="modelData" :initIndex="initIndex" @change="tabsChange" /> -->
		</view>
		<!-- 店铺金价 -->
		<view style="color: #fff;font-size: 34rpx;width: 100%;margin: 20rpx 0;text-align: center;">
			{{goldname}}
		</view>
		<view class="king_pic" v-if="navtype == 0">
			<view class="king_pic_a">
			
				<view class="times">
					更新时间：
					{{gold_price.time}}
				</view>
			</view>
			<!-- 表格 -->
			<view class="tabs">
				<view class="tabs_tr">
					<view>品种</view>
					<view>最新价</view>
					<view>买入价</view>
					<view>卖出价</view>
					<view>涨跌</view>
				</view>
				<view class="swipers_d">
					<view :class="ind % 2 != 0 ? 'tabs_tr' :'tabs_td'" v-for="(it,ind) in gold_price.data" :key="ind">
						<view>{{it.title}}</view>
						<view>{{it.new_price}}</view>
						<view>{{it.buy_price}}</view>
						<view>{{it.sell_price}}</view>
						<view> <text v-if="it.proportion_type == 0" style="color: #5cb671;">↓ {{it.proportion}}</text>
						<text style="color: #f5553f;" v-else>↑ {{it.proportion}}</text> </view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view v-if="navtype == 1">
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
		</view> -->
		<view class="scan-code-box">
			<view class="scan-code-min-box">
				<view class="scan-code-logo">
				<image :src="gold_price.html" mode="widthFix"></image>
				</view>
				<view class="scan-code-title">{{tiptext}}</view>
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
						label: '店铺金价'
					},
					{
						label: '其他金价'
					}
				],
				initIndex: 0,
				navtype:0,
				updateTime: '2020/10/14 13:52:32',
				gold_price:[],
				tiptext:'扫码进店',
				goldname:'富贵珠宝'
			}
		},
		onLoad(op) {
			this.goldname = op.goldname
			this.gold_price = JSON.parse(op.gold_price) //金店数据
			
			this.tiptext = op.tiptext
		},
		methods: {
			tabsChange(index) {
				this.navtype = index
			}
		}
	}
</script>

<style>
	page{
		background-color: #DD524D;
	}
</style>
<style lang="scss" scoped>
	.zl-box {
		padding: 3%;
		padding-top: 90rpx;
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
				color: #fff;
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
	.king_pic{
		background-color: white;
		border-radius: 10rpx;
		.king_pic_a{
			display: flex;justify-content: space-between;
			.times{
				color: #999;line-height: 60rpx; font-size: 24rpx;
			}
		}
		.tabs{
			width: 100%;
			font-size: 22rpx;
			.swipers_d{
				height: 304rpx;
				overflow-y: scroll;
			}
			.scroll-Y{
				
			}
			.tabs_tr{
				display: flex;
				view{
					width: 20%;text-align: center;height: 58rpx;line-height: 60rpx;background-color: #fff0d7;
					margin: 2rpx;border-radius: 4rpx;
					white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
				}
			}
			.tabs_td{
				display: flex;
				view{
					width: 20%;text-align: center;height: 58rpx;line-height: 60rpx;background-color: #fffcf7;
					margin: 2rpx;border-radius: 4rpx;
					white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
				}
			}
		}
	}
</style>
