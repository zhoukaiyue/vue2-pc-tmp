import Vue from 'vue';

// 一个操作 剪贴板 的 Vue 指令
import VueClipboard from './copy';

function install(vue) {
    const directives = [VueClipboard];
    directives.forEach((item) => {
        vue.use(item);
    });
}

Vue.use(install);
