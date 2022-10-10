const Pointer = require("./Pointer.js")

class Minute extends Pointer {

   run(){
        if(++this.time == 60){
            this.settime(0)
            return true
        }else {
            this.settime(this.time)
        }
   }



}


module.exports = new Minute()