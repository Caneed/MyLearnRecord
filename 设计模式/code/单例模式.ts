class SingleObject {
  public login: boolean
  constructor() {
    this.login = false
  }
  public reqLogin() {
    this.login = true
  }

  /**
   * 获取实例
   * @IIFE 立即执行函数
   * @static 静态方法
   * @returns 返回实例
   */
  public static getInstance = (function () {
    let instance: SingleObject
    return function () {
      // 如果不存在实例就创建新的实例
      if (!instance) {
        instance = new SingleObject()
      }
      // 如果存在实例就直接返回
      return instance
    }
  })()
}

// 测试

const a = SingleObject.getInstance()
const b = SingleObject.getInstance()

a.reqLogin()
console.log(a === b)//true
console.log(b.login)//true
