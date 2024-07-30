<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2024-07-29 17:38:57
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-29 17:56:49
-->
<template>
    <div class="w-80">
        <el-input :value="count" :readOnly="true" class="mb-2" />
        <el-button @click="add" type="primary">增加</el-button>
        <el-button @click="reduce" type="success">减少</el-button>
        <el-button @click="decrease" type="primary">步进(+10)</el-button>
    </div>
</template>

<script>
import { Input, Button } from 'element-ui';
export default {
    props: {},
    data() {
        return {};
    },
    computed: {
        count() {
            return this.$store.state.dev.count;
        }
    },
    created() {},
    mounted() {},
    watch: {},
    methods: {
        add() {
            this.$store.commit('dev/add');
        },
        reduce() {
            //方式一：直接提交commit
            // this.$store.commit('dev/reduce');
            //方式一：提交dispatch
            this.$store.dispatch('dev/reduce');
        },
        decrease() {
            this.$store.commit('dev/decrease', 10);
        }
    },
    components: {
        [Input.name]: Input,
        [Button.name]: Button
    }
};
</script>

<style scoped lang="scss">
.dev-vuex-demo {
    :deep(.frame-view-content) {
        background-color: #fff;
        color: '#333';
        font-size: 32px;
        padding: 40px;
    }
}
</style>
