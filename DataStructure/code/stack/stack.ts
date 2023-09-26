
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
   * 
   * @returns 
   */
  public size():number{
    return this.length
  }
  public toString() {
    let result
    if(this.isEmpty()){
      result = ''
      return result
    }
    this.item.forEach((it:any)=>{
      result+=result+it+''
    })
  }
}