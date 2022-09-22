

const path = require('path')  

let file='./files/file.txt'

console.log(path.dirname(file))
console.log(path.basename(file))
console.log(path.extname(file))
// ./files
// file.txt
// .txt

console.log(path.basename(file,path.extname(file)));//file

// console.log(path.join('http://','join/','path/','file'));//http:\join\path\file

// console.log('绝对路径'+path.resolve(file));
// //绝对路径D:\VsCodeWorkSpace\LearningRecord\前端学习记录\node.js\pratice\files\file.txt
// // PS D:\VsCodeWorkSpace\LearningRecord\前端学习记录\node.js\pratice>

console.log('指定根目录的绝对路径'+path.resolve(file,'../../../../LearningRecord'));
// 指定根目录的绝对路径D:\VsCodeWorkSpace\LearningRecord\前端学习记录\LearningRecord