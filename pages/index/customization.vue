<template>
	<view class="">
		<view class="user">
			<view class="user_item" style="border-bottom: 1rpx solid #F6F6F6;">
				<view class="it_left">
					姓名
				</view>
				<view class="it_right">
					<input type="text" placeholder="请输入姓名" v-model="name"/>
				</view>
			</view>
			<view class="user_item" >
				<view class="it_left">
					联系方式
				</view>
				<view class="it_right">
					<input type="text" placeholder="请输入联系方式" maxlength="11" v-model="phone"/>
				</view>
			</view>
		</view>
		<view class="content">
			<textarea value="" placeholder="请输入定制描述" v-model="discride"/>
			<view class="">
				请上传图片
			</view>
			<view class="">
				<u-upload :action="action" ref="uUpload" max-count="3" :header="token"></u-upload>
			</view>
			<view class="" style="margin-top: 30rpx;">
				请上传视频
			</view>
			<view class="vid_f">
				<view class="vid_f_child" v-for="(it,ind) in ship_list" :key="ind">
					<video v-if="ship_list !=''" :src="it" controls></video>
					<view class="del_b" @click="del_vid(ind)">
						<u-icon class="u-icon" name="close" size="20" color="#fff"></u-icon>
					</view>
				</view>
				
				<view class="videos_list" v-if="ship_list.length < 2" @click="videos">
					<view class="vid_icon">
						<u-icon name="camera" size="50" color="#666"></u-icon>
					</view>
					<view class="vid_tit">
						选择视频
					</view>
				</view>
			</view>
		</view>
		
		<view class="button_b">
			<zs-button :buttitle="'提交'" @but_cli="but_cli" ></zs-button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				name:'',
				phone:'',
				discride:'',
				action: 'http://zuanshi.dis.wanheweb.com/api/uploads',
				lists:[],
				ship_list:[],
				token:{
					token:uni.getStorageSync('token')
				}
			}
		},
		onReady() {
			// 得到整个组件对象，内部图片列表变量为"lists"
			this.lists = this.$refs.uUpload.lists;
		},
		methods:{
			//上传视频
			videos(){
				let that = this
				 uni.chooseVideo({ 
					maxDuration:60,
					count: 1,
					sourceType: ['camera', 'album'],
					success: function (res) {
						console.log(res)
						// console.log(res.tempFilePath)
						if(res.size/1024/1024 > 10){
							that.com.msg('上传视频不能大于5MB')
						}else{
							
							let src = res.tempFilePath;
							that.com.msg("正在上传")
							// return
							uni.uploadFile({
								url: 'http://zuanshi.dis.wanheweb.com/api/uploadVideo', //仅为示例，非真实的接口地址
								filePath: src,
								name: 'file',
								
								formData: {
									'user': 'test'
								},
								header:that.token,
								success: (red) => { 
									let arr =JSON.parse(red.data) 
									console.log(arr);
									if(arr.status == 1){
										uni.hideToast()
										that.com.msg('上传成功')
										that.ship_list.push(arr.data)
										console.log(that.ship_list)
									}
								}
							});
						}
					}
				});
			},
			//移除视频
			del_vid(e){
				console.log(e)
				let that = this
				uni.showModal({
					title: '提示',
					content: '您确定要删除此项吗？',
					success: async (res) => {
						if(res.confirm){
							that.ship_list.splice(e,1)
							console.log(that.ship_list)
						}
					}, 
				})
				
				
			},
			// 提交
			but_cli(){
				this.lists = this.$refs.uUpload.lists;
				// console.log(this.lists)
				//图片处理
				let arr = ''
				let img = ''
				this.lists.forEach(a=>{
					console.log(a)
					if(a.response){
						arr += a.response.data+','
						img = arr.substr(0,arr.length -1)
					}
				})
				// console.log(this.ship_list)
				//视频处理
				let vid = ''
				let videos = ''
				this.ship_list.forEach(i=>{
					vid += i + ','
					videos = vid.substr(0,vid.length -1)
					console.log(vid)
				})
				// return
				let data={
					name:this.name,
					mobile:this.phone,
					contact:this.discride,
					images:img,
					videos:videos,
				}
				this.$api.post('customization',data).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.com.msg(res.message)
						this.com.three_back()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.user{
	width: 100%;border-top: 20rpx solid #F6F6F6;border-bottom: 20rpx solid #F6F6F6;
	background-color: white;
	.user_item{
		padding: 0 3%;
		display: flex;font-size: 30rpx;
		.it_left{
			width: 20%;line-height: 80rpx;
			
		}
		.it_right{
			width: 80%;padding-top: 20rpx;
			input{
				width: 100%;
				display: inline-block;font-size: 30rpx;
			}
		}
	}
}
.content{
	width: 100%;background-color: white;padding: 3%;
	textarea{
		width: 100%;height: 260rpx;font-size: 30rpx;
	}
	.vid_f{
		width: 100%;
		display: flex;flex-wrap: wrap;
		.vid_f_child{
			margin: 10rpx;width: 200rpx;height: 200rpx;border-radius: 10rpx;overflow: hidden;
			position: relative;
			.del_b{
				position: absolute;right: 10rpx;top: 10rpx;background-color: red;border-radius: 50%;
				z-index: 20;width: 40rpx;height: 40rpx;text-align: center;
			}
			video{
				width: 200rpx;height: 200rpx;
				
			}
		}
		
		.videos_list{
			width: 200rpx;height: 200rpx;background-color: #f4f5f6;border-radius: 10rpx;margin: 10rpx;
			text-align: center;padding-top: 50rpx;
			.vid_tit{
				color: #666;line-height: 60rpx;
			}
		}
	}
	
}
</style>
