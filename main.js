import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
//引入拦截
//import '@/common/interceptor.js';

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)
import statusBar from './component/statusBar.vue'
Vue.component('statusBar', statusBar);

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif