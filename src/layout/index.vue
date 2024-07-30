<!--
 * @Descripttion: 基础布局容器
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-08-02 14:50:59
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-29 14:53:28
-->
<template>
    <!-- 外层容器。当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。 -->
    <el-container class="app--container">
        <!-- 顶栏容器。 -->
        <el-header>
            <app-header></app-header>
        </el-header>
        <el-container>
            <!-- 侧边栏容器。 -->
            <el-aside :class="isCollapse ? '' : 'collapse-aside'">
                <!-- 侧边栏内容  -->
                <div class="sidebar-cpntainer bg-white">
                    <app-sidebar></app-sidebar>
                </div>
                <!-- collapse btn 用于折叠侧边栏 -->
                <app-sidebar-coll-switch class="app-sidebar-coll-switch"></app-sidebar-coll-switch>
            </el-aside>

            <!-- 主要区域容器。 -->
            <el-main>
                <app-main></app-main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import { Container, Header, Aside, Main } from 'element-ui';
import appHeader from './components/header/index.vue';
import appSidebar from './components/sidebar/index.vue';
import appMain from './components/main/index.vue';
import appSidebarCollSwitch from './components/sidebar-coll-switch/index.vue';
export default {
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {},
    computed: {
        // 侧边栏是否折叠, 从vuex中获取 isCollapse，true表示折叠，false表示不折叠
        isCollapse() {
            return this.$store.state.app.isCollapse;
        }
    },
    components: {
        [Container.name]: Container,
        [Header.name]: Header,
        [Aside.name]: Aside,
        [Main.name]: Main,
        [appHeader.name]: appHeader,
        [appSidebar.name]: appSidebar,
        [appMain.name]: appMain,
        appSidebarCollSwitch
    }
};
</script>
<style scoped lang="scss">
.app--container {
    width: 100%;
    height: 100%;
    ::v-deep .el-header {
        padding: 0;
    }

    ::v-deep .el-container {
        overflow-y: auto;
        .el-aside {
            width: auto !important;
            overflow: visible !important;
            position: relative;
            &.collapse-aside {
                width: 220px !important;
            }
            .sidebar-cpntainer {
                width: 100%;
                height: 100%;
                overflow-x: auto;
            }
            .app-sidebar-coll-switch {
                cursor: pointer;
                position: absolute;
                right: -12px;
                z-index: 99;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        .el-main {
            position: relative;
            z-index: 1;
            background-color: #f0f2f5;
        }
    }
}
</style>
