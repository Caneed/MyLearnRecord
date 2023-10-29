// function getArgv<T>(argv: T): T {
//   return argv
// }

// let myGetArgv: <T>(argv: T) => T = getArgv

// =-------------------------------------------------

// function getArgv<T>(argv: T): T {
//   return argv
// }

// let myGetArgv: { <T>(argv: T): T } = getArgv

// --------------------------------------------------

// interface MyGetArgv{
//   <T>(argv: T): T
// }

// function getArgv<T>(argv: T): T {
//   return argv
// }

// let myGetArgv: MyGetArgv = getArgv

// ----------------------------------------------

// interface MyGetArgv<T>{
//   (argv: T): T
// }

// function getArgv<T>(argv: T): T {
//   return argv
// }

// let myGetArgv: MyGetArgv<number> = getArgv

// -----------------------------------------------

// class MyGetArgv<T> {
//   argv: T
//   getArgv: (argv: T) => T
// }

// const myGetArgv = new MyGetArgv<number>()
// myGetArgv.argv = 1
// myGetArgv.getArgv = function (argv: number) {
//   return argv
// }

// -----------------------------------------

// interface Arr {
//   length: number
// }

// function getArrLen<T extends Arr>(arr: T) {
//   console.log(arr.length)
// }

// const arr = [1, 2, 3, 4]
// getArrLen(arr) //4

// ------------------------------------------

// function getProperty<K, V extends keyof K>(obj: K, value: V) {
//   return obj[value]
// }

// let x = { a: 1, b: 2, c: 3, d: 4 }

// getProperty(x,'a')
// // getProperty(x,'e')//error

// -----------------------------------------------

// function create<T>(c: { new (): T }): T {
//   return new c()
// }

// ---------------------------------------------

