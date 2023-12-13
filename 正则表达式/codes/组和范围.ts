/*-----------------------()------------------------*/

// console.log(/abc(xyz)/.exec('abcxyz'));
// // [ 'abcxyz', 'xyz', index: 0, input: 'abcxyz', groups: undefined ]

/* ---------------------/n----------------------------*/

// console.log(/apple(,)orange/.exec('apple,orange,cherry,peach'));
// // [
// //     'apple,orange',
// //     ',',
// //     index: 0,
// //     input: 'apple,orange,cherry,peach',
// //     groups: undefined
// //   ]
// console.log(/apple(,)orange\1/.exec('apple,orange,cherry,peach'));
// // [
// //     'apple,orange,',
// //     ',',
// //     index: 0,
// //     input: 'apple,orange,cherry,peach',
// //     groups: undefined
// //   ]

// console.log(/1(2)34(5)\2/.exec('123455'));
// // ['123455', '2', '5', index: 0, input: '123455', groups: undefined ]
// console.log(/1(2)34(5)\1/.exec('123452'));
// // [ '123452', '2', '5', index: 0, input: '123452', groups: undefined ]


/*-------------------------具名捕获组----------------------*/

// console.log(/(?<myGroup>abc)/.exec('abc')?.groups);
// // [
// //     'abc',
// //     'abc',
// //     index: 0,
// //     input: 'abc',
// //     groups: [Object: null prototype] { myGroup: 'abc' }
// //   ]

/*-------------------------非捕获组----------------------*/

// console.log(/abc(:?d)/.exec('abcd'));
// // [ 'abcd', 'd', index: 0, input: 'abcd', groups: undefined ]

/*-------------------------捕获组和非捕获组----------------------*/

const date: string = '2001-03-29'

console.log(/(\d{4})-(\d{2})-(\d{2})/.exec(date));
// [
//     '2001-03-29',
//     '2001',
//     '03',
//     '29',
//     index: 0,
//     input: '2001-03-29',
//     groups: undefined
//   ]

const reg: RegExp = /(\d{4})-(\d{2})-(\d{2})/

console.log(reg.exec(date)?.[0]);//2001-03-29
console.log(reg.exec(date)?.[1]);//2001
console.log(reg.exec(date)?.[2]);//03
console.log(reg.exec(date)?.[3]);//29
