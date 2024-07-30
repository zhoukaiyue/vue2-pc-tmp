<template>
    <div>
        <div ref="jubu">
            <p>区域loading效果</p>
            <el-button type="success" @click="triggerLocalLoading" class="mt-1">运行</el-button>
            <pre v-if="localData" class="bg-white p-1 mt-1">{{ localData }} </pre>
        </div>
        <div class="mt-10">
            <p>整页loading效果</p>
            <el-button type="success" @click="triggerGlobalLoading" class="mt-1">运行</el-button>
            <pre v-if="globalData" class="bg-white p-1 mt-1">{{ globalData }}</pre>
        </div>
    </div>
</template>

<script>
import { Button } from 'element-ui';
import { getScaffoldInfo } from '@/config/apis/dev';

export default {
    data() {
        return {
            globalData: null,
            localData: null
        };
    },
    methods: {
        async triggerGlobalLoading() {
            try {
                // 这里调用你的全局加载的axios请求
                const response = await getScaffoldInfo();
                this.globalData = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async triggerLocalLoading() {
            try {
                // 这里调用你的局部加载的axios请求
                const response = await getScaffoldInfo(null, {
                    loadingTarget: this.$refs.jubu
                });
                this.localData = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    },
    components: {
        'el-button': Button
    }
};
</script>
