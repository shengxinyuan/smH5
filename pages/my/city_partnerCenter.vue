<template>
	<view>
		<view class="header">
			<view class="header_white" :style="{background:background }">
				<view class="gototop" @click="gotoppage">
					<u-icon name="arrow-left" size="50"></u-icon>
				</view>
				<view class="head_center">
					城市合伙人中心
				</view>
				<view class="head_right" @click="go_search('./area_team')">
					区域团队
				</view>
			</view>
			<!-- 数据统计 -->
			<view class="data_statis">
				<view class="data_top">
					{{month}}月份提成（元）
				</view>
				<view class="data_center">
					+{{mon_pic}}
				</view>
				<view class="data_bottom">
					<view class="bot_l">
						会员充值：{{stdata.commission_vip}}
					</view>
					<view class="bot_c">
						K金黄金：{{stdata.commission_k}}
					</view>
					<view class="bot_r">
						非K金黄金：{{stdata.commission_not_k}}
					</view>
				</view>
			</view>
			<view class="data_statis">
				<view class="data_top">
					本月业绩（元）
				</view>
				<view class="data_center">
					+{{thi_mon}}
				</view>
				<view class="data_bottom">
					<view class="bot_l">
						会员充值：{{stdata.achievement_vip}}
					</view>
					<view class="bot_c">
						K金黄金：{{stdata.achievement_k}}
					</view>
					<view class="bot_r">
						非K金黄金：{{stdata.achievement_not_k}}
					</view>
				</view>
			</view>
			<view>
				<text>当前申请城市：</text>
				<text>南京</text>
			</view>
			<view class="month_select">
				<view class="select_l" @click="cli_select(3)">
					月份选择 <u-icon name="arrow-down"></u-icon>
				</view>
				<view class="select_l" :class="{active: ind == select_sty}" v-for="(it,ind) in list" @click="cli_select(ind)">
					{{it.name}} 
				</view>
			</view>
		</view>
		<!-- //时间 -->
		<u-picker v-model="show" :params="params" mode="time" @confirm="confirmMonth"></u-picker>
		<view class="cont">
			<view class="cont_item" v-for="(it,ind) in stdata.data" :key="ind">
				<view class="item_left">
					<view class="item_left_top" v-if="it.labels == 1">
						类型：K金
					</view>
					<view class="item_left_top" v-if="it.labels == 2">
						类型：非K金
					</view>
					<view class="item_left_top" v-if="it.labels == 3">
						类型：会员充值
					</view>
					<view class="item_left_b">
						用户：{{it.member_name}}
					</view>
					<view class="item_left_b">
						{{it.create_time}}
					</view>
				</view>
				<view class="item_right">
					+{{it.price}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				background:'',
				month_price:5000,//提成
				thismonth:15000.25,// 本月业绩
				list_pic:298000,//列表数据
				select_sty:0,
				show:false,//月份选择
				list:[
					
					{
						name:"本月",
					},
					{
						name:"上月",
					}
				],
				params: {
					year: true,
					month: true,
					day: false,
					hour: false,
					minute: false,
					second: false
				},
				year:'', //年
				month:'' ,// 月
				stdata:''
				
			}
		},
		onShow() {
			let date = new Date()
			this.year = date.getFullYear()
			this.month = date.getMonth() +1
			console.log(this.year,this.month)
			this.page_reader()
		},
		computed:{
			//提成
			mon_pic(){
				let arr = this.stdata.commission
				return arr && arr.toString().replace(/\d+/, (s)=>{
					return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
				})
			}, 
			//本月业绩
			thi_mon(){
				let arr = this.stdata.achievement
				return arr && arr.toString().replace(/\d+/, (s)=>{
					return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
				})
			},
		},
		onPageScroll(e) {
			this.background = 'rgba(98,117,174,'+e.scrollTop / 80 +')' 
			
		},
		methods:{
			page_reader(){
				this.$api.get('partnermoney',{year:this.year,month:this.month}).then(res=>{
					console.log(res)
					if(res.status ==1){
						this.stdata = res.data
						// res.data.forEach(i=>[
						// 	i.price = 
						// ])
					}
				})
			},
			//区域团队
			go_search(e){
				this.com.navto(e)
			},
			//选择月份
			confirmMonth(e){
				let time = new Date()
				let year = time.getFullYear()
				let month = time.getMonth() +1
				if(e.year > year){
					this.com.msg('只能查看往年记录')
				}else{
					// this.com.msg(e.year+'-'+e.month)
					this.year = e.year
					this.month = e.month
					this.page_reader()
				}
			},
			//点击选项
			cli_select(e){
				this.select_sty = e
				if(e == 0){
					let date = new Date()
					this.year = date.getFullYear()
					this.month = date.getMonth() +1
					this.page_reader()
				}else if(e == 1){
					if(this.month == 1){
						this.month = 12
						this.year -= 1
						this.page_reader()
					}else{
						this.month -= 1
						this.page_reader()
					}
				}else if(e == 3){
					this.show = true
				}
			},
			gotoppage(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>
	page{background-color: white;}
</style>
<style lang="scss" scoped>
	.header{
		width: 100%;height: 52vh;background-image: url(../../static/my/city_parenter.png);
		background-size: 100% 100%;padding-top: 150rpx;
		//自定义头部
		.header_white{
			width: 100%;height: 140rpx;position: fixed;left: 0;top: 0;padding-top: 68rpx;z-index: 20;
			display: flex;justify-content: space-between;color: #fff;
			.gototop{
				padding-left: 30rpx;padding-top: 8rpx;
			}
			.head_center{
				font-size: 36rpx;
			}
			.head_right{
				font-size: 28rpx;width: 140rpx;height: 50rpx;line-height: 50rpx;text-align: center;margin-right: 30rpx;border-radius: 50rpx;
				background-color: rgba(0,0,0,0.2);margin-top: 6rpx;
			}
		}
		//提成
		.data_statis{
			width: 92%;margin: 20rpx 4%;background-color: white;border-radius: 14rpx;overflow: hidden;
			.data_top{
				line-height: 78rpx;padding-left: 30rpx;font-size: 32rpx;
			}
			.data_center{
				text-align: center;line-height: 100rpx;font-size: 44rpx;color: #f27373;
			}
			.data_bottom{
				display: flex;justify-content: space-between;background-color: #f5f5f8;height: 66rpx;
				padding-top: 6rpx;margin-top: 20rpx;font-size: 25rpx;
				view{
					width: 33%;text-align: center;height: 46rpx;border-right: 2rpx solid #666;line-height: 56rpx;color: #666;
					overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
				}
				view:last-child{
					border: 0;
				}
			}
		}
		//月份选择
		.month_select{
			width: 100%;display: flex;justify-content: space-between;padding: 0 4%;line-height: 60rpx;color: #666;
			view{
				width: 33%;text-align: center;
				position: relative;
				&.active{
					font-weight: bold;
					// background: #f8f8f8;
					&:before{
						content: '';
						position: absolute;
						left: 35%;
						top: 90%;
						transform: translateY(-50%);
						height: 6upx;
						width: 70upx;
						background-color: #2d407a;
						opacity: .8;
					}
				}
			}
		}
	}
	.cont{
		width: 92%;margin: 0 4%;background-color: #F6F6F6;padding: 20rpx;border-radius: 14rpx;margin-bottom: 60rpx; 
		.cont_item{
			width: 100%;display: flex;justify-content: space-between;border-bottom: 2rpx solid #C8C9CC;padding-top: 14rpx;
			.item_left_top{
				font-size: 32rpx;line-height: 66rpx;
			}
			.item_left_b{
				font-size: 28rpx;color: #666;line-height: 50rpx;
			}
			.item_right{
				width: 200rpx;text-align: center;
				font-size: 36rpx;line-height: 128rpx;
			}
		}
		.cont_item:last-child{
			border: 0;
		}
		
	}
</style>
