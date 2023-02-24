// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
// [[],[3],[],[],[]]
// 输出：[null,null,3,-1,-1]
// 首先构造，[]表示参数为空,然后调用appendTail,[3]表示参数为3

var CQueue = function () {
  // 定义成员:一个数组
  this.member = []
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function (value) {
  // 直接尾插并返回参数value
  this.member.push(value)
  return value
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function () {
  // 直接调用shift() shift返回的是删除的值，如果没有删除的值则返回-1
  return this.member.shift() || -1
};

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/