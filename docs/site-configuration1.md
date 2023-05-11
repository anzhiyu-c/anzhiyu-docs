---
lang: zh-CN
title: 站点基础配置(一)
description: 安知鱼主题站点基础配置
---

::: warning 警告
本教程更新于 2023 年 5 月 11 日，教程的内容针对最新的 anzhiyu 主题(如果你是旧版本，教程会有出入，请留意)
🐟 安知鱼 已经更新到 [1.2.0](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases/tag/1.2.0)
:::

## 语言

修改站点配置文件 `_config.yml`，不是主题配置文件。

默认语言是 en

主题支持三种语言

- default(en)
- zh-CN (简体中文)
- zh-TW (繁体中文)

## 网站资料

修改网站各种资料，例如标题、副标题和邮箱等个人资料，请修改博客根目录的`_config.yml`，请注意如果需要适配 pjax 必须填写`description`字段，以保证需要重载的 dom 数量一致。

![](https://img02.anzhiy.cn/adminuploads/1/2023/04/05/642cfb7d42a1f.webp)

## 导航配置

修改 `主题配置文件`

```yaml
menu:
  文章:
    隧道: /archives/ || icon-box-archive
    分类: /categories/ || icon-shapes
    标签: /tags/ || icon-tags

  友链:
    友人帐: /link/ || icon-link
    朋友圈: /fcircle/ || icon-artstation
    留言板: /comments/ || icon-envelope

  我的:
    音乐馆: /music/ || icon-music
    追番页: /bangumis/ || icon-bilibili1
    相册集: /album/ || icon-images
    小空调: /air-conditioner/ || icon-fan

  关于:
    关于本人: /about/ || icon-zhifeiji
    闲言碎语: /essay/ || icon-lightbulb
    随便逛逛: javascript:toRandomPost() || icon-shoe-prints1
```

必须是 `/xxx/`，后面`||`分开，然后写图标名。

如果不希望显示图标，图标名可不写。

::: warning 警告
注意： 导航的文字可自行更改
:::

例如：

```yml
menu:
  Article:
    Tunnel: /archives/ || icon-box-archive
    Classification: /categories/ || icon-shapes
    Label: /tags/ || icon-tags

  Friend:
    Friends account: /link/ || icon-link
    Moments: /fcircle/ || icon-artstation
    Message board: /comments/ || icon-envelope

  My:
    Music Hall: /music/ || icon-music
    Chasing: /bangumis/ || icon-bilibili1
    Album Set: /album/ || icon-images
    Conditioning: /air-conditioner/ || icon-fan

  About: /about/ || icon-zhifeiji
```

![导航菜单相关配置](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433a6d2041e3.png)

## 导航栏设置

```yml
# nav相关配置
nav:
  enable: false
  travelling: false
  clock: true
  menu:
    - title: 网页
      item:
        - name: 博客
          link: https://anzhiy.cn/
          icon: /img/favicon.png
    - title: 项目
      item:
        - name: 安知鱼图床
          link: https://image.anzhiy.cn/
          icon: https://image.anzhiy.cn/favicon.ico
```

| 参数           | 解释                                                      |
| -------------- | --------------------------------------------------------- |
| enable         | 是否启用 nav 左侧项目按钮，仅控制左侧项目按钮             |
| travelling     | 是否启用 nav 开往按钮                                     |
| clock          | 是否启用 nav 左侧[和风天气](https://widget.qweather.com/) |
| menu           | nav 左侧项目按钮内的菜单                                  |
| menu.title     | nav 左侧项目按钮内的菜单标题                              |
| menu.item      | nav 左侧项目按钮内的菜单项                                |
| menu.item      | nav 左侧项目按钮内的菜单项                                |
| menu.item.name | nav 左侧项目按钮内的菜单项标题                            |
| menu.item.link | nav 左侧项目按钮内的菜单项链接                            |
| menu.item.icon | nav 左侧项目按钮内的菜单项图标                            |

![](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433aa002f288.webp)

## 代码块配置

::: info
代码块中的所有功能只适用于 Hexo 自带的代码渲染
如果使用第三方的渲染器，不一定会有效
:::

### 代码高亮主题

`AnZhiYu` 支持 6 种代码高亮样式：

- darker
- pale night
- light
- ocean
- mac
- mac light

修改 `主题配置文件`

```yml
highlight_theme: light
```

::: tabs#代码块样式

@tab darker

![darker](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433acf03c029.png)

@tab pale night

![pale night](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433acf02c312.png)

@tab light

![light](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433acf0382d1.png)

@tab ocean

![ocean](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433acf03185f.png)

@tab mac

![mac](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433acf031c0d.png)

@tab mac light

![mac light](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433acf038752.png)

:::

### 代码复制

主题支持代码复制功能，修改 `主题配置文件`

```yaml
highlight_copy: true
```

![代码复制](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433ae3ceca9b.png)

### 代码框展开/关闭

在默认情况下，代码框自动展开，可设置是否所有代码框都关闭状态，点击>可展开代码

- true 全部代码框不展开，需点击>打开
- false 代码框展开，有>点击按钮
- none 不显示>按钮

修改 主题配置文件

```yaml
highlight_shrink: true #代码框不展开，需点击 '>' 打开
```

::: info

你也可以在 post/page 页对应的 markdown 文件 front-matter 添加 highlight_shrink 来独立配置。

当**主题配置文件**中的 `highlight_shrink` 设为 true 时，可在 front-matter 添加 `highlight_shrink: false` 来单独配置文章展开代码框。

当**主题配置文件**中的 `highlight_shrin`k 设为 false 时，可在 front-matter 添加 `highlight_shrink: true `来单独配置文章收缩代码框。

:::

`highlight_shrink: true`
![](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433b421da871.png!blogimg)
`highlight_shrink: false`
![](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433b421dea9b.png!blogimg)
`highlight_shrink: none`
![](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433b421df10e.png!blogimg)

### 代码换行

在默认情况下，Hexo 在编译的时候不会实现代码自动换行。如果你不希望在代码块的区域里有横向滚动条的话，那么你可以考虑开启这个功能。

修改 `主题配置文件`

```yaml
code_word_wrap: true
```

如果你是使用 `highlight` 渲染，需要找到你站点的 Hexo 配置文件`_config.yml`，将 `line_number` 改成 `false`:

```yml
highlight:
  enable: true
  line_number: false # <- 改这里
  auto_detect: false
  tab_replace:
```

如果你是使用 `prismjs` 渲染，需要找到你站点的 Hexo 配置文件`_config.yml`，将 `line_number` 改成 `false`:

```yaml
prismjs:
  enable: false
  preprocess: true
  line_number: false # <- 改这里
  tab_replace: ""
```

> 设置`code_word_wrap`之前:

![](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433b76aa968f.png!blogimg)

> 设置`code_word_wrap`之后:

![](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433b76aa955d.png!blogimg)

### 代码高度限制

可配置代码高度限制，超出的部分会隐藏，并显示展开按钮，默认 330，可配置为 `false`。

```yml
highlight_height_limit: false # unit: px
```

注意：

1. 单位是 `px`，直接添加数字，如 200

2. 实际限制高度为 `highlight_height_limit + 30 px` ，多增加 30px 限制，目的是避免代码高度只超出 highlight_height_limit 一点时，出现展开按钮，展开没内容。

3. 不适用于隐藏后的代码块（ css 设置 display: none）

## 图标配置

AnZhiYu 支持 [font-awesome v6](https://fontawesome.com/icons?from=io) 图标(需配置自己的图标)，与 [fontawesome](https://fontawesome.com/) 图标(需开启`fontawesome`)，使用阿里图标需配置主题配置文件中`iconfont`字段，默认内置部分图标，修改主题配置文件，视频教程: [安知鱼主题社交图标配置](https://www.bilibili.com/video/BV1Cv4y1n7FW/?spm_id_from=333.999.0.0&vd_source=4d9717102296e4b7a60ecdfad55ae2dd)

```yaml
icons:
  ali_iconfont: # 阿里图标symbol 引用链接，主题会进行加载 symbol 引用，使用icon开头即可svg引入
  fontawesome: false #是否启用fontawesome6图标
  fontawesome_animation_css: #fontawesome_animation 如果有就会加载，示例值：https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@1.0.17/lib/assets/font-awesome-animation.min.css
```

社交图标，书写格式 `图标名：url || 描述性文字 || hover 动画名`

```yaml
# social settings (社交图标设置)
# formal:
#   icon: link || the description || Animation
social:
  # Github: https://github.com/anzhiyu-c || icon-gitHub || faa-tada
  # Email: https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=2268025923@qq.com || icon-youxiang || faa-tada
  # RSS: atom.xml || icon-rss || faa-tada
  # BiliBili: https://space.bilibili.com/372204786 || icon-bilibili || faa-tada
  # QQ: tencent://Message/?Uin=2268025923&amp;websiteName=local.edu.com:8888=&amp;Menu=yes || icon-QQ1 || faa-tada
```

如需 hover 动画生效需配置`fontawesome_animation_css`

```yaml
icons:
  ali_iconfont: # 阿里图标链接，主题会进行加载
  fontawesome: true #是否启用fontawesome6图标
  fontawesome_animation_css: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@1.0.17/lib/assets/font-awesome-animation.min.css #fontawesome_animation 如果有就会加载
```

## 顶部图

::: info
如果不要显示顶部图，可直接配置 `disable_top_img: true`
:::

::: tip
顶部图的获取顺序，如果都没有配置，则不显示顶部图。

1.  页面顶部图的获取顺序：

    `各自配置的 top_img > 配置文件的 default_top_img`

2.  文章页顶部图的获取顺序：

    `各自配置的 top_img > cover > 配置文件的 default_top_img`

:::

配置中的值：

| 配置             | 解释                                                                |
| ---------------- | ------------------------------------------------------------------- |
| index_img        | 主页的 top_img                                                      |
| default_top_img  | 默认的 top_img，当页面的 top_img 没有配置时，会显示 default_top_img |
| archive_img      | 归档页面的 top_img                                                  |
| tag_img          | tag 子页面 的 默认 top_img                                          |
| tag_per_img      | tag 子页面的 top_img，可配置每个 tag 的 top_img                     |
| category_img     | category 子页面 的 默认 top_img                                     |
| category_per_img | category 子页面的 top_img，可配置每个 category 的 top_img           |

其它页面 （tags/categories/自建页面）和 文章页 的 `top_img` ，请到对应的 md 页面设置 `front-matter` 中的 `top_img`

以上所有的 `top_img` 可配置以下值

| 配置的值                                                                                                                                    | 效果                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 留空                                                                                                                                        | 显示默认的 top_img（如有），否则显示默认的顔色<br/>（文章页 top_img 留空的话，会显示 cover 的值） |
| img 链接                                                                                                                                    | 图片的链接，显示所配置的图片                                                                      |
| 顔色(<br/>HEX 值 - #0000FF<br/>RGB 值 - rgb(0,0,255)<br/>顔色单词 - orange<br/>渐变色 - linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%) | 对应的顔色                                                                                        |
| transparent                                                                                                                                 | 透明                                                                                              |
| false                                                                                                                                       | 不显示 top_img                                                                                    |

并不推荐为每个 tag 和每个 category 都配置不同的顶部图，因为配置太多会拖慢生成速度

```yaml
tag_per_img：
  aplayer: https://xxxxxx.png
  android: ddddddd.png

category_per_img：
  随想: hdhdh.png
  推荐: ddjdjdjd.png
```

## 文章置顶

【推荐】`hexo-generator-index` 从 2.0.0 开始，已经支持文章置顶功能。你可以直接在文章的 `front-matter` 区域里添加 `sticky: 1` 属性来把这篇文章置顶。数值越大，置顶的优先级越大。

## 文章封面

文章的 markdown 文档上,在 `Front-matter` 添加 `cover` ,并填上要显示的图片地址。

如果不配置 `cover`,可以设置显示默认的 cover。

如果不想在首页显示 cover, 可以设置为 `false。`

> 文章封面的获取顺序 `Front-matter` 的 `cover` > `配置文件的 default_cover` > `false`

修改 `主题配置文件`

```yaml
cover:
  # 是否显示文章封面
  index_enable: true
  aside_enable: true
  archives_enable: true
  # 封面显示的位置
  # 三个值可配置 left , right , both
  position: both
  # 当没有设置cover时，默认的封面显示
  default_cover:
```

| 参数            | 解释                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| index_enable    | 主页是否显示文章封面图                                                                                                   |
| aside_enable    | 侧栏是否显示文章封面图                                                                                                   |
| archives_enable | 归档页面是否显示文章封面图                                                                                               |
| position        | 主页卡片文章封面的显示位置<br/>- left：全部显示在左边<br/>- right：全部显示在右边<br/>- both：封面位置以左右左右轮流显示 |
| default_cover   | 默认的 cover, 可配置图片链接/顔色/渐变色等                                                                               |

当配置多张图片时,会随机选择一张作为 cover.此时写法应为

```yaml
default_cover:
  - https://file.crazywong.com/gh/jerryc127/CDN@latest/cover/default_bg.png
  - https://file.crazywong.com/gh/jerryc127/CDN@latest/cover/default_bg2.png
  - https://file.crazywong.com/gh/jerryc127/CDN@latest/cover/default_bg3.png
```

![](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433ddeabbae4.webp!blogimg)

## 文章 meta 显示

这个选项是用来显示文章的相关信息的。

修改 `主题配置文件`

```yaml
post_meta:
  page:
    date_type: both # created or updated or both 主页文章日期是创建日或者更新日或都显示
    date_format: relative # date/relative 显示日期还是相对日期
    categories: true # true or false 主页是否显示分类
    tags: true # true or false 主页是否显示标签
    label: true # true or false 显示描述性文字
  post:
    date_type: both # created or updated or both 文章页日期是创建日或者更新日或都显示
    date_format: relative # date/relative 显示日期还是相对日期
    categories: true # true or false 文章页是否显示分类
    tags: true # true or false 文章页是否显示标签
    label: true # true or false 显示描述性文字
```

::: tabs#post_meta

@tab 主页

![主页](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433ede80d024.webp)

@tab 文章页

![文章页](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433ede8166d0.png)

:::

`date_format`配置时间显示明确时间还是相对时间

::: tabs#date_format

@tab 相对时间

![相对时间](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433eeb22fcca.webp!blogimg)

@tab 明确时间

![明确时间](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433eeb22fd0f.webp!blogimg)

:::

## 文章版权

为你的博客文章展示文章版权和许可协议。

修改 `主题配置文件`

```yaml
post_copyright:
  enable: true
  decode: false
  author_href:
  license: CC BY-NC-SA 4.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

由于 `Hexo 4.1` 开始，默认对网址进行解码，以至于如果是中文网址，会被解码，可设置 `decode: true` 来显示中文网址。

如果有文章（例如：转载文章）不需要显示版权，可以在文章 `Front-matter` 单独设置

```yml
copyright: false
```

支持对单独文章设置版权信息，可以在文章 `Front-matter` 单独设置

```yaml
copyright_author: xxxx
copyright_author_href: https://xxxxxx.com
copyright_url: https://xxxxxx.com
copyright_info: 此文章版权归xxxxx所有，如有转载，请注明来自原作者
```

**版权显示截图**

![版权显示截图](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433efcd40633.png!blogimg)

## 文章打赏

在你每篇文章的结尾，可以添加打赏按钮。相关二维码可以自行配置。

对于没有提供二维码的，可配置一张软件的 icon 图片，然后在 link 上添加相应的打赏链接。用户点击图片就会跳转到链接去。

link 可以不写，会默认为图片的链接。coinAudio 为投币的音频。

修改 `主题配置文件`

```yaml
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

![文章打赏截图](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433f0b4b8693.png)

## TOC

在文章页，会有一个目录，用于显示 TOC。修改 `主题配置文件`

```yml
toc:
  post: true
  page: true
  number: true
  expand: false
  style_simple: false # for post
```

| 属性         | 解释                                          |
| ------------ | --------------------------------------------- |
| post         | 文章页是否显示 TOC                            |
| page         | 普通页面是否显示 TOC                          |
| number       | 是否显示章节数                                |
| expand       | 是否展开 TOC                                  |
| style_simple | 简洁模式（侧边栏只显示 TOC, 只对文章页有效 ） |

::: tabs#Toc 截图

@tab Toc PC

![Toc PC](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433f2bea649b.png!blogimg)

@tab Toc Mobile

![Toc Mobile](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433f2be9811f.png!blogimg)

@tab style_simple: true

![style_simple: true](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433f2beaa447.png!blogimg)

:::

**为特定的文章配置**

在你的文章 md 文件的头部，加入 toc_number 和 toc，并配置 true 或者 false 即可。

主题会优先判断文章 Markdown 的 Front-matter 是否有配置，如有，则以 Front-matter 的配置为准。否则，以主题配置文件中的配置为准

## 相关文章

::: warning 警告
当文章封面设置为 `false` 时，或者没有获取到封面配置，相关文章背景将会显示主题色。
:::

相关文章推荐的原理是根据文章 tags 的比重来推荐

修改 `主题配置文件`

```yml
related_post:
  enable: true
  limit: 6 # 显示推荐文章数目
  date_type: created # or created or updated 文章日期显示创建日或者更新日
```

![相关文章截图](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433f4e1be3af.webp!blogimg)

## 文章过期提醒

可设置是否显示文章过期提醒，以更新时间为基准。

```yml
# Displays outdated notice for a post (文章过期提醒)
noticeOutdate:
  enable: true
  style: flat # style: simple/flat
  limit_day: 365 # When will it be shown
  position: top # position: top/bottom
  message_prev: It has been
  message_next: days since the last update, the content of the article may be outdated.
```

`limit_day`： 距离更新时间多少天才显示文章过期提醒

`message_prev`： 天数之前的文字

`message_next`：天数之后的文字

::: tabs#文章过期提醒截图

@tab style: flat

![style: flat](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433f770b38e8.webp!blogimg)

@tab style: simple

![style: simple](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433f770b2017.webp!blogimg)

:::

## 文章编辑按钮

在文章标题旁边显示一个编辑按钮，点击会跳转到对应的链接去。

```yaml
# Post edit
# Easily browse and edit blog source code online.
post_edit:
  enable: false
  # url: https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name/
  # For example: https://github.com/jerryc127/butterfly.js.org/edit/main/source/
  url:
```

![文章编辑按钮截图](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433f83e60756.webp)

## 文章分页按钮

::: warning 警告
当文章封面设置为 `false` 时，或者没有获取到封面配置，分页背景将会显示主题色。
:::

可设置分页的逻辑，也可以关闭分页显示

```yaml
# post_pagination (分页)
# value: 1 || 2 || false
# 1: The 'next post' will link to old post
# 2: The 'next post' will link to new post
# false: disable pagination
post_pagination: false
```

|          参数          |         解释         |
| :--------------------: | :------------------: |
| post_pagination: false |     关闭分页按钮     |
|   post_pagination: 1   | 下一篇显示的是旧文章 |
|   post_pagination: 2   | 下一篇显示的是新文章 |

![文章分页截图](https://img02.anzhiy.cn/adminuploads/1/2023/04/10/6433f8f0876ae.webp)
