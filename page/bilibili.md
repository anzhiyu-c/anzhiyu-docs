---
title: 追番页面配置
---
# 页面配置📦
## 追番页面配置

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

![追番页](https://img02.anheyu.com/adminuploads/1/2023/04/09/643264bec3298.png!blogimg)