/*
 * @Descripttion: babel配置文件
 * @version:
 * @Author: zhoukai
 * @Date: 2023-08-01 21:52:30
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-08-02 09:37:01
 */
module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            }
        ]
    ]
};
