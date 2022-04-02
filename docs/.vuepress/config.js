module.exports = {
  title: '社区指南',
  description: '社区规范,安知鱼',
  lang: 'zh-CN',
  themeConfig: {
    sidebarDepth: 1,
    lastUpdated: '上次更新',
    navbar: [
      { text: '指南', link: '/' },
      { text: '主站', link: 'https://cloud.anzhiy.cn/' },
      { text: '社区', link: 'https://forum.anzhiy.cn/' },
    ],
    sidebar: [
      {
        text: '第一编　用户协议',
        children: [
          {
            text: '社区规范',
            link: '/',
          },
          {
            text: '用户协议',
            link: '/user-agreement.html',
          },
          {
            text: '隐私政策',
            link: '/privacy-policy.html',
          },
        ],
      },
    ],
  },
}
