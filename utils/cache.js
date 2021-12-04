
function set(k,v,t){
	console.log(k,v,t);
	uni.setStorageSync(k,v);
	var seconds = parseInt(t);
	console.log(seconds);
	if(seconds>0){
		console.log('111');
		var timestamp = Date.parse(new Date());
		timestamp = timestamp / 1000 + seconds;
		uni.setStorageSync(k,timestamp+'');
		console.log(timestamp);
	}else {
		console.log('222');
		uni.removeStorageSync(k);
	}
}

function get(k,def){
	var deadtime = parseInt(uni.getStorageSync(k));
	if(deadtime){
		if(parseInt(deadtime) < Date.parse(new Date()) / 1000){
			if(def){
				return def;
			}else{
				return false;
			}
		}
	}
	var res = uni.getStorageSync(k);
	if(res){
		return res;
	}else{
		if(def == undefined || def == ''){
			def = false;
		}
		return def;
	}
}

function remove(k){
	uni.removeStorageSync(k);
}

function clear(k){
	uni.clearStorageSync();
}

function createModule(str1,str2){
	return{
		greeting:str1,
		name:str2,
		sayIt:function(){
			return this.greeting + ',' + this.name
		}
	}
}

module.exports = {
	set:set,
	get:get,
	remove:remove,
	clear:clear
}