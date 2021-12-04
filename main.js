import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
//uview引入
import uView from 'uview-ui'
Vue.use(uView)

import com from 'utils/common.js'
Vue.prototype.com = com

import api from './api.js'
Vue.prototype.$api = api

// import util from './utils/util.js'
// Vue.prototype.$util = util

import cache from '@/utils/cache.js'
Vue.prototype.$cache = cache

// import zsButton from './components/zs-button/zs-button.vue';
// Vue.component('zs-button',zsButton)
Vue.prototype.containsRepeatingLetter = function(str) {
	let strArr = str.split('');
	let regex = /[a-z]/i;
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] === strArr[i + 1] && regex.test(strArr[i])) {
			return true;
		}
	}
	return false
}
Vue.prototype.partial = function(fn, str1, str2) {
	return function(str3) {
		return fn(str1, str2, str3);
	}
}
Vue.prototype.count = function(start, end) {
	console.log(start);
	let timer = setInterval(() => {
		if (start < end) {
			console.log(++start);
		} else {
			clearInterval(timer);
		}
	}, 2000)
	return {
		cancle() {
			clearInterval(timer)
		}
	}
}

Vue.prototype.fizzBuzz = function(num) {
	return num === undefined || typeof num !== 'number' ? false :
		(num % 3 === 0 && 5 === 0 ? 'fizzbuzz' :
			(num % 3 === 0 ? 'fizz' : (num % 5 === 0 ? 'buzz' : num)))
}
Vue.prototype.matchesPattern = function(str) {
	let arr = str.split('-')
	let result = true
	arr.forEach((item, index) => {
		if (index === 0 || index === 1) {
			if (item.length !== 3) {
				result = false
				return
			}
		}
		if (index === 2) {
			if (item.length !== 4) {
				result = false
				return
			}
		}
		if (isNaN(Number(item))) {
			result = false
		}
	})
	return result
}

const app = new Vue({
	...App
})
app.$mount()
