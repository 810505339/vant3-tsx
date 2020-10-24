import {defineComponent} from 'vue'
// import {BannerApi, getHomeApi} from '@/api/home'

export default defineComponent(() => {
    console.log('home')
    // const bannerList: any = []
    // const init = async () => {
    //     const [res, res1] = await Promise.allSettled([BannerApi(), getHomeApi()])
    //     console.log(res, res1)
    //
    // }
    // init()
    // const renderSwiper = () => {
    //     return (
    //         <div>
    //             <div>首页</div>
    //             <van-swipe>
    //                 {bannerList.map((item: any) =>
    //                     <van-swipe-item key={item.pic}>
    //                         <van-image src={item.pic}/>
    //                     </van-swipe-item>)}
    //             </van-swipe>
    //         </div>)
    // }
    //

    // return () => (<div>{renderSwiper()}</div>)
    return () => (<div>home</div>)
})