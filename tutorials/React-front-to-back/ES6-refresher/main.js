//const and let

//ARROW FUNCTIONS

// function sayHello() {
//   console.log("Hello");
// }

// const sayHello = () => {
//   console.log("Hello");
// };

// const sayHello = name => console.log(`Hello ${name}`;

// sayHello('brad')

const fruits = ["apples", "oranges", "grapes"];

//FOREACH

//loop thorugh an aray

// fruits.forEach((fruit, index) => {
//   console.log(fruit);
// });

// fruits.forEach(() => console.log(fruit));

//MAP

//returns an array where you can chang each item in the array

const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

// console.log(singleFruit);

//FILTER

const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Sharon" }
];

//return an array that removes bob

const people2 = people.filter(person => person.id !== 2);

console.log(people2);

//SPEAD

//allows to spread values out

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [arr, 4];
console.log(arr2, arr3);

//can use spread operator on objects

const person = {
  name: "Brad",
  age: 36
};

const newPerson = {
  ...person,
  email: "brad@gmail.com"
};

console.log(newPerson);

//use spread operator to filter out initial array
const arr4 = [...arr.filter(num => num !== 2)];
console.log(arr4);
//DESTRUCTURING

const profile = {
  name: "john doe",
  address: {
    street: "main street",
    city: "auckland"
  },
  hobbies: ["movies", "music"]
};

//pull the value out of value using destructuring
const { name, address, hobbies } = profile;

const { street, city } = profile.address;

// console.log(name, address.street, hobbies[0]);

console.log(street, city);

//react examples
// this.state.profile;
// this.props.name;

//CLASSES

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person("John", 21);
const person2 = new Person("Sara", 12);

console.log(person1.greet());
console.log(person2.greet());

//SUBCLASSES

//extend another class

class Customer extends Person {
  constructor(name, age, balance) {
    //inherits person properties
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ${this.balance}`;
  }
}

const customer1 = new Customer("Kevin", 32, 300);
console.log(customer1.name, customer1.age);
console.log(customer1.info());

//MODULES example

//file 1 (file1.js)
export const name = "jeff";
export const nums = [1, 2, 3];
export default Person;

//file 2 (file2.js)
import { name, nums } from "./file1";
import Person from "./file1"; //no curly brace for importing default

console.log(name);
