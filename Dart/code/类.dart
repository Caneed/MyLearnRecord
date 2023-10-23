import 'dart:math';

void main() {
  var person = Person.Xm();
  var old = Person.oldP('dm', true);
  person.printPerson(person);
  old.printPerson(old);
}

class Person {
  late String name;
  late num age;
  late bool isMale;
  // Person(String name, num age, bool isMale) {
  //   this.name = name;
  //   this.age = age;
  //   this.isMale = isMale;
  // }
  Person(this.name, this.age, this.isMale);
  Person.Xm() {
    name = 'xm';
    age = 23;
    isMale = false;
  }
  Person.oldP(String name, bool isMale) {
    this.name = name;
    age = 1000;
    this.isMale = isMale;
  }
  num distanceTo(Person oth){
    return age+oth.age;
  }
  Person.reDir():this('xm',12,false);
  printPerson(Person person) {
    print('age:');
    print(person.age);
    print('name:');
    print(person.name);
    print('sex:');
    print(person.isMale == true ? 'male' : 'female');
  }
  set elder(num increase){
    age+=increase;
  }
  set younger(num decrease){
    age-=decrease;
  }
  String get badName=>'bad'+name;
  String get goodName=>'good'+name;
}

class Dog extends Person {
  Dog.xD() : super.Xm() {}
}
