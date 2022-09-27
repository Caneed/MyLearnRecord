
// any类型
let str:any='hello'
let num:any=123
console.log(num);//123
console.log(str);//hello

// 数组
let arr:number[]=[1,2,3]
//泛型
let arr2:Array<number>=[1,2,3]
console.log(arr,arr2);

// 元组
let pup:[number,string,boolean]
pup=[1,'hello',true]
console.log(pup[2]);//true
console.log(pup[0]);//1

// 枚举
enum color {'blue','red','yellow'}
let c:color=color.blue
let b:color=color.red
console.log(c);//0
console.log(b)//1

// void
function fun(): void{
  console.log('fun');
  
}
