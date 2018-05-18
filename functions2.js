function Monkey(redButts) {
  this.tail = true;
  this.redButts = redButts;
}

Monkey.prototype.business = function () {
  console.log("business 🤗 💩");
}

Monkey.prototype.climb = function() {
  console.log(this === exports);
  console.log(`now I can see your ${this.redButts ? "Red" : "normal"} butt`);
}


let monkey = new Monkey(true);
console.log(monkey);
monkey.business();
// monkey.redButts = false;
monkey.climb();


// let Something = () => {

// }

// console.log(Something.prototype);

// let something = new Something();

// console.log(something);