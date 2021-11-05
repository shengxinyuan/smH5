<template>
	<view class="conent">
		<view class="p1">
			<!-- 意见反馈 -->
			<view class="item1">
				<textarea placeholder="请输入您的反馈描述..." v-model="desc"></textarea>
			</view>
			<!-- 上传图片 -->
			<view class="item2">
				<text style="color: #999;">上传反馈图片:限4张</text>
				<u-upload :action="action"  @on-change="onChange"  ref="uUpload" max-count="4" :header="token"></u-upload>
			</view>
		</view>
		<!-- <view class="phone_c">
			<input type="text" placeholder="留下您的手机号,以便我们回复~" maxlength="11" v-model="phone"/>
		</view> -->
		<button class="btn" @click="confirm">确认提交</button>
	</view>
</template>

<script>
	// import permision from "@/js_sdk/wa-permission/permission.js"
	export default {
		data() {
			return {
				action: 'http://zuanshi.dis.wanheweb.com/api/uploads',//上传图片
				lists: [],
				imgLists:'',
				desc:'',
				token:{
					'token': uni.getStorageSync('token')
				},
				phone:''
			}
		},
		onLoad() {
			this.requestAndroidPermission('android.permission.READ_EXTERNAL_STORAGE')
		},
		onReady() {
			// 得到整个组件对象，内部图片列表变量为"lists"
			this.lists = this.$refs.uUpload.lists;
		},
		methods:{
			requestAndroidPermission(permisionID){
				let that = this
				
				var result = permision.requestAndroidPermission(permisionID)
				var strStatus
				
			},
			onChange(res, index, lists) {
				console.log(this.lists)
			},
			
			//提交
			async confirm(){
				this.imgLists = ''
				for (let i = 0; i < this.lists.length; i++){
					if(this.lists[i].response.status == 1){
						if(i < this.lists.length - 1){
							this.imgLists += this.lists[i].response.data + ',';
							console.log(this.imgLists)
						}else{
							this.imgLists += this.lists[i].response.data;
							console.log(this.imgLists)
						}
					}
				}
				if(this.desc == ''){
					uni.showToast({
						title:'反馈内容为空',
						icon:'none'
					})
				}else{
					let datas = {
						remark:this.desc,
						album:this.imgLists,
					}
					this.$api.post('feedback',datas).then(res=>{
						console.log(res)
						if(res.status ==1){
							this.com.msg(res.message)
							this.com.three_back()
						}else{
							uni.showToast({
								title:res.msg,
								icon:'none'
							})
						}
					})
				}
			}
		}
	}
</script>
<style>
	page {
		background-color: #f6f6f6;
	}
</style>
<style lang="scss" scoped>
	.phone_c{
		line-height: 100rpx;
		height: 100rpx;background-color: white;margin-top: 20rpx;padding-top: 17rpx;
		input{
			height: 66rpx;font-size: 28rpx;padding-left: 20rpx;
		}
	}
	textarea{
		width: 100%;
		padding: 2%;
		border-bottom: 2rpx solid #eee;
		box-sizing: border-box;
		font-size: 28rpx;
	}
	.conent {
		.p1 {
			background-color: #fff;
			padding:  3%;
			border-radius: 12rpx;
			.item2{
				width: 100%;
				margin-top: 38rpx;
				display: flex;
				flex-wrap: wrap;
				text{
					width: 100%;
				}
				.upload{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 220rpx;
					height: 220rpx;
					border: 2rpx solid #eee;
					margin: 35rpx 35rpx 0 0;
					image{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
		}

		.btn {
			margin-top: 75rpx;
			margin-bottom: 30rpx;
			width: 90%;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background: #1C2E62;
			color: #fff;
			border-radius: 60rpx;
			position: fixed;left: 5%;bottom: 40rpx;
		}
	}
</style>
