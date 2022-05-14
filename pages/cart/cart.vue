<template>
	<view>
		<!-- <view class="header" >
			<view class="header_va">
				购物车
			</view>
			<view class="rig" @click="go_address" v-if="shop_list.address">
				 <u-icon name="map" size="36"></u-icon> 收货地址: {{shop_list.address.province+shop_list.address.city+shop_list.address.area+shop_list.address.address}}
			</view>
		</view> -->
		<!-- 加载页 -->
		<view  v-if="page_show">
			<view class="cart_shopping">
				<!-- 空状态 -->
				<view v-if="cart_show">
					<view class="cart_shop_item" v-for="(it,ind) in shop_list.data" :key="ind">
						<view class="cart_shop_item_child">
							<view class="cart_shop_item_l">
								<u-checkbox-group @change="checkbox_d(it.id,it.count)">
									<u-checkbox  shape="circle" active-color="#dd2626" size="40"
										v-model="it.status == check" 
										:name="1" 
									>
									</u-checkbox>
								</u-checkbox-group>
							</view>
							<view class="cart_shop_item_c" v-if="it.notCustom" @click="go_shopdetail(it.shop_goods_id)">
								<image :src="it.image" mode="aspectFill"></image>
							</view>
							<view class="cart_shop_item_c" v-else @click="go_customDetail(it.id)">
								<image :src="it.image.split(',')[0]" mode="aspectFill"></image>
							</view>
							<view class="cart_shop_item_r" v-if="it.notCustom">
								<view class="it_title">
									{{it.title}}
								</view>
								<view class="it_speac">
									<view >
										金重:{{it.weight}}g
									</view>
									<view>
										条码:{{it.bar_code}}
									</view>
								</view>
								<view class="it_speac_bs" >
									<view style="margin-top: 6rpx;">
										库存：{{it.stock}}
									</view>
									<view v-if="it.is_height == 1">
										<view v-if="vip_type">
											金价：￥{{((it.price_vip/1)/(it.weight/1)).toFixed(2)}}/g
										</view>
										<view v-else>
											金价：￥{{((it.price_normal/1)/(it.weight/1)).toFixed(2)}}/g
										</view>
									</view>
									<view v-if="it.is_height == 2">
										<view v-if="vip_type">
											金价：￥0.00/g
										</view>
										<view v-else>
											金价：￥0.00/g
										</view>
									</view>
									<view style="margin-top: 6rpx;" v-if="it.is_height == 1">
										工费：{{((it.labor/1)/(it.weight/1)).toFixed(2)}}/g
									</view>
									<view class="" v-if="it.is_height == 2">
										工费：0.00/g
									</view>
								</view>
							</view>
							<view class="cart_shop_item_r" v-else>
								<view class="it_title">
									{{it.title}}
								</view>
							</view>
						</view>
						<view class="item_js">
							<view style="color: #dd2626;">
								￥ <text style="font-size: 32rpx;">{{(it.xiaoj/1).toFixed(2)}}</text>
							</view>
							<u-number-box v-model="it.count" :max="it.stock" :step="1" :min="1" :long-press="false" @change="number_box($event,it.id)"></u-number-box>
						</view>
					</view>
				</view>
				<!-- 空白状态 -->
				<view v-else style="padding-top: 20%;">
					<u-empty text="购物车为空" mode="car"></u-empty>
				</view>
			</view>
			<!-- 、、小结 -->
			<view v-if="cart_show">
				<!-- <view class="js_canchu">
					金料：{{goldl}} 工费：{{wage}} 金重： {{goldwrig}}
				</view> -->
				<view class="jis_but">
					<u-checkbox-group @change="checkboxChange_qx">
						<u-checkbox  shape="circle" active-color="#dd2626" size="40"
							@change="checkboxChange" 
							v-model="qx_type" 
							:name="1"
						>全选
						</u-checkbox>
					</u-checkbox-group>
					<view class="jis_right">
						<view style="color: #999;" @click="del_cart"><!-- <u-icon name="trash" size="40"></u-icon> -->删除选中</view>
						<view class="jis_butcolor" @click="skipVipConfirmOrder">去结算</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 加载 -->
		<view v-else style="padding-top: 20%;">
			<zs-login></zs-login>
		</view>

		<zs-tabbar :tab_ind="4"></zs-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cart_show:false,//购物车空白显示 
				page_show:true,//页面加载显示
				shop_list:[],
				vip_type:false,
				check:1,
				qx_type:false,//全选
			}
		},
		onShow() {
			this.page_show = false
			this.page_reader()
			this.get_member()
		},
		watch:{
			shop_list(a){
				this.shop_list.data.every(i=>{
					if(i.status == 1){
						this.qx_type = true
					}else{
						this.qx_type = false
					}
				})
				return this.qx_type
				// keep:true
			}
		},
		computed:{
			//金料
			goldl(){
				let arr = 0
				let vip = uni.getStorageSync('viptype')
				if(this.shop_list.data){
					this.shop_list.data.forEach(i=>{
						if(i.status == 1){
							arr +=  JSON.parse(i.price_normal)* i.count
						}
					})
				}
				return arr.toFixed(2)
			},
			//工费
			wage(){
				let arr = 0
				this.shop_list.data.forEach(i=>{
					if(i.status == 1){
						arr +=  JSON.parse(i.labor)* i.count
					}
				})
				return arr.toFixed(2)
			},
			//金重
			goldwrig(){
				let arr = 0
				this.shop_list.data.forEach(i=>{
					if(i.status == 1){
						arr +=  JSON.parse(i.weight)* i.count
					}
				})
				return arr.toFixed(2)
			}
		},
		methods: {
			get_member(){
				this.$api.get('member').then(res => {
					// console.log(res)
					if (res.status == 1) {
						if (res.data.lv == 0) {
							this.vip_type = false
						} else {
							this.vip_type = true
						}
					}
				})
			},
			page_reader(){
				this.$api.get('cart',{member_id:uni.getStorageSync('member_id'),is_h5:1}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_list = res.data
						this.page_show = true 
						if(res.data.data && res.data.data.length >0){
							this.cart_show = true
						}
						res.data.data.forEach(i=>{
							i.xiaoj = JSON.parse(i.price_normal) + JSON.parse(i.labor)
						})
					}
				})
			},
			//单选
			checkbox_d(e,num){
				this.$api.put('cart',{status:1,cart_id:e,count:num}).then(res=>{
					console.log(res)
					if(res.status==1){
						this.page_reader()
					}
				})
			},
			//全选
			checkboxChange_qx(e){
				this.$api.get('cartselections').then(res=>{
					if(res.status == 1){
						this.page_reader()
					}
				})
			},
			//修改数量
			number_box(e,id){
				console.log(e.value,id)
				this.$api.put('cart',{cart_id:id,count:e.value}).then(res=>{
					console.log(res)
					if(res.status==1){
						this.page_reader()
					}
				})
			},
			go_address(){
				this.com.navto('../my/receiving?is_mine='+1)
			},
			//详情
			go_shopdetail(e){
				this.com.navto('../../pages/index/shop_detail?shop_id='+e)
			},
			// 自定义详情
			go_customDetail(e){
				// TODO
				// this.com.navto('../../pages/index/shop_detail?shop_id='+e)
			},
			//结算
			skipVipConfirmOrder(){
				// let data = {
				// 	member_id:uni.getStorageSync('member_id'),
				// 	is_h5:1
				// }
				// uni.navigateTo({
				// 	url:'../index/confirm_payment?data='+ JSON.stringify(data)
				// })
				
				if (!this.shop_list || !this.shop_list.data || !this.shop_list.data.length) {
					return this.com.msg('没有选中的商品');
				}
				const custom = this.shop_list.data.filter((i) => !i.notCustom)
				const normal = this.shop_list.data.filter((i) => i.notCustom)
				uni.showLoading({
					mask: true
				})
				Promise.all([
					this.$api.post('shop/order/submit', {
						isCustom: 1,
						infos: custom,
					}),
					this.$api.post('shop/order/submit', {
						isCustom: 0,
						infos: normal,
					})
				]).then((res) => {
					if (res.every((e) =>  e.status != 1)) {
						throw new Error('')
					}
					uni.hideLoading()
					this.com.navto('../my/order')
				}).catch(() => {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '提交失败，请重试'
					})
				})
			},
			//选中删除
			del_cart(){
				let that = this
				let arr = ''
				this.shop_list.data.forEach(i=>{
					if(i.status == 1){
						arr += i.id+','
					}
				})
				if(arr == ''){
					this.com.msg('没有选中的商品')
				}else{
					uni.showModal({
						content:'确认删除选中商品吗?',
						success(q) {
							if(q.confirm){
								that.$api.del('cart',{cart_id:arr.substr(0,arr.length -1)}).then(res=>{
									console.log(res)
									if(res.status == 1){
										that.com.msg(res.message)
										that.page_reader()
									}
								})
							}
						}
					})
				}
			},
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style lang="scss" scoped>
	
.cart_shopping{
	width: 100%;
	padding: 20rpx 3% 260rpx 3%;
	
	.cart_shop_item{
		background-color: white;margin-bottom: 20rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		.item_js{
			padding-left: 36%;margin-top: 28rpx;display: flex;justify-content: space-between;
		}
		.cart_shop_item_child{
			display: flex;
		}
		.cart_shop_item_l{
			width: 10%;padding-top: 80rpx,
		}
		.cart_shop_item_c{
			width: 200rpx;height: 200rpx;overflow: hidden;border-radius: 16rpx;
			image{
				width: 100%;height: 100%;
			}
		}
		.cart_shop_item_r{
			width: 59%;padding-left: 20rpx;
			.it_title{
				font-size: 32rpx;
				white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
			}
			.it_speac{
				display: flex;line-height: 56rpx;color: #999;
				view{
					width: 60%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
				}
				view:nth-child(1){
					width: 40%;
				}
			}
			.it_speac_bs{
				display: flex;color: #999;flex-wrap: wrap;
				view{
					font-size: 26rpx;margin: 2rpx;padding: 0 5rpx;border-radius: 6rpx;
					background-color: #F1F1F1;
				}
			}
		}
	}
}


.header{
	position: fixed;left: 0;top: 0;
	width: 100%;
	padding-left: 30rpx;
	display: flex;
	z-index: 999;background-color: white;
	.header_va{
		width: 20%;
		font-size: 40rpx;line-height: 90rpx;
	}
	.rig{
		width: 78%;color: #999;
		line-height: 100rpx;
		font-size: 28rpx;
		white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
	}
}
.js_canchu{
	width: 100%;line-height: 60rpx;padding: 0 3%;background-color: white;color: #999;
	position: fixed;left: 0;bottom: 200rpx;border-bottom: 1rpx dashed #999;
	}
.jis_but{
	padding: 0 3%;
	width: 100%;height: 100rpx;line-height: 100rpx;background-color: white;
	position: fixed;left: 0;bottom: 150rpx;
	display: flex;justify-content: space-between;
	.jis_right{
		display: flex;justify-content: space-between;
		view{
			margin: 0 10rpx;
		}
		.jis_butcolor{
			padding: 0 30rpx;color: #fff;border-radius: 50rpx;
			margin-top: 15rpx;
			height: 70rpx;
			line-height: 70rpx;
			background-color: #dd2626;
		}
	}
}
</style>
