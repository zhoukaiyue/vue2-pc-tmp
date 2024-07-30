<!--
 * @Descripttion: 常用工具
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-08-02 18:45:23
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-30 09:57:47
-->
<template>
    <div>
        <el-divider content-position="left">Copy</el-divider>
        <copy></copy>
        <el-divider content-position="left">Day.js</el-divider>
        <el-row>
            <el-col :span="12">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>日期格式化</span>
                    </div>
                    <div>
                        <p>格式化前：{{ new Date() }}</p>
                        <p>格式化后：{{ formatDate(new Date()) }}</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// @ts-check
import { Divider, Row, Col, Card } from 'element-ui';
import copy from './copy/index.vue';
import { formatDate } from '@/utils/tools';
export default {
    data() {
        return {};
    },
    methods: {
        /**
         * 格式化日期
         * @param {Date} date
         * @returns {string}
         */
        formatDate(date) {
            return formatDate({ date });
        }
    },
    components: {
        copy,
        [Row.name]: Row,
        [Col.name]: Col,
        [Card.name]: Card,
        [Divider.name]: Divider
    }
};
</script>
<style scoped lang="scss"></style>
