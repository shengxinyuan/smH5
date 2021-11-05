<template>
	<view>
		<view class="zl-box">
			<view class="head-box">
				<view class="head-box-left">
					<view class="title">今日商城金价</view>
					<view class="price">
						<text class="rmb">￥</text>
						<text class="money" v-if="tableList[0]">{{tableList[0].total_price}}</text>
					</view>
				</view>
				<view class="head-box-right">
					<view class="title">更新方式</view>
					<view class="uni-padding-wrap">
						<radio-group @change="radioChange">
							<view class="radio-box" @click="openPopup(1)">
								<label class="radio" @click="openPopup(1)">
									<radio value="r1" :checked="indexd == 1" :color="Color" :style="styleSize" />{{radio01}}</label>
							</view>
							<view class="radio-box" @click="openPopup(0)">
								<label class="radio oneself-set"  @click="openPopup(0)">
									<radio value="r2" :class="indexd == 0" :color="Color" :style="styleSize" />{{radio02}}</label>
							</view>
						</radio-group>
					</view>
				</view>
			</view>
			<view class="shop_tab">
				<view class="tab_it" v-for="(it,ind) in tableList" :key="ind" @click="go_detail(it.id,it.ratio,it.title)">
					{{it.title}} <u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>

		<!-- 自己设置 弹出层 -->
		<u-popup v-model="popupShow" mode="center" border-radius="10" :closeable="false" width="78%">
			<view>
				<view class="popup-box-up">
					<view class="popup-title">设置金价更新</view>
					<view class="popup-set">
						<view style="width: 78%;">
							<view class="set-box">
								<view class="set-title">浮动范围值：</view>
								<view class="set-text">
									<view class="text-one symbol">±</view>
									<input class="input" v-model="value01" type="number" @input="checka"/>
									<view>元</view>
								</view>
							</view>
							<view class="set-box">
								<view class="set-title">更新间隔：</view>
								<view class="set-text">
									<view class="text-one">每</view>
									<input class="input" v-model="value02" type="number" @input="checkb"/>
									<view>小时</view>
								</view>
							</view>
						</view>
					</view>
					<view>
						<button class="btn" @click="skipBackPage">保存并执行</button>
					</view>
				</view>
				<view class="popup-box-down">
					<view>
						<text>{{explainText01}}</text>
					</view>
					<view>
						<text>{{explainText02}}</text>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				todayPrice:'636.8',
				radio01:'与采购系统同步',
				radio02:'自己设置',
				Color: '#f1ac29',
				styleSize: 'transform:scale(0.7)',
				tableList: [],
				popupShow: false,
				value01:'',
				value02:'',
				explainText01:'*浮动范围：当采购系统金价高于或低于您设置的数字是整数且不能小于1，商城金价将更新金价。',
				explainText02:'*更新间隔：按您设置的间隔时间更新金价，间隔时间必须是整数且不能小于1。',
				indexd:0,
			}
		},
		onLoad(op) {
			if(op.tit){
				this.com.msg(op.tit)
			}
		
			
		},
		onShow() {
			this.page_reader()
			if(uni.getStorageSync("indexd")){
				this.indexd = uni.getStorageSync("indexd")
				console.log()
			}
		},
		methods: {
			radioChange(evt) {
				for (let i = 0; i < this.length; i++) {
					if (this.value == evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			page_reader(){
				this.$api.get('managegold').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.tableList = res.data
					}
				})
			},
			
			openPopup(e) {
				this.indexd = e
				uni.setStorageSync('indexd',e)
				if(e == 1){
					this.$api.post('manage',{gold_type:1}).then(res=>{
						console.log(res)
					})
				}else{
					this.popupShow = true
				}
			},
			skipBackPage(){
				this.$api.post('manage',{gold_type:0,price:this.value01,hours:this.value02}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.popupShow = false
					}
					this.com.msg(res.message)
				})
				
			},
			go_detail(id,type,title){
				if(type == 1){ //1倍率 2 价格
					this.com.navto('./gold-ratio?id='+id+'&title='+title)
				}else{
					this.com.navto('./gold-prices?id='+id+'&title='+title)
				}
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
				e.target.value = parseInt(e.target.value)
				//重新赋值给input
				this.$nextTick(() => {
					this.value02= e.target.value
				})
			},
		}
	}
</script>

<style lang="scss">
	.shop_tab{
		margin-top: 20rpx;
		width: 100%;background-color: #F6F6F6;display:flex;flex-wrap: wrap;
		.tab_it{
			width: 48%;background-color: white;display: flex;justify-content: space-between;margin:5rpx 1%;
			padding: 20rpx;
		}
	}
	
	.zl-box {
		padding: 20upx 30upx;

		.head-box {
			display: flex;
			padding: 20upx 0;
			background-color: #fff6e5;

			.head-box-left {
				width: 50%;
				text-align: center;
				border-right: solid 2upx #f6ce82;

				.title {
					font-size: 24upx;
					color: #666666;
				}

				.price {
					color: #f1ac29;
					margin: 40upx 0;

					.rmb {
						font-size: 30upx;
					}

					.money {
						font-size: 50upx;
					}
				}
			}

			.head-box-right {
				width: 50%;

				.title {
					font-size: 24upx;
					color: #666666;
					text-align: center;
				}
			}
		}
	}

	.uni-padding-wrap {
		margin-top: 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.radio-box {
		margin-bottom: 20upx;
		display: flex;
		align-items: center;
	}

	.radio {
		font-size: 26upx;
		color: #999999;
	}

	.oneself-set {
		color: #999999;
	}
	.popup-box-up {
		padding: 40upx 0;

		.popup-title {
			font-size: 30upx;
			text-align: center;
			margin-bottom: 70upx;
		}

		.popup-set {
			display: flex;
			justify-content: center;
			align-items: center;

			.set-box {
				width: 100%;
				display: flex;
				align-items: center;
				margin-bottom: 30upx;

				.set-title {
					width: 35%;
					font-size: 26upx;
					color: #575c5e;
				}

				.set-text {
					width: 60%;
					font-size: 26upx;
					color: #666666;
					display: flex;
					align-items: center;
					
					.text-one{
						width: 10%;
					}
					.symbol{
						font-size: 36upx;
					}

					.input {
						width: 60%;
						height: 52upx;
						margin: 0 10upx;
						font-size: 28upx;
						text-align: center;
						background-color: #f6f6f6;
					}
				}
			}
		}

		.btn {
			width: 69%;
			height: 62upx;
			line-height: 62upx;
			font-size: 26upx;
			color: #FFFFFF;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			border-radius: 30upx;
		}
	}
	.popup-box-down{
		padding: 30upx;
		background-color: #f6f6f6;
		font-size: 22upx;
		color: #f5b47f;
	}
</style>
