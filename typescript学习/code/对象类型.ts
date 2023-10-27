// class Person{
//     name:string
//     age:number
//     job:string
// }

// type Person = {
//     name:string
//     age:number
//     job:string
// }

// interface Person {
//   name: string
//   age: number
//   job: string
//   salary?: number
//   readonly estate: number
// }

// const person: Person = {
//   name: '张三',
//   age: 20,
//   job: '搬砖',
//   estate: 0,
// }

// person.estate=20 //error:无法赋值estate，因为它是只读属性
// console.log(person.salary) //undefined

// -----------------------------------------

// interface readOnlyPerson {
//   readonly name: string
//   readonly age: number
// }

// interface writablePerson {
//   name: string
//   age: number
// }

// let wPerson: writablePerson = {
//   name: 'zs',
//   age: 20,
// }
// let rPerson: readOnlyPerson = wPerson

// console.log(rPerson)
// wPerson.age++
// console.log(rPerson)
// // { name: 'zs', age: 20 }
// // { name: 'zs', age: 21 }

// ---------------------------------------------------
