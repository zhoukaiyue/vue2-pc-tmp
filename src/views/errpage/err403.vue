<!--
 * @Descripttion: 403页面
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-08-02 09:46:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-02 21:18:05
-->
<template>
    <div class="err403">
        <el-empty :image="imgUrl" :image-size="400">
            <template #description>
                <span class="description">403 禁止访问</span>
            </template>
        </el-empty>
    </div>
</template>

<script>
import { Empty } from 'element-ui';
export default {
    data() {
        return {
            imgUrl: require('@/assets/img/base/403.png')
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
.err403 {
    padding-top: 100px;
    .description {
        font-size: 32px;
    }
}
</style>
