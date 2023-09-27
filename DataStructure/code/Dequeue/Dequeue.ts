export class Dequeue {
  private item: {}
  private count: number
  private head: number
  constructor() {
    this.item = {}
    this.count = 0
    this.head = 0
  }

  public size(): number {
    return this.count - this.head
  }
  public isEmpty(): boolean {
    return this.size() === 0
  }

  public clear() {
    this.item = {}
    this.count = 0
    this.head = 0
  }

  public toString(): string {
    if (this.count === 0) return ""
    let queueStr = this.item[this.head]
    for (let i = this.head + 1; i < this.count; i++) {
      queueStr = `${queueStr},${this.item[i]}`
    }
    return queueStr
  }

  public addBack<T>(element: T) {
    this.item[this.count] = element
    this.count++
  }
  public addFront<T>(element: T) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else {
      this.item[--this.head] = element
    }
  }
  public removeFront<T>(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.item[this.head]
    delete this.item[this.head]
    this.head++
    return result
  }

  public removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.item[this.count]
    delete this.item[this.count]
    this.count--
    return result
  }

  public peekFront<T>(): T | undefined {
    if (this.isEmpty()) return undefined
    return this.item[this.head]
  }

  public peekBack<T>(): T|undefined {
    if(this.isEmpty()) return undefined
    return this.item[this.count]
  }
}
