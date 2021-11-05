<template>
	<view class="content">
		<view class="header" >
			<view class="input-view" >
				<input confirm-type="search" class="nav-bar-input" type="text" :disabled="true" placeholder="输入搜索关键词" @click="search">
				<view style="margin-top: 10rpx;" @click="camear">
					<u-icon name="camera" size="44" color="#666666"></u-icon>
				</view>
			</view>
			<view class="rig"   @click="go_pages('../information/information')">
				 <u-icon name="chat" size="50"></u-icon>消息
			</view>
		</view>
		
		<scroll-view scroll-y class="left-aside">
			<view v-for="(item,ind) in flist" :key="ind" class="f-item b-b" :class="{active: currentId == item.id}" @click="tabtap(item)">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
			<!-- 轮播 -->
			<view class="" style="width: 98%;height: 230rpx;background-color: orange;">
				<swiper class="swiper" :indicator-dots="true" :autoplay="true" :circular="true" :interval="4000" :duration="500">
					<swiper-item v-for="(it,ind) in banners" :key="ind">
						<image :src="it.image" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 轮播 -->
			<view v-for="item in slist" :key="item.id" class="s-list" :id="'main-'+item.id">
				<text class="s-item"> {{item.title}}</text>
				<view class="t-list">
					<view @click="navToList(titem.id)" v-if="titem.pid == item.id" class="t-item" v-for="titem in tlist" :key="titem.id">
						<image :src="titem.image"></image>
						<text>{{titem.title}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- tabbar -->
		<zs-tabbar :tab_ind="2"></zs-tabbar>
		<!-- tabbar -->
	</view>
</template>

<script>
	import Json from '../../Json.js' //测试用数据
	export default {
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				flist: [],
				slist: [],
				tlist: [],
				banners: [],
			}
		},
		onLoad(){
			this.loadData();
		},
		methods: {
			//拍照
			camear(){
				uni.chooseImage({
				    count: 6, //默认9
				    sourceType: ['camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				}); 
			},
			//页面跳转
			go_pages(e){
				this.com.navto(e)
			},
			
			loadData(){
				this.$api.get('cate').then(res=>{
					// console.log(res.data.label)
					this.flist=res.data.label
					this.slist=res.data.label //2级分类
					this.currentId = res.data.label[0].id
					res.data.label.forEach(i=>{
						this.$api.get('cate',{label:i.id}).then(res=>{
							if(res.data.cate !=''){
								res.data.cate.forEach(it=>{
									this.tlist.push(it)
								})
								// console.log(this.tlist)
							}
						})
					})
				})
				//轮播
				this.$api.get('banner',{type:2}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.banners = res.data
					}
				})
			},
			//一级分类点击
			tabtap(item){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				
				this.currentId = item.id;
				let index = this.slist.findIndex(sitem=>sitem.id === item.id);
				this.tabScrollTop = this.slist[index].top;
				console.log(this.tabScrollTop,'高度')
			},
			//右侧栏滚动
			asideScroll(e){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				let tabs = this.slist.filter(item=>item.top <= scrollTop).reverse();
				// console.log(tabs)
				if(tabs.length > 0){
					this.currentId = tabs[0].id;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				let h = 0;
				this.slist.forEach(item=>{
					let view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({
						size: true
					}, data => {
						item.top = h + 115;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				this.sizeCalcState = true;
				console.log(this.slist,'数据')
			},
			navToList(e){
				this.com.navto('./class_detail?classify_id='+e)
			}
		}
	}
</script>

<style lang='scss'>
	page,
	.content {
		height: 100%;
		background-color: #f8f8f8;
		display: flex;
		.header{
			position: fixed;left: 0;top: 0;
			height: 145rpx;width: 100%;
			padding-top: 55rpx;padding-left: 30rpx;
			display: flex;
			z-index: 999;background-color: white;
			.input-view {
				display: flex;
				flex-direction: row;justify-content: space-between;
				width: 68%;
				flex: 1;
				height: 60rpx;
				border-radius: 15px;
				padding: 0 15px;
				margin: 7px 0;
				line-height: 60rpx;
				background-color: #eee;
				
				input{
					width: 86%;
					margin-top: 10rpx;
					font-size: 30rpx;
					
				}
			}
			.rig{
				width: 20%;
				line-height: 100rpx;text-align: center;
				font-size: 30rpx;
			}
		}
	}
	.left-aside {
		flex-shrink: 0;
		width: 200upx;padding-bottom: 140rpx;padding-top: 160rpx;
		background-color: #fff;
	}
	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		font-size: 28upx;
		
		position: relative;
		&.active{
			font-weight: bold;
			background: #f8f8f8;
			&:before{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				height: 36upx;
				width: 7upx;
				background-color: #2d407a;
				opacity: .8;
			}
		}
	}

	.right-aside{
		width: 520rpx;
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
		padding-bottom: 140rpx;padding-top: 160rpx;
		.swiper{
			width: 100%;height: 100%;
			image{
				width: 100%;height: 100%;
			}
		}
	}
	.s-item{
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
	}
	.t-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		padding-top: 12upx;
		&:after{
			content: '';
			flex: 99;
			height: 0;
		}
	}
	.t-item{
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 32%;margin-right: 2%;
		font-size: 26upx;
		color: #666;
		padding-bottom: 20upx;
		
		image{
			width: 140upx;
			height: 140upx;
			background-color: #F1F1F1;
		}
	}
	.t-item:nth-child(3n+3){
		margin-right: 0;
	}
</style>
