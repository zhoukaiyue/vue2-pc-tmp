// eslint-disable-next-line no-unused-vars
import dayjs, { Dayjs } from 'dayjs';

/**
 * 一个使用 Day.js 格式化指定日期的函数。如果没有提供日期，该函数将使用当前日期和时间。
 * @param {Object} param 格式 {date:new Date(),format:'YYYY-MM-DD HH:mm:ss'}
 * @param {string | Date | Dayjs} [param.date] 非必传，默认当前系统时间
 * @param {string} [param.format] 非必传，默认'YYYY-MM-DD HH:mm:ss'
 * @returns
 */
export const formatDate = ({ date = new Date(), format = 'YYYY-MM-DD HH:mm:ss' }) => {
    return dayjs(date).format(format);
};
