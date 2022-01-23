const commoneUrl  = "http://zuanshi.nxm.wanheweb.com/api/"; //公共路径 

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
				// 'token':uni.getStorageSync('token'),
				'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIhQCMkJSomIiwiYXVkIjoiIiwiaWF0IjoxNjQyOTE4NjIyLCJuYmYiOjE2NDI5MTg2MjUsImV4cCI6MTY0NTUxMDYyMiwiZGF0YSI6eyJ1aWQiOjIxMX19.S2O3F_5zFFhiqksGRRGCkJvsDQq0yYtP8Kl3fdxsd9o'
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
					// 'token':uni.getStorageSync('token')
					'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIhQCMkJSomIiwiYXVkIjoiIiwiaWF0IjoxNjQyOTE4NjIyLCJuYmYiOjE2NDI5MTg2MjUsImV4cCI6MTY0NTUxMDYyMiwiZGF0YSI6eyJ1aWQiOjIxMX19.S2O3F_5zFFhiqksGRRGCkJvsDQq0yYtP8Kl3fdxsd9o'
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

