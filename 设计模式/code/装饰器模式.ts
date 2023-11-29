class Car {
  private wheels: number
  constructor(n: number) {
    this.wheels = n
  }

  public run() {
    console.log(`i have ${this.wheels},i can run `)
  }
}

class Decorator {
  private car: Car
  constructor(car: Car) {
    this.car = car
  }
  public armor() {
    console.log("now i have armor")
  }

  public weapon() {
    console.log("now i have weapon")
  }
}

const car=new Car(4)
const decorator=new Decorator(car)
decorator.armor()
decorator.weapon()
// now i have armor
// now i have weapon