module.exports = {
  pages:{
    entry:'src/main.ts',
    template:'public/index.html',
    filename:'index.html'
  },
  chainWebpack:config=>{
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/src/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  }
}