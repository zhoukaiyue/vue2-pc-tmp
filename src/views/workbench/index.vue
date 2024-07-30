<!--
 * @Descripttion: 首页
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-08-02 09:45:32
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-07 10:36:19
-->
<template>
    <div class="workbench">
        <el-image :src="url" fit="contain"></el-image>
        <div class="workbench-info">WELCOME</div>
    </div>
</template>

<script>
import { Image } from 'element-ui';
export default {
    data() {
        return {
            url: require('@/assets/img/workbench/workbench-o.png')
        };
    },
    created() {},
    mounted() {},
    methods: {},
    components: {
        [Image.name]: Image
    }
};
</script>
<style scoped lang="scss">
.workbench {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 140px;
    ::v-deep {
        .el-image {
            width: 448px;
            height: 240px;
        }
    }
    &-info {
        text-align: center;
        width: 100%;
        margin-top: 30px;
        font-size: 40px;
        font-weight: bold;
        color: #535965;
        letter-spacing: 8px;
    }
}
</style>
