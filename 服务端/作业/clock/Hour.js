const Pointer = require('./Pointer.js')

class Hour extends Pointer {
    
    run(){
        if(++this.time == 24){
            this.settime(0)
            return true
        }else {
            this.settime(this.time)
        }
   }
}

module.exports = new Hour()