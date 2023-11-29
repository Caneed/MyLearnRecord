class Hamburger {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  public init() {
    console.log("init", this.name)
  }
}

class BurgerFactory {
  public create(name: string) {
    return new Hamburger(name)
  }
}

const burgerFactory = new BurgerFactory()
const burger = burgerFactory.create("田园鸡腿堡")
burger.init() //init 田园鸡腿堡
