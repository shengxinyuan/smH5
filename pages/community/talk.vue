<template>
	<view>
		<view class="swiper-box">
			 <swiper class="swiper" :autoplay="true" :interval="4000" :circular="true">
				<swiper-item v-for="(it,ind) in list" :key="ind">
					<view class="swiper-item uni-bg-red">
						<image :src="it.image" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="yltk-bars-list">
			<block class="nav_bar" v-for="(barsItem,ind) in barsList" :key="ind" >
				<view class="yltk-bars-box" :class="{active: barsItem.id == navbarind}" @click="navbar_click(barsItem.id)">
					<text>{{barsItem.title}}</text>
				</view>
			</block>
		</view>
		<view class="yltk-details-list" v-if="page_show">
			<block v-for="(detailsItem,detailsIndex) in detailsList" :key="detailsIndex">
				<view class="yltk-details-box" @click="go_detail(detailsItem.id)">
					<view class="details-box-left">
						<view class="details-text">
							<text class="u-line-2">{{detailsItem.title}}</text>
						</view>
						<view class="bottom-show">
							<view>
								<text>{{detailsItem.create_time}}</text>
							</view>
							<view>
								<text>{{detailsItem.number}}人看过</text>
							</view>
						</view>
					</view>
					<view class="details-box-right">
						<image :src="detailsItem.image" mode="aspectFill"></image>
					</view>
				</view>
			</block>
		</view>
		<view class="" v-else>
			<zs-login> </zs-login>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				barsList:[
					{
						title:'热门',id:7
					},
					{
						title:'技巧',id:8
					},
					{
						title:'服务',id:9
					},
					{
						title:'话术',id:10
					}
				],
				detailsList:[],
				navbarind:7,
				page_show:false
			}
		},
		onLoad() {
			this.navbar_click(this.navbarind)
			this.page_reader()
		},
		methods: {
			page_reader(){
				this.$api.get('banner',{type:4}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.list = res.data
					}
				})
			},
			//点击导航
			navbar_click(e){
				this.page_show = false
				this.navbarind = e
				this.$api.get('news',{label:e}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.detailsList = res.data
						this.page_show = true
					}
				})
			},
			//详情
			go_detail(e){
				this.com.navto('../my/talk_detail?id='+e+'&type='+this.navbarind)
			}
		}
	}
</script>

<style lang="scss">
	.swiper{
		width: 100%;height: 400rpx;border-radius: 14rpx;overflow: hidden;
		.swiper-item{
			width: 100%;height: 100%;
			image{
				width: 100%;height: 100%;
			}
		}
	}
	.swiper-box{
		padding: 20upx;
	}
	.yltk-bars-list{
		padding: 20upx;
		font-size: 28upx;
		display: flex;
		.yltk-bars-box{
			width: 25%;
			height: 50upx;
			line-height: 50upx;
			padding-left: 30upx;
			&.active{
				background-image:linear-gradient(90deg, #f8e1b5 0%, #ffffff 100%);
			}
		}
	}
	.yltk-details-list{
		padding: 20upx;
		.yltk-details-box{
			padding: 20rpx 2%;
			display: flex;
			.details-box-left{
				width: 74%;
				padding-right: 20upx;
				.details-text{
					font-size: 26upx;
				}
				.bottom-show{
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					font-size: 24upx;
					color: #999999;
					margin-top: 80upx;
				}
			}
			.details-box-right{
				width: 26%;height: 185rpx;
				display: flex;
				image{
					width: 100%;height: 100%;
					border-radius: 6upx;
				}
			}
		}
	}
</style>
