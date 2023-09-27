"use strict";
exports.__esModule = true;
exports.Dequeue = void 0;
var Dequeue = /** @class */ (function () {
    function Dequeue() {
        this.item = {};
        this.count = 0;
        this.head = 0;
    }
    Dequeue.prototype.size = function () {
        return this.count - this.head;
    };
    Dequeue.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Dequeue.prototype.clear = function () {
        this.item = {};
        this.count = 0;
        this.head = 0;
    };
    Dequeue.prototype.toString = function () {
        if (this.count === 0)
            return "";
        var queueStr = this.item[this.head];
        for (var i = this.head + 1; i < this.count; i++) {
            queueStr = "".concat(queueStr, ",").concat(this.item[i]);
        }
        return queueStr;
    };
    Dequeue.prototype.addBack = function (element) {
        this.item[this.count] = element;
        this.count++;
    };
    Dequeue.prototype.addFront = function (element) {
        if (this.isEmpty()) {
            this.addBack(element);
        }
        else {
            this.item[--this.head] = element;
        }
    };
    Dequeue.prototype.removeFront = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.item[this.head];
        delete this.item[this.head];
        this.head++;
        return result;
    };
    Dequeue.prototype.removeBack = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.item[this.count];
        delete this.item[this.count];
        this.count--;
        return result;
    };
    Dequeue.prototype.peekFront = function () {
        if (this.isEmpty())
            return undefined;
        return this.item[this.head];
    };
    Dequeue.prototype.peekBack = function () {
        if (this.isEmpty())
            return undefined;
        return this.item[this.count];
    };
    return Dequeue;
}());
exports.Dequeue = Dequeue;
