/*const car = {
  brand: "Toyota",
  speed: 120,
  drive() {
    console.log(`the ${this.brand} is driving at ${this.speed} km/h`);
  },
};
car.drive();*/

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`the ${this.brand} is driving at ${this.speed} km/h`);
  }
}
const volvo = new Car("Volvo", 100);
volvo.drive();
const mercedes = new Car("Mercedes", 120);
mercedes.drive();
const bmw = new Car("BMW", 140);
bmw.drive();
const audi = new Car("Audi", 160);
audi.drive();

class ElectricCar extends Car {
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`the ${this.brand} is charged to ${this.charge}%`);
  }
}
const tesla = new ElectricCar("Tesla", 80);
tesla.drive();
tesla.chargeBattery(90);

// Exercise A 1.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// A 2.
const john = new Person("John", 30);
john.greet();
const jane = new Person("Jane", 25);
jane.greet();

// B 1. & B 2.
class bankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(
      `${this.owner} deposited ${amount}SEK and now has ${this.balance}SEK`
    );
  }
  withdraw(amount) {
    this.balance -= amount;
    if (amount > this.balance) {
      console.log("Insufficient funds for withdrawal.");
      return;
    }
    console.log(
      `${this.owner} withdrew ${amount}SEK and now has ${this.balance}SEK`
    );
  }
}
const Tuna = new bankAccount("Tuna", 10000);
Tuna.deposit(5000);
Tuna.withdraw(20000);

// C 1. & C 2. & C 3.
const animals = [];
class Animal {
  constructor(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} makes a sound ${this.sound}.`);
  }
}

const rex = new Animal("Rex", "Dog", "Woof");
animals.push(rex);
const whiskers = new Animal("Whiskers", "Cat", "MIAUUUUU");
animals.push(whiskers);
const tweety = new Animal("Tweety", "Bird", "PRIPIRPRPR");
animals.push(tweety);

animals.forEach((animal) => {
  animal.makeSound();
});
