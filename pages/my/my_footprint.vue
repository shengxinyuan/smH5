<template>
	<view>
		<view class="foot_week" v-if="time_show" :style="{opacity:opacity}">
			<view class="week_child" v-for="(it,ind) in data" :key="ind">
				<view class="it_top_month">
					{{it.week}}
				</view>
				<view class="it_date" :class="{act:it.isToday == true}" @click="date_cli(it.day,it.month)">
					{{it.day}}
				</view>
				
			</view>
			<view class="down_pull" @click="show = true">
				<u-icon name="arrow-down" size="40"></u-icon>
			</view>
		</view>
		<!-- //商品列表 -->
		<view class="shop_list" v-if="state_data != ''">
			<view class="lsit_item" v-for="it in state_data">
				<view class="item_time" >
					{{it.time}}
				</view>
				<view class="item_shop">
					<view class="item_shop_it" v-for="it_two in it.data">
						<image :src="it_two.image" @click="go_shopdetail(it_two.id)"></image>
						<view class="shop_price">
							￥{{it_two.price}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-else style="padding-top: 140rpx;">
			<u-empty text="暂无浏览记录" mode="history"></u-empty>
		</view>
		<!-- 日历 -->
		<u-calendar v-model="show" :mode="mode" @change="change" :change-year="false"></u-calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time_show:true,//一周时间显示
				show: false,//日历显示
				mode: 'date',//日历类型
				useTime: '2021-1-9',
				day: [],
				change_date:'',
				data: [],
				weekDayZh:[ 
					{name:'日',index:0},
					{name:'一',index:1},
					{name:'二',index:2},
					{name:'三',index:3},
					{name:'四',index:4},
					{name:'五',index:5},
					{name:'六',index:6},
				],
				opacity:1,//透明度
				date_j:'',
				state_data:''
			}
		},
		//页面滑动
		onPageScroll(e){
			// console.log(e)
			
			if(e.scrollTop >50){
				// this.time_show = false
				this.opacity = 0
			}else{
				// this.time_show = true
				this.opacity = 1
			}
		},
		onNavigationBarButtonTap() {
			let that = this
			uni.showModal({
				content: "这将会清空所有记录，是否继续？",
				confirmText: '继续',
				success(a) {
					if (a.confirm) {
						that.$api.del('history').then(res=>{
							console.log(res)
							that.page_reader()
						})
					}
				}
			})
		},
		onLoad() {
			// var chooseTime = (new Date(this.useTime)).getTime() / 1000; // 86400一天的秒数,传接口减一天时间
			// let arr = new Date().getTime()
			let aa = new Date()
			this.date_j = aa.getMonth()+1 +'月'+aa.getDate()+'日'
			
			// 获取当前周几
			let weekIndex = new Date().getDay();
			// console.log(weekIndex)
			//可得到当前日期以及之前的	
			for (let i = weekIndex; i >= 0; i--) {
				// console.log(i)
				this.data.push(this.getWeek(-i))
			}
			//当前日期之后的
			for (let i = 1; i < 7 - weekIndex; i++) {
				this.data.push(this.getWeek(i))
			}
			for (var it = 0; it < this.data.length; it++) {
				// console.log(this.data[it])
				for (var i = 0; i < this.weekDayZh.length; i++) {
					// console.log(this.weekDayZh[i].index)
					if(this.data[it].week == this.weekDayZh[i].index){
						this.data[it].week = this.weekDayZh[i].name
					}
					
				}
				
			}
			console.log(this.data) //data就是一周的
			this.page_reader()
		},
		methods: {
			page_reader(){
				let arr = ''
				this.data.forEach(i=>{
					if(i.isToday == true){
						arr = i
					}
				})
				// console.log(arr)
				this.$api.get('historyall',{time:arr.timestamp / 1000}).then(res=>{
					console.log(res.data)
					if(res.status == 1){
						this.state_data = res.data
					}
				})
			},
			//到详情
			go_shopdetail(e){
				this.com.navto('../../pages/index/shop_detail?shop_id='+e)
			},
			//选择日期
			change(e) {
				this.date_j = e.month +'月'+e.day+'日'
				this.change_date = e.result
				
				this.data = []
				
				let weekIndex = new Date(e.result).getDay();
				console.log(weekIndex)
				for (let i = weekIndex; i >= 0; i--) {
					// console.log(i)
					this.data.push(this.timess(-i))
				}
				//当前日期之后的
				for (let i = 1; i < 7 - weekIndex; i++) {
					this.data.push(this.timess(i))
				}
				for (var it = 0; it < this.data.length; it++) {
					// console.log(this.data[it])
					for (var i = 0; i < this.weekDayZh.length; i++) {
						// console.log(this.weekDayZh[i].index)
						if(this.data[it].week == this.weekDayZh[i].index){
							this.data[it].week = this.weekDayZh[i].name
						}
						
					}
					
				}
				console.log(this.data) //data就是整一周的
				this.page_reader()
			},
			timess(e){
				var today = new Date(this.change_date);
				// console.log(today)
				var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * e;
				
				today.setTime(targetday_milliseconds);
				
				var tYear = today.getFullYear();
				
				var tMonth = today.getMonth();
				
				var tDate = today.getDate();
				
				tMonth = tMonth + 1;
				
				tDate = tDate;
				
				if (uni.getSystemInfoSync().platform == 'ios') {
					//周几
					let time = tYear + "/" + tMonth + "/" + tDate
					// console.log(time)
					let weekIndex = new Date(time).getDay();
					//改变今天的选中状态
					var d =new Date(this.change_date)
					var days=d.getDate()
					// console.log(d)
					let daylist = {
							day: tDate, // 天
							isToday: tDate == days ? true : false, // 是否选中
							month: tMonth, // 月份
							result: tYear + "/" + tMonth + "/" + tDate, // 日期整体值
							week: weekIndex, //星期
							year: tYear , // 年份
							timestamp: new Date(time).getTime() + 86400000
						}
					return daylist
				
				} else {
					//周几
					let time = tYear + "-" + tMonth + "-" + tDate
					let weekIndex = new Date(time).getDay();
					//改变今天的选中状态
					var d =new Date(this.change_date)
					var days=d.getDate()
					console.log(days)
					let daylist = {
							day: tDate, // 天
							isToday: tDate == days ? true : false, // 是否选中
							month: tMonth, // 月份
							result: tYear + "-" + tMonth + "-" + tDate, // 日期整体值
							week: weekIndex, //星期
							year: tYear , // 年份
							timestamp: new Date(time).getTime() + 86400000
						}
					return daylist
				}
			},
			//点击变样式
			date_cli(e,y){
				this.date_j = y +'月'+e+'日'
				this.data.forEach(it=>{
					if(it.day == e){
						it.isToday = true
					}else{
						it.isToday = false
					}
				})
				this.page_reader()
			},
			//日期数据
			getWeek(day) {
				var today = new Date();

				var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
				// console.log(today.getTime())
				today.setTime(targetday_milliseconds);
				var tYear = today.getFullYear();

				var tMonth = today.getMonth();

				var tDate = today.getDate();
				
				tMonth = tMonth + 1;

				tDate = tDate;
				
				if (uni.getSystemInfoSync().platform == 'ios') {
					//周几
					let time = tYear + "/" + tMonth + "/" + tDate
					let weekIndex = new Date(time).getDay();
					//改变今天的选中状态
					var d =new Date()
					var days=d.getDate()
					
					let daylist = {
							day: tDate, // 天
							isToday: tDate == days ? true : false, // 是否选中
							month: tMonth, // 月份
							result: tYear + "/" + tMonth + "/" + tDate, // 日期整体值
							week: weekIndex, //星期
							year: tYear , // 年份
							timestamp: new Date(time).getTime() + 86400000
						}
					return daylist

				} else {
					//周几
					let time = tYear + "-" + tMonth + "-" + tDate
					let weekIndex = new Date(time).getDay();
					//改变今天的选中状态
					var d =new Date()
					var days=d.getDate()

					let daylist = {
							day: tDate, // 天
							isToday: tDate == days ? true : false, // 是否选中
							month: tMonth, // 月份
							result: tYear + "-" + tMonth + "-" + tDate, // 日期整体值
							week: weekIndex, //星期
							year: tYear , // 年份
							timestamp: new Date(time).getTime() + 86400000
						}
					return daylist
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
	//日历
.foot_week{
	width: 100%;padding: 20rpx 1%;display: flex;justify-content: space-around;
	background-color: white;	
	position: relative;
	-webkit-transition: opacity 1s ease-in-out;
	-moz-transition: opacity 1s ease-in-out;
	-o-transition: opacity 1s ease-in-out;
	transition: opacity 1s ease-in-out;
	.down_pull{
		width: 55rpx;height: 55rpx;line-height: 68rpx;text-align: center; background-color: #F6F6F6;border-radius: 50%;
		box-shadow: 0 2rpx 2rpx 0;color: #999;
		position: absolute;bottom: -26rpx;right: 90rpx;
	}
	.week_child{
		width: 16%;text-align: center;
		
		.it_top_month{
			color: #999;
		}
		.it_date{
			margin-top: 20rpx;width: 60rpx;height: 60rpx;line-height: 60rpx;margin-left: 24rpx;
		}
		.act{
			color: white;border-radius: 50%;
			background-color: #2979FF;
		}
	}
}
//商品列表 
.shop_list{
	width: 100%;padding-bottom: 80rpx;
	.lsit_item{
		
		.item_time{
			line-height: 80rpx;padding-left: 3%;font-size: 28rpx;color: #999;
		}
		.item_shop{
			width: 100%;display: flex;flex-wrap: wrap;
			.item_shop_it{
				width: 32%;margin-right: 2%;margin-top: 10rpx;background-color: white;
				overflow-y: scroll;
				image{
					height: 240rpx;width: 100%;
				}
				.shop_price{
					height: 60rpx;line-height: 54rpx;color: #ea5b72;padding-left: 16rpx;
				}
			}
			.item_shop_it:nth-child(3n+3){
				margin-right: 0;
			}
		}
	}
}
</style>
