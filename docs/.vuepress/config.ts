/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-04-02 18:22:05
 * @LastEditTime: 2023-04-28 19:04:09
 * @LastEditors: 安知鱼
 */
import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  title: "安知鱼主题指南",
  description: "anzhiyu,hexo主题,anzhiyu主题,安知鱼,博客,魔改,简单的hexo主题,简洁的hexo主题,hexo",
  lang: "zh-CN",
  base: "/docs/",
  theme: defaultTheme({
    sidebarDepth: 1,
    logo: "./images/c192.png",
    contributorsText: "贡献者",
    lastUpdatedText: "上次更新",
    navbar: [
      { text: "指南", link: "/" },
      { text: "作者博客", link: "https://anzhiy.cn/" },
    ],
    sidebar: [
      {
        text: "简介",
        link: "/",
      },
      {
        text: "快速上手",
        link: "/quick-start.html",
      },
      {
        text: "页面配置",
        link: "/page-configuration.html",
      },
      {
        text: "站点配置",
        link: "/site-configuration.html",
      },
    ],
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
    copyCodePlugin({
      // your options
    }),
    mdEnhancePlugin({
      align: true,
      attrs: true,
      card: true,
      tabs: true,
      codetabs: true,
      container: true,
    }),
  ],
});
