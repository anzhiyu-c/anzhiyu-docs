---
title: 音乐馆页配置
---
# 页面配置📦
## 音乐馆页配置

1. 前往你的 Hexo 博客的根目录

2. 在 Hexo 博客根目录 `[blog]`下打开终端，输入

   ```bash
   hexo new page music
   ```

3. 你会找到 `source/music/index.md` 这个文件

4. 修改这个文件：
   记得添加 `type: "music"`

   ```yml 
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

id 与 server 的填写请参考[MetingJS](https://github.com/metowolf/MetingJS)
![音乐馆页](https://img02.anheyu.com/adminuploads/1/2023/04/09/643264b4da332.png!blogimg)