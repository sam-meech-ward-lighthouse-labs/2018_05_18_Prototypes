class Fruit {
  constructor(color) {
    this.color = color;
    this.size = 0;
  }

  grow() {
    this.size++;
    console.log(`Growing ${this.size}`);
  }
}

let orange = new Fruit();
let grape = new Fruit();

class Pineapple extends Fruit {
  constructor() {
    super('yellow');
  }

  poke() {
    console.log("ouch");
  }
}

let pineapple = new Pineapple();
pineapple.grow();
pineapple.grow();
pineapple.grow();
pineapple.poke();

console.log(Pineapple);
