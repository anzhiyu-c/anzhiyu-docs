---
title: 朋友圈页面配置
---
# 页面配置📦
## 朋友圈页面配置

在 Hexo 博客根目录 `[blog]`下打开终端，输入

```bash
hexo new page fcircle
```

打开`[blog]\source\fcircle\index.md`,添加一行`type: 'fcircle'`:

```MARKDOWN
---
title: 朋友圈
date: 2022-11-21 17:06:17
comments: false
aside: false
top_img: false
type: "fcircle"
---
```

主题配置文件中开启`menu`中友链和朋友圈的注释，导航栏朋友圈，注意缩进！！！

```yml
menu:
  # 文章:
  #   隧道: /archives/ || icon-box-archive
  #   分类: /categories/ || icon-shapes
  #   标签: /tags/ || icon-tags

  友链:
    #   友人帐: /link/ || icon-link
    朋友圈: /fcircle/ || icon-artstation
    #   留言板: /comments/ || icon-envelope

  # 我的:
  #   音乐馆: /music/ || icon-music
  #   追番页: /bangumis/ || icon-bilibili1
  #   相册集: /album/ || icon-images
  #   小空调: /air-conditioner/ || icon-fan

  关于:
    #   关于本人: /about/ || icon-zhifeiji
    闲言碎语: /essay/ || icon-lightbulb
    #   随便逛逛: javascript:toRandomPost() || icon-shoe-prints1
```

主题配置文件中开启`friends_vue.enable`，自行设置 twikoo 地址和顶部模块背景，注意缩进！！！

```yml
# 朋友圈配置
friends_vue:
  enable: false
  vue_js: https://npm.elemecdn.com/anzhiyu-theme-static@1.0.8/friends/index.804b9513.js
  apiurl: # 朋友圈后端地址
  top_background:
```

| 参数           | 备选值/类型 | 解释                           |
| -------------- | ----------- | ------------------------------ |
| enable         | boolean     | 【必须】是否启用               |
| vue_js         | url         | 【必须】朋友圈前端构建后的 url |
| apiurl         | string      | 【必须】朋友圈后端 url         |
| top_background | url         | 【可选】朋友圈顶部背景图       |

以下是本站配置

```yml
friends_vue:
  enable: true
  vue_js: https://npm.elemecdn.com/anzhiyu-theme-static@1.0.8/friends/index.804b9513.js
  apiurl: https://friends.anheyu.com/ # 朋友圈后端地址
  top_background: https://img02.anheyu.com/adminuploads/1/2022/08/21/630249e2df20f.jpg
```

其中`vue_js`参数，可以将`https://npm.elemecdn.com/anzhiyu-blog-static@1.0.0/js/friends_vue/index.js`下载下来后将其中的
`friends.anheyu.com`替换为您的后端 url 然后上传至您的存储端以url的形式使用。

原项目地址：[hexo-circle-of-friends-front](https://github.com/anzhiyu-c/hexo-circle-of-friends-front/tree/anzhiyu)

第二种办法也可以自行下载项目后，修改代码中的 url 变量路径`friends.anheyu.com`为你自己的，然后执行`npm run build`构建后将dist文件夹中的js上传至您的存储端使用

::: tip
注意朋友圈后端爬取需使用`common2`，否则无法爬取到您的友链数据。
:::

主题配置文件中开启`menu`中友链和朋友圈的注释，注意缩进！！！

```yml
menu:
  # 文章:
  #   隧道: /archives/ || icon-box-archive
  #   分类: /categories/ || icon-shapes
  #   标签: /tags/ || icon-tags

  友链:
    #  友人帐: /link/ || icon-link
    朋友圈: /fcircle/ || icon-artstation
  #  留言板: /comments/ || icon-envelope

  我的:
    音乐馆: /music/ || icon-music
  #   追番页: /bangumis/ || icon-bilibili1
  #   相册集: /album/ || icon-images
  #   小空调: /air-conditioner/ || icon-fan

  关于:
    #   关于本人: /about/ || icon-zhifeiji
    闲言碎语: /essay/ || icon-lightbulb
    #   随便逛逛: javascript:toRandomPost() || icon-shoe-prints1
```

![朋友圈页](https://img02.anheyu.com/adminuploads/1/2023/04/09/64326468190c2.png!blogimg)