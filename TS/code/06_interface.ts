(function(){
  interface myInterface{
    name:string
    age:number
    sayHello():void
  }

  class Dog implements myInterface{
    name
    age
    constructor(name:string,age:number){
      this.name=name
      this.age=age
    }
    sayHello(){
      console.log('wowowowo');
      
    }
  }
})()