<template>
	<!-- 个人信息 -->
	<view class="box">
		<view class="personal">
			<view class="per_list" @click="photograph">头像
			    <view class="list_s">
					<image src="../../static/errorImage.jpg" mode="aspectFill" v-if="!images_ava"></image>
					<image :src="images_ava" mode="aspectFill" v-else></image>
			    	<u-icon name="arrow-right" color="#706f6c" size="20"></u-icon>
			    </view>
			</view>
			<view class="per_list" @click="nickname">用户名
			    <view class="list_s">
					<input type="text" v-model="names" placeholder="不二" maxlength="11"/>
					<u-icon name="arrow-right" color="#706f6c" size="20"></u-icon>
			    </view>
			</view>
			<!-- <view class="per_list" @click="sex = true">性别
			    <view class="list_s">
					{{nexs}} <u-icon name="arrow-right" color="#706f6c" size="20"></u-icon>
			    </view>
			</view> -->
			<view class="per_list" @click="user_birthday_show = true">生日
			    <view class="list_s">
					{{birthday}} <u-icon name="arrow-right" color="#706f6c" size="20"></u-icon>
			    </view>
			</view>
			<view class="per_list" @click="go_address">收货地址
			    <view class="list_s">
					<u-icon name="arrow-right" color="#706f6c" size="20"></u-icon>
			    </view>
			</view>
			<view class="per_list" @click="go_enter">城市定位
			    <view class="list_s" style="color: #999;">
					苏州市
					<u-icon name="arrow-right" color="#706f6c" size="20"></u-icon>
			    </view>
			</view>
		</view>
		
		<!-- 点击头像 -->
		<!-- <u-popup v-model="user_head" mode="center" borderRadius="15">
			<view class="user_head">
				<view class="head_s" @click="portrait">本地上传</view>
				<view class="head_s">拍照</view>
				<view class="head_s" style="color: #CE3C39;" @click="user_head = false">确认</view>
			</view>
		</u-popup> -->
		<!-- 性别 -->
		<u-popup v-model="sex" mode="bottom">
			<view class="sex_li">
				<view @click="sex_click(1)">男</view>
				<view @click="sex_click(0)">女</view>
				<view @click="sex = false">取消</view>
			</view>
		</u-popup>
		<!-- 点击生日 -->
		<u-picker mode="time" v-model="user_birthday_show" @confirm="go_brith"></u-picker>
		<!-- 保存 -->
		<view class="">
			<zs-button @but_cli="go_usertext"> </zs-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				image:[],
				images_ava:'',//头像
				names:'', //用户昵称
				sex:false,  //性别弹出框
				checked: '1',
				user_birthday_show:false,
				birthday:'',//生日
				params: {
					year: true,
					month: true,
					day: true,
				},
				personality:false,
		    }
		},
		onLoad() {
			this.pages_ty()
		},
		methods: {
			radioChange(e) {
				this.checked = e;
			},
			pages_ty(){
				this.$api.get('info').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.images_ava = res.data.avatar
						this.names = res.data.nickname
						// this.nexs = res.data.sex == 0? '女':'男'
						this.birthday = res.data.birthday == 0 ? "2000-01-01" : res.data.birthday
					}
				})
			},
			// //头像
			// portrait(){
			// 	let that = this
			// 	uni.chooseImage({
			// 		sourceType: ['album'], //从相册选择
			// 		success: (chooseImageRes) => {
			// 			console.log(chooseImageRes)
			// 			 const tempFilePaths = chooseImageRes.tempFilePaths;
			// 			uni.uploadFile({
			// 				url: 'http://mrd.nxm.wanheweb.com/api/uploads',
			// 				filePath: tempFilePaths[0],
			// 				name: 'file',
			// 				header:{
			// 					'token':uni.getStorageSync('token')
			// 				},
			// 				success: (up) => {
			// 					that.image = JSON.parse(up.data).data
			// 					console.log(JSON.parse(up.data))
			// 					that.images_ava = that.image
			// 					console.log(this.images_ava)
			// 				}
			// 			});
						
			// 		}
			// 	});
			// },
			//拍照
			photograph(){
				let that = this
				uni.chooseImage({
					sourceType: ['camera '], //从相册选择
					success: (chooseImageRes) => {
						console.log(chooseImageRes)
						const tempFilePaths = chooseImageRes.tempFilePaths[0]
						console.log(chooseImageRes.tempFilePaths[0])
						uni.uploadFile({
							url: 'http://zuanshi.dis.wanheweb.com/api/uploads',
							filePath: tempFilePaths,
							name: 'file',
							formData: {
								'user': 'test'
							},
							header:{
								'token':uni.getStorageSync('token')
							},
							success: (up) => {
								that.image = JSON.parse(up.data).data
								// console.log(JSON.parse(up.data))
								that.images_ava = that.image
								// console.log(this.images_ava)
								that.show = false
							}
						});
						
					}
				});
			},
			// 用户名
			nickname(){
				// this.com.navto('./userName')
			},
			// 性别
			sex_click(e){
				this.sex_num = e
				this.sex = false
				// this.sex_num == 1 ? this.nexs = '男':this.nexs = '女'
			},
			//确定时间
			go_brith(e){
				console.log(e)
				this.birthday = e.year+'-'+e.month+'-'+e.day
				console.log(this.birthday)
			},
			// 企业认证
			go_enter(){
				this.com.navto('./enterprise')
			},
			// 收货地址
			go_address(){
				this.com.navto('./receiving?is_mine='+ 1+'&type='+1)
			},
			//保存
			go_usertext(){
				// let arr = this.birthday.replace(/\-/g,"")
				 this.$api.put('info',{avatar:this.images_ava,nickname:this.names,
				 birthday:this.birthday}).then(res=>{
					console.log(res)
					if(res.status == 1){
						uni.showToast({
							title:'修改成功',icon:'none'
						})
						this.pages_ty()
					}
				})
			},
		}
	}
</script>

<style>
	page{
		background-color: #f6f6f6;
	}
</style>
<style lang="scss" scoped>
	.box{
		padding: 3%;
	}
	.personal{
		width: 100%;
		background-color: #fff;
		border-radius: 14rpx;
		display: flex;
		flex-wrap: wrap;
		padding: 0 3%;
		.per_list{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			border-bottom: 1rpx solid #f6f6f6;
			display: flex;
			justify-content: space-between;
			.list_s{
				color: #666666;
				display: flex;
				align-items: center;
				input{
					text-align: right;
				}
				image{
					border: 1rpx solid #999;
					width: 85rpx;
					border-radius: 100rpx;
					height: 85rpx;
				}
				.u-icon{
					margin-left: 15rpx;
				}
				
			}
		}
	}
	.per_two{
		width: 680rpx;
		background-color: #fff;
		margin: 0 auto;
		padding: 20rpx 30rpx;
		display: flex;
		textarea{
			height: 160rpx;
			background-color: #f6f6f6;
			font-size: 26rpx;
			padding: 20rpx;
		}
	}

	.nickname{
		display: flex;
		padding: 40rpx 30rpx;
		input{
			width: 230rpx;
			height: 100rpx;
			line-height: 100rpx;
			margin: auto;
			background-color: #f6f6f6;
			border-radius: 12rpx;
			font-size: 28rpx;
			text-align: center;
		}
	}
	.sex{
		padding: 40rpx 60rpx;
		display: flex;
		justify-content: space-between;
	}
	.birthday{
		display: flex;
		padding: 30rpx 30rpx;
	}
	.sex_li{
		width: 100%;padding: 3%;
		
		view{
			border-bottom: 1rpx solid #e2e2e2;background-color: white;line-height: 80rpx;height: 80rpx;text-align: center;
		}
		view:nth-child(3){
			border: 0;
		}
		
	}
	.buts{
		width: 680rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 80rpx;
		background-color: #DD524D;height: 80rpx;line-height: 80rpx;
		color: #fff;
		text-align: center;
		margin: 80rpx auto;
	}
</style>
