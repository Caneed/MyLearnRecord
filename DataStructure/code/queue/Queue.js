"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.count = 0;
        this.head = 0;
        this.item = {};
    }
    Queue.prototype.isEmpty = function () {
        return this.count == 0;
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.item[this.head];
        delete this.item[this.head];
        this.count--;
        return result;
    };
    Queue.prototype.enqueue = function (element) {
        this.item[this.count] = element;
        this.count++;
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.item[this.head];
    };
    Queue.prototype.size = function () {
        return this.count;
    };
    Queue.prototype.clear = function () {
        this.count = 0;
        this.head = 0;
        this.item = {};
    };
    Queue.prototype.toString = function () {
        if (this.isEmpty())
            return "";
        var objArr = this.item[this.head];
        for (var i = this.head + 1; i < this.count; i++) {
            objArr = "".concat(objArr, ",").concat(this.item[i]);
        }
        return objArr;
    };
    return Queue;
}());
exports.Queue = Queue;
