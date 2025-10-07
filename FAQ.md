---
title: 常见问题
---

# 常见问题 📖

## wordcount is not a function

![wordcount is not a function](https://upload-bbs.miyoushe.com/upload/2025/07/09/125766904/a3637c6bad5be1c7579c4f2bb7fade90_2248957223389172321.png)

产生原因：开启了 wordcount 的字数统计，但是没有安装对应插件。

解决办法：

打开 hexo 工作目录

```bash
npm install hexo-wordcount --save
或者
yarn add hexo-wordcount
```

## 为什么我的博客显示的很大？

答：因为本主题是在 16 寸 macbook pro 上以 110% 开发，win 分辨率不高的电脑可能会展示较大，建议按住 ctrl+"-"键，将浏览器比例调小，调整到合适的大小即可。

## 如何修改 top_img 的图片？

![](https://upload-bbs.miyoushe.com/upload/2024/09/27/437902101/5e07adf5f6da79d377421b61273264ed_7774815351732111232..png)

不要慌

答：在主题配置文件`_config.yml`中找到`index_img`字段，将其修改为你想要的图片地址即可。

比如这样

```yaml
index_img: "background: url('https://upload-bbs.miyoushe.com/upload/2024/09/25/125766904/1688a36922fde8f9e11f34a3099b3740_5249001952371420512..jpg') top / cover no-repeat"
```

## 我不希望网页离开时改变 title

如果你觉得当打开一组标签页时，后果便变得灾难起来，用户无法识别各标签页的内容。你可以直接关闭他

```yml
# 标签卖萌
diytitle:
  enable: false
  leaveTitle: w(ﾟДﾟ)w 不要走！再看看嘛！
  backTitle: ♪(^∇^*)欢迎肥来！
```

## 我不希望更改我的右键菜单

你可以直接关闭他，或者开启快捷键，使用 shift+i 来使用原版右键菜单。

```yml
# 右键菜单
rightClickMenu:
  enable: false
```

## 我的 CDN 资源加载好慢

你可以在配置文件最底部修改 CDN 配置

```yaml
# CDN
# Don't modify the following settings unless you know how they work
# 非必要请不要修改
CDN:
  # The CDN provider of internal scripts (主题内部 js 的 cdn 配置)
  # option: local/elemecdn/jsdelivr/unpkg/cdnjs/onmicrosoft/cbd/anheyu/custom
  # Dev version can only choose. ( dev版的主题只能设置为 local )
  internal_provider: local

  # The CDN provider of third party scripts (第三方 js 的 cdn 配置)
  # option: elemecdn/jsdelivr/unpkg/cdnjs/onmicrosoft/cbd/anheyu/custom
  third_party_provider: cbd

  # Add version number to CDN, true or false
  version: true

  # Custom format
  # For example: https://cdn.staticfile.org/${cdnjs_name}/${version}/${min_cdnjs_file}
  custom_format: # https://npm.elemecdn.com/${name}@latest/${file}

  option:
    # main_css:
    # main:
    # utils:
    # translate:
    # random_friends_post_js:
    # right_click_menu_js:
    # comment_barrage_js:
    # ai_abstract_js:
    # people_js:
    # local_search:
    # algolia_js:
    # algolia_search:
    # instantsearch:
    # docsearch_js:
    # docsearch_css:
    # pjax:
    # blueimp_md5:
    # valine:
    # twikoo:
    # waline_js:
    # waline_css:
    # sharejs:
    # sharejs_css:
    # mathjax:
    # katex:
    # katex_copytex:
    # mermaid:
    # canvas_ribbon:
    # canvas_fluttering_ribbon:
    # canvas_nest:
    # lazyload:
    # instantpage:
    # typed:
    # pangu:
    # fancybox_css:
    # fancybox:
    # medium_zoom:
    # snackbar_css:
    # snackbar:
    # activate_power_mode:
    # fireworks:
    # click_heart:
    # ClickShowText:
    # fontawesome:
    # flickr_justified_gallery_js:
    # flickr_justified_gallery_css:
    # aplayer_css:
    # aplayer_js:
    # meting_js:
    # meting_api:
    # prismjs_js:
    # prismjs_lineNumber_js:
    # prismjs_autoloader:
    # artalk_js:
    # artalk_css:
    # pace_js:
    # pace_default_css:
    # countup_js:
    # gsap_js:
    # busuanzi:
    # rightmenu:
    # waterfall:
    # ali_iconfont_css:
    # accesskey_js:
    # colorthief:
```

## 我不想用 Pjax + PACE

你可以直接关闭他。

```yaml
# Pjax
# It may contain bugs and unstable, give feedback when you find the bugs.
# https://github.com/MoOx/pjax
pjax:
  enable: false
  exclude:
    # - xxxx
    # - xxxx
```

## 我不想要控制台打印信息

我想看你的写的 bug 有多荒唐，而不是看你在这里卖萌，你可以直接关闭他。

```yaml
#  控制台打印信息
console:
  enable: false
```

## 我不要 PWA，我不需要离线缓存

我不希望你滥用我的 Service Worker + CacheStorage，虽然他是运行时的，虽然他可以提你省下一笔不错的流量费用，但是他确实影响到了用户侧的存储体验（因为数据是在用户加载的时候就存储了下来），你可以直接关闭他。

```yml
# PWA
# See https://github.com/JLHwung/hexo-offline
# ---------------
pwa:
  enable: false
  startup_image_enable: false
  manifest: /manifest.json
  theme_color: var(--anzhiyu-main)
  mask_icon: /img/siteicon/apple-icon-180.png
  apple_touch_icon: /img/siteicon/apple-icon-180.png
  bookmark_icon: /img/siteicon/apple-icon-180.png
  favicon_32_32: /img/siteicon/32.png
  favicon_16_16: /img/siteicon/16.png
```

## 我要加关键词/meta/link

如果你的站点曾经进行过文章迁移，或者 url 发生过改变，又或者你有多个站点是相同的内容，比如`hexo.anheyu.com`和`blog.anheyu.com`，你可以在配置文件修改`inject`字段，添加`<link rel="canonical">`来告诉搜索引擎哪个是你的主站。

```yml
# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    # 自定义css
    # - <link rel="stylesheet" href="/css/custom.css" media="defer" onload="this.media='all'">

  bottom:
    # 自定义js
    # - <script src="/js/xxx"></script>
```

## 我不需要加载动画

全屏白色里，一个孤零零的圆形头像在画面中央闪烁，页面就这样一直卡在加载了，让用户不知道是不是真的在加载，当然，如果你能确保所有用户都肯定能正常访问，不会出现网络不好，服务器网络一定能正确返回的话，你可以直接关闭他。

```yml
# Loading Animation (加载动画)
preloader:
  enable: false
  # source
  # 1. fullpage-loading
  # 2. pace (progress bar)
  # else all
  source: 1
  # pace theme (see https://codebyzach.github.io/pace/)
  pace_css_url:
  avatar: https://upload-bbs.miyoushe.com/upload/2023/09/06/125766904/b0e53d669834c1e1f2758d46e8377342_267164146979017418.jpg # 自定加载动画义头像
```
