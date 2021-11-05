<template>
	
</template>

<script>
	export default {
		data() {
			return {
				pay_type:[],
				pay_type_zj:"",
				
			};
		},
		props:{
			page_del:{
				default:false
			},
			type_check:{ //选中状态
				default:false
			},
			shop_list:{}
		},
		methods:{
			
			//点击选择
			checkbox(e,ind){
				this.$emit('checkbox',e,ind)
			}, 
			//长按
			long(){
				this.$emit("long")
			}
		}
	}
</script>

<style lang="scss" scoped>


</style>
