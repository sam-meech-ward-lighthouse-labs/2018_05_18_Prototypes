function Monkey() {
  // when we use the `new` keyword
  // 1. a new empty object will be created {}
  // 1a. this empty object  can be accessed using `this`
  this.tail = true;
  // 2. that object's prototype will be set to `Monkey.prototype`
  // 3. that object will be returned. 
}
// Monkey.prototype = {};

let monkey = new Monkey();
console.log(monkey);
console.log(Object.getPrototypeOf(monkey) === Monkey.prototype);
console.log(Object.getPrototypeOf(Monkey.prototype) === Object.prototype);

// most functions in JavaScript has a property called `prototype`
// This property is an object

// typeof Array
// new Array();

// let things = ["🤗"];
// let things = new Array();
// things.push("🤗");

// console.log(things);

// things.forEach((thing) => {
//   console.log(thing);
// });