/*
 * @Descripttion:全局路由守卫
 * @version:
 * @Author: zhoukai
 * @Date: 2023-08-02 10:00:59
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-02 10:12:16
 */
import { createPageTitleGuard } from './module/page-title-guard';
import { createPageLoadingGuard } from './module/page-loading-guard';

export function setupRouterGuard(router) {
    createPageTitleGuard(router);
    createPageLoadingGuard(router);
}
