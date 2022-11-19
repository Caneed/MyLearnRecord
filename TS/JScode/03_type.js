// 字面量
let a;
a = 10;
let b;
b = "hello";
b = "hi";
let c;
c = 123;
c = "hello";
// any
let d;
d = 10;
d = "hello";
d = false;
// unknown
let e;
e = 10;
e = "hello";
e = false;
let s;
e = "hello";
if (typeof e == "string") {
    s = e;
}
s = e;
s = e;
function fn() {
}
function fn2() {
    throw new Error('报错');
}
