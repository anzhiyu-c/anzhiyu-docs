---
title: 标签页配置
---
# 页面配置📦
## 标签页配置

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

   | 参数     | 解释                                                         |
   | -------- | ------------------------------------------------------------ |
   | type     | 【必须】页面类型，必须为 tags                                |
   | comments | 【可选】是否显示评论                                         |
   | top_img  | 【可选】是否显示顶部图                                       |
   | orderby  | 【可选】排序方式 ：random/name/length                        |
   | order    | 【可选】排序次序： 1, asc for ascending; -1, desc for descending |

![标签页详情](https://img02.anheyu.com/adminuploads/1/2023/04/09/6432634045c13.png!blogimg)
![标签页](https://img02.anheyu.com/adminuploads/1/2023/04/09/6432637cecf77.png!blogimg)