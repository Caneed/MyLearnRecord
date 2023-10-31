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

type Todo = {
  drink: boolean
  eat: boolean
  sleep: boolean
  work: boolean
  play: boolean
}

type done = Pick<Todo,'drink'|'eat'|'sleep'>
// type done = {
//     drink: boolean;
//     eat: boolean;
//     sleep: boolean;
// }

type MyPick<K,V extends keyof K> = {
    [P in V]:K[P]
}

type MyDone = MyPick<Todo,'drink'|'eat'|'sleep'>
// type MyDone = {
//     drink: boolean;
//     eat: boolean;
//     sleep: boolean;
// }