// class Person {
//     name: string
//     age: number
//     sex
// }
// const person = new Person()

// person.age = 12
// person.name = 'haha'
// person.sex = 'male'


// -------------------------------------------------------------------

// class Person{
//     name!:string
// }

// --------------------------------------------------------------------


// class Person {
//     [name: string]: (name: string) => string
//     check(name:string){
//         return 'aaa'
//     }
//     haah(name:boolean){
//         return name
//     }
//     // 类型“(name: boolean) => boolean”的属性“haah”不能赋给“string”索引类型“(name: string) => string”。
// }

// ----------------------------------------------------------------------------------


// interface int{
//     name:string
//     talk(content:string):void
// }

// class person implements int{
//     name: string;
//     talk(content: string): void {
//         console.log(content)
//     }
// }

// class wrongPerson implements int{}
// // 类“wrongPerson”错误实现接口“int”。
// //   类型“wrongPerson”缺少类型“int”中的以下属性: name, talk

// --------------------------------------------------------------------

// interface eat {
//     eat(foods: string): void
// }

// interface sleep {
//     sleep(bed: boolean): void
// }

// class lazy implements eat, sleep {
//     eat(foods: string) { }
//     sleep(bed: boolean): void {
//     }
// }

// -------------------------------------------------

// class Animal {
//     move() {
//       console.log("Moving along!");
//     }
//   }

//   class Dog extends Animal {
//     woof(times: number) {
//       for (let i = 0; i < times; i++) {
//         console.log("woof!");
//       }
//     }
//   }

//   const d = new Dog();
//   // Base class method
//   d.move();
//   // Derived class method
//   d.woof(3);

// --------------------------------------------------------------

// class candidate {
//     talk() {
//         console.log('im candidate')
//     }
// }

// class frank extends candidate {
//     talk(): void {
//         console.log('im frank underwood');

//     }
// }

// const f = new frank()
// f.talk()//im frank underwood

// ---------------------------------------------------------------------

// class Base {
//     name = "base";
//     constructor() {
//         console.log("My name is " + this.name);
//     }
// }

// class Derived extends Base {
//     name = "derived";
// }

// // Prints "base", not "derived"
// const d = new Derived();

// -----------------------------------------------------------------------------------

// class Base {
//     protected name: string
//     protected age: number
//     constructor() {
//         this.name = 'hh'
//         this.age = 12
//     }
// }

// class Derived extends Base {
//     constructor() {
//         super()
//     }
//     talk() {
//         console.log('my name is:' + this.name)
//     }
//     age = 20
// }

// const der = new Derived()

// console.log(der.age)//20

// ---------------------------------------------------------------------------------------

// class Base {
//     protected x: number = 1;
// }
// class Derived1 extends Base {
//     protected x: number = 5;
// }
// class Derived2 extends Base {
//     f1(other: Derived2) {
//         other.x = 10;
//     }
//     f2(other: Derived1) {
//         other.x = 10;
//         //   属性“x”受保护，只能在类“Derived1”及其子类中访问。
//     }
// }

// --------------------------------------------------------------------------------------------

class person{
    static height:number
}


person.height