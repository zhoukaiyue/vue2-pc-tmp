import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
NProgress.configure({ showSpinner: false }); // NProgress Configuration
export function createPageLoadingGuard(router) {
    router.beforeEach((to, from, next) => {
        // 显示router切换loading
        NProgress.start();
        next();
    });
    router.afterEach(() => {
        // 隐藏router切换loading
        NProgress.done();
    });
}
