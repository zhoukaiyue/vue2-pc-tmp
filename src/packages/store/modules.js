// import assign from 'lodash/assign';
const modulesFiles = require.context('@/config/store', true, /\.js$/);
export const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath);
    modules = Object.assign(modules, value);
    return modules;
}, {});
