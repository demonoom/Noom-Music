//使用Promise对象将jsonp代码封装成同步代码形式
//在Promise构造函数内调用jsonp，当然请求成功的时候会调用resolve函数把data的值传出去，
// 请求错误的时候会调用reject函数将err的值传出去。
// buildUrl函数是把json对象的参数拼接到url后面最后变成xxxx?参数名1=参数值1&参数名2=参数值2这种形式

import originJsonp from "jsonp"

/**
 * 利用Promise对象封装成同步代码,具体应该是在resolve和reject
 * @param url
 * @param data
 * @param option
 * @returns {Promise}
 */
let jsonp = (url, data, option) => {
    return new Promise((resolve, reject) => {
        originJsonp(buildUrl(url, data), option, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
};

/**
 * 将地址与需要的参数拼接成一个URL地址
 * @param url
 * @param data
 * @returns {*}
 */
function buildUrl(url, data) {
    let params = [];
    for (var k in data) {
        params.push(`${k}=${data[k]}`);
    }
    // 更人性的拼接

    /*let name = '牛旭东';
    let age = 9;
    let str = `${name}${age}岁了`;
    console.log(str)
    牛旭东9岁了*/

    let param = params.join("&");
    if (url.indexOf("?") === -1) {
        url += "?" + param;
    } else {
        url += "&" + param;
    }
    return url;
}

export default jsonp