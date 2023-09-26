"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.item = [];
        this.length = 0;
    }
    Stack.prototype.push = function (element) {
        this.item[this.length] = element;
        this.length++;
    };
    Stack.prototype.isEmpty = function () {
        return this.length === 0;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var element = this.item[this.length - 1];
        delete this.item[this.length];
        return element;
    };
    Stack.prototype.clear = function () {
        this.item = [];
    };
    Stack.prototype.size = function () {
        return this.length;
    };
    Stack.prototype.toString = function () {
        var result;
        if (this.isEmpty()) {
            result = '';
            return result;
        }
        this.item.forEach(function (it) {
            result += result + it + '';
        });
    };
    return Stack;
}());
exports.Stack = Stack;
