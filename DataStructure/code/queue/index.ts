import { Queue } from './Queue';

const queue = new Queue()

console.log(queue.isEmpty())
console.log(queue.size())
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
console.log(queue);
console.log(queue.size());
queue.dequeue()
console.log(queue);
console.log(queue.peek())
console.log(queue.item[queue.head]);
console.log(queue.item);

console.log(queue.toString())
queue.clear()
console.log(queue);


