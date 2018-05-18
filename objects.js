let clown = {
  scary: true,
  juggle() {
    console.log(`juggling in a really ${this.scary ? "scary" : "calming"} way`)
  }
};

clown.scary = false;
clown.juggle();

clown.__proto__; //[[Prototype]]
// console.log(Object.getPrototypeOf(clown) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

// let fireMan = {
//   scary: true,
//   hose: "big"
// };

let fireMan = Object.create(clown);

fireMan.scary = true;
fireMan.hose = 'big';

// fireMan.__proto__ = clown;
// Object.setPrototypeOf(fireMan, clown);

fireMan.juggle();