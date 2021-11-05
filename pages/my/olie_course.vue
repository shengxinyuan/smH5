<template>
	<view>
		<view class="search">
			<zs-inputs @searchClick="searchClick" :texts="'请输入您想搜索的内容'"></zs-inputs>
		</view>
		<view class="but_type">
			<view class="but_type_child" :class="{active:type_ind == it.id}"  v-for="(it,ind) in list" :key="ind" @click="type_cli(it.id)">
				{{it.a}}
			</view>
		</view>
		<!-- 视频 -->
		<view v-if="page_show">
			<view v-if="vid != ''">
				<view class="video_list" v-for="(it,ind) in vid" :key="ind" >
					<view class="images" v-if="it.vid_show" @click="vid_creat(it.id)" :style="{'background-image': 'url('+it.image+')'}">
						<view><image style="width: 60rpx; height: 60rpx;" src="../../static/bofang.png" mode=""></image></view>
						<text>{{it.title}}</text>
					</view>
					<video :src="it.video" @play="play(it.id)" :id="'video'+it.id" @ended="end_vid(ind)" v-else :autoplay="true" controls></video>
				</view>
			</view>
			<view v-else>
				<u-empty text="暂无内容" mode="news"></u-empty>
			</view>
		</view>
		<view v-else> 
			<zs-login></zs-login>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{a:'使用技巧',id:2},
					{a:'提现体系',id:3},
					{a:'商城设置',id:4},
					{a:'常见问题',id:5}
				],
				type_ind:2,
				cart:'http://www.miaorongdun.com/uploads/20210108/a5c3cf573eea857b3f5414cd41ca2aba.mp4',
				playind:0,
				vid:[
					{
						src:'http://www.miaorongdun.com/uploads/20210108/a5c3cf573eea857b3f5414cd41ca2aba.mp4',
						tit:'如何开通体验超级会员?',
						bgimg:'url(../../static/my/vip_video.png)',
						vid_show:true,
						id:2
					},
					{
						src:'http://www.miaorongdun.com/uploads/20210108/a5c3cf573eea857b3f5414cd41ca2aba.mp4',
						tit:'下单后如何付款?',
						bgimg:'url(../../static/my/vip_order.png)',
						vid_show:true,
						id:5
					}
				],
				videoContent:'',
				page_show:false
			}
		},
		onLoad() {
			this.page_reader(this.type_ind)
		},
		methods:{
			page_reader(e){
				this.page_show = false
				this.$api.get('news',{label:e}).then(res=>{
					console.log(res)
					res.data.forEach(i=>{
						i.vid_show = true
					})
					if(res.status == 1){
						this.page_show = true
						this.vid = res.data
					}
				})
			},
			//搜索
			searchClick(e){
				this.page_show = false
				console.log(e)
				this.$api.get('news',{label:this.type_ind,key:e}).then(res=>{
					console.log(res)
					res.data.forEach(i=>{
						i.vid_show = true
					})
					if(res.status == 1){
						this.page_show = true
						this.vid = res.data
					}
					
				})
			},
			//类型
			type_cli(e){
				this.type_ind = e
				this.page_reader(this.type_ind)
			},
			vid_creat(e){
				this.vid.forEach((item, index) =>{	// 获取json对象并遍历, 停止非当前视频
					if (item.id != e){
						item.vid_show = true
					}else{
						item.vid_show = false
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
			//结束播放
			end_vid(e){
				
			}
		}  
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style lang="scss" scoped>
.search{
	margin: 30rpx 0 ;
}
.but_type{
	width: 100%;padding: 0 5%;display: flex;justify-content: space-between;margin-bottom: 40rpx;
	.but_type_child{
		background-color: white;padding: 8rpx 20rpx;border-radius: 40rpx;border: 1rpx solid #fff;
	}
	.active{
		border: 1rpx solid #283b77;color: #283b77;background-color: #eff3ff;
	}
}

.video_list{
	width: 100%;padding: 0 4%;margin-bottom: 30rpx;
	.images{
		width: 100%;height: 280rpx;background-size: 100% 100%;
		padding-top: 100rpx;text-align: center;
		text{
			font-size: 34rpx;color: #fff;
		}
	}
	video{
		width: 100%;height: 280rpx;
	}
}

</style>
