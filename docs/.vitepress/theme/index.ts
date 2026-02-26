import { h, watch } from 'vue'
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'

import './styles/index.scss'
import MNavLinks from './components/MNavLinks.vue'

let homePageStyle: HTMLStyleElement | undefined

export default Object.assign({}, Theme, {
    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const { frontmatter } = useData()

        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }

        return h(Theme.Layout, props)
    },

    enhanceApp({ app, router }) {

        app.component('MNavLinks', MNavLinks)

        // 彩虹背景动画样式
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomePageStyle(location.pathname === '/' || location.pathname === '/personal_blog/'),
                { immediate: true },
            )
        }
    },
})
// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return

        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
    :root {
        animation: rainbow 12s linear infinite;
    }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return

        homePageStyle.remove()
        homePageStyle = undefined
    }
}

