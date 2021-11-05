<template>
	<!-- 账号安全 -->
	<view class="account">
		<view class="set_list">
			<view class="list" v-for="(item,index) of list_s" @click="go_account(index)">
				{{item.name}}
				<view class="right">
					{{item.number}}
					<u-icon name="arrow-right" color="#706f6c" size="20" v-if="index == 1"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:'',
				list_s:[]
			}
		},
		onShow() {
			this.$api.get('info').then(res=>{
				console.log(res)
				if(res.status == 1){
					this.arr = res.data.mobile
					this.list_s = [
						{
							name:"绑定手机",
							number:res.data.mobile
						},{
							name:"修改密码"
						}
					]	
				}
			})
		},
		methods: {
			go_account(index){
				// 修改登录密码
				if(index==0){
					// this.com.navto('./modify')
				}
				// 更换绑定手机
				if(index==1){
					this.com.navto('../login/forget?type='+2+'&mobile='+this.arr)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.account{
		width: 100%;
		display: flex;
		padding: 20rpx 0;
		flex-wrap: wrap;
	}
	.set_list{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		background-color: #fff;
		padding: 0 25rpx;
		.list{
			width: 100%;
			display: flex;
			justify-content: space-between;
			height: 120rpx;
			line-height: 120rpx;
			border-bottom: 1rpx solid #f6f6f6;
			.right{
				color: #999999;
				.u-icon{
					margin-left: 20rpx;
				}
			}
		}
		
	}
</style>
