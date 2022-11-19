(function(){
abstract class Animal {
  name:string
  age:number
  constructor(name:string,age:number) {
    this.name=name
    this.age=age
  }
  // 抽象方法
  abstract sayHello():void
}

class Dog extends Animal{
  name
  age
  constructor(name:string,age:number){
    super(name,age)
  }
  sayHello(){
    console.log('hello');
  }
}

const dog=new Dog('旺财',11)
dog.sayHello()
})()