/* ---------------------------[xyz][x-z]-------------------------*/

// console.log(/[xyz]/.test('zabc'));//true
// console.log(/[x-z]/.test('abc'));//false

/* ---------------------------[^xyz][^x-z]-------------------------*/

// console.log(/[^xyz]/.test('abc'));//true
// console.log(/[^x-z]/.test('x'));//false

/* ---------------------------.-------------------------*/

// console.log(/.y/.exec('xyz'));//xy
// console.log(/.my/.exec('x myz'));//空格 my

// console.log(/....a pig/.exec('i am a pig'));//' am a pig'

/* ---------------------------\d和\D-------------------------*/

// console.log(/\d\g/.exec('i am 3 years old'));//3
// console.log(/\D\g/.exec('12312414a'));//a

/* ---------------------------\w和\W-------------------------*/

// console.log(/\w/.exec('%%%%1'));//1
// console.log(/\w/.exec('%%%%a'));//a
// console.log(/\w/.exec('%%%%A'));//A
// console.log(/\W/.exec('50%'));//%

/* ---------------------------\s和\S-------------------------*/

// console.log(/\s/.exec('a\r'));//r
// console.log(/\S/.exec('a\r'));//a

/* ---------------------------析取-------------------------*/

console.log(/ab(x|y)/.exec('abx'));//abx
console.log(/ab(x|y)/.exec('aby'));//aby
