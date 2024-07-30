<!--
 * @Descripttion:  collapse btn 用于折叠侧边栏
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-08-02 16:59:15
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-29 14:58:25
-->
<template>
    <div @click="handleSideBarCollApse">
        <img :src="isCollapse ? caretRight : caretLeft" alt="" width="12" height="64" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            caretLeft: require('@/assets/img/base/caret-left.png'),
            caretRight: require('@/assets/img/base/caret-right.png')
        };
    },
    created() {},
    mounted() {},
    computed: {
        // 侧边栏是否折叠, 从vuex中获取 isCollapse，true表示折叠，false表示不折叠
        isCollapse() {
            return this.$store.state.app.isCollapse;
        }
    },
    methods: {
        handleSideBarCollApse() {
            this.$store.commit('app/SET_ISCOLLAPSE');
        }
    }
};
</script>
