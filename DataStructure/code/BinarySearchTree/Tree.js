"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = this.right = null;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.compareFn = function (a, b) {
        if (a === b)
            return 0;
        return a < b ? 1 : -1;
    };
    BinarySearchTree.prototype.insert = function (value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
        }
        else {
            this.insertNode(this.root, value);
        }
    };
    BinarySearchTree.prototype.insertNode = function (node, value) {
        if (this.compareFn(value, node.value) === -1) {
            if (node.right === null) {
                node.right = new TreeNode(value);
            }
            else {
                this.insertNode(node.right, value);
            }
        }
        else {
            if (node.left === null) {
                node.left = new TreeNode(value);
            }
            else {
                this.insertNode(node.left, value);
            }
        }
    };
    BinarySearchTree.prototype.inOrderTraverse = function () {
        this.inOrderTraverseNode(this.root);
    };
    BinarySearchTree.prototype.inOrderTraverseNode = function (node) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left);
            console.log(node.value);
            this.inOrderTraverseNode(node.right);
        }
    };
    BinarySearchTree.prototype.preOrderTraverse = function () {
        this.preOrderTraverseNode(this.root);
    };
    BinarySearchTree.prototype.preOrderTraverseNode = function (node) {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraverseNode(node.left);
            this.preOrderTraverseNode(node.right);
        }
    };
    BinarySearchTree.prototype.postOrderTraverse = function () {
        this.postOrderTraverseNode(this.root);
    };
    BinarySearchTree.prototype.postOrderTraverseNode = function (node) {
        if (node !== null) {
            this.postOrderTraverseNode(node.left);
            this.postOrderTraverseNode(node.right);
            console.log(node.value);
        }
    };
    BinarySearchTree.prototype.min = function () {
        return this.minValue(this.root);
    };
    BinarySearchTree.prototype.minValue = function (node) {
        var current = node;
        while (current !== null && current.left !== null) {
            current = current.left;
        }
        return current.value;
    };
    BinarySearchTree.prototype.max = function () {
        return this.maxValue(this.root);
    };
    BinarySearchTree.prototype.maxValue = function (node) {
        var current = node;
        while (current !== null && current.right !== null) {
            current = current.right;
        }
        return current.value;
    };
    BinarySearchTree.prototype.search = function (value) {
        console.log(this.searchNode(this.root, value));
    };
    BinarySearchTree.prototype.searchNode = function (node, value) {
        if (node === null) {
            return false;
        }
        if (this.compareFn(node.value, value) === 0) {
            return true;
        }
        else if (this.compareFn(node.value, value) === -1) {
            return this.searchNode(node.left, value);
        }
        else if (this.compareFn(node.value, value) === 1) {
            return this.searchNode(node.right, value);
        }
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
