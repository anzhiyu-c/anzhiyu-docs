---
title: 分类页配置
---
# 页面配置📦
## 分类页配置

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