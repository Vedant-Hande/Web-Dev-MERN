// <--------------------------factory funcation------------------------------>

function person1(name, age) {
  const user = {
    name: name,
    age: age,
    describe() {
      console.log(`hello im ${this.name}`);
    },
  };
  return user;
}

const p1 = person1("vedant", 19);

// <---------------------------New Keyword------------------------------------>

function Person2(name, age) {
  this.name = name;
  this.age = age;
}

Person2.prototype.talk = function () {
  console.log(`hello im ${this.name}`);
};

let p2 = new Person2("vedant", 19);
let p3 = new Person2("vedant", 19);

// <---------------------------class constructor------------------------------>

class Person3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`Hello my name is ${this.name}`);
  }
}

let p4 = new Person3("vedant ", 19);

// <---------------------------Inheritance------------------------------------>

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

const dog = new Dog("Rex dog");
// dog.speak();

const cat = new Cat("Whiskers cat");
// cat.speak();

// const tiger = new Animal("tiger");
