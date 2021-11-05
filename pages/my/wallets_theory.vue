<template>
	<view class="">
		<zs-text :content="cont"></zs-text>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				cont:''
			}
		},
		onLoad(op){
			this.cont = op.cont
			console.log(op)
		},
		methods:{
			
		}
	}
</script>

<style>
	
</style>
