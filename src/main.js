import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ArrowDown,ArrowRight } from '@element-plus/icons-vue'
import axios from 'axios'
import * as echarts from 'echarts'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import apiFun from "./api/api.js";
import globalMethod from './components/globalMethod.js'


const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus,{locale})
app.component('ArrowDown', ArrowDown)
app.component('ArrowRight', ArrowRight)
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$apiFun = apiFun;
app.config.globalProperties.$globalMethod = globalMethod;
app.mount('#app')
