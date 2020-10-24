import NProgress from 'nprogress'
import {Router} from "vue-router";


export default function loading(router: Router) {
    router.beforeEach((to, from, next) => {
        NProgress.start();
        next()
    })

    router.afterEach(() => {
        NProgress.done();
    });
}