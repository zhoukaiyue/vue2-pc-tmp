/*
 * @Descripttion: 全局状态
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-12 09:51:01
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-02 18:28:33
 */

/**
 * app 就是你的 模块名
 */
export const app = {
    /**
     * 声明分模块的store时加上namespaced:true,使用模块中的mutations、getters、actions时候，要加上模块名(这里的模块名就是 app)
     * 提交mutations：格式：store.commit(app/模块中的mutations)
     * 提交dispatch：格式：store.dispatch(app/模块中的dispatch)
     * 获取状态属性：格式：store.state.app.模块属性
     */
    namespaced: true,
    /**
     * 状态树（注意必须是一个函数）
     */
    state: () => ({
        isCollapse: false //侧边栏的折叠状态，可选择值：true表示折叠，false表示不折叠
    }),
    /**
     * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
     */
    mutations: {
        // 设置侧边栏的折叠状态
        SET_ISCOLLAPSE(state) {
            state.isCollapse = !state.isCollapse;
        }
    },
    /**
     * Action 类似于 mutation，不同在于：
     * - Action 提交的是 mutation，而不是直接变更状态。
     * - Action 可以包含任意异步操作。
     */
    actions: {},
    getters: {}
};
