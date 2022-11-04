const path=require('path')

//导出webpack配置
module.exports={
//入口文件
    entry:path.join(__dirname,'../src/index.js'),
//    出口文件路径(打包后的输出路径)
    output:{
        filename:'index.js',
        path:path.join(__dirname,'../output')
    }
}
