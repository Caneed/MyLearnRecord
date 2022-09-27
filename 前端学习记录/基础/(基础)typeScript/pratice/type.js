// any类型
var str = 'hello';
var num = 123;
console.log(num); //123
console.log(str); //hello
// 数组
var arr = [1, 2, 3];
//泛型
var arr2 = [1, 2, 3];
console.log(arr, arr2);
// 元组
var pup;
pup = [1, 'hello', true];
console.log(pup[2]); //true
console.log(pup[0]); //1
// 枚举
var color;
(function (color) {
    color[color["blue"] = 0] = "blue";
    color[color["red"] = 1] = "red";
    color[color["yellow"] = 2] = "yellow";
})(color || (color = {}));
var c = color.blue;
var b = color.red;
console.log(c); //0
console.log(b); //1
// void
function fun() {
    console.log('fun');
}
