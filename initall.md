---
title: 主题使用
---
# 主题安装
::: tip 温馨提示
Anzhiyu主题拥有**Main**(稳定版)和**Dev**(测试版)两种版本, 我们推荐您安装使用**Github**(稳定版)以获得最佳的主题体验
:::

Github(推荐)
```bash [Github]
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```
npm(不推荐)
```bash [npm]
npm i hexo-theme-anzhiyu
```
此方法只支持 Hexo 5.0.0 以上版本 通过 npm 安装并不会在 themes 里生成主题文件夹，而是在 node_modules 里生成

升级方法：在 Hexo 根目录下，运行`npm update hexo-theme-anzhiyu`

测试版Dev
```bash [dev] 
git clone -b dev https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```
测试版可能存在 bug，追求稳定的请安装稳定版

**升级方法**：
利用git更新： 在主题目录下，运行 `git pull`，比对升级后的配置文件`_config.yml`

或全量更新：删除**theme/anzhiyu**文件夹，然后重新执行安装命令即可。

::: danger 作者的话
什么？你还是不会？这里有视频 [AnZhiYu 主题安装教程](https://www.bilibili.com/video/BV1Rs4y127hu/?spm_id_from=333.788&vd_source=4d9717102296e4b7a60ecdfad55ae2dd)
:::



## 应用主题
打开 **Hexo** 根目录下的 `config.yml`, 找到以下配置项，把主题改为`anzhiyu`

```yml [config.yml]
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: anzhiyu
```

## 安装 pug 和 stylus 渲染插件

```
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## 更好的使用主题

**Macos/Linux**用户在博客根目录运行

```bash
cp -rf ./themes/anzhiyu/_config.yml ./_config.anzhiyu.yml
```

**Windows**

```
复制 `/themes/Acrylic/_config.yml` 此文件到 **Hexo** 根目录，并重命名为 `_config.Acrylic.yml`
```

## 作者的话
请注意`_config.anzhiyu.yml`中的配置优先级大于`_config.yml`，所以更新主题后需要比对主题文件夹中的`theme/anzhiyu/_config.yml` 文件内容，一般在git更新日志📔中能够查看并完成修改。

## 本地启动 hexo

```
hexo cl
hexo g
hexo s
```

此时就能在看到效果了。
