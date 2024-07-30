<!--
 * @Descripttion: 基础布局容器-顶栏
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-08-02 15:10:02
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-07 14:12:00
-->
<template>
    <div class="app-header">
        <div class="app-header-l">
            <!-- 点击logo图标则会重新加载应用 -->
            <img :src="logo" alt="" class="logo" @click="reloadApp" />
            <img :src="ipo" alt="" class="ipo" />
            <span class="app-name">IP管理系统</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-header',
    data() {
        return {
            logo: require('@/assets/img/base/logo.png'),
            ipo: require('@/assets/img/base/ip-o.png')
        };
    },
    created() {},
    mounted() {},
    methods: {
        // 重新加载应用
        reloadApp() {
            const IndexUrl = this.$router.resolve({ path: '/' }).href;
            window.location.href = IndexUrl;
        }
    }
};
</script>
<style scoped lang="scss">
.app-header {
    padding: 0 25px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-l {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
            height: 35px;
            cursor: pointer;
        }
        .ipo {
            height: 34px;
            margin-left: 49px;
        }
        .app-name {
            font-size: 16px;
            margin-left: 16px;
            color: #666;
        }
    }
}
</style>
