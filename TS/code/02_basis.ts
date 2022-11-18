
// 声明一个数字的变量a
let a:number
a=10

let b:string
b='hello'

let c:boolean=false
let d=false

function sum(a:number,b:number){
  console.log(a+b);
}

sum(123,456)

function add(a:number,b:number):number{
  return a+b
}

let res=add(123,456)
console.log(res);
