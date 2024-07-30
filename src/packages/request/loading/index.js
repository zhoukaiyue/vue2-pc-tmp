/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2024-03-26 14:03:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-29 17:22:05
 */
import './index.scss';
import { Loading } from 'element-ui';
let loadingInstances = new Map();
const loading = {
    /**
     * 显示loading
     * @param {object/string} target Loading 需要覆盖的 DOM 节点。默认是document.body。
     */
    show(target) {
        const targetDom = target || document.body;
        if (!loadingInstances.has(target)) {
            const instance = Loading.service({
                target: targetDom,
                customClass: 'request_el-loading-spinner'
            });
            loadingInstances.set(targetDom, instance);
        }
    },

    /**
     * 移除loading
     * @param {object/string} target Loading 需要覆盖的 DOM 节点。默认是document.body。
     */
    hide(target) {
        const targetDom = target || document.body;
        const instance = loadingInstances.get(targetDom);
        if (instance) {
            instance.close();
            loadingInstances.delete(targetDom);
        }
    }
};

export default loading;
