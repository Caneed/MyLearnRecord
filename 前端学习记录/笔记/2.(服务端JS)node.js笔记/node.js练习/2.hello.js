var fs=require("fs");
var data=fs.readFile('hello.txt');
console.log(data.toString());
console.log("执行结束");