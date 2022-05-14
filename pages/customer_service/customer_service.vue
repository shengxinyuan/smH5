<template>
	<view class="cont">
		<view class="">
			店铺客服电话：{{shopMemberInfo.telephone}}
		</view>
		<view class="">
			店铺客服二维码：
		</view>
		<image v-if="shopMemberInfo.qr_code" class="img" :src="shopMemberInfo.qr_code" mode="widthFix"></image>
		<zs-tabbar :tab_ind="2"></zs-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopMemberInfo: {}
			}
		},
		onLoad() {
			this.query_member_info()
		},
		methods: {
			// 获取用户信息
			query_member_info() {
				this.$api.get('manage', {
					member_id: uni.getStorageSync('member_id')
				}).then(res => {
					if (res.status == 1) {
						this.shopMemberInfo = res.data
					}
				})
			},
		}
	}
</script>

<style scoped>
	.cont {
		padding: 20upx;
	}
	.img {
		display: block;
		margin: 0 auto;
	}
</style>
