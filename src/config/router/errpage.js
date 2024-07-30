/*
 * @Descripttion: 错误页路由配置
 * @version:
 * @Author: zhoukai
 * @Date: 2023-06-01 09:25:35
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-02 21:20:37
 */
const routes = [
    {
        path: '/err404',
        component: () => import(/* webpackChunkName: "errpage/err404" */ '@/views/errpage/err404.vue'),
        meta: {
            title: '404 资源不存在'
        }
    },
    {
        path: '/err403',
        component: () => import(/* webpackChunkName: "errpage/err403" */ '@/views/errpage/err403.vue'),
        meta: {
            title: '403 禁止访问'
        }
    }
];
export default routes;
