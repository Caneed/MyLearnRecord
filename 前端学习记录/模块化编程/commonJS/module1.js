//module1 向外暴露对象

module.exports = {
  msg: 'module1',
  foo () {
    console.log('module1暴露的接口' + this.msg);
  }
}