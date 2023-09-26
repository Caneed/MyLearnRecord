"use strict";
exports.__esModule = true;
var stack_1 = require("./stack");
var stack = new stack_1.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
// Stack { item: [ 1, 2, 3, 4 ], length: 4 }
console.log(stack); 
console.log(stack.toString())
