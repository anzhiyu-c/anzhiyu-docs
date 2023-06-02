---
lang: zh-CN
title: 站点基础配置(二)
description: 安知鱼主题站点基础配置
---

::: warning 警告
本教程更新于 2023 年 5 月 22 日，教程的内容针对最新的 anzhiyu 主题(如果你是旧版本，教程会有出入，请留意)
🐟 安知鱼 已经更新到 [1.2.1](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases/tag/1.2.1)
:::

## Footer 设置

`since` 是一个来展示你站点起始时间的选项。它位于页面的最底部。

```yaml
# Footer Settings
# --------------------------------------
footer:
  owner:
    enable: true
    since: 2020
  custom_text:
  runtime:
    enable: true
    launch_time: 04/01/2021 00:00:00 # 网站上线时间
    work_img: https://npm.elemecdn.com/anzhiyu-blog@2.0.4/img/badge/安知鱼-上班摸鱼中.svg
    work_description: 距离月入25k也就还差一个大佬带我~
    offduty_img: https://npm.elemecdn.com/anzhiyu-blog@2.0.4/img/badge/安知鱼-下班啦.svg
    offduty_description: 下班了就该开开心心的玩耍，嘿嘿~
  # 徽标部分配置项 https://shields.io/
  # https://img.shields.io/badge/CDN-jsDelivr-orange?style=flat&logo=jsDelivr
  bdageitem:
    - link: https://hexo.io/ #徽标指向网站链接
      shields: https://npm.elemecdn.com/anzhiyu-blog@2.1.5/img/badge/Frame-Hexo.svg #徽标API
      message: 博客框架为Hexo_v5.4.0 #徽标提示语
    - link: https://anzhiy.cn/
      shields: https://pan.anzhiy.cn/d/anzhiyu/svg/Theme-AnZhiYu-2E67D3.svg
      message: 本站使用AnZhiYu主题
    - link: https://www.dogecloud.com/
      shields: https://npm.elemecdn.com/anzhiyu-blog@2.2.0/img/badge/CDN-多吉云-3693F3.svg
      message: 本站使用多吉云为静态资源提供CDN加速
    - link: https://github.com/
      shields: https://npm.elemecdn.com/anzhiyu-blog@2.1.5/img/badge/Source-Github.svg
      message: 本站项目由Github托管
    - link: http://creativecommons.org/licenses/by-nc-sa/4.0/
      shields: https://npm.elemecdn.com/anzhiyu-blog@2.2.0/img/badge/Copyright-BY-NC-SA.svg
      message: 本站采用知识共享署名-非商业性使用-相同方式共享4.0国际许可协议进行许可
```

| 参数                        | 解释                                       |
| --------------------------- | ------------------------------------------ |
| owner                       | 页脚网站所有者@2020-当前年份               |
| owner.enable                | 页脚网站所有者是否启用                     |
| owner.since                 | 页脚年份，控制台中打印的运行时间也来自这里 |
| runtime                     | 运行时间                                   |
| runtime.enable              | 运行时间是否启用                           |
| runtime.launch_time         | 网站上线时间                               |
| runtime.work_img            | 页脚上班时间的徽标                         |
| runtime.work_description    | 页脚上班时间的 title 描述                  |
| runtime.offduty_img         | 页脚下班时间的徽标                         |
| runtime.offduty_description | 页脚下班时间的 title 描述                  |
| bdageitem                   | 徽标配置项                                 |
| bdageitem.link              | 徽标配置链接                               |
| bdageitem.shields           | 徽标配置徽标                               |
| bdageitem.message           | 徽标配置徽标 title                         |

![页脚](https://img02.anzhiy.cn/adminuploads/1/2023/04/20/64412c4c08266.png!blogimg)

![页脚你好自动定义文字](https://img02.anzhiy.cn/adminuploads/1/2023/04/20/64412cb6bbbf5.png!blogimg)

## 侧边栏设置 (aside)

可自行决定哪个项目需要显示，可决定位置，也可以设置不显示侧边栏。

修改 `主题配置文件`

```yaml
# aside (侧边栏)
# --------------------------------------

aside:
  enable: true
  hide: false
  button: true
  mobile: true # display on mobile
  position: right # left or right
  display:
    archive: true
    tag: true
    category: false
  card_author:
    enable: true
    type: 2 # 1为使用头像card 2为不使用头像card
    description: <div style="line-height:1.38;margin:0.6rem 0;text-align:justify;color:rgba(255, 255, 255, 0.8);">这有关于<b style="color:#fff">产品、设计、开发</b>相关的问题和看法，还有<b style="color:#fff">文章翻译</b>和<b style="color:#fff">分享</b>。</div><div style="line-height:1.38;margin:0.6rem 0;text-align:justify;color:rgba(255, 255, 255, 0.8);">相信你可以在这里找到对你有用的<b style="color:#fff">知识</b>和<b style="color:#fff">教程</b>。</div>
    button:
      enable: true
      icon: anzhiyu-icon-arrow-circle-right
      text: 了解更多
      link: /about/
  card_announcement:
    enable: false
    content: 欢迎来看我的博客鸭~
  card_weixin:
    enable: true
    face: https://img02.anzhiy.cn/adminuploads/1/2022/09/11/631ddb7c9b250.png
    backFace: https://img02.anzhiy.cn/adminuploads/1/2022/09/11/631ddeb0900b7.png
  card_recent_post:
    enable: true
    limit: 5 # if set 0 will show all
    sort: date # date or updated
    sort_order: # Don't modify the setting unless you know how it works
  card_categories:
    enable: false
    limit: 8 # if set 0 will show all
    expand: none # none/true/false
    sort_order: # Don't modify the setting unless you know how it works
  card_tags:
    enable: true
    limit: 40 # if set 0 will show all
    color: true
    sort_order: # Don't modify the setting unless you know how it works
  card_archives:
    enable: true
    type: monthly # yearly or monthly
    format: MMMM YYYY # eg: YYYY年MM月
    order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending
    limit: 8 # if set 0 will show all
    sort_order: # Don't modify the setting unless you know how it works
  card_webinfo:
    enable: true
    post_count: true
    last_push_date: true
    sort_order: # Don't modify the setting unless you know how it works
```

## 访问人数 busuanzi (UV 和 PV)

访问 busuanzi 的[官方网站](http://busuanzi.ibruce.info/)查看更多的介绍。

修改 `主题配置文件`

```yaml
busuanzi:
  site_uv: true
  site_pv: true
  page_pv: true
```

> 如果需要修改 busuanzi 的 CDN 链接，可通过 主题配置文件 的 CDN 中的 option 进行修改

```yaml
CDN:
  option:
  	busuanzi: xxxxxxxxx
```

![](https://img02.anzhiy.cn/adminuploads/1/2023/04/20/6441312192cba.png)

![](https://img02.anzhiy.cn/adminuploads/1/2023/04/20/6441312d5e8d0.webp!blogimg)

## 运行时间

网页已运行时间

修改 `主题配置文件`

```yml
# Time difference between publish date and now (网页运行时间)
# Formal: Month/Day/Year Time or Year/Month/Day Time
runtimeshow:
  enable: true
  publish_date: 4/1/2021 00:00:00
```

![运行时间](https://img02.anzhiy.cn/adminuploads/1/2023/04/20/6441319e80977.webp)

## 最新评论

最新评论只会在刷新时才会去读取，并不会实时变化

由于 API 有 访问次数限制，为了避免调用太多，主题默认存取期限为 10 分钟。也就是説，调用后资料会存在 localStorage 里，10 分钟内刷新网站只会去 localStorage 读取资料。 10 分钟期限一过，刷新页面时才会去调取 API 读取新的数据。（ 配置 storage，可自行配置缓存时间）

在侧边栏显示最新评论板块

修改 `主题配置文件`

```yaml
# Aside widget - Newest Comments
newest_comments:
  enable: true
  sort_order: # Don't modify the setting unless you know how it works
  limit: 6
  storage: 10 # unit: mins, save data to localStorage
  avatar: true
```

| 配置    | 解释                    |
| ------- | ----------------------- |
| limit   | 显示的数量              |
| storage | 设置缓存时间，单位 分钟 |
| avatar  | 是否显示头像            |

![](https://img02.anzhiy.cn/adminuploads/1/2023/04/20/644132e885d91.webp!blogimg)

## 右下角按钮 (Bottom right button)

### 简繁转换

简体繁体互换

右下角会有简繁转换按钮。

修改 `主题配置文件`

```yml
translate:
  enable: true
  # 默认按钮显示文字(网站是简体，应设置为'default: 繁')
  default: 简
  #网站默认语言，1: 繁体中文, 2: 简体中文
  defaultEncoding: 1
  #延迟时间,若不在前, 要设定延迟翻译时间, 如100表示100ms,默认为0
  translateDelay: 0
  #当文字是简体时，按钮显示的文字
  msgToTraditionalChinese: "繁"
  #当文字是繁体时，按钮显示的文字
  msgToSimplifiedChinese: "简"
```

> 简体

![简体](https://img02.anzhiy.cn/adminuploads/1/2023/04/20/644133ef810f7.webp)

> 繁体

![繁体](https://img02.anzhiy.cn/adminuploads/1/2023/04/20/644133ef85f42.webp)

### 阅读模式

阅读模式下会去掉除文章外的内容，避免干扰阅读。

只会出现在文章页面，右下角会有阅读模式按钮。

修改 `主题配置文件`

```yaml
readmode: true
```

![阅读模式](https://img02.anzhiy.cn/adminuploads/1/2023/04/20/6441350b98041.webp)

### 夜间模式

右下角会有夜间模式按钮

修改 `主题配置文件`

```yaml
# dark mode
darkmode:
  enable: true
  # Toggle Button to switch dark/light mode
  button: true
  # Switch dark/light mode automatically (自动切换 dark mode和 light mode)
  # autoChangeMode: 1  Following System Settings, if the system doesn't support dark mode, it will switch dark mode between 6 pm to 6 am
  # autoChangeMode: 2  Switch dark mode between 6 pm to 6 am
  # autoChangeMode: false
  autoChangeMode: 1
  # Set the light mode time. The value is between 0 and 24. If not set, the default value is 6 and 18
  start: # 8
  end: # 22
```

| 参数           | 解释                                                                                                                                                                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| button         | 是否在右下角显示日夜模式切换按钮                                                                                                                                                                                                         |
| autoChangeMode | 自动切换的模式                                                                                                                                                                                                                           |
| autoChangeMode | autoChangeMode: 1 跟随系统而变化，不支持的浏览器/系统将按照时间 start 到 end 之间切换为 light mode<br/>autoChangeMode: 2 只按照时间 start 到 end 之间切换为 light mode ,其余时间为 dark mode<br/>autoChangeMode: false 取消自动切换<br/> |
| start          | light mode 的开始时间                                                                                                                                                                                                                    |
| end            | light mode 的结束时间                                                                                                                                                                                                                    |

## 按钮排序

```yaml
# Don't modify the following settings unless you know how they work (非必要请不要修改 )
# Choose: readmode,translate,darkmode,hideAside,toc,chat,comment
# Don't repeat 不要重复
rightside_item_order:
  enable: false
  hide: # readmode,translate,darkmode,hideAside
  show: # toc,chat,comment
```

## 标签外挂（Tag Plugins）

::: info
标签外挂是 Hexo 独有的功能，并不是标准的 Markdown 格式。
以下的写法，只适用于 AnZhiYu 主题，用在其它主题上不会有效果，甚至可能会报错。使用前请留意
:::

::: warning 警告
标签外挂虽然能为主题带来一些额外的功能和 UI 方面的强化，但是，标签外挂也有明显的限制，使用时请留意。
:::

只需要将标签写在md文件内即可使用，详细写法请阅读[安知鱼主题标签 Tag Plugins](https://anzhiy.cn/posts/d50a.html)