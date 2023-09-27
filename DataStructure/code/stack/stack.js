"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    // 构造函数
    function Stack() {
        this.item = [];
        this.length = 0;
    }
    /**
     * 插入元素到栈顶
     * @param element 插入的元素
     */
    Stack.prototype.push = function (element) {
        this.item[this.length] = element;
        this.length++;
    };
    /**
     * 判断栈是否为空
     * @returns 是否为空的判断
     */
    Stack.prototype.isEmpty = function () {
        return this.length === 0;
    };
    /**
     * 去除栈顶元素
     * @returns 返回去除的栈顶元素
     */
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var element = this.item[this.length - 1];
        delete this.item[this.length];
        return element;
    };
    /**
     * 清空栈
     */
    Stack.prototype.clear = function () {
        this.item = [];
    };
    /**
     * 返回栈的长度
     * @returns 栈的长度
     */
    Stack.prototype.size = function () {
        return this.length;
    };
    /**
     * 将栈转换为字符串
     * @returns 返回转换的结果
     */
    Stack.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var result = this.item['0'];
        for (var i = 1; i < this.length; i++) {
            result = "".concat(result, ",").concat(this.item[i]);
        }
        return result;
    };
    return Stack;
}());
exports.Stack = Stack;
