<template>
	<view class="allcomment">
		<view class="evaluate" v-if="shop_pj">
			<view class="eval_con" v-for="(it,ind) in shop_pj">
				<view class="order_head">
					<view class="img">
						<image src="../../static/index/section.png" mode="aspectFill"></image>
						<view class="shop_name"> {{it.nickname}}</view>
					</view>
					
					<view class="order_time">{{it.create_time}}</view>
				</view>
				<view class="order_con">
					{{it.remark}}
				</view>
				<view class="order_img">
					<image v-for="img in it.img" :src="it" mode="aspectFill" ></image>
				</view>
			</view>
			<view style="width: 100%;height: 80rpx;">
				<uni-load-more :status="status" :content-text="contentText"></uni-load-more>
			</view>
		</view>
		<view v-else style="padding-top: 160rpx;">
			<u-empty text="暂无评论" mode="message"></u-empty>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default{
		data() {
			return{
				comment:'',
				page:1,
				shop_id:0,
				status: 'more',
				statusTypes: [{
					value: 'more',
					text: '加载前'
				}, {
					value: 'loading',
					text: '加载中'
				}, {
					value: 'noMore',
					text: '没有更多'
				}],
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
				shop_pj:[]
			}
		},
		onLoad(op) {
			console.log(op)
			this.shop_id = op.id
			this.page_type(this.page)
		},
		onPullDownRefresh() {
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
			this.comment = []
			this.page = 1
			this.page_type(this.page)
		},
		onReachBottom() {
			this.status = 'loading'
			this.page++
			this.page_type(this.page)
		},
		methods:{
			page_type(e){
				// 评论
				this.$api.get('commentlist/'+this.shop_id+'?page='+e).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_pj = this.shop_pj.concat(res.data.data)
					}
					if(res.data.data && res.data.data < 10  ){
						this.status = 'noMore'
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.Partition{
		width: 100%;
		height: 15rpx;
		background-color: #f1f1f1;margin-top: 10rpx;
	}
	.allcomment{
		width: 100%;height: 100vh;
		padding: 2%;
		background-color: #f1f1f1;
	}
	//评论
	.evaluate{
		width: 100%;
		.eval_name{
			width: 100%;
			float: left;
			height: 90rpx;
			padding: 0 3%;
			.name{
				float: left;
				font-size: 30rpx;
				line-height: 90rpx;
				font-weight: bold;
			}
			.all{
				font-size: 20rpx;
				color: #999;
				line-height: 90rpx;
				float: right;
			}
		}
		.eval_con:last-child{
			border: 0;
		}
		.eval_con{
			width: 100%;
			display: flex;background-color: white;padding: 2%;
			flex-wrap: wrap;margin-bottom: 10rpx;
			.order_head{
				width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: space-between;
				.img{
					display: flex;
					image{
						width: 80rpx;
						height: 80rpx;border-radius: 80rpx;
						// background-color: pink;
					}
					.shop_name{
						width: 180rpx;line-height: 80rpx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
						font-size: 28rpx;margin-left: 20rpx; 
						font-weight: bold;
					}
				}
				.order_time{
					width: 40%;
					line-height: 70rpx;text-align: right;
					font-size: 26rpx;
					color: #999;
				}
			}
			.order_con{
				width: 100%;
				font-size: 30rpx;
				line-height: 52rpx;
				padding: 6rpx 0;
			}
			.order_img{
				width: 100%;
				display: flex; 
				image{
					width: 216rpx;
					height: 216rpx;
					margin: 10rpx;
				}
			}
		}
	}
</style>
