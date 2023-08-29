---
title: 主题安装
---
# 主题安装
## 搭建 Hexo 博客
如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。

## 作者的话

请注意`_config.anzhiyu.yml`中的配置优先级大于`_config.yml`，所以更新主题后需要比对主题文件夹中的`theme/anzhiyu/_config.yml` 文件内容，一般在[release](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases) 的说明里会特别提示或给出配置文件版本对比diff，同步修改原配置文件即可。

:::tip
致主题的新用户：

- 本指南经过数个版本打磨，绝大部分的功能都有详细说明，请仔细阅读，节约自己和他人的时间；

- 本指南中提到的："**站点配置**" 指的 Hexo 博客目录下的 _config.yml，"**主题配置**" 指的是 theme/anzhiyu/_config.yml 或者 _config.anzhiyu.yml ，注意区分；

- 本指南中提到的 `source` 目录都指的是博客目录下的 `source` 文件夹，不推荐修改主题内 `source` 目录；

- 每次无论 `hexo g` 或 `hexo s`，都最好先使用 `hexo clean` 清除本地缓存；

- 页面结果以本地 `hexo s` 为准，部署后的异常大部分是线上缓存原因，在确认没有报错的情况下，等待若干时间后即可正常；

- 由于主题的不同版本会存在配置差异，本指南以最新版本为准。

:::

本指南不包括所有的配置说明，几乎每个配置在主题配置中都有注释，可配合指南共同参考使用。

另外本指南仅包含主题范围内的使用说明，如果是 Hexo 的使用或者 Hexo 插件的使用，请查阅各自的文档。

若存在其他主题相关的疑问请在 [issues](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/issues/new) 留言。

## 主题安装
::: tip 温馨提示
Anzhiyu主题拥有**Main**(稳定版)和**Dev**(测试版)两种版本, 我们推荐您安装使用**Github**(稳定版)以获得最佳的主题体验
:::

**方式一(Github 推荐):**

```bash 
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```

如遇安装不上可以使用以下url代理安装

```bash
git clone -b main https://ghproxy.com/https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```

**方式二(Release 推荐):**

下载 [最新 release 版本](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases) 解压到 `themes` 目录，并将解压出的文件夹重命名为 `anzhiyu`。

**方式三(npm安装):**
```bash
npm i hexo-theme-anzhiyu
```

此方法只支持 Hexo 5.0.0 以上版本 通过 npm 安装并不会在 themes 里生成主题文件夹，而是在 node_modules 里生成

**测试版Dev**
```bash [dev] 
git clone -b dev https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```
测试版可能存在 bug，追求稳定的请安装稳定版

## 应用主题
打开 **Hexo** 根目录下的 `config.yml`, 找到以下配置项，把主题改为`anzhiyu`

```yml [config.yml]
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: anzhiyu
```

## 安装 pug 和 stylus 渲染插件

```bash
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

无法安装可以使用cnpm进行安装

```bash
npm install hexo-renderer-pug hexo-renderer-stylus --save --registry=http://registry.npmmirror.com
```

## 覆盖配置

覆盖配置可以使`主题配置`放置在 anzhiyu 目录之外，避免在更新主题时丢失自定义的配置。

通过 Npm 安装主题的用户可忽略，其他用户建议学习使用。

- macos/linux
  在博客根目录运行

```bash
cp -rf ./themes/anzhiyu/_config.yml ./_config.anzhiyu.yml
```

- windows
  复制`/themes/anzhiyu/_config.yml`此文件到 hexo 根目录，并重命名为`_config.anzhiyu.yml`

以后如果修改任何主题配置，都只需修改 _config.anzhiyu.yml 的配置即可。

注意：
 - 只要存在于 `_config.anzhiyu.yml` 的配置都是高优先级，修改原 `_config.yml` 是无效的。
 - 每次更新主题可能存在配置变更，请注意更新说明，可能需要手动对 `_config.anzhiyu.yml` 同步修改。
 - 想查看覆盖配置有没有生效，可以通过 `hexo g --debug` 查看命令行输出。
 - 如果想将某些配置覆盖为空，注意不要把主键删掉，不然是无法覆盖的

## 本地启动 hexo

```bash
hexo cl
hexo g
hexo s
```

此时就能在看到效果了。

## 升级方法

**方式一**
> 适用于通过 Github 或 Release 压缩包主题，且没有自行修改任何代码的情况。

1. 先将原文件夹重命名为别的名称，例如 `anzhiyu-bkp`，用于升级失败进行回退；

2. 选择自己的安装方式升级

`Github`：重新重新执行安装命令即可
```bash 
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```

`Release`：按照安装步骤，下载 [release](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases) 并解压重命名为 `anzhiyu`；

3. 比对升级后的配置文件`_config.yml`，如果某些配置发生了变化（改名或弃用），[release](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases) 的说明里会特别提示或给出配置文件版本对比diff，同步修改原配置文件即可。

**方式二**

> 适用于通过 Npm 安装主题。

在博客目录下执行命令：
```bash
npm update --save hexo-theme-anzhiyu
```

比对升级后的配置文件`_config.yml`,如果某些配置发生了变化（改名或弃用），[release](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases) 的说明里会特别提示或给出配置文件版本对比diff，同步修改原配置文件即可。


**方式三**

全量更新：删除**theme/anzhiyu**文件夹，然后重新执行安装命令即可。

比对升级后的配置文件`_config.yml`,如果某些配置发生了变化（改名或弃用），[release](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases) 的说明里会特别提示或给出配置文件版本对比diff，同步修改原配置文件即可。


::: danger 视频教程
什么？你还是不会？这里有视频 [AnZhiYu 主题安装教程](https://www.bilibili.com/video/BV1Rs4y127hu/?spm_id_from=333.788&vd_source=4d9717102296e4b7a60ecdfad55ae2dd)
:::

## 版本号释义

本项目的版本号为 X.Y.Z 格式，但与常见的[语义化版本号规范](https://semver.org/lang/zh-CN/)有部分区别，具体释义如下：

X: 产品层面的重新设计，包含重大框架重构，会涉及大范围功能变更与配置变更，更新前必须阅读相关文档

Y: 包含中大型新功能，及无法向下兼容的功能变更与配置变更，更新该版本号可能会需要修改配置或者移除一些原功能

Z: 不仅包含 BUG 修复、小型新功能，还会包含可以向下兼容的原功能更新与配置变更，原则上更新该版本号无需额外动作
