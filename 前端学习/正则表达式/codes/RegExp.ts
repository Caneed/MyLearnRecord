// 构造函数
// const reg: RegExp = /ab+c/i
// const reg1: RegExp = new RegExp('ab+c', 'i')
// const reg2: RegExp = new RegExp(/ab+c/, 'i')
// ----------------------properties--------------------------

// dotAll
// const reg: RegExp = new RegExp('abc')
// console.log(reg.dotAll)//false
// const reg1: RegExp=new RegExp('abc','s')
// console.log(reg1.dotAll);//true

// flags

// const reg: RegExp = new RegExp('abc', 's')
// const reg1: RegExp = new RegExp('abc', 'gu')
// const reg2: RegExp = new RegExp('abc')
// console.log(reg.flags);//s
// console.log(reg1.flags);//gu
// console.log(reg2.flags);//不输出

// global

const reg: RegExp = new RegExp('abc', 'g')
const reg1: RegExp = new RegExp('abc', 's')
console.log(reg.global);//true
console.log(reg1.global);//false

