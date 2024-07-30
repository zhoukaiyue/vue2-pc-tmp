/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2023-08-02 16:34:56
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-30 10:17:24
 */
const Layout = () => import('@/layout/index.vue');
const routes = [
    {
        name: 'dev',
        path: '/dev',
        component: Layout,
        redirect: '/dev/tools',
        meta: {
            title: '开发者中心'
        },
        children: [
            {
                name: 'tools',
                path: 'tools',
                component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/tools/index.vue'),
                meta: {
                    title: '特色工具',
                    order: 1
                }
            },
            {
                name: 'vuex',
                path: 'vuex',
                component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/vuex/index.vue'),
                meta: {
                    title: 'Vuex状态管理',
                    order: 2
                }
            },
            {
                name: 'axios',
                path: 'axios',
                component: () => import(/* webpackChunkName: "dev" */ '@/views/dev/axios/index.vue'),
                meta: {
                    title: 'axios请求库的使用',
                    order: 2
                }
            }
        ]
    }
];
export default routes;
