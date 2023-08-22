/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2023-08-22 11:34:10
 * @LastEditTime: 2023-08-22 22:52:19
 * @LastEditors: 安知鱼
 */
import { defineConfig } from "vitepress";

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "dev";

const ogDescription = "一个简洁、美丽的hexo主题";
const ogImage = "https://docs.anheyu.com/cover.jpg";
const ogTitle = "安知鱼主题";
const ogUrl = "https://docs.anheyu.com";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "安知鱼主题官方文档",
  description: "一个简洁、美丽的hexo主题",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@anzhiyu" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "CBDFBSLI",
        "data-spa": "auto",
        defer: "",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "作者博客", link: "https://blog.anheyu.com/" }],

    sidebar: [
      {
        text: "主题简介",
        link: "/intro",
      },
      {
        text: "快速上手",
        items: [
          { text: "安装主题💻", link: "/initall" },
          {
            text: "页面配置",
            collapsed: false,
            items: [
              { text: "front-matter的基本认识", link: "/page/1.front-matter" },
              { text: "标签页配置", link: "/page/2.tags" },
              { text: "分类页配置", link: "/page/3.classify" },
              { text: "首页即刻说说页面配置", link: "/page/4.essay" },
              { text: "友情链接配置", link: "/page/5.links" },
              { text: "关于页面配置", link: "/page/6.about" },
              { text: "相册页面配置", link: "/page/7.album" },
              { text: "朋友圈页面配置", link: "/page/8.fcircle" },
              { text: "音乐馆页配置", link: "/page/9.music" },
              { text: "404页面配置", link: "/page/10.404" },
              { text: "追番页面配置", link: "/page/11.bilibili" },
              { text: "留言板页面配置", link: "/page/12.message" },
              { text: "我的装备页面配置", link: "/page/13.equipment" },
            ],
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/anzhiyu-c/hexo-theme-anzhiyu" }],

    algolia: {
      appId: "OR6M1E9LZP",
      apiKey: "e89af783077a17d8ec1e0325aa65b0be",
      indexName: "anzhiyu",
      // searchParameters: {
      //   facetFilters: ['tags:en'],
      // },
      locales: {
        zh: {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },

    footer: {
      message: `Released under the MIT License. (${commitRef})`,
      copyright: "Copyright © 2023 AnZhiYu",
    },

    editLink: {
      pattern: "https://github.com/anzhiyu-c/anzhiyu-docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
  },
  markdown: {
    lineNumbers: true
  },
  locales: {
    root: { label: "简体中文" },
  },
});
