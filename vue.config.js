module.exports = {
  chainWebpack: (config) => {
    // 添加一个新的 loader
    // https://cli.vuejs.org/zh/guide/webpack.html#%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84-loader
    config.module
      .rule('markdown-raw-loader')
      .test(/\.md$/)
      .use('raw-loader')
        .loader('raw-loader')
        .end()
  },
  // 部署路径
  publicPath : "./",

  // JS和CSS文件的目录
  assetsDir : 'index-assets'
};
