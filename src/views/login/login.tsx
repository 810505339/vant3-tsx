import {defineComponent} from 'vue'
import Login from '@/views/login/login.module.scss'


export default defineComponent(() => {

    return () => (<>
        <div class={Login.logoWrapper}>
            <van-image src={require('@/assets/logo.png')}/>
        </div>
    </>)
})

