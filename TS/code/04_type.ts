export{}

let a: object;

a = {};

let obj: { name: string; age: number; sex: boolean };
obj = { name: "你好", age: 12, sex: false };

let obj2: { name: string; age: number; sex?: string };
obj2 = { name: "你好", age: 12 };

let obj3: { name: string; [propName: string]: any };
obj3 = { name: "小名", a: 1, b: 2, c: 3, d: 4 };

let fn: Function;

let fn1: (arg1: number, arg2: number) => number;
fn1 = function (n1, n2) {
  return n1 + n2;
};

let e: string[];
let f: number[];

let arr: Array<string>;
let arr1: Array<number>;

let pul: [string, string];

pul = ["hello", "world"];

let pul2: [string, number];

pul2 = ["hello", 123];


enum Gender {
  male,
  female
}

let i:{name:string,gender:Gender}
i={
  name:'张三',
  gender:Gender.male
}


type mytype=string

let m:mytype

type type2=1|2|3|4|5

let s:type2
let x:type2

s=1
x=5