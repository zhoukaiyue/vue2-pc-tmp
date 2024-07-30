<!--
 * @Descripttion: 404页面
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-08-02 09:46:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-07 10:40:32
-->
<template>
    <div class="err404">
        <el-empty :image="imgUrl" :image-size="400">
            <template #description>
                <span class="description">404 资源不存在</span>
            </template>
        </el-empty>
    </div>
</template>

<script>
import { Empty } from 'element-ui';
export default {
    data() {
        return {
            imgUrl: require('@/assets/img/base/404.png')
        };
    },
    created() {},
    mounted() {},
    methods: {},
    components: {
        'el-empty': Empty
    }
};
</script>
<style scoped lang="scss">
.err404 {
    padding-top: 100px;
    .description {
        font-size: 32px;
    }
}
</style>
