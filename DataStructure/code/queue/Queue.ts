export class Queue {
  private count: number
  private head: number
  private item: {}
  constructor() {
    this.count = 0
    this.head = 0
    this.item = {}
  }

  public isEmpty() {
    return this.count == 0
  }

  public dequeue<T>(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    const result: T = this.item[this.head]
    delete this.item[this.head]
    this.count--
    return result
  }

  public enqueue<T>(element: T) {
    this.item[this.count] = element
    this.count++
  }

  public peek<T>(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.item[this.head]
  }

  public size(): number {
    return this.count
  }

  public clear() {
    this.count = 0
    this.head = 0
    this.item = {}
  }

  public toString(): string {
    if (this.isEmpty()) return ""
    let objArr = this.item[this.head]
    for (let i = this.head + 1; i < this.count; i++) {
      objArr = `${objArr},${this.item[i]}`
    }
    return objArr
  }
}
