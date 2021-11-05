<template>
	<view class="zl-box">
		<view class="head" @click="goto_top">
			<view class="head_left">
				<u-icon name="arrow-left" size="40" ></u-icon>
			</view>
			<view class="head_cont">
				{{title}} 
			</view>
		</view>
		
		<block>
			<view class="gold-prices-box">
				<view class="gold-prices-box-up">
					<view class="up-title">{{title}}</view>
					<view class="up-prices"> 
						<text class="rmb">￥</text>
						<text class="number">{{parseFloat(sumPrice01) + parseFloat(sumPrice02)}}/g</text>
					</view>
				</view>
				<view class="gold-prices-box-down">
					<view class="price-box">
						<view class="price-min-box">
							<view class="left">
								<view class="left-title">今日料价</view>
								<view class="left-price">￥{{item.total_price}}/g</view>
							</view>
							<view class="right">
								<view class="right-symbol">+</view>
								<input class="input" type="number" v-model="value01" :placeholder="value01" @input="checka"/>
								<view class="right-symbol">=</view>
							</view>
							<view class="right-price">￥{{sumPrice01}}/g</view>
						</view>
						<view class="price-min-box">
							<view class="left">
								<view class="left-title">工费</view>
								<view class="left-price">￥{{item.wage}}/g</view>
							</view>
							<view class="right">
								<view class="right-symbol">+</view>
								<input class="input" type="number" v-model="value02" :placeholder="value02"  @input="checkb"/>
								<view class="right-symbol">=</view>
							</view>
							<view class="right-price">￥{{sumPrice02}}/g</view>
						</view>
					</view>
					<view class="circle-left"></view>
					<view class="circle-right"></view>
				</view>
			</view>
		</block>
		<view class="explain">
			<view class="explain-title">说明</view>
			<view>
				<view>
					1、倍率设置：APP端的批发拿货价x您设置的倍率=您的商城售价
				</view>
				<view>
					2、XXX倍率修改后，本平台仍将显示您的拿货成本价格；
				</view>
				<view>
					3、修改的倍率仅用于您的批发商商城
				</view>
			</view>
		</view>
		<view class="bottom-btn">
			<button class="btn" @click="skipShopGoldPrice">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: [],
				gold_id:0,
				value01:'',
				value02:'',
				la:'',
				lb:'',
				vala:'',
				valb:''
			}
		},
		computed:{
			
			//料价
			sumPrice01(){
				let arr = 0
				if(this.item){
					let num = this.lb
					if(this.value01 == ''){
						arr =  num + this.vala
					}else{
						arr =  num + JSON.parse(this.value01)
					}
				}
				return arr.toFixed(2)
			},
			//工费
			sumPrice02(){
				let arr = 0
				if(this.item){
					let num = this.la
					if(this.value02 == ''){
						arr =  num + this.valb
					}else{
						arr =  num + JSON.parse(this.value02)
					}
				}
				return arr.toFixed(2)
			}, 
		},
		onLoad(op) {
			this.title = op.title+'金价' 
			this.gold_id = op.id
			this.page_reader()
		},
		methods: {
			page_reader(){
				this.$api.get('managegold',{id:this.gold_id}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.item = res.data
						this.value01 = JSON.parse(res.data.new_price) //料价
						this.value02 = JSON.parse(res.data.commerical_wage)
						this.la =  JSON.parse(res.data.wage)
						this.lb =  JSON.parse(res.data.total_price)
					}
				})
			},
			//保存
			skipShopGoldPrice(){
				let arr = JSON.parse(this.value01)
				let att = JSON.parse(this.value02)
				this.$api.post('managegold',{new_price:arr.toFixed(2),commerical_wage:att.toFixed(2),id:this.gold_id}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.com.redto('./shop-gold-price?tit='+'修改成功')
					}
				})
				
			},
			//返回
			goto_top(){
				uni.navigateBack()
			},
			checka(e) {
				//正则表达试
				e.target.value = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
				//重新赋值给input
				this.$nextTick(() => {
					this.value01= e.target.value
				})
			},
			checkb(e) {
				//正则表达试
				e.target.value = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
				//重新赋值给input
				this.$nextTick(() => {
					this.value02= e.target.value
				})
			},
		}
	}
</script>

<style lang="scss">
	.head{
		width: 100%;display: flex;
		font-size: 32rpx;margin-top: 60rpx;padding-bottom: 30rpx;
		.head_left{
			width: 14%;padding-left: 1%;
		}
		.head_cont{
			margin-left: 24%;
		}
	}
	
	.zl-box {
		padding: 20upx 30upx;
	}

	.gold-prices-box {
		margin-bottom: 30upx;
		margin-top: 30rpx;
		.gold-prices-box-up {
			width: 100%; 
			height: 80upx;
			padding: 0 60upx;
			background-image: linear-gradient(180deg,
				#f3e9df 0%,
				#f6efe9 100%);
			border-radius: 10upx 10upx 0 0;
			border-bottom: dashed 2upx #cccccc;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.up-title {
				font-size: 26upx;
			}

			.up-prices {
				color: #ef2d2d;

				.rmb {
					font-size: 20upx;
				}

				.number {
					font-size: 34upx;
					font-weight: bold;
				}
			}
		}

		.gold-prices-box-down {
			width: 100%;
			padding: 40upx 0;
			background-color: #F6F6F6;
			border-radius: 0 0 10upx 10upx;
			display: flex;
			justify-content: center;
			position: relative;

			.price-box {
				width: 74%;

				.price-min-box {
					display: flex;
					align-items: center;
					margin-bottom: 30upx;

					.left {
						width: 28%;
						text-align: center;
						padding-right: 20upx;

						.left-title {
							font-size: 22upx;
							color: #999999;
						}

						.left-price {
							font-size: 26upx;
							color: #ee2e2e;
						}
					}

					.right {
						width: 50%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-weight: bold;

						.right-symbol {
							font-size: 30upx;
						}

						.input {
							width: 66%;
							height: 52upx;
							background-color: #FFFFFF;
							font-size: 28upx;
							text-align: center;
							border-radius: 6upx;
						}
					}

					.right-price {
						width: 28%;
						text-align: center;
						font-weight: bold;
						font-size: 26upx;
					}
				}
			}

			.circle-left {
				width: 24upx;
				height: 24upx;
				background-color: #FFFFFF;
				border-radius: 100%;
				position: absolute;
				left: -12upx;
				top: -12upx;
			}

			.circle-right {
				width: 24upx;
				height: 24upx;
				background-color: #FFFFFF;
				border-radius: 100%;
				position: absolute;
				right: -12upx;
				top: -12upx;
			}
		}
	}

	.explain {
		font-size: 22upx;
		color: #999999;
		display: flex;

		.explain-title {
			width: 12%;
		}
	}

	.bottom-btn {
		width: 100%;
		padding: 20upx 30upx;
		position: fixed;
		bottom: 0;
		left: 0;

		.btn {
			font-size: 30upx;
			color: #FFFFFF;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			border-radius: 40upx;
		}
	}
</style>
