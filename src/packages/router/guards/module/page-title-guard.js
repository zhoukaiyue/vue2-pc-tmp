export function createPageTitleGuard(router) {
    router.afterEach((to) => {
        // 设置网页标题
        document.title = to.meta.title || 'vue2-pc-tmp';
    });
}
