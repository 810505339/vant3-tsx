import {createApp} from 'vue'
import App from './App'
import router from './router'
import store from './store'
import loading from '@/utils/NProgressLoading'
import registered from '@/utils/registered'
import 'nprogress/nprogress.css'
import 'vant/lib/index.css';
import '@/utils/css/app.scss';

const app = createApp(App)
app.use(store).use(router)
registered(app)

router.isReady().then(() => {
    app.mount('#app')
})
loading(router)

