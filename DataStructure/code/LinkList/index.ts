import { LinkList } from "./LinkList";

let list=new LinkList()

console.log(list.getHead())
console.log(list.isEmpty())
console.log(list.size())
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
console.log(list.getElementAt(2))
console.log(list.indexOf(3))
console.log(list.insert(10,5))
console.log(list)
console.log(list.remove(3))
console.log(list)
console.log(list.removeAt(2))
console.log(list)






