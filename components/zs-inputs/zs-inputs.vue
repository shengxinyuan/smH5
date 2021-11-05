<template>
	<view>
		<view class="inp" :style="{padding: padding}">
			<input type="text" :placeholder="texts" v-model="value" @confirm="go_search"/>
			<view class="inp_but" @click="go_search">
				搜索
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:''
			};
		},
		props:{
			texts:{default:'搜索'},
			padding:{default:'5%'}
		},
		methods:{
			go_search(){
				if(this.value == ''){
					this.com.msg('搜索内容不能为空~')
				}else{
					this.$emit('searchClick',this.value)
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.inp{
	width: 100%;display: flex;line-height: 70rpx;
	input{
		width: 85%;background-color: #fff;border-radius:  40rpx 0 0 40rpx;padding-left: 24rpx;
		line-height: 70rpx;height: 70rpx;font-size: 28rpx;
	}
	.inp_but{
		width: 15%;background-color: #fff;text-align: center;border-radius: 0 40rpx 40rpx 0;color: #283b77;font-size: 30rpx;
	}
}
</style>
