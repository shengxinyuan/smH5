<template>
	<view class="content">
	<!-- 	<view class="p1" >
			<view :class="{tabs:current==index}" v-for="(item,index) in tabs" :key="index" @click="tabsChange(index)">
				{{item}}
				<view :class="{line:current==index}"></view>
			</view>
		</view> -->
		<view class="" v-if="page_show">
			<zs-login></zs-login>
		</view>
		<view v-else>
			<!-- 未使用 -->
			<view v-if="current==0" style="padding: 3%;">
				<view class="p2 common" v-for="(it,ind) in stdata" :key="ind" @click="count(it)">
					<view class="common_child">
						<view class="i1">￥{{it.price}}
							<view>满{{it.face_value}}可用</view>
						</view>
						<view class="i2">
							<view>{{it.title}}	</view>
							<view>有效期：{{it.start_time}}至{{it.end_time}}</view>
							<view  @click="beizhu(ind)">{{it.typstit}} 适用范围：<u-icon name="arrow-down"></u-icon> </view>
						</view>
					</view>
					<view class="position" v-if="remackind == ind && remack_show == true" @click="remack_show = false"> 
						{{remack}} 
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				current: 0,
				isUse: true,
				stdata:[],
				remack:'',
				remackind:-1,
				remack_show:false,
				page_show:true,
				cate_ids:'',
				money:''
			}
		},
		onLoad(op) {
			console.log(op)
			this.cate_ids = op.ids
			this.money = op.price
		},
		onShow() {
			this.page_reader(1)
		},
		methods:{
			//优惠券点击
			count(e){
				uni.setStorageSync('coupon',e)
				uni.navigateBack()
			},
			//页面渲染
			page_reader(e){
				this.$api.get('coupon',{type:e,cate_ids:this.cate_ids,money:this.money}).then(res=>{
					console.log(res)
					if(res.status == 1){
						
						this.page_show = false
						res.data.forEach(i=>{
							if(i.type == 0){
								i.typstit = '减免优惠券'
							}else if(i.type == 1){
								i.typstit = '新人优惠券'
							}else if(i.type == 2){
								i.typstit = '定额优惠券'
							}else if(i.type == 3){
								i.typstit = '分类优惠券'
							}
						})
						this.stdata = res.data
					}
				})
			},
			//备注展示
			beizhu(e){
				this.remack_show = !this.remack_show
				this.remackind = e
				this.remack = this.stdata[0].cate_title
				
			},
			//类型切换
			tabsChange(index){
				this.page_show = true
				let ind = index + 1
				this.page_reader(ind)
				this.current = index;
			}
		}
	}
</script>
<style>
	page{
		background-color: #f6f6f6;
		font-size: 28rpx;
	}
</style>
<style lang="scss" scoped>
	.content{
		.p1{
			display: flex;
			justify-content: space-between;
			padding: 20rpx 80rpx 0;
			background-color: #fff;
			.tabs{
				font-size: 30rpx;
				font-weight: bold;
			}
			.line{
				width: 80rpx;
				border-bottom: 8rpx solid #ff680c;
				margin-top: 15rpx;
				border-radius: 40rpx;
			}
		}
		.p2{
			background: url(../../static/my/discount_coupon.png);
			
		}
		.p4{
			background: url(../../static/my/discount2.png);
			background-size: 100% 100%;
		}
		.p5{
			background: url(../../static/my/dos.png);
			background-size: 100% 100%;
		}
		.common{
			background-size: 100% 100%;
			width: 100%;
			height: 195rpx;
			
			// justify-content: space-between;
			// align-items: center;
			padding: 0 30rpx;
			margin: 15rpx 0;
			box-sizing: border-box;
			position: relative;
			.position{
				position: absolute;bottom: -32rpx;right: 0;
				width: 440rpx;background-color: #F1F1F1;z-index: 20; 
				font-size: 26rpx;padding: 2rpx;border-radius: 6rpx;
				box-shadow: 0 3rpx 1rpx 3rpx rgba(0,0,0,0.12);
			}
			.common_child{
				display: flex;
			}
			.i1{
				width: 38%;margin-top: 40rpx;
				font-size: 44rpx; color: #fff;
				view{
					font-size: 28rpx;line-height: 60rpx;
				}
			}
			.i2{
				margin-top: 38rpx;
				
				view:nth-child(1){
					font-size: 34rpx;font-weight: bold;
				}
				view:nth-child(2){
					font-size: 26rpx;color: #999;line-height: 66rpx;white-space: nowrap;
				}
				view:nth-child(3){
					font-size: 28rpx;color: #999;white-space: nowrap; 
				}
			}
			
		}
	}
</style>
