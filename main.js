import Vue from 'vue'
import App from './App'
import uvUI from '@climblee/uv-ui'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uvUI);
const app = new Vue({
    ...App
})
app.$mount()