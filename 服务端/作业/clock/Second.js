const Pointer = require('./Pointer.js')

class Second extends Pointer {
    timer 
    runCallback

    run(){
        if(++this.time == 60){
            this.settime(0)
            return true
        }else {
            this.settime(this.time)
        }
    }

    start(){
        this.timer = setInterval(this.runCallback,1000)
    }

    stop(){
        clearInterval(this.timer)
    }
}


module.exports = new Second()