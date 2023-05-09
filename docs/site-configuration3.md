---
lang: zh-CN
title: 站点基础配置(三)
description: 安知鱼主题站点基础配置
---

::: warning 警告
本教程更新于 2023 年 5 月 09 日，教程的内容针对最新的 anzhiyu 主题(如果你是旧版本，教程会有出入，请留意)
🐟 安知鱼 已经更新到 [1.1.10](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases/tag/1.1.9)
:::

## ai 摘要

需主题版本大于 `1.1.6 版本`

修改主题配置文件，其中`key`和`Referer` 为 `tianli gpt` 的`key`和`Referer`，可在 [爱发电](https://afdian.net/item/886a79d4db6711eda42a52540025c377) 购买 key，购买完成后添加机器人 QQ：`2102916311`

机器人中回复：/chat 你的 key 你的博客地址注意保留最后的斜杠(即为 Referer)

例如：/chat tN2jLmG7fX9zHk5dVbQr https://anzhiy.cn/

格式发送，返回的 token 即你的剩余字数

```yaml
# 文章顶部ai摘要
post_head_ai_description:
  enable: true
  gptName: AnZhiYu
  mode: local # 默认模式 可选值: tianli/local
  switchBtn: false # 可以配置是否显示切换按钮 以切换tianli/local
  btnLink: https://afdian.net/item/886a79d4db6711eda42a52540025c377
  randomNum: 3 # 按钮最大的随机次数，也就是一篇文章最大随机出来几种
  basicWordCount: 1000 # 最低获取字符数, 最小1000, 最大1999
  key: xxxx
  Referer: https://xx.xx/
```

配置完成以后在文章的`Front-matter`配置`ai: true`, 使用 `tianli gpt` 需将 mode 改为`tianli` 然后在需要 ai 摘要的文章的`Front-matter`配置`ai: true`

如果使用`local`,需要按照以下方式配置

```md
---
title: AnZhiYu主题快速开始
ai:
  - 本教程介绍了如何在博客中安装基于Hexo主题的安知鱼主题，并提供了安装、应用主题、修改配置文件、本地启动等详细步骤及技术支持方式。教程的内容针对最新的主题版本进行更新，如果你是旧版本教程会有出入。
  - 本文真不错
---
```

| mode   | 对比                                                             |
| ------ | ---------------------------------------------------------------- |
| tianli | 具有完备的训练后端功能，可优秀的完成文章的摘要                   |
| local  | 本地，需自行在文章顶部添加 ai 摘要，内容自行决定，书写较为麻烦。 |

## 评论配置

主题配置中修改，添加`envId`即可。

```yml
# Twikoo
# https://github.com/imaegoo/twikoo
twikoo:
  envId:
  region:
  visitor: false
  option:
```

## 控制台信息

关于控制台信息，主题不提供修改配置，但是可以在主题配置文件中进行关闭。

```yml
# 控制台打印信息
console:
  enable: true
```

控制台打印相关信息可以配置页脚内容来修改。

```yml
footer:
  owner:
    enable: true
    since: 2020
  custom_text:
  copyright: false # Copyright of theme and framework
  runtime:
    enable: true
    launch_time: 04/01/2021 00:00:00 # 网站上线时间
    work_img: https://npm.elemecdn.com/anzhiyu-blog@2.0.4/img/badge/安知鱼-上班摸鱼中.svg
    work_description: 距离月入25k也就还差一个大佬带我~
    offduty_img: https://npm.elemecdn.com/anzhiyu-blog@2.0.4/img/badge/安知鱼-下班啦.svg
    offduty_description: 下班了就该开开心心的玩耍，嘿嘿~
```

如果实在有强迫症也可以自行修改内容`themes/anzhiyu/layout/includes/anzhiyu/log-js.pug`。

## 如何配置首页顶部右侧不使用轮播图

![效果预览](https://img02.anzhiy.cn/adminuploads/1/2023/03/27/642172c889a45.png)

将主题配置文件中`home_top.swiper.enable` 修改为 `false` 即可.

## 设置 标签卖萌

主题配置文件中

```yml
# 标签卖萌
diytitle:
  enable: true
  leaveTitle: w(ﾟДﾟ)w 不要走！再看看嘛！
  backTitle: ♪(^∇^*)欢迎肥来！
```

## 如何配置页脚

在主题配置文件中`footer`配置，其中`runtime`可以配置网站运行时间，工作时间上午 9 点到下午 6 点到图片，描述，下班时间的图片，描述。

## 配置关于页与文章页底部打赏二维码

在主题配置文件中

```yml
# Sponsor/reward
reward:
  enable: true
  coinAudio: https://npm.elemecdn.com/akilar-candyassets@1.0.36/audio/aowu.m4a
  QR_code:
    - img: https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-weichat.png
      link:
      text: wechat
    - img: https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-alipay.png
      link:
      text: alipay
```

## 主题如何获取文章主色调

> 两种方法，因为我觉得 js 获取到的图片主色调不准确且消耗资源，所以可以使用以下两种方式。

1. 使用腾讯云的数据万象能力，前提是图片存储在腾讯云的 cos 上。

2. 使用多吉云的云存储+免费 cdn，云存储必须是付费版本的，1000 张图片 1G 以内大概在 1 块钱 1 年。cdn 免费每月 20G

## 双栏

如果你需要像我一样首页双栏，修改主题配置文件`_config.anzhiyu.yml`（主题版本需要 1.1.1 以及以上）

```yml
# 双栏文章
article_double_row: true
```

## 首页顶部 3 大分类配置

首页技能点轮播下的分类，可通过配置主题配置文件`home_top`

```bash
hexo new page categories
```

```markdown
---
title: Hello World
categories: 前端开发
---
```

只需要在创建分类以后在对应的文章中添加上对应的分类，配置 path 即可，注意一定要对应。

## 左下角歌单

歌单配置很简单，只需要修改主题配置文件中`nav_music`即可.

```yml
# 左下角音乐配置项
nav_music:
  enable: false
  id: 8152976493
  server: netease
```

## 首页技能点配置

[blog]代表你的博客根目录。示例数据中的图片链接为本人图床，请自行上传至您自己的图床，（不保证永久可用性）。

创建`[blog]/source/_data/creativity.yml`，输入以下内容

```yml
- class_name: 开启创造力
  creativity_list:
    - name: Java
      color: "#fff"
      icon: https://bu.dusays.com/2023/04/09/643293b1184e9.jpg
    - name: Docker
      color: "#57b6e6"
      icon: https://bu.dusays.com/2023/04/09/643293b0f0abe.png
    - name: Photoshop
      color: "#4082c3"
      icon: https://bu.dusays.com/2022/12/15/639aa3a5c240e.png
    - name: Node
      color: "#333"
      icon: https://npm.elemecdn.com/anzhiyu-blog@2.1.1/img/svg/node-logo.svg
    - name: Webpack
      color: "#2e3a41"
      icon: https://bu.dusays.com/2023/04/09/643293b68026c.png
    - name: Pinia
      color: "#fff"
      icon: https://npm.elemecdn.com/anzhiyu-blog@2.0.8/img/svg/pinia-logo.svg
    - name: Python
      color: "#fff"
      icon: https://bu.dusays.com/2023/04/09/643293b1230f7.png
    - name: Vite
      color: "#937df7"
      icon: https://npm.elemecdn.com/anzhiyu-blog@2.0.8/img/svg/vite-logo.svg
    - name: Flutter
      color: "#4499e4"
      icon: https://bu.dusays.com/2023/04/09/643293b1055c2.png
    - name: Vue
      color: "#b8f0ae"
      icon: https://bu.dusays.com/2023/04/09/643293b6788bd.png
    - name: React
      color: "#222"
      icon: data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K
    - name: CSS3
      color: "#2c51db"
      icon: https://bu.dusays.com/2022/12/15/639aa3a5c251e.png
    - name: JS
      color: "#f7cb4f"
      icon: https://bu.dusays.com/2023/04/09/643293b121f02.png
    - name: HTML
      color: "#e9572b"
      icon: https://bu.dusays.com/2022/12/15/639aa3a5c241c.png
    - name: Git
      color: "#df5b40"
      icon: https://bu.dusays.com/2023/04/09/643293b10ccdd.webp
    - name: Apifox
      color: "#e65164"
      icon: https://bu.dusays.com/2022/11/19/6378d6458c6b6.png
```

此时可以看到首页顶部已经有技能点的轮播了。

![技能点轮播](https://img02.anzhiy.cn/adminuploads/1/2023/03/26/641fe7b5c77c3.webp)

文字部分在主题配置文件中`home_top`配置项修改

## 配置 nav 顶栏左侧应用列表

```yml
# nav左侧菜单
nav:
  enable: true
  menu:
    - title: 网页
      item:
        - name: 个人主页
          link: https://index.anzhiy.cn/
          icon: https://index.anzhiy.cn/assets/home.svg
        - name: 博客
          link: https://anzhiy.cn/
          icon: https://img02.anzhiy.cn/adminuploads/1/2022/09/05/6315ec9737ac4.png
        - name: 云盘主页
          link: https://www.cloud.anzhiy.cn/
          icon: https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg
        - name: 安知鱼图床
          link: https://image.anzhiy.cn/
          icon: https://image.anzhiy.cn/favicon.ico
        - name: alist文件管理
          link: https://pan.anzhiy.cn/
          icon: https://cloud.anzhiy.cn/static/img/c192.png
    - title: 项目
      item:
        - name: 安知鱼云盘
          link: https://cloud.anzhiy.cn/
          icon: https://img02.anzhiy.cn/adminuploads/1/2022/04/27/6268e7d9de532.png
```

## 字数统计

要为 AnZhiYu 配上字数统计特性, 你需要如下几个步骤:

打开 hexo 工作目录

```bash
npm install hexo-wordcount --save or yarn add hexo-wordcount
```

修改 主题配置文件:

```yml
wordcount:
  enable: true
  post_wordcount: true
  min2read: true
  total_wordcount: true
```

## 搜索系统

:::tabs#安装搜索系统

@tab algolia

> 记得运行 hexo clean

> 如果你使用 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch)，请记得配置 fields 参数的 `title`, `permalink` 和 `content`

你需要安装 [hexo-algolia](https://github.com/oncletom/hexo-algolia) 或 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch). 根据它们的说明文档去做相应的配置。

修改 主题配置文件

```yml
algolia_search:
  enable: true
  hits:
    per_page: 6
```

@tab 本地搜索

记得运行 `hexo clean`

你需要安装 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)，根据它的文档去做相应配置

修改 主题配置文件

```yml
local_search:
  enable: false
  preload: false
  CDN:
```

| 参数    | 解释                                                                                       |
| ------- | ------------------------------------------------------------------------------------------ |
| enable  | 是否开启本地搜索                                                                           |
| preload | 预加载，开启后，进入网页后会自动加载搜索文件。关闭时，只有点击搜索按钮后，才会加载搜索文件 |
| CDN     | 搜索文件的 CDN 地址（默认使用的本地链接）                                                  |

:::

## 网站验证

如果需要搜索引擎收录网站，可能需要登录对应搜索引擎的管理平台进行提交。
各自的验证码可从各自管理平台拿到

修改 `主题配置文件`

```yml
site_verification:
  # - name: google_site_verification
  #   content: xxxxxx
  # - name: baidu_site_verification
  #   content: xxxxxxx
```
