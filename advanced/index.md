---
title: 进阶配置
---

# 进阶配置 🚀
## 评论

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


### Twikoo

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

### Valine

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

### Waline
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

## 在线聊天

### 通用配置

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
### chatra

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

### tidio
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
### daovoice
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

### crisp
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

### messenger

messenger 为 Facebook 旗下的聊天服务

具体操作请查看 [Facebook 洽谈附加程式 - Messenger 平台](https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/)

```yml
messenger:
  enable: false
  pageID: xxxxx
  lang: zh_TW # Language en_US/zh_CN/zh_TW and so on
```

## ai 摘要

需主题版本大于 1.1.6 版本

修改主题配置文件，其中`key`和`Referer` 为 `tianli gpt` 的`key`和`Referer`，可在 https://afdian.net/item/886a79d4db6711eda42a52540025c377 购买 key，购买完成后请立即在[前端面板](https://summary.tianli0.top/)绑定key，以防止被盗用。

适用于AnZhiYu主题项目的Key，前端管理面板 https://summary.tianli0.top/

每个key限制请求字数50000字，如果是已经请求过的内容不会再次消耗key
使用时需要绑定key。 虚拟物品一经发出不支持退款。

关于续费：
续费和绑定流程相同，绑定成功后会自动充值到原有的key上，也就是说无需更改网页中的key参数，直接绑定即可。 格式发送，返回的 token 即你的剩余字数

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

配置完成以后在文章的`Front-matter`配置`ai: true`
使用 `tianli gpt` 需将 mode 改为`tianli` 然后在需要 ai 摘要的文章的`Front-matter配置ai: true`

如果使用`local`,需要按照以下方式配置

```markdown
---
title: AnZhiYu主题快速开始
ai:
  - 本教程介绍了如何在博客中安装基于Hexo主题的安知鱼主题，并提供了安装、应用主题、修改配置文件、本地启动等详细步骤及技术支持方式。教程的内容针对最新的主题版本进行更新，如果你是旧版本教程会有出入。
  - 本文真不错
---
```

| mode    | 对比                                                                             |
| ------- | ------------------------------------------------------------------------------------------ |
| tianli  | 具有完备的训练后端功能，可优秀的完成文章的摘要，方便的快速生成对应摘要                                                                           |
| local | 本地，需自行在文章顶部添加 ai 摘要，内容自行决定，书写较为麻烦。 |


## 控制台信息

关于控制台信息，主题不提供修改配置，但是可以在主题配置文件中进行关闭。

```yml
# 控制台打印信息
console:
  enable: true
```

控制台打印时间相关信息可以配置页脚内容来修改。

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

![控制台打印信息](https://bu.dusays.com/2023/09/02/64f29cf50177c.png)

## 如何配置首页顶部右侧不使用轮播图

![效果预览](https://img02.anheyu.com/adminuploads/1/2023/03/27/642172c889a45.png)

将主题配置文件中`home_top.swiper.enable` 修改为 `false` 即可.

## 标签卖萌

主题配置文件中

```yml
# 标签卖萌
diytitle:
  enable: true
  leaveTitle: w(ﾟДﾟ)w 不要走！再看看嘛！
  backTitle: ♪(^∇^*)欢迎肥来！
```

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

支持在文章`Post Front-matter`配置主色`main_color`，例如

```yml
---
title: AnZhiYu主题安装文档（一）
date: 2023-03-26 18:55:44
main_color: "#c0e0e0"
---
```

主题将会优先获取文章`Post Front-matter`颜色，如果未设置才会使用`cdn/api/both`

```yml
# 主色调相关配置
mainTone:
  enable: true # true or false 文章是否启用获取图片主色调
  mode: both # cdn/api/both cdn模式为图片url+imageAve参数获取主色调，api模式为请求API获取主色调，both模式会先请求cdn参数，无法获取的情况下将请求API获取
  # 项目地址：https://github.com/anzhiyu-c/img2color-go
  api: https://color.anheyu.com/api?img= # mode为api时可填写
  cover_change: true # 整篇文章跟随cover修改主色调
```

| 参数    | 解释                                                                                       |
| ------- | ------------------------------------------------------------------------------------------ |
| enable  | 是否开启主色调                                                                           |
| mode | cdn/api/both cdn模式为图片url+imageAve参数获取主色调，api模式为请求API获取主色调，both模式会先请求cdn参数，无法获取的情况下将请求API获取（目前cdn模式支持多吉云和腾讯数据万象两种方式） |
| api     | mode为api时，需返回16进制颜色，可以参考部署项目: https://github.com/anzhiyu-c/img2color-go                                                  |
| cover_change     | 整篇文章跟随cover修改主色调                                         |

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

## 左下角音乐球

歌单配置很简单，只需要修改主题配置文件中`nav_music`即可.

其中id与server配置可以参考[MetingJS](https://github.com/metowolf/MetingJS)

|option               |default      |description|
|:--------------------|:------------:|:----------|
|id              |**require**   |song id / playlist id / album id / search keyword|
|server          |**require**   |music platform: `netease`, `tencent`, `kugou`, `xiami`, `baidu`|

```yml
# 左下角音乐配置项
# https://github.com/metowolf/MetingJS
nav_music:
  enable: true
  console_widescreen_music: false # 宽屏状态控制台显示音乐而不是标签 enable为true 控制台依然会显示
  id: 8152976493
  server: netease
  all_playlist: https://y.qq.com/n/ryqq/playlist/8802438608
```

![](https://bu.dusays.com/2023/09/02/64f294ef59784.png)

## 评论匿名邮箱

目前只支持Twikoo

```yml
# 评论匿名邮箱
visitorMail:
  enable: true
  mail: visitor@anheyu.com
```

![评论匿名](https://bu.dusays.com/2023/09/02/64f294f05b26a.png)

## 文章底部工具

```yml
# ptool 文章底部工具
ptool:
  enable: true
  share_mobile: true
  share_weibo: true
  share_copyurl: true
  categories: false # 是否显示分类
  mode: /wechat/ # 运营模式与责任，不配置不显示
```

![](https://bu.dusays.com/2023/09/02/64f29566258df.png)

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

![技能点轮播](https://img02.anheyu.com/adminuploads/1/2023/03/26/641fe7b5c77c3.webp)

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
          link: https://index.anheyu.com/
          icon: https://bu.dusays.com/2023/08/13/64d8c2748ef34.jpg
        - name: 博客
          link: https://blog.anheyu.com/
          icon: https://bu.dusays.com/2023/07/23/64bc72c75319d.png
        - name: 安知鱼图床
          link: https://image.anheyu.com/
          icon: https://bu.dusays.com/2023/08/13/64d8c2653332e.ico
    - title: 项目
      item:
        - name: 安知鱼图床
          link: https://image.anheyu.com/
          icon: https://bu.dusays.com/2023/08/13/64d8c2653332e.ico
```

## 字数统计

要为 AnZhiYu 配上字数统计特性, 你需要如下几个步骤:

打开 hexo 工作目录

```bash
npm install hexo-wordcount --save
或者
yarn add hexo-wordcount
```

修改 主题配置文件:

```yml
wordcount:
  enable: true
  post_wordcount: true
  min2read: true
  total_wordcount: true
```

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


## 搜索系统

### algolia

记得运行 hexo clean

使用 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch)，请记得配置 fields 参数的 `title`, `permalink` 和 `content`

你需要安装 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch). 根据它的说明文档去做相应的配置。

修改 主题配置文件

```yaml
algolia_search:
  enable: true
  hits:
    per_page: 6
```

hexo 配置文件 `_config.yml` 添加以下内容

注意algolia搜索出来URL前缀为hexo配置文件`_config.yml`中的`url`配置。

```yaml
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

### 本地搜索

记得运行 `hexo clean`

你需要安装 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)，根据它的文档去做相应配置

修改 主题配置文件

```yaml
local_search:
  enable: false
  preload: false
  CDN:
```

| 参数      | 解释                                            |
| ------- | --------------------------------------------- |
| enable  | 是否开启本地搜索                                      |
| preload | 预加载，开启后，进入网页后会自动加载搜索文件。关闭时，只有点击搜索按钮后，才会加载搜索文件 |
| CDN     | 搜索文件的 CDN 地址（默认使用的本地链接）                       |

### DocSearch
DocSearch 是另一款由 algolia 提供的搜索服务，具体申请和使用请查看 [DocSearch 文档](https://docsearch.algolia.com/)

```yaml
docsearch:
  enable: false
  appId:
  apiKey:
  indexName:
  option:
```

| 参数        | 解释                                                                       |
| --------- | ------------------------------------------------------------------------ |
| enable    | 【必须】是否开启 docsearch                                                       |
| appId     | 【必须】你的 Algolia 应用 ID                                                     |
| apiKey    | 【必须】你的 Algolia 搜索 API key                                                |
| indexName | 【必须】你的 Algolia index name                                                |
| option    | 【可选】其余的 docsearch 配置 具体配置可查[这里](https://docsearch.algolia.com/docs/api/) |

## 数学公式

### Mathjax
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
### KaTeX

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

### hexo-renderer-markdown-it-plus

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

## 分享

只能选择一个分享服务商

### sharejs

@tab sharejs
如果你不知道 [sharejs](https://github.com/overtrue/share.js/)，看看它的説明。

修改 `主题配置文件`

```yml
sharejs:
  enable: true
  sites: facebook,twitter,wechat,weibo,qq #想要显示的内容
```

### addtoany

可以到 [addtoany](https://www.addtoany.com/) 查看使用説明

```yml
addtoany:
  enable: true
  item: facebook,twitter,wechat,sina_weibo,facebook_messenger,email,copy_link
```

## 欢迎语配置

在每次进入首页时根据当前时间弹出欢迎语，为true时必须配置list。


```yml
# 欢迎语配置
greetingBox:
  enable: true #开启后必须配置下面的list对应的时间段，不然会出现小白条
  default: 晚上好👋
  list:
    - greeting: 晚安😴
      startTime: 0
      endTime: 5
    - greeting: 早上好鸭👋, 祝你一天好心情！
      startTime: 6
      endTime: 9
    - greeting: 上午好👋, 状态很好，鼓励一下～
      startTime: 10
      endTime: 10
    - greeting: 11点多啦, 在坚持一下就吃饭啦～
      startTime: 11
      endTime: 11
    - greeting: 午安👋, 宝贝
      startTime: 12
      endTime: 14
    - greeting: 🌈充实的一天辛苦啦！
      startTime: 14
      endTime: 18
    - greeting: 19点喽, 奖励一顿丰盛的大餐吧🍔。
      startTime: 19
      endTime: 19
    - greeting: 晚上好👋, 在属于自己的时间好好放松😌~
      startTime: 20
      endTime: 24
```

![欢迎语配置](https://bu.dusays.com/2023/09/02/64f295fbab122.png)

## 博客快捷键

```yml
# 快捷键配置
shortcutKey:
  enable: true
  delay: 100 # 所有键位延时触发而不是立即触发（包括shift，以解决和浏览器键位冲突问题）
  shiftDelay: 200 # shift按下延时多久开启
```

![博客快捷键](https://bu.dusays.com/2023/09/02/64f28f14b1677.png)

## 无障碍优化

```yml
# 无障碍优化（在首页按下「shift + ?」以查看效果）
accesskey:
  enable: true
```

![无障碍优化](https://bu.dusays.com/2023/09/02/64f2969b6a83b.webp)

## 友情链接顶部相关配置

```yml
# 友情链接顶部相关配置
linkPageTop:
  enable: true
  title: 与数百名博主无限进步
  # 添加博主友链的评论自定义格式
  addFriendPlaceholder: "昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n站点截图（可选）：\n"
```

![](https://bu.dusays.com/2023/09/02/64f296f1ed91f.webp)

## 缩略图后缀
该配置用于优化缩略图，archive/tag/category 页面单独开启后缀，可以优化图像质量问题，注意开启后一定要保证你的图片本身可以支持链接后➕pageThumbnailSuffix能够被访问。

```yml
# 缩略图后缀 archive/tag/category 页面单独开启后缀
pageThumbnailSuffix: "!page_thumbnail"
```

![缩略图后缀](https://bu.dusays.com/2023/09/02/64f297a3be6a7.webp)

## 隐私协议弹窗

该弹窗一个窗口会话只会弹出一次。

```yml
# 隐私协议弹窗
agreementPopup:
  enable: true
  url: /privacy
```

![隐私协议弹窗](https://bu.dusays.com/2023/09/02/64f297ecbb523.webp)

## 定制化的右键菜单

开启`rightClickMenu`即可。

```yml
# 右键菜单
rightClickMenu:
  enable: true
```

![右键菜单一般情况](https://bu.dusays.com/2023/09/02/64f2987b95753.png)

![右键菜单链接情况](https://bu.dusays.com/2023/09/02/64f2987b95753.png)

## 动效控制

```yml
# 动效
dynamicEffect:
  postTopWave: true # 文章顶部波浪效果
  postTopRollZoomInfo: true # 文章顶部滚动时缩放
  pageCommentsRollZoom: true # 非文章页面评论滚动时缩放显示（仅仅Twikoo生效）
```

![文章顶部波浪效果](https://bu.dusays.com/2023/09/02/64f298e0920cb.webp)

![文章顶部滚动时缩放](https://bu.dusays.com/2023/09/02/64f299eb3ea0d.gif)

![非文章页面评论滚动时缩放显示](https://bu.dusays.com/2023/09/02/64f29a87d6dbc.gif)

## 51A统计

可以配置 [51A统计](https://v6.51.la/user/application) 与[灵雀](https://perf.51.la/manage/home)

配置后可在关于页面显示统计信息。

```yml
# 51a统计配置
LA:
  enable: true
  ck: Jp8wwGQpp21utaFQ
  LingQueMonitorID: Jp8ztDRrxmTf7LDj
```

::: warning 警告
注意一定要开启数据挂件功能!!!
:::

![开启数据挂件](https://bu.dusays.com/2023/09/02/64f29c8ae5d5a.png)

![51A统计ck](https://bu.dusays.com/2023/09/02/64f29c29019c9.png)

![灵雀LingQueMonitorID](https://bu.dusays.com/2023/09/02/64f29be2c2aee.webp)

## 页面卡片顶部气泡升起效果

```yml
# 页面卡片顶部气泡升起效果
bubble:
  enable: false
```

![页面卡片顶部气泡升起效果](https://bu.dusays.com/2023/09/02/64f29d7965a3d.webp)


## 深色模式粒子效果canvas

```yml
# 深色模式粒子效果canvas
universe:
  enable: true
```

![深色模式粒子效果canvas](https://bu.dusays.com/2023/09/02/64f29dfaa6f04.webp)