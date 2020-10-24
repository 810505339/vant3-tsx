import server from './request'


const HomeApi = {
    banner: '/banner',
    home: '/homepage/block/page',

}

//获取首页banner
export function BannerApi(params = {type: 1}) {
    return server.request({
        url: HomeApi['banner'],
        method: 'get',
        params
    })
}

//获取首页内容
export function getHomeApi() {
    return server.request({
        url: HomeApi['home'],
        method: 'get',
    })
}

