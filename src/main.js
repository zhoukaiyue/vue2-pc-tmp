/*
 * @Descripttion:入口文件
 * @version:
 * @Author: zhoukai
 * @Date: 2023-08-01 21:52:30
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-29 15:15:20
 */
// 引入element-ui 样式文件
import 'element-ui/lib/theme-chalk/index.css';
// 导入全局css
import '@/assets/css/base.scss';
// 引入tailwindcss样式
import 'tailwindcss/tailwind.css';
// 引入vue
import Vue from 'vue';
import App from './App.vue';
// 导入路由
import router from './packages/router';
// 导入vuex
import store from './packages/store';
// 导入全局自定义指令
import '@/resources/directive/index.js';

// 阻止启动生产消息，常用作指令。
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
