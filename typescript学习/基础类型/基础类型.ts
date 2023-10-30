// 字面量
let a: 10;
a = 10;

let b: "hello" | "hi";
b = "hello";
b = "hi";

let c: string | number;
c = 123;
c = "hello";

// any
let d: any;
d = 10;
d = "hello";
d = false;

// unknown

let e: unknown;
e = 10;
e = "hello";
e = false;

let s: string;

e = "hello";

if (typeof e == "string") {
  s = e;
}

s = e as string;
s = <string>e;

export{}
function fn():void{
}
function fn2():never{
  throw new Error('报错')
}