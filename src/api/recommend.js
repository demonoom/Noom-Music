//把请求的代码都模块化,对应Recommend页面组件用到的相关请求
import jsonp from './jsonp'
import {URL, PARAM, OPTION} from './config'

export function getCarousel() {
    const data = Object.assign({}, PARAM, {
        g_tk: 701075963,
        uin: 0,
        platform: 'h5',
        needNewCode: 1,
        _: new Date().getTime()
    })
    return jsonp(URL.carousel, data, OPTION);
}

export function getNewAlbum() {
    const data = Object.assign({}, PARAM, {
        g_tk: 1278911659,
        hostUin: 0,
        platform: 'yqq',
        needNewCode: 0,
        data: `{"albumlib":
		{"method":"get_album_by_tags","param":
		{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":50,"click_albumid":0},
		"module":"music.web_album_library"}}`
    });
    const option = {
        param: "callback",
        prefix: "callback"
    };
    return jsonp(URL.newalbum, data, option)
}

//使用Object.assign()函数把对象进行合并，相同的属性值会被覆盖。
// 注意第一个参数使用一个空对象目的是为了不干扰PARAM对象的数据，如果把PARAM作为第一个参数，那么后面使用这个PARAM对象它里面的属性就会拥有上一次合并之后的属性，
//(因为Object.assign使用的是浅拷贝,对目标对象改变会影响到原来的对象)
// 其实有些属性我们是不需要的
