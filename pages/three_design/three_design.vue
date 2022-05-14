<template>
	<view>
		<img class="bg" src="https://img.alicdn.com/imgextra/i2/O1CN01KMx9cb1vgZ8Gflxzv_!!6000000006202-2-tps-999-1193.png" alt="">
		<img class="bg" src="https://img.alicdn.com/imgextra/i4/O1CN01FbZgwa1xnYPRlUKhw_!!6000000006488-2-tps-1000-338.png" alt="" @click="goDesign">
		<img class="bg" src="https://img.alicdn.com/imgextra/i3/O1CN018gICFk1ZCPViWnrFP_!!6000000003158-2-tps-996-290.png" alt="" @click="goComboDesign">
		<img class="bg" src="https://img.alicdn.com/imgextra/i2/O1CN01S2fbJU1dJW7DvsG1d_!!6000000003715-2-tps-1000-293.png" alt="" @click="buyDiamond">
		<img class="bg" src="https://img.alicdn.com/imgextra/i4/O1CN01vVqZ5G1PxS23KBnCP_!!6000000001907-2-tps-1000-305.png" alt="" @click="buyGem">
		<img class="bg" src="https://img.alicdn.com/imgextra/i3/O1CN01IkCgIR1ZdQsISkeBn_!!6000000003217-2-tps-1000-323.png" alt="" @click="goMyDesign">
		<img class="bg" src="https://img.alicdn.com/imgextra/i1/O1CN01TQNS171LbgkIvc8Xa_!!6000000001318-2-tps-1000-264.png" alt="">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				queryStr: '',
				url: 'http://test-3d.semoh.cn'
			}
		},
		onLoad() {
			const token = uni.getStorageSync('token');
			const member_id = uni.getStorageSync('member_id');
			const env = uni.getStorageSync('env');
			this.queryStr = `?hideBar=1&env=${env}&member_id=${member_id}&token=${token}`
		},
		methods: {
			goDesign () {
				location.href = `${this.url}/design.html${this.queryStr}`
			},
			goComboDesign () {
				location.href = `${this.url}/design.html${this.queryStr}&isCombo=1`
			},
			goMyDesign () {
				location.href = `${this.url}/mydesign${this.queryStr}`
			},
			buyGem () {
				this.$toast.success('暂未开放功能，敬请期待！')
			},
			buyDiamond () {
				location.href = `${this.url}/diamondList{this.queryStr}&source=buy`
			},
		}
	}
</script>

<style scoped>
.bg {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
  }
</style>
