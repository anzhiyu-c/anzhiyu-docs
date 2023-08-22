/*
 * @Description: 
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2023-08-22 11:34:10
 * @LastEditTime: 2023-08-22 12:33:38
 * @LastEditors: 安知鱼
 */
import { defineConfig } from 'vitepress'

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

const ogDescription = '一个简洁、美丽的hexo主题'
const ogImage = 'https://docs.anheyu.com/cover.jpg'
const ogTitle = '安知鱼主题'
const ogUrl = 'https://docs.anheyu.com'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "安知鱼主题官方文档",
  description: "一个简洁、美丽的hexo主题",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@anzhiyu' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'CBDFBSLI',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '作者博客', link: 'https://blog.anheyu.com/' }
    ],

    sidebar: [
      {
        text: '简介',
        link: '/intro'
      },
      {
        text: '快速上手',
        items: [
          { text: '安装💻', link: '/markdown-examples' },
          { text: '页面配置📦', link: '/api-examples' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/anzhiyu-c/hexo-theme-anzhiyu' }
    ],

    algolia: {
      appId: 'OR6M1E9LZP',
      apiKey: 'e89af783077a17d8ec1e0325aa65b0be',
      indexName: 'anzhiyu',
      // searchParameters: {
      //   facetFilters: ['tags:en'],
      // },
    },

    footer: {
      message: `Released under the MIT License. (${commitRef})`,
      copyright: 'Copyright © 2023 AnZhiYu',
    },
  },
  locales: {
    root: { label: '简体中文' }
  },
})

