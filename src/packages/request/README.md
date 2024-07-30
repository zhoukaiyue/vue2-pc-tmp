<!--
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2024-03-26 14:03:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-07-29 17:29:04
-->

## 基于 axios 的简约请求库

这是一个基于 axios 二次封装的请求库，它默认支持以下功能：

-   请求重试：如果请求出错，将重新发送请求
-   取消重复请求：基于 CancelToken 实现
-   Loading：使用 Vant Toast.loading 实现
-   HTTP 错误状态码处理：使用 vant 的 Notify 组件来显示提示信息

## 创建请求

下面是如何创建一个 POST 请求的示例。

### 创建一个 JavaScript 文件，并引入相关 axios 实例方法

```javascript
const { $post } = require('@/packages/request');

/**
 * 普通用法
 * @param {Object} params 请求参数
 * @returns {Promise} 返回一个 Promise
 */
const getListDev = (params) => {
    return $post('/mock/14/demo/getList', params);
};

/**
 * 自定义配置
 * @param {Object} params 请求参数
 * @returns {Promise} 返回一个 Promise
 */
const getListDevCustom = (params) => {
    return $post('/mock/14/demo/getList', params, {
        enableCancelModel: false, // 关闭"取消重复请求模式"
        retryDelay: 4000, // 设置请求重试间隔为4秒
        retryFrequency: 2 // 设置请求重试次数为2次
    });
};
```

## 请求库选项

你可以设置全局自定义配置，这些配置将应用于每个请求。你可以在请求库的配置文件中设置这些选项。

| 参数               | 说明                                                             | 类型    | 默认值 |
| ------------------ | ---------------------------------------------------------------- | ------- | ------ |
| enableCancelModel  | 是否开启取消重复请求模式                                         | boolean | true   |
| enableRetryModel   | 是否开启请求重试模式                                             | boolean | true   |
| enableErrorMessage | 是否开启接口错误信息展示功能                                     | boolean | true   |
| retryConfig        | 全局的请求重试相关配置（仅在 enableRetryModel 为 true 时起作用） | object  | -      |

### retryConfig

| 参数      | 说明     | 类型   | 默认值 |
| --------- | -------- | ------ | ------ |
| frequency | 重试次数 | number | 3      |
| delay     | 延迟时间 | number | 3000   |

### 请求配置

当你创建请求时，可以使用以下配置选项。

| 参数   | 说明                             | 类型   | 默认值 |
| ------ | -------------------------------- | ------ | ------ |
| url    | 用于请求的服务器 URL（必须）     | string | -      |
| params | 作为请求主体被发送的数据（可选） | object | -      |
| config | 指定的配置（可选）               | object | {}     |

### config

以下是一些新增的自定义配置选项，你可以参考 axios 官方文档以了解更多配置选项。

| 参数               | 说明                         | 类型          | 默认值        |
| ------------------ | ---------------------------- | ------------- | ------------- |
| enableCancelModel  | 是否开启取消重复请求模式     | boolean       | -             |
| enableRetryModel   | 是否开启请求重试模式         | boolean       | -             |
| enableErrorMessage | 是否开启接口错误信息展示功能 | boolean       | -             |
| retryFrequency     | 重试次数                     | number        | -             |
| retryDelay         | 延迟时间                     | number        | -             |
| loadingTarget      | 加载动画的目标元素           | object/string | document.body |
