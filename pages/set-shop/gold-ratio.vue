<template>
	<view class="zl-box">
		<uni-nav-bar left-icon="back" @clickLeft="goto_top" :title="title"></uni-nav-bar>
		
		<view class="gold-ratio-box">
			<view class="title">{{ratioTitle}}</view>
			<input class="input" type="number" v-model="value" @input="chack"/>
		</view>
		<view class="explain">
			<view class="explain-title">{{explainTitle}}</view>
			<view>
				<view>
					{{explain01}} 
				</view>
				<view>
					{{explain02}}
				</view>
				<view>
					{{explain03}}
				</view>
			</view>
		</view>
		<view class="bottom-btn">
			<button class="btn" @click="skipShopGoldPrice">{{btnName}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ratioTitle:'古法金倍率',
				value:'',
				explainTitle:'说明',
				explain01:'1、倍率设置：APP端的批发拿货价x您设置的倍率=您的商城售价',
				explain02:'2、XXX倍率修改后，本平台仍将显示您的拿货成本价格；',
				explain03:'3、修改的倍率仅用于您的批发商商城',
				btnName:'保存'
			}
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
						this.value = res.data.ratio_price
					}
				})
			},
			skipShopGoldPrice(){
				this.$api.post('managegold',{ratio_price:this.value,id:this.gold_id}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.com.redto('./shop-gold-price?tit='+'修改成功')
					}
				})
			},
			chack(e){
				e.target.value = parseInt(e.target.value)
				//重新赋值给input
				this.$nextTick(() => {
					this.value= e.target.value
				})
			},
			//返回
			goto_top(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
	.zl-box{
		padding: 30upx;
		border-top: solid 2upx #f6f6f6;
		.gold-ratio-box{
			margin-top: 20upx;
			margin-bottom: 30upx;
			.title{
				font-size: 30upx;
				font-weight: bold;
				margin-bottom: 20upx;
			}
			.input{
				width: 100%;
				height: 78upx;
				text-align: center;
				font-size: 32upx;
				font-weight: bold;
				background-color: #F6F6F6;
				border-radius: 6upx;
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
		margin-top: 160upx;
	
		.btn {
			height: 78upx;
			line-height: 78upx;
			font-size: 30upx;
			color: #FFFFFF;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			border-radius: 40upx;
		}
	}
</style>
