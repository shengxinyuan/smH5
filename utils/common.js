const com = {
	//提示加跳转登录页
	three_login(e){
		uni.showToast({
			title:e,icon:'none'
		})
		let arr = 2
		let time = setInterval(()=>{
			arr -- 
			if(arr == 0){
				uni.navigateTo({
					url:'./login'
				})
				clearInterval(time)
			}
		},1000)
	},
	//提示
	msg(e){
		uni.showToast({
			title:e,icon:'none'
		})
	},
	//跳转到某页
	navto(e){
		uni.navigateTo({
			url:e
		})
	},
	//删档跳转
	redto(e){
		uni.redirectTo({
			url:e
		})
	},
	//tab页面跳转
	tab(e){
		uni.switchTab({
			url:e
		})
	},
	rel(e){
		uni.reLaunch({
			url:e
		})
	},
	//倒计时
	countDown(time) {
		var date = new Date()
		var nowTime = date.getTime(); // 当前时间的时间戳
		var endtime = time; // 获取结束时间戳
		// var endtime = new Date(endTime).getTime(); // 获取结束时间戳
		var aee = endtime - nowTime
		var duration = setInterval(()=>{
			if(aee == 0){
				clearInterval(duration)
				return 0
			}else{
				aee -= 1000
			}
			// console.log(aee)
		},1000)
		
		
		var days = Math.floor(aee / 1000 / 3600 / 24) // 天
		var hours = (Math.floor(aee / 1000 / 3600 % 24) < 10) ? ('0' + (Math.floor(aee / 1000 / 3600 % 24))) : Math.floor(aee / 1000 / 3600 % 24) // 时
		var minutes = (Math.floor(aee / 1000 / 60 % 60) < 10) ? ('0' + (Math.floor(aee / 1000 / 60 % 60))) : Math.floor(aee / 1000 / 60 % 60) // 分
		var seconds = (Math.floor(aee / 1000 % 60) < 10) ? ('0' + (Math.floor(aee / 1000 % 60))) : Math.floor(aee / 1000 % 60) // 秒
		var result = aee
		// result[0] = days
		// result[1] = hours + ':' + minutes + ':' + seconds
	  
		// return result[0] + 'd ' + result[1];
		return result;
	},
}

export default com