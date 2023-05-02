---
lang: zh-CN
title: 页面配置
description: 安知鱼主题页面配置
---

::: warning 警告
本教程更新于 2023 年 4 月 28 日，教程的内容针对最新的 anzhiyu 主题(如果你是旧版本，教程会有出入，请留意)
🐟 安知鱼 已经更新到 [1.1.8](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases/tag/1.1.8)
:::

## Front-matter 的基本认识

`Front-matter` 是 `markdown` 文件最上方以 `---` 分隔的区域，用于指定个别档案的变数。

其中又分为两种

1. Page Front-matter 用于页面配置
2. Post Front-matter 用于文章页配置

::: info 提示
如果标注可选的参数，可根据自己需要添加，不用全部都写在 markdown 里
:::

::: tabs

@tab:active Page Front-matter

```markdown
---
title:
date:
updated:
type:
comments:
description:
keywords:
top_img:
mathjax:
katex:
aside:
aplayer:
highlight_shrink:
type:
---
```

| 写法             | 解释                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------ |
| title            | 【必需】页面标题                                                                     |
| date             | 【必需】页面创建日期                                                                 |
| type             | 【必需】标签、分类、关于、音乐馆、友情链接、相册、相册详情、朋友圈、即刻页面需要配置 |
| updated          | 【可选】页面更新日期                                                                 |
| description      | 【可选】页面描述                                                                     |
| keywords         | 【可选】页面关键字                                                                   |
| comments         | 【可选】显示页面评论模块(默认 true)                                                  |
| top_img          | 【可选】页面顶部图片                                                                 |
| mathjax          | 【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false)   |
| katex            | 【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false)       |
| aside            | 【可选】显示侧边栏 (默认 true)                                                       |
| aplayer          | 【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的音乐 配置              |
| highlight_shrink | 【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置)         |

@tab Post Front-matter

```markdown
---
title:
date:
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
swiper_index: 1
top_group_index: 1
background: "#fff"
---
```

| 写法                  | 解释                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------- |
| title                 | 【必需】文章标题                                                                            |
| date                  | 【必需】文章创建日期                                                                        |
| updated               | 【可选】文章更新日期                                                                        |
| tags                  | 【可选】文章标签                                                                            |
| categories            | 【可选】文章分类                                                                            |
| keywords              | 【可选】文章关键字                                                                          |
| description           | 【可选】文章描述                                                                            |
| top_img               | 【可选】文章顶部图片                                                                        |
| cover                 | 【可选】文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空) |
| comments              | 【可选】显示文章评论模块(默认 true)                                                         |
| toc                   | 【可选】显示文章 TOC(默认为设置中 toc 的 enable 配置)                                       |
| toc_number            | 【可选】显示 toc_number(默认为设置中 toc 的 number 配置)                                    |
| toc_style_simple      | 【可选】显示 toc 简洁模式                                                                   |
| copyright             | 【可选】显示文章版权模块(默认为设置中 post_copyright 的 enable 配置)                        |
| copyright_author      | 【可选】文章版权模块的`文章作者`                                                            |
| copyright_author_href | 【可选】文章版权模块的`文章作者`链接                                                        |
| copyright_url         | 【可选】文章版权模块的`文章链接`链接                                                        |
| copyright_info        | 【可选】文章版权模块的版权声明文字                                                          |
| mathjax               | 【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false)          |
| katex                 | 【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false)              |
| aplayer               | 【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的`音乐` 配置                   |
| highlight_shrink      | 【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置)                |
| aside                 | 【可选】显示侧边栏 (默认 true)                                                              |
| swiper_index          | 【可选】首页轮播图配置 index 索引，数字越小越靠前                                           |
| top_group_index       | 【可选】首页右侧卡片组配置, 数字越小越靠前                                                  |
| background            | 【可选】文章背景可配置为 16 进制颜色值                                                      |

1. 首页轮播图配置: `swiper_index`, 数字越小越靠前
2. 首页卡片配置: `top_group_index`, 数字越小越靠前
3. page 中`background`, 可配置为 16 进制颜色值

:::

只需要在你的文章顶部的`Front-matter`配置这两个字段即可显示轮播图和推荐卡片

## 标签页

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

   ```bash
   hexo new page tags
   ```

3. 你会找到 `source/tags/index.md` 这个文件

4. 修改这个文件：
   记得添加 `type: "tags"`

```markdown
---
title: 标签
date: 2021-04-06 12:01:51
type: "tags"
comments: false
top_img: false
---
```

| 参数     | 解释                                                             |
| -------- | ---------------------------------------------------------------- |
| type     | 【必须】页面类型，必须为 tags                                    |
| comments | 【可选】是否显示评论                                             |
| top_img  | 【可选】是否显示顶部图                                           |
| orderby  | 【可选】排序方式 ：random/name/length                            |
| order    | 【可选】排序次序： 1, asc for ascending; -1, desc for descending |

![标签页详情](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/6432634045c13.png!blogimg)
![标签页](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/6432637cecf77.png!blogimg)

## 分类页

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

   ```bash
   hexo new page categories
   ```

3. 你会找到 `source/categories/index.md` 这个文件

4. 修改这个文件：
   记得添加 `type: "categories"`

```markdown
---
title: 分类
date: 2022-02-23 17:56:00
aside: false
top_img: false
type: "categories"
---
```

::: info
分类页面存在自定义界面，本站使用自定义页面显示。

::: details 自定义分类界面

1. 首先去除`source/categories/index.md`文件中的`type: "categories"`
2. 修改`source/categories/index.md`文件，具体内容可自行修改链接与文字。

```markdown
---
title: 分类
date: 2022-02-23 17:56:00
aside: false
top_img: false
---

<style>
  #libCategories .card-wrap:hover .card-info:after {
    width: 300%;
  }
</style>
<link rel="stylesheet" type="text/css" href="https://npm.elemecdn.com/js-heo@1.0.11/3dCard/no3d.css">

<div id='libCategories'>
<div id="lib-cards" class="container">

<a href='javascript:void(0);' onClick='pjax.loadUrl("/categories/前端开发/")'>
<card data-image="https://img02.anzhiy.cn/adminuploads/1/2022/09/05/6315e144528fb.webp">
<h1 slot="header">前端</h1>
<p slot="content">前端学习之路。</p>
</card>
</a>

<a href='javascript:void(0);' onClick='pjax.loadUrl("/categories/大学生涯/")'>
  <card data-image="https://img02.anzhiy.cn/adminuploads/1/2022/09/05/6315e1433f197.webp">
    <h1 slot="header">大学生活</h1>
    <p slot="content">在大学期间发生的一些事儿。</p>
  </card>
</a>

<a href='javascript:void(0);' onClick='pjax.loadUrl("/categories/生活日常/")'>
  <card data-image="https://img02.anzhiy.cn/adminuploads/1/2022/09/05/6315e142a69a9.webp">
    <h1 slot="header">生活</h1>
    <p slot="content">和好朋友👬们一起经历的有趣事。</p>
  </card>
</a>

</div>
</div>

<script src='https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/2.6.14/vue.min.js' data-pjax></script>

<script type="text/javascript" src="https://npm.elemecdn.com/anzhiyu-theme-static@1.0.7/no3d/no3d.js" data-pjax></script>
```

:::
:::

![分类页](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/643263a321142.png!blogimg)

## 首页即刻说说页面配置

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

```bash
  hexo new page essay
```

3. 你会找到 `source/essay/index.md` 这个文件

4. 修改这个文件：
   记得添加 `type: "essay"`

```MARKDOWN
  ---
  title: 即刻短文
  date: 2020-07-22 22:06:17
  comments: true
  aside: false
  top_img: false
  type: essay
  ---
```

```yml
- class_name: 即刻短文
  essay_list:
    - content: 音乐支持了参数设置自定义歌单
      date: 2023/01/02
      link: https://anzhiy.cn/music/?id=7269231710&server=tencent
    - content: 关于页的打赏仿了b站的充电功能，使用svg绘图➕一些动画参数移动，应该不会被b站警告吧😜，另外文章也支持了顶部随机b站同款春秋冬banner。
      date: 2022/12/18
    - content: React中不能直接修改state的一个重要原因是在性能优化时的prueComponment会进行浅层比较会认为是用一个对象且不能进入队列中批量更新
      date: 2022/12/10
    - content: 好耶，马上就可以放假回家了！好想家里的好吃的😋！才不是想捏妹妹的脸了
      date: 2022/12/06
    - content: 全局音乐的动画也处理好了, nice!
      date: 2022/11/13
    - content: 把页脚, 首页顶部全都魔改到本地了, 方便后续魔改, 音乐也改成胶囊的样式了, 其实还是想让胶囊可拖拽, 不可点击改变歌词位置的, 但是弄了半天都没弄好就放弃了
      date: 2022/11/13
    - content: 朋友圈船新版本终于写完了, 耶✌️
      date: 2022/11/05
      link: https://anzhiy.cn/album/
    - content: 终于把相册集搞定了, 耶✌️, 瀑布流在滑动滚动条一个视口范围上下100的情况执行一次, 到底部停止监听让性能高了好多，再也不会布局混乱🤪了
      date: 2022/10/25
      link: https://anzhiy.cn/album/
    - content: 搜索🔍支持缩略图显示啦（默认获取文章内容的第一张图片）
      date: 2022/10/23 08:00:00
      from: 安知鱼
    - content: 遇见彩虹🌈吃定彩虹
      date: 2022/10/23 10:00:00
      image:
        - https://bu.dusays.com/2023/04/09/64329399e285d.webp
        - https://bu.dusays.com/2023/04/09/64329399aa3bc.webp
        - https://bu.dusays.com/2023/04/09/6432939996dd7.webp
    - content: ThreeJs API真多丫
      date: 2022/10/19
    - content: 妹妹强制要求我买走了她的两幅画 -¥30
      date: 2022/10/02
      image:
        - https://bu.dusays.com/2023/04/09/643293997b92b.jpeg
    - content: 歌曲推荐
      date: 2022/09/25
      aplayer:
        server: tencent
        id: 001FGQba3i10mw
    - content: 做了一个噩梦, 梦到从楼顶坠下去了。😷
      date: 2022/09/24
    - content: JOJO是真的好看！
      date: 2022/09/21
      link: https://www.bilibili.com/bangumi/play/ss39431?spm_id_from=333.337.0.0
```

主题配置文件中开启`menu`中关于和闲言碎语的注释，导航栏闲言碎语，注意缩进！！！

```yml
menu:
  # 文章:
  #   隧道: /archives/ || icon-box-archive
  #   分类: /categories/ || icon-shapes
  #   标签: /tags/ || icon-tags

  # 友链:
  #   友人帐: /link/ || icon-link
  #   朋友圈: /fcircle/ || icon-artstation
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

主题配置文件中开启`essay.enable`，自行设置顶部模块背景，注意缩进！！！

```yml
# 即刻页面配置
essay:
  enable: true
  top_background:
```

::: warning 警告
示例数据中的图片不保证可用性，请自行更换为您自己的图床链接。图床相关知识=>[我的图床方案](https://anzhiy.cn/posts/2785.html)
:::

![即刻说说页面](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/643263bdd2aa4.png!blogimg)

## 友情链接配置

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

   ```bash
   hexo new page link
   ```

3. 你会找到 `source/link/index.md` 这个文件

4. 修改这个文件：
   记得添加 `type: "link"`

   ```MARKDOWN
     ---
     title: link
     date: 2020-12-01 22:19:45
     type: 'link'
     ---
   ```

新建文件`[blog]\source\_data\link.yml`,没有`_data`文件夹的话也请自己新建。以下是默认友链格式示例(~~自己写的教程，夹带点私货不过分吧，嘻嘻~~)。打开`[blog]\source\_data\link.yml`，输入：

```yml
- class_name: 框架
  flink_style: flexcard
  link_list:
    - name: Hexo
      hundredSuffix: ""
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简单且强大的网站框架
    - name: anzhiyu主题
      link: https://anzhiy.cn/
      avatar: https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg
      descr: 生活明朗，万物可爱
      siteshot: https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg

- class_name: 推荐博客
  flink_style: flexcard
  link_list:
    - name: 安知鱼
      hundredSuffix: ""
      link: https://anzhiy.cn/
      avatar: https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg
      descr: 生活明朗，万物可爱
      siteshot: https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg

- class_name: 小伙伴
  class_desc: 那些人，那些事
  flink_style: anzhiyu
  link_list:
    - name: 安知鱼
      hundredSuffix: ""
      link: https://anzhiy.cn/
      avatar: https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg
      descr: 生活明朗，万物可爱
```

会根据 flink_style 产生两种效果，可选值有`flexcard`或者`anzhiyu`

当友链数目超过 50 以后会触发，与博主共同进步板块，可以自行配置 `hundredSuffix: "!w120"`,该参数可以解决共同进步板块头像质量问题，配置后共同进步板块的头像会添加该后缀。

```yml
flink_style: flexcard || anzhiyu
```

主题配置文件中开启`menu`中友链和友人帐的注释，注意缩进！！！

```yml
menu:
  # 文章:
  #   隧道: /archives/ || icon-box-archive
  #   分类: /categories/ || icon-shapes
  #   标签: /tags/ || icon-tags

  友链:
    友人帐: /link/ || icon-link
  #   朋友圈: /fcircle/ || icon-artstation
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

![友情链接页](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/6432641611b97.png!blogimg)

## 关于页面配置

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

   ```bash
   hexo new page about
   ```

3. 你会找到 `source/about/index.md` 这个文件

4. 修改这个文件：
   记得添加 `type: "about"`

   ```MARKDOWN
     ---
     title: 关于
     date: 2021-03-30 15:57:51
     aside: false
     top_img: false
     background: "#f8f9fe"
     comments: false
     type: "about"
     ---
   ```

5. 主题配置文件中开启`menu`中关于和关于本人的注释，注意缩进！！！

   ```yml
   menu:
     # 文章:
     #   隧道: /archives/ || icon-box-archive
     #   分类: /categories/ || icon-shapes
     #   标签: /tags/ || icon-tags

     友链:
       友人帐: /link/ || icon-link
     #   朋友圈: /fcircle/ || icon-artstation
     #   留言板: /comments/ || icon-envelope

     我的:
       音乐馆: /music/ || icon-music
     #   追番页: /bangumis/ || icon-bilibili1
     #   相册集: /album/ || icon-images
     #   小空调: /air-conditioner/ || icon-fan

     关于:
       关于本人: /about/ || icon-zhifeiji
       闲言碎语: /essay/ || icon-lightbulb
       #   随便逛逛: javascript:toRandomPost() || icon-shoe-prints1
   ```

主题配置文件中开启`menu`中关于和关于本人的注释，注意缩进！！！

```yml
menu:
  # 文章:
  #   隧道: /archives/ || icon-box-archive
  #   分类: /categories/ || icon-shapes
  #   标签: /tags/ || icon-tags

  友链:
    友人帐: /link/ || icon-link
  #   朋友圈: /fcircle/ || icon-artstation
  #   留言板: /comments/ || icon-envelope

  # 我的:
  #   音乐馆: /music/ || icon-music
  #   追番页: /bangumis/ || icon-bilibili1
  #   相册集: /album/ || icon-images
  #   小空调: /air-conditioner/ || icon-fan

  关于:
    关于本人: /about/ || icon-zhifeiji
    闲言碎语: /essay/ || icon-lightbulb
    #   随便逛逛: javascript:toRandomPost() || icon-shoe-prints1
```

新建`source/_data/about.yml`，输入以下内容

```yml
- class_name: 关于页
  subtitle: 生活明朗，万物可爱✨
  avatarImg: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.0/img/avatar.webp
  name: 陈志伟
  description: 是一名 前端工程师、学生、独立开发者、博主
  aboutsiteTips:
    tips: 追求
    title1: 源于
    title2: 热爱而去 感受
    word:
      - 学习
      - 生活
      - 程序
      - 体验
  helloAbout: Hello there!
  skillsTips:
    tips: 技能
    title: 开启创造力
  careers:
    tips: 生涯
    title: 无限进步
    item:
      - EDU,软件工程专业
    img: https://img02.anzhiy.cn/adminuploads/1/2022/09/26/6330e9bcc39cc.png
  statistic:
    link: /archives
    text: 文章隧道
    cover: https://img02.anzhiy.cn/adminuploads/1/2022/09/23/632d634f8376d.jpg
  map:
    title: 我现在住在
    StrengthenTitle: 中国，长沙市
    background: https://img02.anzhiy.cn/adminuploads/1/2022/09/24/632e6f48981d8.jpg
    backgroundDark: https://img02.anzhiy.cn/adminuploads/1/2022/09/26/6330ebf1f3e65.jpg
  selfInfo:
    selfInfoTips1: 生于
    selfInfoContentYear: 2002
    selfInfoTips2: 湖南信息学院
    selfInfoContent2: 软件工程
    selfInfoTips3: 现在职业
    selfInfoContent3: 大三学生👨‍🎓
  personalities:
    author_name: 执政官
    personality_type: ESFJ-A
    photo_url: https://img02.anzhiy.cn/adminuploads/1/2022/09/24/632e9643611ec.jpg
    personality_img: https://npm.elemecdn.com/anzhiyu-blog@2.0.8/img/svg/ESFJ-A.svg
    name_url: https://www.16personalities.com/ch/esfj-%E4%BA%BA%E6%A0%BC
  maxim:
    maxim_tips: 座右铭
    maxim_top: 生活明朗，
    maxim_bottom: 万物可爱。
  buff:
    buff_tips: 特长
    buff_top: 脑回路新奇的 酸菜鱼
    buff_bottom: 二次元指数 MAX
  game:
    game_tips: 爱好游戏
    game_title: 原神
    game_uid: "UID: 125766904"
    game_bg: https://img02.anzhiy.cn/adminuploads/1/2022/12/19/63a079ca63c8a.webp
  comic:
    comic_tips: 爱好番剧
    comic_title: 追番
    comic_list:
      - name: 约定的梦幻岛
        href: https://www.bilibili.com/bangumi/media/md5267750/?spm_id_from=666.25.b_6d656469615f6d6f64756c65.1
        cover: https://img02.anzhiy.cn/adminuploads/1/2022/12/13/63988658aa1b1.webp
      - name: 咒术回战
        href: https://www.bilibili.com/bangumi/media/md28229899/?spm_id_from=666.25.b_6d656469615f6d6f64756c65.1
        cover: https://img02.anzhiy.cn/adminuploads/1/2022/12/13/6398864e572ed.webp
      - name: 紫罗兰永恒花园
        href: https://www.bilibili.com/bangumi/media/md8892/?spm_id_from=666.25.b_6d656469615f6d6f64756c65.1
        cover: https://img02.anzhiy.cn/adminuploads/1/2022/12/13/639886315d658.webp
      - name: 鬼灭之刃
        href: https://www.bilibili.com/bangumi/media/md22718131/?spm_id_from=666.25.b_6d656469615f6d6f64756c65.1
        cover: https://img02.anzhiy.cn/adminuploads/1/2022/12/13/639886403d472.webp
      - name: JOJO的奇妙冒险 黄金之风
        href: https://www.bilibili.com/bangumi/media/md135652/?spm_id_from=666.25.b_6d656469615f6d6f64756c65.1
        cover: https://img02.anzhiy.cn/adminuploads/1/2022/12/13/6398862649585.webp
  like:
    like_tips: 关注偏好
    like_title: 数码科技
    like_bg: https://img02.anzhiy.cn/adminuploads/1/2022/09/24/632f0dd8f33c6.webp
    like_bottom: 手机、电脑软硬件
  music:
    music_tips: 音乐偏好
    music_title: 许嵩、民谣、华语流行
    music_bg: https://p2.music.126.net/Mrg1i7DwcwjWBvQPIMt_Mg==/79164837213438.jpg
    music_link: /music
  reward_list:
    - name: 海阔蓝
      amount: 8.8
      datatime: 2023-03-28
    - name: LK66
      amount: 66.6
      datatime: 2023-03-24
    - name: 张时貳
      amount: 6.6
      datatime: 2023-01-22
    - name: ZeroAf
      amount: 9.9
      datatime: 2022-12-14
    - name: LuckyWangXi
      amount: 6.6
      datatime: 2022-12-14
    - name: 刀中日月长
      amount: 10
      datatime: 2022-11-16
    - name: 鹿啵包
      amount: 10
      datatime: 2022-11-08
    - name: 疾速k
      amount: 50
      datatime: 2022-09-20
    - name: 伴舟先生大霖子
      amount: 4.03
      datatime: 2022-10-27
      suffix: 贝壳
    - name: Magica_0x0
      amount: 3.36
      datatime: 2022-10-07
      suffix: 贝壳
    - name: 名字就是要短像这样
      amount: 3.36
      datatime: 2022-08-25
      suffix: 贝壳
    - name: Leviathan520
      amount: 1.34
      datatime: 2022-08-23
      suffix: 贝壳
    - name: 托马斯
      amount: 10
      datatime: 2022-08-19
    - name: 哇是猫猫欸
      amount: 1.34
      datatime: 2022-08-19
      suffix: 贝壳

  extra: false
```

| 参数                           | 备选值/类型   | 解释                                                                                                                                                |
| ------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| class_name                     | 关于页        | 【必须】页面类                                                                                                                                      |
| subtitle                       | string        | 【必须】副标题                                                                                                                                      |
| avatarImg                      | url           | 【必须】头像链接                                                                                                                                    |
| name                           | string        | 【必须 作者名称                                                                                                                                     |
| description                    | string        | 【必须】描述                                                                                                                                        |
| aboutsiteTips                  | object        | 【必须】站点关于提示相关配置                                                                                                                        |
| aboutsiteTips.tips             | string        | 【必须】站点关于提示性文字                                                                                                                          |
| aboutsiteTips.title1           | string        | 【必须】站点关于标题文字 1                                                                                                                          |
| aboutsiteTips.title2           | string        | 【必须】站点关于标题文字 2                                                                                                                          |
| aboutsiteTips.word             | list          | 【必须】站点关于标题滚动文字                                                                                                                        |
| helloAbout                     | string        | 【必须】hello 文字                                                                                                                                  |
| skillsTips                     | object        | 【必须】技能相关配置                                                                                                                                |
| skillsTips.tips                | string        | 【必须】技能提示文字                                                                                                                                |
| skillsTips.title               | string        | 【必须】技能标题                                                                                                                                    |
| careers                        | object        | 【必须】生涯相关配置                                                                                                                                |
| careers.tips                   | string        | 【必须】生涯提示性文字                                                                                                                              |
| careers.title                  | string        | 【必须】生涯标题                                                                                                                                    |
| careers.item                   | list          | 【必须】生涯 item                                                                                                                                   |
| careers.img                    | string        | 【必须】生涯图片                                                                                                                                    |
| statistic                      | object        | 【必须】统计数据相关配置                                                                                                                            |
| statistic.link                 | url           | 【必须】统计数据按钮前往链接                                                                                                                        |
| statistic.text                 | string        | 【必须】统计数据按钮文字                                                                                                                            |
| map                            | object        | 【必须】地图相关配置                                                                                                                                |
| map.title                      | string        | 【必须】地图标题                                                                                                                                    |
| map.StrengthenTitle            | string        | 【必须】地图大标题                                                                                                                                  |
| map.background                 | url           | 【必须】地图亮色模式背景                                                                                                                            |
| map.backgroundDark             | url           | 【必须】地图暗色模式背景                                                                                                                            |
| selfInfo                       | object        | 【必须】作者相关信息配置                                                                                                                            |
| selfInfo.selfInfoTips1         | string        | 【必须】作者相关提示文字 1                                                                                                                          |
| selfInfo.selfInfoContentYear   | number        | 【必须】作者生日年份                                                                                                                                |
| selfInfo.selfInfoTips2         | string        | 【必须】作者相关提示文字 2                                                                                                                          |
| selfInfo.selfInfoContent2      | string        | 【必须】作者相关内容 2                                                                                                                              |
| selfInfo.selfInfoTips3         | string        | 【必须】作者相关提示文字 3                                                                                                                          |
| selfInfo.selfInfoContent3      | string        | 【必须】作者相关内容 3                                                                                                                              |
| personalities                  | object        | 【必须】作者性格相关配置                                                                                                                            |
| personalities.author_name      | string        | 【必须】作者性格名称                                                                                                                                |
| personalities.personality_type | string        | 【必须】作者性格类型                                                                                                                                |
| personalities.photo_url        | url           | 【必须】作者自拍图片                                                                                                                                |
| personalities.personality_img  | url           | 【必须】作者性格表述图片                                                                                                                            |
| personalities.name_url         | url           | 【必须】点击性格跳转到链接                                                                                                                          |
| maxim                          | object        | 【必须】座右铭相关配置                                                                                                                              |
| maxim.maxim_tips               | string        | 【必须】座右铭相关提示文字                                                                                                                          |
| maxim.maxim_top                | string        | 【必须】座右铭相关顶部文字                                                                                                                          |
| maxim.maxim_bottom             | string        | 【必须】座右铭相关底部文字                                                                                                                          |
| buff                           | object        | 【必须】特长相关配置                                                                                                                                |
| buff.buff_tips                 | string        | 【必须】特长相关提示文字                                                                                                                            |
| buff.buff_top                  | string        | 【必须】特长相关顶部文字                                                                                                                            |
| buff.buff_bottom               | string        | 【必须】特长相关底部文字                                                                                                                            |
| game                           | object        | 【必须】爱好游戏相关配置                                                                                                                            |
| game.game_tips                 | string        | 【必须】爱好游戏提示文字                                                                                                                            |
| game.game_title                | string        | 【必须】爱好游戏标题                                                                                                                                |
| game.game_uid                  | string        | 【必须】爱好游戏 uid                                                                                                                                |
| game.game_bg                   | url           | 【必须】爱好游戏背景                                                                                                                                |
| comic                          | object        | 【必须】追番相关配置，需要 5 条数据                                                                                                                 |
| comic.comic_tips               | string        | 【必须】追番相关提示文字                                                                                                                            |
| comic.comic_title              | string        | 【必须】追番相关标题                                                                                                                                |
| comic.comic_list               | list          | 【必须】追番相关列表                                                                                                                                |
| comic.comic_list.name          | string        | 【必须】追番 item 名称                                                                                                                              |
| comic.comic_list.href          | url           | 【必须】追番 item 链接                                                                                                                              |
| comic.comic_list.cover         | url           | 【必须】追番 item 的 cover                                                                                                                          |
| like                           | object        | 【必须】关注偏好相关配置                                                                                                                            |
| like.like_tips                 | string        | 【必须】关注偏好配置提示文字                                                                                                                        |
| like.like_title                | string        | 【必须】关注偏好配置标题                                                                                                                            |
| like.like_bg                   | url           | 【必须】关注偏好配置背景                                                                                                                            |
| like.like_bottom               | string        | 【必须】关注偏好配置底部文字                                                                                                                        |
| music                          | object        | 【必须】音乐偏好相关配置                                                                                                                            |
| music.music_tips               | string        | 【必须】音乐偏好提示性文字                                                                                                                          |
| music.music_title              | string        | 【必须】音乐偏好标题                                                                                                                                |
| music.music_bg                 | url           | 【必须】音乐偏好背景                                                                                                                                |
| music.music_link               | url           | 【必须】音乐偏好按钮链接                                                                                                                            |
| reward_list                    | object        | 【可选】打赏相关配置，如果不配置将没有打赏模块                                                                                                      |
| reward_list.name               | string        | 【必须】打赏 item 名称                                                                                                                              |
| reward_list.amount             | number        | 【必须】打赏 item 金额                                                                                                                              |
| reward_list.datatime           | Date          | 【必须】打赏 item 时间                                                                                                                              |
| reward_list.suffix             | string/元     | 【可选】打赏 item 后缀（默认元）                                                                                                                    |
| extra                          | boolean/false | 【必须】开发字段，表示额外模块内容可通过修改主题`themes/anzhiyu/layout/includes/anzhiyu/about-extra.pug`自行开发，修改为 true 后会引入该 pug 内容。 |

![关于页](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/6432643720ef6.png!blogimg)

## 配置相册页面

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

   ```bash
   hexo new page album
   ```

3. 你会找到 `source/album/index.md` 这个文件

4. 修改这个文件：
   记得添加 `type: "album"`

   ```MARKDOWN
     ---
     title: 相册集
     date: 2022-10-23 15:57:51
     aside: false
     top_img: false
     type: "album"
     ---
   ```

5. 主题配置文件中开启`menu`中我的和相册集的注释，注意缩进！！！

   ```yml
   menu:
     # 文章:
     #   隧道: /archives/ || icon-box-archive
     #   分类: /categories/ || icon-shapes
     #   标签: /tags/ || icon-tags

     友链:
       友人帐: /link/ || icon-link
     #   朋友圈: /fcircle/ || icon-artstation
     #   留言板: /comments/ || icon-envelope

     我的:
       音乐馆: /music/ || icon-music
       #   追番页: /bangumis/ || icon-bilibili1
       相册集: /album/ || icon-images
     #   小空调: /air-conditioner/ || icon-fan

     关于:
       #   关于本人: /about/ || icon-zhifeiji
       闲言碎语: /essay/ || icon-lightbulb
       #   随便逛逛: javascript:toRandomPost() || icon-shoe-prints1
   ```

新建文件`[blog]\source\_data\album.yml`,没有`_data`文件夹的话也请自己新建。打开`[blog]\source\_data\album.yml`，输入：

```yml
- class_name: 世界各地夕阳与风景
  path_name: /wordScenery
  type: 2
  description: 因为到不了世界各地，所以请网友们发来了各地的夕阳与风景🌇。
  cover: https://bu.dusays.com/2023/04/09/64329399d1175.jpg
  rowHeight: 220
  limit: 10
  lazyload: true
  btnLazyload: false
  url: false
  album_list:
    - date: 2022/10/26 01:00:00
      content: 湘潭的一角。
      address: 湖南湘潭
      from: 再吃一口就减肥
      image:
        - https://bu.dusays.com/2023/04/09/64329399db122.webp
    - date: 2022-10-25
      content: 洛阳暴雨后的天空。
      address: 河南洛阳
      from: 紫菜卷
      image:
        - https://bu.dusays.com/2023/04/09/64329399db122.webp
        - https://bu.dusays.com/2023/04/09/64329399db2e1.webp

- class_name: 我的日常
  path_name: /dailyPhoto
  type: 1
  description: 这里存放的是有关我自己的一些沙雕生活与有趣的事情。
  cover: https://bu.dusays.com/2023/04/09/64329399cea5a.webp
  album_list:
    - date: 2022-10-24
      content: 老妹的画
      image:
        - https://bu.dusays.com/2023/04/09/643293997b92b.jpeg
```

| 参数               | 备选值/类型 | 解释                                                                                                                             |
| ------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| class_name         | string      | 【必须】页面类                                                                                                                   |
| path_name          | url         | 【必须】当前相册路径                                                                                                             |
| type               | number      | 【必须】当前相册页面样式类型                                                                                                     |
| description        | string      | 【必须】当前相册描述                                                                                                             |
| cover              | url         | 【必须】当前相册 cover 图片                                                                                                      |
| rowHeight          | number      | 【可选】仅当 type 为 2 时有效，当前相册 rowHeight                                                                                |
| limit              | number      | 【可选】仅当 type 为 2 时有效，当前相册 一次懒加载的数量                                                                         |
| lazyload           | boolean     | 【可选】仅当 type 为 2 时有效，当前相册 lazyload 是否开启懒加载，默认懒加载为滚动懒加载，type 为 1 时懒加载不可关闭。            |
| btnLazyload        | boolean     | 【可选】仅当 type 为 2 且 lazyload 开启 时有效，当前相册 lazyload 懒加载的方式，默认为滚动懒加载，开启本选项后为按钮点击懒加载。 |
| album_list         | list        | 【必须】当前相册内图片列表                                                                                                       |
| url                | url         | 【可选】仅当 type 为 2 时有效，可以加载远程的 json 数据。                                                                        |
| album_list.date    | date        | 【必须】当前图片创建时间                                                                                                         |
| album_list.content | string      | 【必须】当前图片描述内容                                                                                                         |
| album_list.image   | list        | 【必须】当前图片集，可以多张                                                                                                     |
| album_list.from    | string      | 【可选】当前图片的创建人，未填写则不显示                                                                                         |
| album_list.address | string      | 【必须】当前图片地址                                                                                                             |

::: warning 警告
注意示例数据中的图片不保证可用性。
:::

由于相册页面需要很多的 page，所以在写数据的时候自行写入路径`path_name`，示例数据中有两个`path_name`，所以需要再创建两个页面

注意新建的页面必须与`path_name`一致。

```bash
  hexo new page dailyPhoto
  hexo new page wordScenery
```

你会找到 `source/dailyPhoto/index.md` 和`source/wordScenery/index.md`两个文件，这两个为相册集详情页

然后内容为以下内容, 需在详情页加上`type: "album_detail"`

```MARKDOWN
---
title: 日常生活
date: 2022-10-23 15:57:51
aside: false
top_img: false
type: "album_detail"
---
```

```MARKDOWN
---
title: 世界各地风景
date: 2022-10-23 15:57:51
aside: false
top_img: false
type: "album_detail"
---
```

`远程加载json示例数据`

```json
[
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0556.jpg",
    "alt": "IMG_0556.jpg",
    "title": "这是title"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0472.jpg",
    "alt": "IMG_0472.jpg"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0453.jpg",
    "alt": ""
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0931.jpg",
    "alt": ""
  }
]
```

::: tabs#相册页 type

@tab 相册页

![相册页](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/64326458a0f01.png!blogimg)

@tab 相册页 type: 1 样式

![相册页](https://img02.anzhiy.cn/adminuploads/1/2023/04/19/643f4351c8245.webp!blogimg)

@tab 相册页 type: 2 样式

![相册页](https://img02.anzhiy.cn/adminuploads/1/2023/04/19/643f42162d2f4.webp!blogimg)

:::

## 朋友圈页面配置

> 友链朋友圈[后端部署文档](https://fcircle-doc.yyyzyyyz.cn/#/backenddeploy)
> 项目地址: [https://github.com/Rock-Candy-Tea/hexo-circle-of-friends](https://github.com/Rock-Candy-Tea/hexo-circle-of-friends)

请注意朋友圈部署有一定难度，博主使用的为 server 部署，拉取后端代码后可将代码内的默认值改为自己的站点，theme 改为 common2，注意一定要使用`common2`，否则将无法拉取到自己的友链。

在 Hexo 博客根目录 `[blog]`下打开终端，输入

```bash
  hexo new page fcircle
```

打开`[blog]\source\fcircle\index.md`,添加一行`type: 'fcircle'`:

```md
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

主题配置文件中开启`friends_vue.enable`，自行设置[朋友圈后端地址](https://fcircle-doc.yyyzyyyz.cn/#/backenddeploy)和顶部模块背景，注意缩进！！！

::: warning 注意
注意后端爬取需使用`common2`
:::

```yml
# 朋友圈配置
friends_vue:
  enable: false
  vue_js: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.0/js/friends_vue/index.js
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
  vue_js: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.0/js/friends_vue/index.js
  apiurl: https://friends.anzhiy.cn/ # 朋友圈后端地址
  top_background: https://img02.anzhiy.cn/adminuploads/1/2022/08/21/630249e2df20f.jpg
```

其中`vue_js`参数，可以将`https://npm.elemecdn.com/anzhiyu-blog-static@1.0.0/js/friends_vue/index.js`中的
`friends.anzhiy.cn`替换为您的后端 url 然后使用

前端项目地址：[hexo-circle-of-friends-front](https://github.com/anzhiyu-c/hexo-circle-of-friends-front/)，也可以自行下载项目后，修改代码中的 url 变量路径`friends.anzhiy.cn`为你自己的，然后执行`npm run build`构建使用，

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

![朋友圈页](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/64326468190c2.png!blogimg)

## 音乐馆页配置

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

   ```bash
   hexo new page music
   ```

3. 你会找到 `source/music/index.md` 这个文件

4. 修改这个文件：
   记得添加 `type: "music"`

   ```markdown
   ---
   title: 音乐馆
   date: 2021-04-24 21:41:30
   type: music
   aplayer: true
   top_img: false
   comments: false
   aside: false
   ---
   ```

5. 新建 `source/json/music.json`，此 json 为切换歌单按钮的歌单数据。

   ```json
   [
     {
       "name": "青花瓷",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.4/青花瓷/青花瓷.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000002eFUFm2XYZ7z_2.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.4/青花瓷/青花瓷.lrc"
     },
     {
       "name": "稻香",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.1/周杰伦/稻香/稻香.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.1/周杰伦/稻香/稻香.lrc"
     },
     {
       "name": "晴天",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.2/晴天/晴天.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000000MkMni19ClKG_3.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.2/晴天/晴天.lrc"
     },
     {
       "name": "七里香",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.2/七里香/七里香.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000003DFRzD192KKD_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.2/七里香/七里香.lrc"
     },
     {
       "name": "花海",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music-jay@1.0.1/花海/花海.flac",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music-jay@1.0.1/花海/花海.lrc"
     },
     {
       "name": "反方向的钟",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music-jay@1.0.1/反方向的钟/反方向的钟.flac",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000000f01724fd7TH_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music-jay@1.0.1/反方向的钟/反方向的钟.lrc"
     },
     {
       "name": "兰亭序",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.1/周杰伦/兰亭序/兰亭序.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.1/周杰伦/兰亭序/兰亭序.lrc"
     },
     {
       "name": "说好的辛福呢",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.2/说好的辛福呢/说好的辛福呢.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.2/说好的辛福呢/说好的幸福呢.lrc"
     },
     {
       "name": "等你下课 (with 杨瑞代)",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.1/周杰伦/等你下课/等你下课.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000003bSL0v4bpKAx_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.1/周杰伦/等你下课/等你下课.lrc"
     },
     {
       "name": "我落泪情绪零碎",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.2/我落泪情绪零碎/我落泪情绪零碎.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000000bviBl4FjTpO_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.2/我落泪情绪零碎/我落泪情绪零碎.lrc"
     },
     {
       "name": "听妈妈的话",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.2/听妈妈的话/听妈妈的话.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000002jLGWe16Tf1H_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.2/听妈妈的话/听妈妈的话.lrc"
     },
     {
       "name": "明明就",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music-jay@1.0.1/明明就/明明就.flac",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000003Ow85E3pnoqi_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music-jay@1.0.1/明明就/明明就.lrc"
     },
     {
       "name": "我是如此相信",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music-jay@1.0.1/我是如此相信/我是如此相信.flac",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000001hGx1Z0so1YX_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music-jay@1.0.1/我是如此相信/我是如此相信.lrc"
     },
     {
       "name": "发如雪",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.3/发如雪/发如雪.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M0000024bjiL2aocxT_3.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.3/发如雪/发如雪.lrc"
     },
     {
       "name": "以父之名",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.3/以父之名/以父之名.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000000MkMni19ClKG_3.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.3/以父之名/以父之名.lrc"
     },
     {
       "name": "园游会",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.3/园游会/园游会.flac",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000003DFRzD192KKD_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.3/园游会/园游会.lrc"
     },
     {
       "name": "本草纲目",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.4/本草纲目/本草纲目.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000002jLGWe16Tf1H_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.4/本草纲目/本草纲目.lrc"
     },
     {
       "name": "龙卷风",
       "artist": "周杰伦",
       "url": "https://npm.elemecdn.com/anzhiyu-music@1.0.4/龙卷风/龙卷风.mp3",
       "cover": "https://y.qq.com/music/photo_new/T002R300x300M000000f01724fd7TH_1.jpg?max_age=2592000",
       "lrc": "https://npm.elemecdn.com/anzhiyu-music@1.0.4/龙卷风/龙卷风.lrc"
     }
   ]
   ```

6. hexo 配置文件`_config.yml`中添加以下配置，注意不是主题配置文件

   ```yml
   # APlayer
   # https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md
   aplayer:
     meting: true
     asset_inject: false
   ```

7. 主题配置文件中开启`menu`中我的和音乐馆的注释，注意缩进！！！

   ```yml
   menu:
     # 文章:
     #   隧道: /archives/ || icon-box-archive
     #   分类: /categories/ || icon-shapes
     #   标签: /tags/ || icon-tags

     友链:
       友人帐: /link/ || icon-link
     #   朋友圈: /fcircle/ || icon-artstation
     #   留言板: /comments/ || icon-envelope

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

> 如何修改默认歌单?

将`menu`中音乐馆的路径修改为以下格式即可`/music/?id=1708664797&server=tencent`，支持`id`和`server`参数。

![音乐馆页](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/643264b4da332.png!blogimg)

## 404 页面

主题内置了一个简单的 404 页面，可在设置中开启

::: warning 警告
本地预览时，访问出错的网站是不会跳到 404 页面的。
如需本地预览，请访问 http://localhost:4000/404.html
:::

```yaml
# A simple 404 page
error_404:
  enable: true
  subtitle: "页面没有找到"
  background:
```

![404页面](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/64326263a9eda.png!blogimg)

## 追番页面

在博客根目录执行

```bash
npm install hexo-bilibili-bangumi --save
```

在 hexo 配置文件`_config.yml`中加入以下配置，注意不是主题配置文件，更多配置请参考[hexo-bilibili-bangumi](https://github.com/HCLonely/hexo-bilibili-bangumi)

```yaml
# 追番插件
# https://github.com/HCLonely/hexo-bilibili-bangumi
bangumi: # 追番设置
  enable: true
  source: bili
  path:
  vmid: 372204786
  title: "追番列表"
  quote: "生命不息，追番不止！"
  show: 1
  lazyload: false
  loading:
  showMyComment: false
  pagination: false
  metaColor:
  color:
  webp:
  progress:
  extraOrder:
  proxy:
    host: "代理host"
    port: "代理端口"
  extra_options:
    top_img: false
    lazyload:
      enable: false
```

![追番页](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/643264bec3298.png!blogimg)

## 留言板页面

在博客根目录执行

```bash
npm install hexo-butterfly-envelope --save
```

在站点配置文件`_config.yml`中添加以下内容配置，更多配置请查看[信笺样式留言板](https://akilar.top/posts/e2d3c450/)

```yaml
# envelope_comment
# see https://akilar.top/posts/e2d3c450/
envelope_comment:
  enable: true #控制开关
  custom_pic:
    cover: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/violet.jpg #信笺头部图片
    line: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/line.png #信笺底部图片
    beforeimg: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/before.png # 信封前半部分
    afterimg: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/after.png # 信封后半部分
  message: #信笺正文，多行文本，写法如下
    - 有什么想问的？
    - 有什么想说的？
    - 有什么想吐槽的？
    - 哪怕是有什么想吃的，都可以告诉我哦~
  bottom: 自动书记人偶竭诚为您服务！ #仅支持单行文本
  height: #1024px，信封划出的高度
  path: #【可选】comments 的路径名称。默认为 comments，生成的页面为 comments/index.html
  front_matter: #【可选】comments页面的 front_matter 配置
    title: 留言板
    comments: true
    top_img: false
    type: envelope
```

![留言板](https://img02.anzhiy.cn/adminuploads/1/2023/04/09/643264eb13666.png!blogimg)
