
export class Stack {
  // 成员和长度
  private item:any[]
  private length:number
  // 构造函数
  constructor(){
    this.item = []
    this.length = 0
  }
  /**
   * 插入元素到栈顶
   * @param element 插入的元素
   */
  public push(element: any){
    this.item[this.length] = element
    this.length++
  }
  /**
   * 判断栈是否为空
   * @returns 是否为空的判断
   */
  public isEmpty():boolean{
    return this.length===0
  }
  /**
   * 去除栈顶元素
   * @returns 返回去除的栈顶元素
   */
  public pop(): any{
    if(this.isEmpty()){
      return undefined
    }
    const element = this.item[this.length-1]
    delete this.item[this.length]
    return element
  }
  /**
   * 清空栈
   */
  public clear() {
    this.item = []
  }
  /**
   * 返回栈的长度
   * @returns 栈的长度
   */
  public size():number{
    return this.length
  }
  /**
   * 将栈转换为字符串
   * @returns 返回转换的结果
   */
  public toString() {
    if (this.isEmpty()) {
      return ''
    }
    let result = this.item['0']
    for(let i = 1; i < this.length; i++) {
      result = `${result},${this.item[i]}`
    }
    return result
  }
}