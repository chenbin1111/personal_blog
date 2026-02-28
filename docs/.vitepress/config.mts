import { defineConfig } from 'vitepress'
import { basename } from 'node:path'
import { head, nav, sidebar } from './configs'
const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',
  head: head,
  lang: "zh-CN",
  title: "彬语的博客",
  description: "记录个人的成长之路",

  lastUpdated: true, // 显示文章最后更新时间
  cleanUrls: true, // 生成干净的 URL（无 .html 后缀）

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: false,
    logo: '/wutiaowu.jpg',
    nav: nav,
    sidebar: sidebar,
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenbin1111/personal_blog' }
    ],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present maomao',
    },

  }
})

