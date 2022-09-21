var fs=require("fs");
var data=fs.readFile('./files/hello.txt');
console.log(data.toString());
console.log("执行结束");

// 回调方式读取文件
var fs=require("fs");
fs.readFile('./files/hello.js',function(err,data){
  if (err) return console.error(err);
  console.log(data.toString());
})
console.log("程序结束");