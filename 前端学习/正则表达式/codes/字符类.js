// let str='abc'
// let reg=/[a-c]/
// ==================
// let str='xyz'
// let reg=/[^x-z]/
// ======================
// let str='abs'
// let str2='ads'
// let reg=/a.s/

// console.log(str.match(reg));//abs
// console.log(str2.match(reg));//ads
// ======================
// let str='abs'
// let str2='ads'
// let reg=/a.s/

// console.log(str.match(reg));//abs
// console.log(str2.match(reg));//ads
// // ======================
// let str='12321321'
// let str2='s0'
// let reg=/\D/
// let reg=/\d/

// console.log(str.match(reg));//null
// console.log(str2.match(reg));//s

// // ======================
// let str='12321321'
// let str2='_'
// let reg=/\w/

// console.log(str.match(reg));//1
// console.log(str2.match(reg));//_
// ======================
// let str='12321321abcasda_'
// let str2='$'
// let reg=/\W/

// console.log(str.match(reg));//null
// console.log(str2.match(reg));//$

// // ===================
// let str='12321321abcasda_'
// let str2=' '
// let reg=/\s/

// console.log(str.match(reg));//null
// console.log(str2.match(reg));//' '
// // ===================
// let str='12321321abcasda_'
// let str2=' '
// let reg=/\S/

// console.log(str.match(reg));//1
// console.log(str2.match(reg));//null


//=============
let a = /a\*/ //匹配a*
let str = 'a*'
console.log(str.match(a));//a*