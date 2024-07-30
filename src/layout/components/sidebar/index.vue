<!--
 * @Descripttion: 基础布局容器-侧边栏
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-08-02 15:12:08
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-30 10:17:58
-->
<template>
    <el-menu
        :collapse-transition="false"
        :defaultActive="defaultActive"
        :router="true"
        class="app-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
    >
        <el-menu-item index="/workbench">
            <i class="el-icon-menu"></i>
            <span slot="title">工作台</span>
        </el-menu-item>

        <el-submenu index="/dev">
            <template slot="title">
                <i class="el-icon-help"></i>
                <span>开发者中心</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/dev/tools">
                    <span slot="title">常用小工具</span>
                </el-menu-item>
                <el-menu-item index="/dev/vuex">
                    <span slot="title">Vuex状态管理</span>
                </el-menu-item>
                <el-menu-item index="/dev/axios">
                    <span slot="title">axios请求库的使用</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="/err404">
            <i class="el-icon-s-release"></i>
            <span slot="title">404</span>
        </el-menu-item>
        <el-menu-item index="/err403">
            <i class="el-icon-s-release"></i>
            <span slot="title">403</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
import { menu, submenu, menuItem, menuItemGroup } from 'element-ui';
export default {
    name: 'app-sidebar',
    data() {
        return {};
    },
    created() {},
    computed: {
        // 当前激活菜单的index
        defaultActive() {
            return this.$route.path;
        },
        // 侧边栏是否折叠, 从vuex中获取 isCollapse，true表示折叠，false表示不折叠
        isCollapse() {
            return this.$store.state.app.isCollapse;
        }
    },
    mounted() {},
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        'el-menu': menu,
        // eslint-disable-next-line vue/no-unused-components
        'el-submenu': submenu,
        // eslint-disable-next-line vue/no-unused-components
        'el-menu-item': menuItem,
        // eslint-disable-next-line vue/no-unused-components
        'el-menu-item-group': menuItemGroup
    }
};
</script>
<style scoped lang="scss">
.app-menu-vertical {
    border: 0;
}
</style>
