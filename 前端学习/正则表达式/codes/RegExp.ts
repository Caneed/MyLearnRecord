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

// const reg: RegExp = new RegExp('abc', 'g')
// const reg1: RegExp = new RegExp('abc', 's')
// console.log(reg.global);//true
// console.log(reg1.global);//false

// ignoreCase

// const reg: RegExp = new RegExp('abc', 'i')
// const reg1: RegExp = new RegExp('abc')
// console.log(reg.ignoreCase);//true
// console.log(reg1.ignoreCase);//false

// source

// const reg: RegExp = /abc/i
// const reg2: RegExp = /cde/gi

// console.log(reg.source);//abc
// console.log(reg2.source);//cde

// sticky

// const reg:RegExp=/abc/y
// const reg1:RegExp=/abc/

// console.log(reg.sticky);//true
// console.log(reg1.sticky);//false


// Unicode

// const reg: RegExp = /abc/u
// const reg1: RegExp = /abc/

// console.log(reg.unicode);//true
// console.log(reg1.unicode);//false


/* ---------------------------function----------------------- */

/*---------------------------exec()-------------------------- */

console.log(/\d/.exec('12345'))//[ '1', index: 0, input: '12345', groups: undefined ]
console.log(/abc/d.exec('abc'));
// [
//     'abc',
//     index: 0,
//     input: 'abc',
//     groups: undefined,
//     indices: [ [ 0, 3 ], groups: undefined ]
//   ]

console.log(/a/g.exec('aaaaaaaaa').);
