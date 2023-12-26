/* -----------------------x*--------------------*/

// console.log(/bo*/.exec('boooooooooooooo'));
// // [
//     //     'boooooooooooooo',
//     //     index: 0,
//     //     input: 'boooooooooooooo',
//     //     groups: undefined
//     //   ]

//     console.log(/bo*/.exec('bird'));
//     // [ 'b', index: 0, input: 'bird', groups: undefined ]

/* -----------------------x+--------------------*/

// console.log(/bo+/.exec('boooooooooooo'));
// // [
// //     'boooooooooooo',
// //     index: 0,
// //     input: 'boooooooooooo',
// //     groups: undefined
// //   ]
// console.log(/bo+/.exec('bird'));
// // null



/* -----------------------x?--------------------*/

// console.log(/bo?/.exec('booooooooooooo'));
// // [ 'bo', index: 0, input: 'booooooooooooo', groups: undefined ]
// console.log(/bo?/.exec('bird'));
// // [ 'b', index: 0, input: 'bird', groups: undefined ]

/* -----------------------x{n}--------------------*/

// console.log(/bo{2}/.exec('boooooooooo'));
// // [ 'boo', index: 0, input: 'boooooooooo', groups: undefined ]
// console.log(/bo{3}/.exec('booooooooo'));
// // [ 'booo', index: 0, input: 'booooooooo', groups: undefined ]

/* -----------------------x{n,}--------------------*/

// console.log(/bo{3,}/.exec('booooooooooooo'));
// // [
// //     'booooooooooooo',
// //     index: 0,
// //     input: 'booooooooooooo',
// //     groups: undefined
// //   ]
// console.log(/bo{3,}/.exec('boo'));
// // null

/* -----------------------x{n,m}--------------------*/

// console.log(/bo{2,5}/.exec('booooooooooooooooooo'));
// // [
// //     'booooo',
// //     index: 0,
// //     input: 'booooooooooooooooooo',
// //     groups: undefined
// //   ]
// console.log(/bo{2,5}/.exec('boo'));
// // [ 'boo', index: 0, input: 'boo', groups: undefined ]
// console.log(/bo{2,5}/.exec('booo'));
// // [ 'booo', index: 0, input: 'booo', groups: undefined ]
// console.log(/bo{2,5}/.exec('bo'));
// //null