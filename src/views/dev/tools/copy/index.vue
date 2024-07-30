<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-08-02 18:49:01
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-07 10:45:08
-->
<template>
    <div class="dev-tools--copy">
        <div w-200 mr-20 class="input-container">
            <el-input type="text" v-model="message"></el-input>
        </div>

        <el-button type="primary" v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError">
            指令式调用
        </el-button>

        <el-button type="primary" @click="doCopy">函数式调用</el-button>
    </div>
</template>

<script>
import { Button, Input } from 'element-ui';

export default {
    data() {
        return {
            message: '你好！'
        };
    },
    created() {},
    mounted() {},
    methods: {
        onCopy: function (e) {
            alert('You just copied: ' + e.text);
        },
        onError: function (e) {
            alert('Failed to copy texts：' + e.text);
        },
        doCopy: function () {
            this.$copyText(this.message).then(
                function (e) {
                    alert('Copied：' + e.text);
                },
                function (e) {
                    alert('Can not copy：' + e.text);
                }
            );
        }
    },
    components: {
        [Button.name]: Button,
        [Input.name]: Input
    }
};
</script>
<style scoped lang="scss">
.dev-tools--copy {
    display: flex;
    .input-container {
        width: 200px;
        margin-right: 20px;
    }
    ::v-deep {
        .el-button {
            margin-right: 20px;
        }
    }
}
</style>
