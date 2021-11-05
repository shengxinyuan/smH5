<template>
	<view class="">
		<view class="header">
			<view class="header_white" :style="{background:background }">
				<view class="gototop" @click="gotoppage">
					<u-icon name="arrow-left" size="50"></u-icon>
				</view>
			</view>
			<view class="me_gold">
				我的金币
			</view>
			<view class="gold_statis">
				<view class="statis_top">
					当前金币：<text style="font-size: 44rpx;font-weight: 600;">{{num_s}}</text>
				</view>
				<view class="statis_bot">
					<u-icon name="volume-fill" size="30"></u-icon>
					100金币=1元，可用金币抵扣指定商品类型订单金额。
				</view>
				<!-- <image src="../../static/go.png" mode="" @click="go_page('../selts/selts')"></image> -->
			</view>
		</view>
		<image class="gold_statimg" src="../../static/my/gold_statis.png" mode=""></image>
		<view class="list">
			<view class="lsit_item" v-for="(it,ind) in golds.data" :key="ind">
				<view class="it_l">
					<view class="it_l_top">
						{{it.title}}
					</view>
					<view class="it_l_but">
						{{it.create_time}}
					</view>
				</view>
				<view class="it_r" :class="{act:it.type == 1}" v-if="it.type == 1">
					+{{it.gold}}金币
				</view>
				<view class="it_r" v-else>
					-{{it.gold}}金币
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				background:'',
				num:299990,
				golds:''
			}
		},
		onPageScroll(e) {
			this.background = 'rgba(246,218,164,'+e.scrollTop / 80 +')'
			
		},
		computed:{
			num_s(){
				let arr = this.golds.gold
				let att =0
				if(this.golds.gold >= 100000){ 
					att =this.golds.gold /10000
					arr = Math.floor(att * 100) / 100 
					return arr+'万'
				}else{
					return arr
				}
				
			},
		},
		onLoad() {
			this.page_reader()
		},
		methods:{
			page_reader(){
				this.$api.get('gold').then(res=>{
					console.log(res)
					if(res.status==1){
						this.golds = res.data
					}
				})
			},
			//页面跳转
			go_page(e){
				this.com.rel(e)
			},
			gotoppage(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	page{background-color: #f6f6f6;}
</style>
<style scoped lang="scss">
	.header{
		width: 100%;height: 360rpx;background-image: url(../../static/my/glod.png);
		background-size: 100% 100%;padding-top: 150rpx;margin-bottom: 120rpx;
		.header_white{
			width: 100%;height: 140rpx;position: fixed;left: 0;top: 0;padding-top: 68rpx;z-index: 20;
			.gototop{
				padding-left: 30rpx;
			}
		}
		.me_gold{width: 100%;padding: 0 5%;margin-bottom: 20rpx;font-size: 34rpx;}
		.gold_statis{
			width: 90%;height: 240rpx;padding: 20rpx;margin: 0 5%;border-radius: 14rpx;
			box-shadow: 0 0 10rpx 2rpx #f7dead;
			background-color: #fff;font-size: 34rpx;
			position: relative;
			image{
				position: absolute;right: 0;top: 60rpx;
				width: 140rpx;height: 56rpx;
			}
			.statis_top{
				width:100;height: 78%;border-bottom: 2rpx solid #F6F6F6;line-height: 140rpx;padding-left: 24%;
			}
			.statis_bot{
				font-size: 26rpx;line-height: 60rpx;color: #999;white-space: nowrap;
			}
		}
	}
	.gold_statimg{
		width: 100%;height: 70rpx; margin-bottom: 16rpx;
	}
	.list{
		width: 94%;margin: 0 3%;padding: 16rpx;
		background-color: white;border-radius: 14rpx;
		.lsit_item{
			width: 100%;border-bottom: 2rpx solid #F6F6F6;display: flex;justify-content: space-between;
			.it_l{
				
				.it_l_top{
					line-height: 58rpx;font-size: 30rpx;
				}
				.it_l_but{
					font-size: 26rpx;color: #999;line-height: 48rpx;
				}
			}
			.it_r{
				line-height: 100rpx;font-size: 30rpx;color: #DD524D;
			}
			.act{
				color: #18B566;
			}
		}
	}
	
</style>
