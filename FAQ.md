---
title: 常见问题
---

# 常见问题 📖

## wordcount is not a function

![wordcount is not a function](https://upload-bbs.miyoushe.com/upload/2025/07/09/125766904/a3637c6bad5be1c7579c4f2bb7fade90_2248957223389172321.png)

产生原因：开启了wordcount的字数统计，但是没有安装对应插件。

解决办法：

打开 hexo 工作目录
```bash
npm install hexo-wordcount --save
或者
yarn add hexo-wordcount
```

## 为什么我的博客显示的很大？

答：因为本主题是在16寸 macbook pro上以 110% 开发，win分辨率不高的电脑可能会展示较大，建议按住ctrl+"-"键，将浏览器比例调小，调整到合适的大小即可。

## 如何修改top_img的图片？

![](https://upload-bbs.miyoushe.com/upload/2024/09/27/437902101/5e07adf5f6da79d377421b61273264ed_7774815351732111232..png)

不要慌

答：在主题配置文件`_config.yml`中找到`index_img`字段，将其修改为你想要的图片地址即可。

比如这样

```yaml
index_img: "background: url('https://upload-bbs.miyoushe.com/upload/2024/09/25/125766904/1688a36922fde8f9e11f34a3099b3740_5249001952371420512..jpg') top / cover no-repeat"
```
