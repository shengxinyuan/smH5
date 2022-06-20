<template>
	<view class="box">
		<!-- 搜索框 -->
		<view class="header">
			<view class="input-view">
				<u-search placeholder="搜索商品" v-model="keyword" :show-action="false" @search="go_search" @clear="clear" @change="get_data"></u-search>
			</view>
		</view>
		<!-- 历史搜索 -->
		<view class="history-cont">
			<template >
				<view style="width: 100%;">
					<view class="zl-history-box">
						<view class="zl-history">
							<text>历史搜索</text>
						</view>
						<u-icon v-if="history.length > 0" name="trash" @click="deles" size="40"></u-icon>
					</view>
					<!-- 内容 -->
					<view class="zl-search-history">
						<text v-for="(item,index) in history" :key="index" @click="again(item)">{{item}}</text>
					</view>
				</view>
			</template>
		</view>	
		
		<!-- 搜索结果 -->
		<view>
			<template >
				<view style="width: 100%;">
					<view class="zl-history-box">
						<view class="zl-history">
							<text>搜索结果</text>
						</view>
					</view>
					<scroll-view scroll-y="true" class="goods-list" v-if="shop_list.length > 0">
						<view class="cont_item" v-for="(item,i) in shop_list" :key="i" @click="go_shopdetail(item)">
							<view class="img-box">
								<image class="images" :src="item.image" mode="aspectFit"></image>
							</view>
							<view class="base-cont">
								<view class="title">
									{{item.title}}
								</view>
						
								<view class="index-cont">
									<view class="item-sale">
										已售{{item.sale}}件 库存{{item.stock}}件
									</view>
									<view class="price">
										<text><text style="">￥</text>{{item.price}}</text>
									</view>
								</view>
							</view>
						</view>
						<u-loadmore :status="moreStatus" margin-bottom="120" margin-top="20"/>
					</scroll-view>
				</view>
			</template>
		</view>	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				history: [], //搜索历史
				shop_list: [],
				key: '',
				member_id: '',
				queryParams: {
					page: 1,
					limit: 20,
					last_page: 1
				},
				moreStatus: 'loadmore',
			}
		},
		onReachBottom() {
			if (this.queryParams.last_page === this.queryParams.page) {
				return;
			} else {
				this.queryParams.page += 1;
				this.get_data();
			}
		},
		onLoad(e) {
			this.member_id = uni.getStorageSync('member_id');
		},
		methods: {
			go_shopdetail(item) {
				uni.navigateTo({ url: '../../pages/index/shop_detail?shop_id=' + item.id })
			},
			go_search(value) {
				this.shop_list = [];
				this.queryParams.page = 1;
				if (value === '') {
					uni.showToast({ icon:'none', title: '搜索内容不能为空' })
				} else {
					if (this.history.indexOf(value) == -1) {
						this.history.unshift(value)
					}
					if (this.history.length > 8) {
						this.history.pop()
					}
					this.get_data();
				}
			},
			// 清空
			clear () {
				this.shop_list = [];
				this.queryParams.page = 1;
			},
			
			// 删除搜索历史
			deles() {
				uni.showModal({
					title: '提示',
					content: '确定要删除历史搜索吗',
					success: (res) => {
						if (res.confirm) {
							this.history = []
							uni.removeStorage({
								key: 'neirong',
								success: function(res) {
									uni.showToast({
										title: '清空成功'
									})
								}
							});
						}
					}
				});
			},
			
			// 点击搜索历史再次搜索
			again(value) {
				this.keyword = value;
				this.queryParams.page = 1;
				this.get_data();
			},
			
			get_data(value){
				if (this.keyword === '') {
					return
				}
				uni.showLoading()
				this.$api.post('goods', {
					key: this.keyword,
					page: this.queryParams.page
				}).then(res => {
					if (res.status === 1) {
						if (res.data.data) {
							this.shop_list = this.queryParams.page === 1 ? res.data.data : [...this.shop_list, ...res.data.data];
							this.queryParams.last_page = res.data.last_page;
							this.moreStatus = res.data.last_page === res.data.current_page ? 'nomore' : 'loadmore';
						}
						uni.hideLoading()
					}
				})
			},
		}
	}
</script>
<style>
	page {
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
	.header {
		position: fixed;
		left: 0;
		top: 0;
		height: 120rpx;
		width: 100%;
		padding: 20rpx 0;
		background-color: #fff;
		z-index: 999;
		.input-view {
			display: flex;
			flex-direction: row;
			height: 60rpx;
			border-radius: 15px;
			padding: 0 15px;
			flex-wrap: nowrap;
			margin: 7px 30rpx;
			line-height: 60rpx;
		}
	}
	
	.history-cont {
		margin-top: 70px;
	}
	
	.imgs {
		width: 100%;
		height: 100rpx;
		margin-top: 40rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.box {
		width: 100%;
	}

	.zl-history-box {
		width: 100%;
		display: flex;
		padding: 10upx 30upx;
		justify-content: space-between;
	}

	.zl-history {
		height: 60upx;
		font-size: 30upx;
		font-weight: bold;
		line-height: 60upx;
	}

	.zl-search-history {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		padding: 0 30rpx;

		text {
			background-color: #fff;
			padding: 0 20upx;
			margin-right: 20rpx;
			margin-bottom: 20rpx;
			text-align: center;
			border-radius: 40upx;
			max-width: 200rpx;
			height: 50rpx;
			line-height: 50rpx;
			display: inline-block;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}

	.goods-list {
		width: 100%;
		background-color: #fff;
		.cont_item {
			margin: 0 32rpx;
			background-color: white;
			overflow: hidden;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #eee;
			color: rgb(96, 98, 102);
	
			.img-box {
				margin: 20rpx 0;
				margin-right: 32rpx;
				width: 100rpx;
				height: 100rpx;
	
				.images {
					display: block;
					width: 100rpx;
					height: 100rpx;
					border-radius: 10rpx;
					display: block;
				}
			}
	
			.base-cont {
				flex: 1;
				overflow: hidden;
				font-size: 24rpx;
	
				.title {
					font-size: 28rpx;
					margin-bottom: 10rpx;
					color: #414141;
				}
			}
	
			.index-cont {
				display: flex;
				font-size: 24rpx;
				text-align: right;
				font-size: 30rpx;
	
				.item-sale {
					width: 400rpx;
					text-align: left;
					font-size: 24rpx;
				}
	
				.price {
					flex: 1;
					text-align: right;
					color: #ea5b72;
				}
			}
		}
	}
</style>
