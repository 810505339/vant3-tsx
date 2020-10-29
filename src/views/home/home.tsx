import {defineComponent, ref} from 'vue'
// import {BannerApi, getHomeApi} from '@/api/home'

export default defineComponent(() => {

    const bannerList = ref([] as string[])
    // const init = async () => {
    //     const [res, res1] = await Promise.allSettled([BannerApi(), getHomeApi()])
    //     console.log(res, res1)
    //
    // }

    const init = () => {
        bannerList.value = ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/cat.jpeg', 'https://img.yzcdn.cn/vant/cat.jpeg']
    }

    init()

    const renderSwiper = () => {
        return (
            <div>
                <div>首页</div>
                <van-swipe class="my-swipe" width={300}>
                    <van-swipe-item>
                        1
                    </van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                </van-swipe>
            </div>)
    }
    return () => (<div>{renderSwiper()}</div>)

})