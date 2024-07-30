/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2023-08-01 21:52:30
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-02 17:37:58
 */
import Vue from 'vue';
import Vuex from 'vuex';
//导入modules（切片）
import { modules } from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        ...modules
    }
});
