

const path = require('path')  

let file='./files/file.txt'

console.log(path.dirname(file))
console.log(path.basename(file))
console.log(path.extname(file))
// ./files
// file.txt
// .txt

console.log(path.basename(file,path.extname(file)));//file