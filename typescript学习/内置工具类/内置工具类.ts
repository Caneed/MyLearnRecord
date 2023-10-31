// type A = Awaited<Promise<Promise<Promise<number>>>>
// // type A = number

// type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T

// type B = MyAwaited<Promise<Promise<Promise<number>>>>
// // type B = number

// ---------------------------------------------------------------------------

// type A = Partial<{
//   name: string
//   age: number
// }>

// // type A = {
// //     name?: string | undefined;
// //     age?: number | undefined;
// // }

// type MyPartial<T> = { [Property in keyof T]?: T[Property] | undefined }

// type B = MyPartial<{
//   name: string
//   age: number
// }>

// -----------------------------------------------------------------------------------

// type A = Required<{
//   name?: string
//   age?: number
// }>
// // type A = {
// //     name: string;
// //     age: number;
// // }

// type MyRequired<T> = {
//   [P in keyof T]-?: T[P]
// }

// type B = MyRequired<{
//   name?: string
//   age?: number
// }>

// // type B = {
// //     name: string;
// //     age: number;
// // }

// -----------------------------------------------------------------------------------------------

// type A = Readonly<{
//   name: string
//   age: number
// }>
// // type A = {
// //     readonly name: string;
// //     readonly age: number;
// // }

// type MyReadonly<T> = {
//   +readonly [P in keyof T]: T[P]
// }

// type B = MyReadonly<{
//     name:string
//     age:number
// }>
// // type B = {
// //     readonly name: string;
// //     readonly age: number;
// // }
// --------------------------------------------------------------------------------------------

// type Person = {
//   age: number
//   grade: '1' | '2' | '3'
// }

// type Names = 'Mick' | 'John' | 'Amy'

// type Students = Record<Names, Person>

// // type Students = {
// //     Mick: Person;
// //     John: Person;
// //     Amy: Person;
// // }

// type MyRecord<K extends string | number | symbol, V> = {
//   [P in K]: V
// }

// type MyStu = MyRecord<Names, Person>
// // type MyStu = {
// //     Mick: Person;
// //     John: Person;
// //     Amy: Person;
// // }

// ---------------------------------------------------------

// type Todo = {
//   drink: boolean
//   eat: boolean
//   sleep: boolean
//   work: boolean
//   play: boolean
// }

// type done = Pick<Todo,'drink'|'eat'|'sleep'>
// // type done = {
// //     drink: boolean;
// //     eat: boolean;
// //     sleep: boolean;
// // }

// type MyPick<K,V extends keyof K> = {
//     [P in V]:K[P]
// }

// type MyDone = MyPick<Todo,'drink'|'eat'|'sleep'>
// // type MyDone = {
// //     drink: boolean;
// //     eat: boolean;
// //     sleep: boolean;
// // }

// -----------------------------------------------------------

// type Ez = Exclude<'a' | 'b' | 'c' | 'd', 'c'>
// // type Ez = "a" | "b" | "d"

// type MyExclude<T, U> = T extends U ? never : T

// // ----------------------------------------------------------------

// type todo = {
//   drink: boolean
//   eat: boolean
//   sleep: boolean
//   work: boolean
//   play: boolean
// }

// type NotTodo = Omit<todo, 'drink'>

// // type NotTodo = {
// //     eat: boolean;
// //     sleep: boolean;
// //     work: boolean;
// //     play: boolean;
// // }

// type MyOmit<K, V extends string | number | symbol> = {
//     [P in Exclude<keyof K, V>]:K[P]
// }

// type MyNotTodo = MyOmit<todo,'drink'>
// -----------------------------------------------------------------------------

// type ex = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'f'>
// // type ex = "a"

// type MyExtract<V, U extends any> = V extends U ? V : never

// type MyEx = MyExtract<'a' | 'b' | 'c' | 'd', 'a' | 'f'>

// --------------------------------------------------------------------------------

// type No = NonNullable<string | number | undefined | null>
// // type No = string | number

// type MyNonNullable<T> = T &{}

// type MyMo = MyNonNullable<string | number | undefined | null>

// --------------------------------------------------------------

// type Argv = Parameters<(num: number, arg: string) => {}>
// // // type Argv = [num: number, arg: string]

// // type Non = Parameters<()=>{}>
// // // type Non = []

// type MyParameters<T extends (...args: any) => any> = T extends (
//   ...args: infer P
// ) => any
//   ? P
//   : never

// ---------------------------------------------------------------------------

// class C{
//     constructor(){}
// }

// type Con = ConstructorParameters<typeof C>
// // type Con = []

// class B {
//     constructor(a:number,b:string){}
// }

// type ConB = ConstructorParameters<typeof B>
// // type ConB = [a: number, b: string]

// type ErrorType = ConstructorParameters<ErrorConstructor>
// // type ErrorType = [message?: string | undefined]

// type MyConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never

// -------------------------------------------------------------------------------

// type Fun = (argv: number) => number

// type FunReturn = ReturnType<Fun>
// // type FunReturn = number

// type Fun2 = () => { a: number; b: string }
// type Fun2Re = ReturnType<Fun2>
// // type Fun2Re = {
// //     a: number;
// //     b: string;
// // }

// type MyReturnType<T extends (...argv: any) => any> = T extends (
//   ...args: any
// ) => infer re
//   ? re
//   : never

// -------------------------------------------------------------------------------


// class C{
//   x:number = 0
//   y:string = '0'
// }

// type ab = typeof C

// type InsC = InstanceType<typeof C>
// // type InsC = C

// type MyInstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any

// -----------------------------------------------------------------------------------------

// function fun(this:number){
// }

// type Ts = ThisParameterType<typeof fun>

// -------------------------------------------------------------------------------------------


// function fun(this:number){}

// type Ts = OmitThisParameter<typeof fun>
// // type Ts = () => void

// function f2(){}
// type Tss = OmitThisParameter<typeof f2>

// --------------------------------------------------------------------------------------------



