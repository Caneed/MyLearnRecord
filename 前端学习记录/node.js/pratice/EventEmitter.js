
// EventEmitter事件触发器的初始化
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// 创建和触发事件回调
eventEmitter.on('start', () => {
  console.log('开始事件触发')
})
eventEmitter.emit('start')

eventEmitter.on('start', (number) => {
  console.log(`开始事件触发，并且传入的参数为${number}`)
})
eventEmitter.emit('start', 11)

let obj = {
  a: 'obj',
  say: eventEmitter.on('say', () => {
    setTimeout(() => {
      console.log(say);
    })
  })
}