---
title: 友情链接配置
---

# 页面配置📦

## 友情链接配置

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

   ```bash
   hexo new page link
   ```

3. 你会找到 `source/link/index.md` 这个文件

4. 修改这个文件：
   记得添加 `type: "link"`
   ```yml
   ---
   title: link
   date: 2020-12-01 22:19:45
   type: "link"
   ---
   ```
5. 新建文件`source\_data\link.yml`,没有`_data`文件夹的话也请自己新建。以下是默认友链格式示例(~~自己写的教程，夹带点私货不过分吧，嘻嘻~~)。打开`[blog]\source\_data\link.yml`，输入：

   ```yml
   - class_name: 框架
     flink_style: flexcard
     hundredSuffix: ""
     link_list:
       - name: Hexo
         link: https://hexo.io/zh-tw/
         avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
         descr: 快速、简单且强大的网站框架
       - name: anzhiyu主题
         link: https://blog.anheyu.com/
         avatar: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg
         descr: 生活明朗，万物可爱
         siteshot: https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg

   - class_name: 推荐博客
     flink_style: telescopic
     hundredSuffix: ""
     link_list:
       - name: 安知鱼
         link: https://blog.anheyu.com/
         avatar: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg
         descr: 生活明朗，万物可爱
         siteshot: https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg
         color: vip
         tag: 技术

   - class_name: 小伙伴
     class_desc: 那些人，那些事
     flink_style: anzhiyu
     hundredSuffix: ""
     link_list:
       - name: 安知鱼
         link: https://blog.anheyu.com/
         avatar: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg
         descr: 生活明朗，万物可爱
         recommend: true
   ```

   | 参数                | 解释                                                                                                                                                                |
   | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | class_name          | 【必填】友链分类名                                                                                                                                                  |
   | class_desc          | 【可选】友链分类描述                                                                                                                                                |
   | flink_style         | 【必填】`flexcard`或者`anzhiyu`或者`telescopic`                                                                                                                     |
   | hundredSuffix       | 【可选】解决共同进步板块头像质量问题，配置后共同进步板块的头像会添加该后缀（请确保你的图片加上 hundredSuffix 的配置后依然可以访问）。 例如:`hundredSuffix: "!w120"` |
   | link_list           | 【必须】友链列表                                                                                                                                                    |
   | link_list.name      | 【必须】友链名称                                                                                                                                                    |
   | link_list.link      | 【必须】友链链接                                                                                                                                                    |
   | link_list.avatar    | 【必须】友链头像                                                                                                                                                    |
   | link_list.descr     | 【必须】友链描述                                                                                                                                                    |
   | link_list.siteshot  | 【可选】flink_style 为 flexcard 或 telescopic 时友链的站点图片                                                                                                      |
   | link_list.recommend | 【可选】快捷选项，等于`color:""` + `tag: "荐"`                                                                                                                      |
   | link_list.tag       | 【可选】左上角的 tag，为当前友链打上标签 例如:"推荐"                                                                                                                |
   | link_list.color     | 【可选】tag 的十六进制背景颜色例如: "#646cff"，提供了两个快捷颜色选项分别是`vip`和`speed`                                                                           |

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

![友情链接页](https://img02.anheyu.com/adminuploads/1/2023/04/09/6432641611b97.png!blogimg)


## 与数百博主共同进步

在主题配置文件中`_config.anzhiyu.yml`中配置

```yml
# 友情链接顶部相关配置
linkPageTop:
  enable: true
  title: 与数百名博主无限进步
  # 添加博主友链的评论自定义格式
  addFriendPlaceholder: "昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n站点截图（可选）：\n"
```

![与数百博主共同进步](https://bu.dusays.com/2023/08/26/64e976513baed.webp)

建议超过 30 以上的友链数开启，友链数目不够会导致头像无法铺满。