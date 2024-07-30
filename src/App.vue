<!--
 * @Descripttion: 顶级router-view
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-08-01 18:52:30
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-29 17:46:10
-->
<template>
    <div id="app">
        <keep-alive>
            <!-- 缓存的视图 -->
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <!-- 不缓存的视图 -->
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {};
    },
    created() {},
    methods: {}
};
</script>
<style lang="scss" scoped>
#app {
    background-color: #f4f5f6;
    height: 100%;
    overflow-y: auto;
}
</style>
