const env = uni.getStorageSync('env') || 'prod'

const urlMap = {
	test: 'http://test-zuanshi.semoh.cn/api/',
	pre: 'http://app-api.shengxinyuan.online/api/',
	prod: 'https://zuanshi.semoh.cn/api/'
}
console.log(':::::::::env-----------', env)
const commoneUrl = urlMap[env];

var that = this
//post请求封装
function postRequest(url,data,type){
	var promise = new Promise((resolve,reject) => {
		var postData = data;
		uni.request({
			url:commoneUrl + url,
			data:postData,
			method:'POST',
			header:{
				'content-type':type|| 'application/x-www-form-urlencoded',
				'token':uni.getStorageSync('token'),
			},
			success:function(res){
				resolve(res.data);
			},
			error:function(e) {
				reject('网络出错');
			}
		})
	});
	return promise;
}

//get请求封装
function getRequest(url,data){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"GET",
				dataType:'json',
				header:{
					'content-type': 'application/json',
					'token':uni.getStorageSync('token'),
				},
				success:function(res){
					resolve(res.data);
				},
				error:function(e)
				{
					reject('网络出错');
				}
			});
	});
	return promise;
}
//put请求封装
function putRequest(url,data){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"PUT",
				dataType:'json',
				header:{
					'content-type': 'application/json','token': uni.getStorageSync('token')},
				success:function(res){
					resolve(res.data);
				},error:function(e){
					reject('网络出错');
				}
			});
	});
	return promise;
}
//del请求封装
function delRequest(url,data){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"DELETE",
				dataType:'json',
				header:{
					'content-type': 'application/json','token': uni.getStorageSync('token')},
				success:function(res){
					resolve(res.data);
				},error:function(e){
					reject('网络出错');
				}
			});
	});
	return promise;
}
module.exports = {
    post: postRequest,
    get: getRequest,
	put: putRequest,
	del: delRequest
};

