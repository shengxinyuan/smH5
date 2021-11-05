<template>
	<!-- 社区营销 -->
	<view>
		<view class="head-box">
			<block v-for="(headItem,headIndex) in headList" :key="headIndex">
				<view class="head-min-box" :class="{active: headItem.id == ind}" @click="nav_cli(headItem.id)">
					<view>
						<view class="community-image">
							<image :src="headItem.communityImage" mode="widthFix"></image>
						</view>
						<view class="community-title">{{headItem.title}}</view>
					</view>
				</view>
			</block>
		</view>
		<view class="community-list-box" v-if="page_show">
			<block v-for="(detailsItem,detailsIndex) in detailsList" :key="detailsIndex" v-if="detailsItem!=''">
				<view class="community-list-min-box" >
					<view class="user-photo">
						<image :src="detailsItem.admin_img" mode="widthFix"></image>
					</view>
					<view class="list-details">
						<view class="list-details-title">
							<view class="title">{{detailsItem.admin_name}}</view>
							<view class="date">{{detailsItem.update_time}}</view>
						</view>
						<view class="list-details-text">
							<view>{{detailsItem.title}}</view>
						</view>
						<view v-if="detailsItem.image || detailsItem.video "> 
							<view class="list-details-video" :style="{'background-image': 'url('+detailsItem.image+')'}" v-if="detailsItem.vid_show"
							 @click="vid_creat(detailsItem)">
								<view class="play-btn" v-if="detailsItem.video != ''">
									<image src="../../static/community/play.png" ></image>
								</view>
							</view>
							<video :src="detailsItem.video" @play="play(detailsItem.id)" :id="'video'+detailsItem.id" v-else
							@ended="end_vid(ind)" :autoplay="true" controls></video>
						</view>
					</view>
				</view>
			</block>
			<view style="padding-top: 200rpx;" v-else>
				<u-empty text="暂无内容" mode="news"></u-empty>
			</view>
		</view>
		<view v-else>
			<zs-login></zs-login>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headList: [{
						
						communityImage: '../../static/community/head_01.png',
						title: '营销海报',id:11
					},
					{
						communityImage: '../../static/community/head_02.png',
						title: '营销视频',id:12
					},
					{
						communityImage: '../../static/community/head_03.png',
						title: '营销文案',id:13
					},
					{
						communityImage: '../../static/community/head_04.png',
						title: '早安问候',id:14
					}
				],
				detailsList: [],
				ind:11,
				page_show:false
			}
		},
		onLoad() {
			this.nav_cli(this.ind)
		},
		methods: {
			nav_cli(e){
				this.ind = e
				this.page_show = false
				this.$api.get('news',{label:e}).then(res=>{
					console.log(res)
					res.data.forEach(i=>{
						i.vid_show = true
					})
					if(res.status == 1){
						this.detailsList = res.data
						this.page_show = true
					}
				})
			},
			//开始播放
			play(e){
				let _this = this;
				let currentId = 'video' + e;// 获取当前视频id
				this.videoContent = uni.createVideoContext(currentId,_this).play();
				
				// 获取视频列表
				let trailer = this.vid;
				trailer.forEach((item, index) =>{	// 获取json对象并遍历, 停止非当前视频
					if (item.src != null && item.src != "") {
						let temp = 'video' + item.id;
						if (temp != currentId) {
							// 暂停其余视频
							uni.createVideoContext(temp,_this).pause(); //暂停视频播放事件
						}
					}
				 
				})
			},
			vid_creat(e){
				if(e.video == ''){
					let arr = []
					arr.push(e.image)
					 uni.previewImage({
						urls:arr,
					});
				}else{
					//改变图片状态
					this.detailsList.forEach((item, index) =>{	// 获取json对象并遍历, 停止非当前视频
						if (item.id != e.id){
							item.vid_show = true
						}else{
							item.vid_show = false
						}
					})
				}
				
			},
		}
	}
</script>

<style lang="scss">
	.head-box {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		border-top: solid 2upx #eeeeee;
		border-bottom: solid 10upx #f3f7f8;

		.head-min-box {
			width: 120upx;
			padding-top: 20upx;
			padding-bottom: 40upx;
			&.active{
				background-image: linear-gradient(0deg, #ffffff 0%, #f8e1b5 100%);
			}
			.community-image {
				width: 120upx;
				display: flex;
				justify-content: center;

				image {
					width: 60%;
				}
			}

			.community-title {
				font-size: 24upx;
				padding-top: 10upx;
				text-align: center;
			}
		}
	}

	.community-list-box {
		padding: 30upx;

		.community-list-min-box {
			display: flex;
			margin-bottom: 40upx;

			.user-photo {
				width: 11%;
				display: flex;
				image {
					height: 100rpx;
					width: 100%;
					border-radius: 50%;
				}
			}

			.list-details {
				width: 89%;
				padding-left: 20upx;
				padding-bottom: 50upx;
				border-bottom: solid 2upx #eeeeee;

				.list-details-title {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 26upx;

					.date {
						font-size: 24upx;
						color: #999999;
					}
				}

				.list-details-text {
					font-size: 26upx;
					margin-top: 30upx;
					margin-bottom: 20upx;
				}

				.list-details-video{
					display: flex;justify-content: space-around;
					width: 100%;height: 260rpx;
					background-size: 100% 100%;border-radius: 10rpx;
					padding-top: 60rpx;
					.play-btn {
						width: 80rpx;height: 80rpx;
						image{
							width: 100%; height: 100%;
						}
					}
				}
				video{
					width: 100%;height: 254rpx;
					border-radius: 10rpx;
				}
			}
		}
	}
</style>
