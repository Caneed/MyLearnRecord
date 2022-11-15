const path = require('path');

module.exports = {
  // JavaScript 执行入口文件 Entry
  entry: './asset/main.js',


  //修改context就是修改默认根路径
  // context:path.resolve(__dirname,'xxx'),

  // 动态配置entry
  // 同步配置entry
  // entry:()=>{
  //   return{
  //     a:'./asset/a',
  //     b:'./asset/b'
  //   }
  // },

  // 异步配置：使用promise
  // entry:()=>{
  //   return new Promise(resolve=>{
  //     resolve({a:'./asset/a',b:'./asset/b'})
  //   })
  // },

  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        // 使用正则匹配css
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  mode:'development'
};