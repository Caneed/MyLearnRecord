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
// declare function getStringArray(): StringArray
// interface StringArray {
//   [index: number]: string
// }

// interface NumArray {
//   [index: string]: number
// }

// let arr: StringArray = []

// // arr[0] = 1

// arr[0] = '1'

// let arrNum: NumArray = {
//     a:1,
//     b:2,
//     d:4,
//     // e:'3'//err
// }

// console.log(arrNum['a']) //1
// -----------------------------------
// interface TrafficTool {
//   price: number
//   way: 'fly' | 'run' | 'ride'
// }

// interface Car extends TrafficTool {
//   action: 'beep' | 'turn'
// }

// const car:Car={
//     price:200000,
//     way:'run',
//     action:'beep'
// }
// =====================================

// interface Circle{
//     radius:number
// }

// interface Colorful{
//     color:string
// }

// type ColorfulCircle=Circle&Colorful

// const colorfulCircle:ColorfulCircle={
//     radius:20,
//     color:'red'
// }

// -----------------------------------

// interface MyType<T>{
//     name:T
// }

// const tp:MyType<string> = {
//     name:'aaa'
// }

// =====================================

// function names(names: Array<string>) {
//   console.log(names)
// }

// const arr=new Array()
// const arr=new ReadOnlyArray//error

// const arr:ReadonlyArray<number>=[1,2,3]
// const arr:readonly number[]=[1,2,3]
// let arr: readonly number[] = [1, 2, 3]
// let arr1: number[] = [1, 2, 3]

// arr = arr1
// arr1 = arr //err:类型 "readonly number[]" 为 "readonly"，不能分配给可变类型 "number[]"。

// --------------------------------------------------------------------

// type Tp=[number,string]

// const tp:Tp=[1,'1']