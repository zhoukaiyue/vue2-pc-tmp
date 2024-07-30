/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2023-08-08 09:43:06
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-02 16:55:28
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { setupRouterGuard } from './guards';

Vue.use(VueRouter);

const options = {
    mode: 'history',
    base: process.env.VUE_APP_ROUTER_BASE || '/',
    routes
};

const router = new VueRouter(options);
// setup router guard
setupRouterGuard(router);
export default router;
