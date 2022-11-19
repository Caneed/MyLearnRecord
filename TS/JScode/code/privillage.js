(function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        // // 普通函数的设置方式
        // getName(){
        //   return this.name
        // }
        // setName(name:string){
        //   this.name=name
        // }
        // ts提供的方法
        get Name() {
            return this.name;
        }
        set Name(value) {
            this.name = value;
        }
    }
    const person = new Person('小米', 111);
    // person.getName()
    person.Name;
    person.Name = '华为';
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('123', 123);
})();
