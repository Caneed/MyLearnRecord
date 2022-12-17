

// map 

// const map = new Map()

// 链式调用
// map.set(1,'val1').set(2,'val2').set(1,'val3')

// console.log(map);
// // Map(2) { 1 => 'val3', 2 => 'val2' }

// 迭代方法

// const map = new Map([
//   ['cucumber', 500],
//   ['tomatoes', 350],
//   ['onion', 50]
// ])
// // 遍历键值
// for (let vegetable of map.keys()) {
//   console.log(vegetable);
//   //   cucumber
//   // tomatoes
//   // onion
// }
// // 遍历值
// for (let mount of map.values()) {
//   console.log(mount);
//   //   500
//   // 350
//   // 50
// }
// // 遍历实体
// for (let entries of map.entries()) {
//   console.log(entries);
//   //   [ 'cucumber', 500 ]
//   // [ 'tomatoes', 350 ]
//   // [ 'onion', 50 ]  
// }

// // forEach
// map.forEach((value, key, map) => {
//   console.log(`${key}:${value}`);
//   // cucumber:500
//   // tomatoes:350
//   // onion:50
// })

// // Object 和 Map 互相转化

// let obj={
//   name:'ming',
//   age:30
// }

// console.log(Object.entries(obj));
// // [ [ 'name', 'ming' ], [ 'age', 30 ] ]
// let map=new Map(Object.entries(obj))
// console.log(map);
// // Map(2) { 'name' => 'ming', 'age' => 30 }

// ______________________
// let map = new Map([
//   ['banana', 1],
//   ['orange', 2]
// ])
// let price=Object.fromEntries(map)
// console.log(price);
// // { banana: 1, orange: 2 }

// map克隆

// let original = new Map([
//   ['1', 'zhangsan'],
//   ['2', 'lisi']
// ])
// let clone = new Map(original)
// // Map(2) { '1' => 'zhangsan', '2' => 'lisi' }
// console.log(clone);

// // map 合并

// let first = new Map([
//   [1, 'a'],
//   [2, 'b'],
//   [3, 'c']
// ])

// let second = new Map([
//   [4, 'd'],
//   [5, 'e']
// ])
// console.log(...first, ...second);
// // [ 1, 'a' ] [ 2, 'b' ] [ 3, 'c' ] [ 4, 'd' ] [ 5, 'e' ]
// let merged = new Map([...first, ...second])
// console.log(merged);
// // Map(5) { 1 => 'a', 2 => 'b', 3 => 'c', 4 => 'd', 5 => 'e' }

// =============================================
// 基本APi

let map = new Map()

// set 插入键和值
// Map(4) { 1 => 'a', 2 => 'b', 3 => 'c', 4 => 'd' }
map.set(1, 'a').set(2, 'b').set(3, 'c').set(4, 'd')
// console.log(map);
console.log(map.get(1))//a
console.log(map.get(6))//undefined
console.log(map.has(1));//true
console.log(map.delete(1))//true
console.log(map.delete(6))//false
console.log(map.has(1))//false
console.log(map.size)//3
console.log(map.clear());//undefined
console.log(map.size);//0