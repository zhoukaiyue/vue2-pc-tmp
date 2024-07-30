/*
 * @Descripttion:index router配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-02 15:04:38
 */
const Layout = () => import('@/layout/index.vue');
const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: Layout,
        redirect: '/workbench',
        children: [
            {
                name: 'Workbench',
                path: 'workbench',
                component: () => import(/* webpackChunkName: "workbench" */ '@/views/workbench/index.vue'),
                meta: {
                    title: '工作台',
                    order: 0
                }
            }
        ]
    }
];
export default routes;
