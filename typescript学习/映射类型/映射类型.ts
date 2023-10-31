// type Item = {
//   x: string
//   y: number
// }

// // T1 = {a:number, b:number}
// type T1 = {
//   [P in 'a' | 'b']: number
// }

// // T2 = {a:'a', b:'b'}
// type T2 = {
//   [p in 'a' | 'b']: p
// }

// // T3 = {x:'x', y:'y'}
// type T3 = {
//   [P in keyof Item]: P
// }

// // type T4 = {
// //   readonly x?: string | undefined;
// //   readonly y?: number | undefined;
// // }
// type T4 = {
//   +readonly [P in keyof Item]?: Item[P]
// }

// -----------------------------------------------------------------

// type User = {
//   name: string
//   age: number
//   gender: 'male' | 'female'
// }

// type MyPartial<T> = {
//   +readonly [P in keyof T]?: T[P]
// }

// type PartialUser = MyPartial<User>

// // type PartialUser = {
// //   readonly name?: string | undefined;
// //   readonly age?: number | undefined;
// //   readonly gender?: "male" | "female" | undefined;
// // }

// ------------------------------------------------------------------

// type User = {
//   name:string
//   age:number
// }

// type MyMapperPartial<Type>={
//   [Properties in keyof Type as `mapper${Capitalize<string & Properties>}`]:Type[Properties]
// }

// type MapperPartialUser= MyMapperPartial<User>

// // type MapperPartialUser = {
// //   mapperName: string;
// //   mapperAge: number;
// // }


// ----------------------------------------------------------------------------