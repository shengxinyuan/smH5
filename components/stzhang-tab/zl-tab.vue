<template>
	<view :class="{'my-tabs':true,'space-between':formatBe}">
		<view  v-for="(item,index) in getModelData" :key="index" :class="{'tab-item':true,'active':activeIndex==index}" @tap="tap(index)">
			{{item.label}}
		</view>
	</view>
</template>

<script>
	export default {
		props:['modelData','initIndex'],
		data() {
			return {
				defaultInfo:{
					data:[
						{label:"测试1",},
						{label:"测试2"},
						
					],
				},
				activeIndex:0,//默认索引
			}
		},
		computed:{
			getModelData(){
				return this.modelData||this.defaultInfo.data
			},
			formatBe(){
				return this.modelData
						?this.modelData.length>4?true:false
						:false
			}
		},
		methods: {
			tap(index){
				if(index!==this.activeIndex)this.$emit("change",index);
				this.activeIndex=index;
			},
			/**
			 * @name 初始化activeIndex
			 */
			initActive(){
				this.activeIndex=this.initIndex||this.activeIndex
			}
		},
		created() {
			this.initActive()
		},
	}
</script>
<style lang='scss'>
	.my-tabs {
		height: 50upx;
		font-size: 24upx;
		color: #2d407a;
		border: solid 2upx #2d407a;
		display: flex;
		justify-content: space-around;
		box-sizing: border-box;
		/* border-top: 2upx solid #dddddd;
		border-bottom: 2upx solid #dddddd; */
		min-width: 100%;
		overflow-x: auto;
		background-color: #f6f6f6;
		border-radius: 30upx;
		
		.tab-item{
			width: 100%;
			line-height: 46upx;
			/* padding: 20upx; */
			/* min-width: 100upx; */
			text-align: center;
		}
		.tab-item.active{
			position: relative;
			color: #ffffff;
			
			background-image: linear-gradient(90deg, 
					#2b3f7d 0%, 
					#1b2c60 100%);
		}
		.tab-item.active::after{
			border-radius: 30upx 0 0 30upx;
			content: "";
			position: absolute;
			bottom: 0;
			left:50%;
			transform: translateX(-50%);
			width: 100%;
			/* border-bottom: 4upx solid #3682FF; */
			animation: test ease 1 1.5s;
		}
	}
	.my-tabs.space-between{
		justify-content: space-between;
	}
	@keyframes test{
		0%{width: 100%}
		50%{width: 150%}
		100%{width: 100%}
	}
</style>
