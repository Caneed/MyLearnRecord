class USB {
  public getName() {
    return "USB"
  }
}

class TYPE_C {
  private plugin: USB
  constructor() {
    this.plugin = new USB()
  }
  public getName() {
    return `${this.plugin.getName()}, now is type-c `
  }
}

const tc = new TYPE_C()
console.log(tc.getName())//USB, now is type-c 
