import {defineComponent, ref} from 'vue';
import app from '@/utils/css/app.module.scss';
import Profile from "@/views/profile/profile";
import Home from "@/views/home/home";
import Video from "@/views/video/video";
import Community from "@/views/community/community";

export default defineComponent(() => {
    // const tabList = [{title: '我的', component: ''}, {title: '发现', component: <Home/>}, {title: '云村', component: ''}, {
    //     title: '视频',
    //     component: ''
    // }]

    const tabList = [{title: '我的', url: 'profile', component: <Profile/>}, {
        title: '发现',
        url: 'home',
        component: <Home/>
    }, {
        title: '云村',
        component: <Community/>
    }, {
        title: '视频',
        component: <Video/>
    }]
    const active = ref(0)
    // const routerView = (routerName: string) => {
    //     return (<RouterView name={routerName} v-slots={{
    //         default: ({Component}: { Component: VNode }) => <KeepAlive><Transition name="fade"
    //                                                                                mode="out-in">{Component}
    //         </Transition></KeepAlive>
    //     }}/>)
    // }
    const renderNavLeft = () => {
        return (<div class={[app.navWrapper, app.navRight]}>
            <van-icon name={require('@/assets/icon/menu.svg')}/>
        </div>)
    }
    const renderNavRight = () => {
        return (<div class={[app.navLeft, app.navWrapper]}>
            <van-icon name="search"/>
        </div>)
    }


    return () => (<>
        <van-tabs v-slots={{
            'nav-left': () => renderNavLeft(),
            'nav-right': () => renderNavRight()
        }} data-role='tabs' class='app-tabs'  line-height={0}
                  v-model={[active.value, 'active']}

        >
            {tabList.map((item, index) => <van-tab title={item.title}
                                                   key={'tab' + index} replace>
                {item.component}
            </van-tab>)}
        </van-tabs>
    </>)
})