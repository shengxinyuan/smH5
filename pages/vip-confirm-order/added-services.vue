<template>
	<!-- 增值服务 -->
	<view class="zl-page">
		<view class="zzfw-box">

			<!-- 包装服务 -->
			<view class="zzfw-box-one">
				<view class="zzfw-title">
					<view class="zzfw-title-log">
						<image src="../../static/vip-order/dabao.png" mode="widthFix"></image>
					</view>
					<view class="title">包装服务</view>
				</view>
				<view class="zzfw-pack-charges">
					<view class="search-pack-charges">
						<u-icon class="icon duihao" name="checkbox-mark"></u-icon>
					</view>
					<view class="text">首饰打包费用（包含外纸箱、泡沫等材料费）</view>
				</view>
				<view class="zzfw-cost">
					<view>保费：</view>
					<view class="cost-pay">￥{{baof}}</view>
				</view>
			</view>

			<!-- 配件挑选 -->
			<view class="zzfw-box-two">
				<view class="pjtx-box">
					<view class="pjtx-log">
						<image src="../../static/vip-order/peijian.png" mode="widthFix"></image>
					</view>
					<view class="title">
						<text>配件挑选</text>
						<text class="text-right">（盒子、手绳）</text>
					</view>
				</view>
				<view class="gift-package-box">
					<scroll-view class="scroll-view_H" scroll-x="true">
						<view class="scroll_item" v-for="(it,ind) in giftList" :key="ind"
						:class="{active:it.id == itemid }" @click="item_cli(it.id,ind)">
							<view class="gift-package-min-box">
								<view class="gift-package-photo">
									<image src="../../static/community/list_01.png" mode="aspectFill"></image>
									<view v-if="it.counds != 0">
										{{it.counds}}
									</view>
								</view>
								<view class="gift-package-title u-line-1" >{{it.title}} </view>
							</view>
							<view class="zzfw-number-box" v-if="it.id == itemid">
								<view class="zzfw-number-title">数量</view>
								<u-number-box v-model="it.counds" :long-press="false" @change="valChange($event,ind)"></u-number-box>
							</view>
						</view>
					</scroll-view>
				</view>
				
			</view>
			
			<!-- 底部展示 -->
			<view class="zzfw-bottom-box">
				<view class="zzfw-bottom-left">
					<text>合计：</text>
					<text class="money">￥{{total.toFixed(2)}}</text>
				</view>
				<view class="zzfw-bottom-btn" @click="skipVipConfirmOrder">
					<text>确定</text>
				</view>
			</view>
		</view>
		
		<!-- 专属客服 -->
		<drag-button :isDock="true" :existTabBar="true" @btnClick="btnClick" />
	</view>
</template>

<script>
	import dragButton from "@/components/drag-button/drag-button.vue";
	export default {
		data() {
			return {
				premium:'3',
				giftList:[],
				baof:0,
				itemid:0,
				total:0,
				datas:''
			}
		},
		onLoad(op) {
			console.log(op)
			this.baof = op.price
			if(op.data){
				this.datas = JSON.parse(op.data)
				// console.log(this.datas.list) 
				this.giftList = this.datas.list
				this.itemid = this.datas.list[0].id
				this.totalMoney()
			}else{
				this.page_reader()
			}
			
		},
		methods: {
			totalMoney(){
				this.total = 0
				this.giftList.forEach(i=>{
					if(i.counds > 0){
						this.total += i.price * i.counds
					}
				})
			},
			btnClick(){
				this.com.navto('../../pages/service/service')
			},
			//点击
			item_cli(e,ind){
				this.itemid = e
				if(this.giftList[ind].counds == 0){
					this.giftList[ind].counds = 1
				}else{
					return
				}
				this.totalMoney()
				this.$forceUpdate()
			},
			//渲染
			page_reader(){
				this.$api.get('accessories').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.giftList = res.data
						this.itemid = res.data[0].id
						res.data.forEach(i=>{
							i.counds = 0
						})
					}
				})
			},
			//步进器
			valChange(e,ind) {
				this.giftList[ind].counds = e.value
				this.totalMoney()
				this.$forceUpdate()
			},
			//确定
			skipVipConfirmOrder(){
				let array_id = ''
				let array_count = ''
				var arr_list = this.giftList
				this.giftList.forEach(i=>{
					if(i.counds > 0){
						array_id += i.id+','
						array_count += i.counds + ','
						// console.log("id"+array_id,"数量"+array_count)
						arr_list.forEach(j=>{
							if(i.id == j.id){
								j.counds = i.counds
							}
						})
					}
				})
				
				let ids = {
					id:array_id.substr(0,array_id.length - 1),
					count:array_count.substr(0,array_count.length - 1),
					total:this.total,
					list:arr_list
				}
				uni.setStorageSync('ids',ids)
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.zzfw-box {
		padding: 20upx 30upx;
	}

	.zzfw-box-one {
		padding: 20upx;
		margin-bottom: 20upx;
		background-color: #FFFFFF;
		border-radius: 10upx;

		.zzfw-title {
			display: flex;
			align-items: center;

			.zzfw-title-log {
				width: 5%;
				display: flex;

				image {
					width: 100%;
				}
			}

			.title {
				margin-left: 16upx;
				font-size: 28upx;
				font-weight: bold;
			}
		}

		.zzfw-pack-charges {
			display: flex;
			align-items: center;
			margin: 30upx 0;

			.search-pack-charges {
				width: 32upx;
				height: 32upx;
				background-color: #063f4c;
				border-radius: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				.icon {
					font-size: 24upx;
					color: #FFFFFF;
				}
			}

			.text {
				font-size: 26upx;
				color: #666666;
				margin-left: 16upx;
			}
		}

		.zzfw-cost {
			font-size: 28upx;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.cost-pay {
				font-weight: bold;
				color: #ef2d2d;
			}
		}
	}

	.zzfw-box-two {
		padding: 20upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		
		
		.pjtx-box {
			display: flex;
			align-items: center;

			.pjtx-log {
				width: 5%;
				display: flex;

				image {
					width: 100%;
				}
			}

			.title {
				margin-left: 16upx;
				font-size: 28upx;
				font-weight: bold;

				.text-right {
					font-size: 22upx;
					color: #666666;
				}
			}
		}

		.gift-package-box {
			margin: 30upx 0;
			width: 100%;

			.scroll-view_H {
				display: flex;
				white-space: nowrap;
				position: relative;
				height: 280rpx;
				.zzfw-number-box {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					position: absolute;right: 0;bottom: 0;
					.zzfw-number-title {
						font-size: 28upx;
						color: #666666;
						margin-right: 20upx;
					}
				}
				.scroll_item {
					display: inline-block;
					width: 29%;
					
				}
				.active{
					color: #2d407a;
					image{
						box-sizing: border-box;
						border: 1rpx solid #2d407a;
					}
				}
			}

			.gift-package-min-box {
				margin-right: 20upx;

				.gift-package-photo {
					display: flex;
					border-radius: 10upx;
					box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.06);
					position: relative;
					view{
						text-align: center;font-size: 38rpx;line-height: 170rpx;color: white;
						position: absolute;left: 0;top: 0;
						width: 100%;
						height: 170rpx;background-color: rgba(0,0,0,0.22);
					}
					image {
						width: 100%;
						height: 170rpx;background-color: #eee;
					}
				}

				.gift-package-title {
					padding-top: 10upx;
					font-size: 22upx;
				}
			}
		}

		
	}
	.zzfw-bottom-box{
		width: 100%;
		height: 100upx;
		padding: 0 30upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		.zzfw-bottom-left{
			font-size: 22upx;
			margin-right: 30upx;
			.money{
				font-size: 26upx;
				font-weight: bold;
				color: #f12f34;
			}
		}
		.zzfw-bottom-btn{
			width: 31%;
			height: 70upx;
			line-height: 70upx;
			background-image: linear-gradient(0deg, 
					#eb4241 0%, 
					#ef463f 100%);
					text-align: center;
					font-size: 26upx;
					color: #FFFFFF;
					border-radius: 34upx;
		}
	}
</style>
