---
title: 首页即刻说说页面配置
---
# 页面配置📦
## 首页即刻说说页面配置

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

```bash
  hexo new page essay
```

3. 你会找到 `source/essay/index.md` 这个文件

4. 修改这个文件：
   记得添加 `type: "essay"`

```yml 
  ---
  title: 即刻短文
  date: 2020-07-22 22:06:17
  comments: true
  aside: false
  top_img: false
  type: essay
  ---
```

5. 新建`source/_data/essay.yml`，输入以下内容，具体字段不做解释，可以依葫芦画瓢。

```yml essay.yml
- title: 即刻短文
  subTitle: 咸鱼的日常生活。
  tips: 随时随地，分享生活
  buttonText: 关于我
  buttonLink: /about/
  limit: 30
  home_essay: true
  top_background: https://img02.anheyu.com/adminuploads/1/2022/08/21/630249e2df20f.jpg
  essay_list:
    - content: 支持了Accesskey快捷键，可以直接按下shift + ?组合键以查看快捷键选项。
      date: 2023/07/01
      video:
        - https://cdn.jsdelivr.net/npm/anzhiyu-blog-static@1.0.0/video/%E9%A3%8E%E8%BD%A6%E6%A0%B7%E5%BC%8F%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88.mp4
      image:
        - https://img02.anheyu.com/adminuploads/1/2023/07/01/64a033cb2c21e.webp!blogimg
      address: 长沙
      from: 安知鱼
      link: /posts/e140.html
    - content: 音乐支持了参数设置自定义歌单
      date: 2023/01/02
      link: https://blog.anheyu.com/music/?id=7269231710&server=tencent
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
      link: https://blog.anheyu.com/album/
    - content: 终于把相册集搞定了, 耶✌️, 瀑布流在滑动滚动条一个视口范围上下100的情况执行一次, 到底部停止监听让性能高了好多，再也不会布局混乱🤪了
      date: 2022/10/25
      link: https://blog.anheyu.com/album/
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

::: warning 警告
主题配置文件中开启`menu`中关于和闲言碎语的注释，导航栏闲言碎语，注意缩进！！！
:::

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

::: danger 注意
示例数据中的图片不保证可用性，请自行更换为您自己的图床链接。图床相关知识=>[我的图床方案](https://anheyu.com/posts/2785.html)
:::

![即刻说说页面](https://img02.anheyu.com/adminuploads/1/2023/04/09/643263bdd2aa4.png!blogimg)
