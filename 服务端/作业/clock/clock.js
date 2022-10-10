const hour = require('./Hour.js')
const minute = require('./Minute.js')
const second = require('./Second.js')

class Clock {
  constructor(hourtime, minutetime, secondtime) {
    // 为时钟对象构造，时，分，秒 三个指针对象
    this.hour = hour
    this.minute = minute
    this.second = second

    // 初始化给指针时间
    this.init(hourtime, minutetime, secondtime)

    // 分别指定各时针转动方法
    this.second.runCallback = () => {
      if (this.second.run()) {
        if (this.minute.run()) {
          this.hour.run()
        }
      }

      this.show()
    }
  }

  // 初始化时间方法
  init(hourtime = 0, minutetime = 0, secondtime = 0) {
    this.hour.settime(hourtime)
    this.minute.settime(minutetime)
    this.second.settime(secondtime)
  }

  // 每秒展示时间
  show() {
    let hour = this.hour.time < 10 ? '0' + this.hour.time : this.hour.time.toString()
    let minute = this.minute.time < 10 ? '0' + this.minute.time : this.minute.time.toString()
    let second = this.second.time < 10 ? '0' + this.second.time : this.second.time.toString()
    console.log(`${hour}:${minute}:${second}`)
  }

  // 开始
  start() {
    this.second.start()
  }

  // 结束
  stop() {
    this.second.stop()
  }
}

let clock = new Clock(23, 59, 50)
clock.start()
