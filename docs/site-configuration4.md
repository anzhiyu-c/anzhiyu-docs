---
lang: zh-CN
title: 站点基础配置(四)
description: 安知鱼主题站点基础配置四
---

::: warning 警告
本教程更新于 2023 年 7 月 5 日，教程的内容针对最新的 anzhiyu 主题(如果你是旧版本，教程会有出入，请留意)
🐟 安知鱼 已经更新到 [1.4.0](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases/tag/1.4.0)
:::

## 数学公式

:::tabs

@tab Mathjax

不要在标题里使用 mathjax 语法，toc 目录不一定能正确显示 mathjax，可能显示 mathjax 代码

建议使用 KaTex 获得更好的效果，下文有介绍！

修改 `主题配置文件`:

```yml
mathjax:
  enable: true
  # true 表示每一页都加载mathjax.js
  # false 需要时加载，须在使用的Markdown Front-matter 加上 mathjax: true
  per_page: false
```

> 如果 `per_page` 设为 `true`,则每一页都会加载 Mathjax 服务。设为 `false`，则需要在文章 `Front-matter` 添加 `mathjax: true`,对应的文章才会加载 Mathjax 服务。

然后你需要修改一下默认的 `markdown` 渲染引擎来实现 MathJax 的效果。

查看: [hexo-renderer-kramed](https://www.npmjs.com/package/hexo-renderer-kramed)

以下操作在你 hexo 博客的目录下 (**不是 Anzhiyu 的目录**):

1. 安装插件

```bash
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-kramed --save
```

2.  配置 hexo 根目录的配置文件

```bash
kramed:
  gfm: true
  pedantic: false
  sanitize: false
  tables: true
  breaks: true
  smartLists: true
  smartypants: true
```

@tab KaTeX

不要在标题里使用 KaTeX 语法，toc 目录不能正确显示 KaTeX。

首先禁用 `MathJax`（如果你配置过 MathJax 的话），然后修改你的`主题配置文件`以便加载 `katex.min.css`:

```yml
katex:
  enable: true
  # true 表示每一页都加载katex.js
  # false 需要时加载，须在使用的Markdown Front-matter 加上 katex: true
  per_page: false
  hide_scrollbar: true
```

你不需要添加 `katex.min.js` 来渲染数学方程。相应的你需要卸载你之前的 hexo 的 markdown 渲染器，然后安装其它插件。

因为 KaTeX 更快更轻量，因此没有 MathJax 的功能多（比如右键菜单）。为那些使用 MathJax 的用户，主题也内置了 katex 的 [复制](https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex) 功能。

@tab hexo-renderer-markdown-it

卸载掉 marked 插件，安装 [hexo-renderer-markdown-it](https://github.com/hexojs/hexo-renderer-markdown-it)

```BASH
npm un hexo-renderer-marked --save # 如果有安装这个的话，卸载
npm un hexo-renderer-kramed --save # 如果有安装这个的话，卸载

npm i hexo-renderer-markdown-it --save # 需要安装这个渲染插件
npm install katex @renbaoshuo/markdown-it-katex #需要安装这个katex插件

```

在 hexo 的根目录的`_config.yml` 中配置

```yml
markdown:
  plugins:
    - "@renbaoshuo/markdown-it-katex"
```

如需配置其它参数，请参考 [katex 官网](https://katex.org/docs/options.html)

@tab hexo-renderer-markdown-it-plus

> 注意，此方法生成的 katex 没有斜体

卸载掉 marked 插件，然后安装新的`hexo-renderer-markdown-it-plus`:

```bash
# 替换 `hexo-renderer-kramed` 或者 `hexo-renderer-marked` 等hexo的markdown渲染器
# 你可以在你的package.json里找到hexo的markdwon渲染器，并将其卸载
npm un hexo-renderer-marked --save

# or

npm un hexo-renderer-kramed --save


# 然后安装 `hexo-renderer-markdown-it-plus`
npm i @upupming/hexo-renderer-markdown-it-plus --save
```

注意到 `hexo-renderer-markdown-it-plus` 已经无人持续维护, 所以我们使用 `@upupming/hexo-renderer-markdown-it-plus`。 这份 fork 的代码使用了 `@neilsustc/markdown-it-katex` 同时它也是 VSCode 的插件 [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown) 所使用的, 所以我们可以获得最新的 KaTex 功能例如 \tag{}。

你还可以通过 `@neilsustc/markdown-it-katex` 控制 KaTeX 的设置，所有可配置的选项参见 [https://katex.org/docs/options.html](https://katex.org/docs/options.html)。 比如你想要禁用掉 KaTeX 在命令行上输出的宂长的警告信息，你可以在根目录的 \_config.yml 中使用下面的配置将 strict 设置为 false

```bash
markdown_it_plus:
  plugins:
    - plugin:
      name: '@neilsustc/markdown-it-katex'
      enable: true
      options:
        strict: false
```

当然，你还可以利用这个特性来定义一些自己常用的 `macros`。

:::

## 搜索系统

:::tabs#安装搜索系统

@tab algolia
记得运行 hexo clean

使用 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch)，请记得配置 fields 参数的 `title`, `permalink` 和 `content`

你需要安装 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch). 根据它的说明文档去做相应的配置。

修改 主题配置文件

```yml
algolia_search:
  enable: true
  hits:
    per_page: 6
```

hexo 配置文件

```yml
# algolia搜索: https://github.com/LouisBarranqueiro/hexo-algoliasearch
algolia:
  appId: "xxxx"
  apiKey: "xxxx"
  adminApiKey: "xxxx"
  chunkSize: 5000
  indexName: "hexo"
  fields:
    - content:strip:truncate,0,200
    - excerpt:strip
    - gallery
    - permalink
    - photos
    - slug
    - tags
    - title
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

## 分享

只能选择一个分享服务商

:::tabs

@tab AddThis

访问 [AddThis](https://www.addthis.com/) 官网
找到你的 pub-id

![](https://file.crazywong.com/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-addthis.jpg)

修改 `主题配置文件`

```yml
addThis:
  enable: true # or false
  pubid: 你的pub-id
```

@tab sharejs
如果你不知道 [sharejs](https://github.com/overtrue/share.js/)，看看它的説明。

修改 `主题配置文件`

```yml
sharejs:
  enable: true
  sites: facebook,twitter,wechat,weibo,qq #想要显示的内容
```

@tab addtoany

可以到 [addtoany](https://www.addtoany.com/) 查看使用説明

```yml
addtoany:
  enable: true
  item: facebook,twitter,wechat,sina_weibo,facebook_messenger,email,copy_link
```

:::

## 评论

:::tabs

@tab 通用配置

开启评论需要在 comments-use 中填写你需要的评论。

支持双评论显示，只需要配置两个评论（第一个为默认显示）

```yml
comments:
  # Up to two comments system, the first will be shown as default
  # Choose: Valine/Waline/Twikoo/
  use: Twikoo,Waline # Twikoo/Waline
  text: true # Display the comment name next to the button
  # lazyload: The comment system will be load when comment element enters the browser's viewport.
  # If you set it to true, the comment count will be invalid
  lazyload: false
  count: true # Display comment count in post's top_img
  card_post_count: false # Display comment count in Home Page
```

| 参数            | 解释                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| use             | 使用的评论（请注意，最多支持两个，如果不需要请留空）                                                              |
| text            | 是否显示评论服务商的名字                                                                                          |
| lazyload        | 是否为评论开启 lazyload，开启后，只有滚动到评论位置时才会加载评论所需要的资源（开启 lazyload 后，评论数将不显示） |
| count           | 是否在文章顶部显示评论数                                                                                          |
| card_post_count | 是否在首页文章卡片显示评论数                                                                                      |

@tab Twikoo

`Twikoo` 是一个简洁、安全、无后端的静态网站评论系统，基于[腾讯云开发](https://cloud.tencent.com/product/tcb)。

具体如何配置评论，请查看 [Twikoo 文档](https://twikoo.js.org/quick-start.html)

你只需要把获取到的 `环境 ID (envId)` 填写到配置上去就行

修改 `主题配置文件`

```yml
# Twikoo
# https://github.com/imaegoo/twikoo
twikoo:
  envId:
  region:
  visitor: false
  option:
```

| 参数            | 解释                                                               |
| --------------- | ------------------------------------------------------------------ |
| envId           | 环境 ID                                                            |
| region          | 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数 |
| visitor         | 是否显示文章阅读数                                                 |
| option          | 可选配置                                                           |
| card_post_count | 是否在首页文章卡片显示评论数                                       |

开启 visitor 后，文章页的访问人数将改为 Twikoo 提供，而不是 `不蒜子`

@tab Valine

遵循 [Valine](https://github.com/xCss/Valine) 的指示去配置你的 LeanCloud 应用。以及查看相应的配置说明。

然后修改 `主题配置文件`:

```yml
valine:
  appId: # leancloud application app id
  appKey: # leancloud application app key
  avatar: monsterid # gravatar style https://valine.js.org/#/avatar
  serverURLs: # This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in)
  bg: # valine background
  visitor: false
  option:
```

开启 visitor 后，文章页的访问人数将改为 Valine 提供，而不是 不蒜子

Valine 于 v1.4.5 开始支持自定义表情，如果你需要自行配置，请在 emojiCDN 配置表情 CDN。

同时在 Hexo 工作目录下的 source/\_data/创建一个 json 文件 valine.json,等同于 Valine 需要配置的 emojiMaps，valine.json 配置方式可参考如下

valine.json

```json
{
  "tv_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
  "tv_亲亲": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
  "tv_偷笑": "bb690d4107620f1c15cff29509db529a73aee261.png",
  "tv_再见": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
  "tv_冷漠": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
  "tv_发怒": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
  "tv_发财": "34db290afd2963723c6eb3c4560667db7253a21a.png",
  "tv_可爱": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
  "tv_吐血": "09dd16a7aa59b77baa1155d47484409624470c77.png",
  "tv_呆": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
  "tv_呕吐": "9f996894a39e282ccf5e66856af49483f81870f3.png",
  "tv_困": "241ee304e44c0af029adceb294399391e4737ef2.png",
  "tv_坏笑": "1f0b87f731a671079842116e0991c91c2c88645a.png",
  "tv_大佬": "093c1e2c490161aca397afc45573c877cdead616.png",
  "tv_大哭": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
  "tv_委屈": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
  "tv_害羞": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
  "tv_尴尬": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
  "tv_微笑": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
  "tv_思考": "90cf159733e558137ed20aa04d09964436f618a1.png",
  "tv_惊吓": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png"
}
```

@tab Waline
Waline - 一款从 Valine 衍生的带后端评论系统。可以将 Waline 等价成 With backend Valine。

具体配置可参考 [waline 文档](https://waline.js.org/)

然后修改 主题配置文件:

```yml
waline:
  serverURL: # Waline server address url
  bg: # waline background
  pageview: false
  option:
```

开启 pageview 后，文章页的访问人数将改为 Waline 提供，而不是 不蒜子

@tab Artalk
Artalk - 一款轻量、安全、易上手的自托管评论系统

具体配置可参考 [Artalk 文档](https://Artalk.js.org/)

然后修改 主题配置文件:

```yml
artalk:
  server: # artalk后端地址
  site:
  visitor: false
  option:
```

:::

## 在线聊天

:::tabs

@tab 通用配置

这些工具都提供了一个按钮可以打开/关闭聊天窗口。
主题也提供了一个集合主题特色的按钮来替换这些工具本身的按钮，这个聊天按钮将会出现在右下角里。
你只需要把 `chat_btn` 打开就行。

修改 `主题配置文件`

```yml
# Chat Button [recommend]
# It will create a button in the bottom right corner of website, and hide the origin button
chat_btn: true
```

为了不影响访客的体验，主题提供一个 `chat_hide_show` 配置
设为 true 后，使用工具提供的按钮时，只有向上滚动才会显示聊天按钮，向下滚动时会隐藏按钮。

修改 `主题配置文件`

```yml
# The origin chat button is displayed when scrolling up, and the button is hidden when scrolling down
chat_hide_show: true
```

如果使用工具自带的聊天按钮，按钮位置可能会遮挡右下角图标，请配置 `rightside-bottom` 调正右下角图标位置

@tab chatra

配置 [chatra](https://chatra.com/cn/),需要知道 `Public key`

打开 [chatra](https://chatra.com/cn/) 并注册账号。
你可以在 `Preferences` 中找到 `Public key`

修改 `主题配置文件`

```yml
# chatra
# https://chatra.io/
chatra:
  enable: true
  id: xxxxxxxx
```

`chatra` 的样式你可以 `Chat Widget` 自行配置

@tab tidio

配置 tidio,需要知道 `Public key`

打开 [tidio](https://www.tidio.com/) 并注册账号。
你可以在 `Preferences > Developer` 中找到 `Public key`

修改 `主题配置文件`

```yml
# tidio
# https://www.tidio.com/
tidio:
  enable: true
  public_key: XXXX
```

`tidio`的样式你可以`Channels`自行配置

@tab daovoice

打开 [daovoice](https://www.daocloud.io/) 和注册帐号

找到你的 `app id`
![](https://file.crazywong.com/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-chat-daovoice-appid.png)

修改 `主题配置文件`

```yml
# daovoice
# http://daovoice.io/
daovoice:
  enable: true
  app_id: xxxxx
```

可在`聊天设置`里配置聊天按钮等样式

@tab crisp

打开 [crisp](https://crisp.chat/en/) 并注册帐号

找到需要的网站 ID

```yml
# crisp
# https://crisp.chat/en/
crisp:
  enable: false
  website_id: xxxxxxxx
```

![](https://file.crazywong.com/gh/jerryc127/CDN/img/hexo-theme-buttefly-docs-chat-crisp.png)

@tab messenger

messenger 为 Facebook 旗下的聊天服务

具体操作请查看 [Facebook 洽谈附加程式 - Messenger 平台](https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/)

```yml
messenger:
  enable: false
  pageID: xxxxx
  lang: zh_TW # Language en_US/zh_CN/zh_TW and so on
```
