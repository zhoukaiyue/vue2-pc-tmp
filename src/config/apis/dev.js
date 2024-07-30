/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2024-07-29 17:32:11
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-30 10:44:30
 */
import { $get } from '@/packages/request';

// 获取脚手架简介
export const getScaffoldInfo = (params, config) => {
    return $get('/mock/14/demo/vue2-pc-tmp-scaffold-info', params, { enableRetryModel: false, ...config });
};
