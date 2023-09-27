"use strict";
exports.__esModule = true;
var Dequeue_1 = require("./Dequeue");
var dequeue = new Dequeue_1.Dequeue();
// true
console.log(dequeue.isEmpty());
dequeue.addFront(1);
dequeue.addFront(2);
dequeue.addFront(3);
dequeue.addFront(4);
dequeue.addBack(5);
dequeue.addBack(6);
dequeue.addBack(7);
dequeue.addBack(8);
dequeue.addBack(9);
dequeue.addBack(10);
console.log(dequeue);
// 10
console.log(dequeue.size());
// false
console.log(dequeue.isEmpty());
dequeue.peekBack();
dequeue.peekFront();
dequeue.removeBack();
console.log(dequeue);
dequeue.removeFront();
console.log(dequeue);
console.log(dequeue.toString());
dequeue.clear();
console.log(dequeue);
console.log(dequeue.size());
