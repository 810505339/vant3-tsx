import {defineComponent, onMounted, ref, nextTick} from 'vue'
import BScroll from '@better-scroll/core'
import Pulldown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'
import scrollCss from '@/components/scroll/scroll.module.scss'

BScroll.use(Pulldown)
BScroll.use(Pullup)

interface BScrollConfigInterface {
    scrollX?: boolean; // 当设置为 true 的时候，可以开启横向滚动
    scrollY?: boolean;//当设置为 true 的时候，可以开启纵向滚动。
    probeType?: number;//1|2|3
    click?: boolean;//当设置为 true，BetterScroll 会派发一个 click 事件
    pullUpLoad?: boolean | object;
    pullDownRefresh?: boolean | object;
    specifiedIndexAsContent?: number;
}


interface BScrollInterface {
    config?: BScrollConfigInterface;
    onPullingUp?: () => void;  //当底部下拉距离超过阈值
    onPullingDown?: () => void; //当顶部下拉距离超过阈值
}

const scroll = defineComponent((props: BScrollInterface, {slots}) => {

    const myRef = ref<HTMLElement>();
    const text = ref('松开手指')
    const init = () => {
        const bs: BScroll = new BScroll(myRef.value as HTMLElement, {...props.config})

        if (props.config?.pullUpLoad) {
            bs.on('pullingUp', async () => {

                await props.onPullingUp?.()

                bs.finishPullUp()
                bs.refresh()
            })
        }


        if (props.config?.pullDownRefresh) {
            bs.on('pullingDown', async () => {
                text.value = '加载中'
                await props.onPullingDown?.()
                text.value = '加载完成'
                setTimeout(() => {
                    bs.finishPullDown()
                    bs.refresh()
                    text.value = '松开手指'
                }, 200)

            })


        }

    }
    const renderLoading = () => {
        return (<>
            <div class={scrollCss.pulldownWrapper}>{text.value}</div>
        </>)

    }

    // const renderFinish = () => {
    //     return (<>
    //         <div class={scrollCss.pulldownWrapper}>加载完成</div>
    //     </>)
    // }
    onMounted(() => {
        nextTick(() => {
            init()
        })
    })


    return () => (<div class={[scrollCss.pullDown, scrollCss.view]}>
        <div class={scrollCss.scrollWrapper} ref={myRef}>
            <div class={scrollCss.scrollContent}>
                {renderLoading()}
                {slots.default?.()}
            </div>
        </div>
    </div>)


})

scroll.props = {
    config: Object,
    onPullingUp: Function,
    onPullingDown: Function
}
export default scroll