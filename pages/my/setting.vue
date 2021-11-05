<template>
	<view class="cont">
		<view class="items" @click="go_set(99)">
			<view class="items_l">
				实名认证
			</view>
			<view class="items_r" v-if="shiname">
				未认证 <text class="views"></text> <u-icon name="arrow-right"></u-icon>
			</view>
			<view class="items_r" v-else>
				已认证 <u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="items" v-for="(it,ind) in list" :key="ind" @click="go_set(ind)">
			<view class="items_l">
				{{it.tit}}
			</view>
			<view class="items_r">
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="log_out" @click="log_outs">
			退出登录
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{tit:"账号安全"},
					{tit:"个人信息"},
					{tit:"分享APP"},
					{tit:"新手教程"},
					{tit:"帮助与客服"},
					{tit:"关于我们"},
					{tit:"意见反馈"},
					{tit:"提现设置"},
				],
				shiname:false
			}
		},
		onShow() {
			this.$api.get('info').then(res=>{
				console.log(res)
				if(res.status == 1){
					if(res.data.truename != '' && res.data.id_number != ''){
						this.shiname = false
					}else{
						this.shiname = true
					}
				}
			})
		},
		methods:{
			//退出
			log_outs(){
				uni.showModal({
					title:"温馨提示",
					content:"您要退出当前账号吗？",
					success:function(res) {
						var that = this
						if (res.confirm) {
							uni.removeStorageSync('token')
							uni.removeStorageSync('member_info')
							uni.removeStorageSync('user_infotit')
							uni.reLaunch({
								url:'../login/login'
							})
						}else if(res.cancel) {
						    console.log("取消")
						}
					}.bind(this)
					
				})
			},
			//
			go_set(e){
				if(e == 0){
					this.com.navto('./user_set')
				}else if(e == 1){
					this.com.navto('./user_text')
				}else if(e == 2){
					this.com.navto('../../pages/community/shop-code')
				}else if(e == 3){//新手教程
					this.com.navto('./olie_course')
				}else if(e == 4){ 
					this.com.navto('../../pages/service/service')
				}else if(e == 5){ //关于我们
					this.com.navto('../../pages/my/aboutus')
				}else if(e == 6){ //意见
					this.com.navto('./fankui')
				}else if(e == 7){ //提现设置
					this.com.navto('../set-shop/set-withdraw')
				}else if(e == 99){ //实名认证
					this.com.navto('./Certification')
				}
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
	.log_out{
		width: 90%;padding: 20rpx;border-radius: 50rpx;border: 1rpx solid #dd2626;
		font-size: 30rpx;color: #dd2626;text-align: center;
		position: fixed;left: 5%;bottom: 10%;
	}
	.items{
		padding: 0 3%;
		display: flex;justify-content: space-between;border-bottom: 1rpx solid #eee;line-height: 90rpx;
		font-size: 30rpx;background-color: #fff;
		.items_r{
			color: #999;
			.views{
				display: inline-block;margin: 0 20rpx;
				width: 16rpx;height: 16rpx;background-color: red;border-radius: 50%;
			}
		}
	}
	.items:nth-child(5){
		margin: 40rpx 0;
	}
</style>
