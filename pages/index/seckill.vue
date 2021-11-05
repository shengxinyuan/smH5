<template>
	<view>
		<scroll-view class="nav_head" scroll-x="true">
			<view class="head_item"  v-for="(it,ind) in list.top" :key="ind" @click="navhead_cli(it.id,it.title)">
				<view class="it_tiem" :class="{acts:navIndex == it.id}">
					{{it.time}}
				</view>
				<text class="it_tit" :class="{active:navIndex == it.id}">
					{{it.title}}
				</text>
			</view>
		</scroll-view>
		<view class="down_time">
			<view class="s-header_child">
				距结束<text class="hour_timer">{{end_seckill}}</text>
			</view>
			<view class="" style="color: #666;">
				限时秒杀最后疯抢
			</view>
		</view>
		<view class="shop_cont">
			<zs-shoplist-seckill :types="2" :second="second" :titles="titles" :lists="list.data"></zs-shoplist-seckill>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						time:'14:00',
						title:'抢购中'
					},
					{
						time:'14:00',
						title:'即将开抢'
					},
					{
						time:'14:00',
						title:'即将开抢'
					}
				],
				navIndex:0,
				end_time:'',//秒杀到期
				end_seckill:'00:00:00:00',//倒计时
				type_id:'',
				titles:'',
				second:0
			}
		},
		onLoad(op){
			// console.log(op)
			this.page_reader()
		},
		watch:{
			titles(a){
				console.log(a)
			}
		},
		methods:{
			navhead_cli(e,t){
				this.titles = t
				this.navIndex = e
				this.$api.get('activity',{type:2,type_id:e}).then(res=>{
					console.log(res)
					if(res.status == 1){
						let arr = 0
						let title = ''
						let data = new Date().getTime()
						res.data.top.forEach(i=>{
							//时间
							arr = new Date(i.start_time *1000).getHours() < 10 ? 0 +new Date(i.start_time *1000).getHours() : new Date(i.start_time *1000).getHours()
							i.time = arr +':00'
							//状态 开始时间小于当前时间，结束时间大于当前时间 抢购中
							let ks = i.start_time *1000
							let js = i.end_time *1000
							if(ks < data && js > data){
								i.title = "抢购中"
							}else if( js < data ){
								i.title = "已结束"
							}else if(ks > data){
								i.title = "即将开始"
							}
							//获取抢购中的 时间戳和id
							if(i.id == e){
								this.end_time = i.end_time
								// this.ent_time_s()
							}
						})
						this.list = res.data
						
					}
					
				})
			},
			page_reader(){
				this.$api.get('activity',{type:2,type_id:this.type_id}).then(res=>{
					console.log(res)
					if(res.status == 1){
						// 
						let arr = 0
						let title = ''
						let data = new Date().getTime()
						res.data.top.forEach(i=>{
							//时间
							arr = new Date(i.start_time *1000).getHours() < 10 ? 0 +new Date(i.start_time *1000).getHours() : new Date(i.start_time *1000).getHours()
							i.time = arr +':00'
							//状态 开始时间小于当前时间，结束时间大于当前时间 抢购中
							let ks = i.start_time *1000
							let js = i.end_time *1000
							if(ks < data && js > data){
								i.title = "抢购中"
								this.navhead_cli(i.id,"抢购中")
							}else if( js < data ){
								i.title = "已结束"
								this.titles = "已结束"
							}else if(ks > data){
								i.title = "即将开始"
								this.titles = "即将开始"
							}
							//获取抢购中的 时间戳和id
							if(i.T_F == 2){
								this.end_time = i.end_time
								this.navIndex = i.id
							}
						})
						this.list = res.data
						this.ent_time_s()
					}
				})
			},
			//秒杀倒计时
			ent_time_s(){
				let data = new Date()
				let state = data.getTime()
				// console.log(state)
				let reslut = this.end_time *1000 -state
				this.second  = Math.floor(reslut /1000)
				let tim = setInterval(()=>{
					if(reslut <= 0){
						clearInterval(tim)
						this.end_seckill = "00:00:00:00"
					}else{
						reslut -=1000
						this.end_seckill = this.ss(reslut)
					}
				},1000)
				
			},
			ss(e){
				let [day,hh,ff,ss] = [0,0,0,0]
				day = Math.floor(e / 1000 / 60 / 60 / 24);
				hh = Math.floor(e /1000/60/60 % 24)
				ff = Math.floor(e /1000/60 % 60)
				ss = Math.floor(e /1000 %60)
				let d = day > 9 ? day : '0'+day
				let h = hh > 9 ? hh : '0'+hh
				let m = ff > 9 ? ff : `0${ff}`;
				let s = ss > 9 ? ss : `0${ss}`;
				// console.log( d+"天"+h+":"+m+":"+s)
				return d +':'+h+":"+m+":"+s 
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6;
	}
</style>
<style scoped lang="scss">
	
	.nav_head{
		padding: 16rpx 3%;
		background-color: white;white-space: nowrap;
		display: flex;
		.head_item{
			width: 33%;text-align: center;display: inline-block;
			.it_tiem{
				font-size: 36rpx;font-weight: bold;
			}
			.acts{
				color: #e8372f;
			}
			.it_tit{
				display: inline-block;
				font-size: 28rpx;color: #666;
			}
			.active{
				padding: 0 20rpx;border-radius: 50rpx;
				color: white;background-color: #e8372f;
			}
		}
		
	}
	.down_time{
		width: 100%;padding: 0 3%;margin-top: 20rpx;display: flex;justify-content: space-between;
		.s-header_child{
			color: #333333;
			.hour_timer{
				display: inline-block;margin: 0 20rpx;color: #e8372f;font-size: 30rpx;
			}
		}
	}
	.shop_cont{
		padding:  0 3%;
	}
</style>
