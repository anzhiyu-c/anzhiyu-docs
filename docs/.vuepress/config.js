/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-04-02 18:22:05
 * @LastEditTime: 2023-04-28 11:39:15
 * @LastEditors: 安知鱼
 */
module.exports = {
  title: "安知鱼主题指南",
  description: "anzhiyu,hexo主题,hexo,anzhiyu主题,安知鱼",
  lang: "zh-CN",
  base: "/docs/",
  themeConfig: {
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
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
};
