const path = require('path')
const plugin=require('html-webpack-plugin')

// 配置信息
module.exports={

  // 入口文件
  entry:"./src/index.ts",
  // 输出文件
  output:{
    // 输出路径
    path:path.resolve(__dirname,'dist'),
    // 输出文件名
    filename:'bundle.js',
    // 每次编译自动清空dist下的文件
    clean:true
  },
  mode:'development',
  // 模块
  module:{
    // 打包规则
    rules:[
      {
        // test表示筛选对哪些文件进行打包规范
        test:/\.ts$/,
        // 使用的loader
        use:'ts-loader',
        // 排除哪些文件
        exclude:/node-modules/
      }
    ]
  },
  // 插件
  plugins:[
    new plugin({
      title:'自定义标题',
      // 模板，属性值是一个路径，定义一个模板给它去配置，打包出来的html文件就照着模板的来
      // template
    })
  ],
  resolve:{
    extensions:['.ts','.js']
  }
}