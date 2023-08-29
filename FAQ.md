---
title: 常见问题
---

# 常见问题 📖

## wordcount is not a function

![](https://bu.dusays.com/2023/08/29/64eda9d99a63a.png)

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
