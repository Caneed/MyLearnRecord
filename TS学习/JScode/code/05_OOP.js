(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        sayHello() {
            console.log('hello');
        }
    }
    const dog = new Dog('旺财', 11);
    dog.sayHello();
})();
