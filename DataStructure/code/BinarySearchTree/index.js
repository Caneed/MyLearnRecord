"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tree_1 = require("./Tree");
var tree = new Tree_1.BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
console.log('--------------中序遍历------------');
tree.inOrderTraverse();
// 3 5 6 7 8 9 10 11 12 13 14 15 18 20 15
console.log('--------------先序遍历------------');
tree.preOrderTraverse();
// 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
console.log('--------------后序遍历------------');
tree.postOrderTraverse();
// 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
console.log('================最小最大值=================');
console.log(tree.min());
console.log(tree.max());
// 3 25
console.log('--------------查找----------------------');
tree.search(10);
tree.search(50);
tree.search(3);
tree.search(25);
tree.search(100);
