export class Node <T>{
    public element: T
    public next: null | Node<T>
    constructor (element: T){
        this.element = element
        this.next = null
    }
}

export class LinkList<T>{
    public count: number
    public head: null | Node<T>

    constructor() {
        this.count = 0
        this.head = null
    }

    public equalsFn(former: T, latter: T): boolean {
        return former === latter
    }

    public push(element: T) {
        let current: null | Node<T> = null
        const node = new Node(element)
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head
            while (current.next !== null) {
                current = current?.next
            }
            current.next = node
        }
        this.count++
    }

    public getElementAt(index: number): Node<T> | undefined {
        if (index && index >= 0 && index <= this.count) {
            let current: null | Node<T> = this.head
            for (let i = 0; i < index && current !== null; i++) {
                current = current.next
            }
            return current as Node<T>
        }
        return undefined
    }

    public removeAt(index: number): undefined | Node<T> {
        if (index && index >= 0 && index <= this.count) {
            let current: null | Node<T> = this.head
            if (index === 0) {
                this.head = (current as Node<T>).next
                return current!
            } else {
                const previous = this.getElementAt(index - 1)
                current = previous!.next
                previous!.next = current!.next
            }
            this.count--
            return current!
        }
        return undefined
    }

    public insert(element: T, index: number): boolean {
        if (index && index >= 0 && index <= this.count) {
            const node = new Node(element)
            if (index === 0) {
                const current = this.head
                node.next = current
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1)
                const current = previous!.next
                previous!.next = node
                node.next = current
            }
            this.count++
            return true
        }
        return false
    }

    public indexOf(element: T): number {
        let current = this.head
        for (let i = 0; i < this.count && current !== null; i++) {
            if (this.equalsFn(element, current.element)) return i
            current = current.next
        }
        return -1
    }

    public remove(element: T): Node<T> | undefined {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    public isEmpty(): boolean {
        return this.count === 0
    }

    public size(): number {
        return this.count
    }

    public getHead(): T | undefined {
        return this.head === null ? undefined : this.head.element
    }

    public toString () {
        if (this.isEmpty()) {
          return ''
        }
        let str: any = this.head!.element
        let current = this.head
        
        while(current!.next !== null) {
          current = current!.next
          str = `${str},${current.element}`
        }
        return str
      }
}