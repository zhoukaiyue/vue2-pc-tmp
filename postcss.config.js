/*
 * @Descripttion: postcss配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2024-07-29 14:41:50
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-29 14:50:57
 */
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {
            overrideBrowserslist: ['last 2 versions', '>1%']
        },
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
};
