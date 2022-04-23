class Animal {
  constructor(name, sound, legs) {
    this.name = name;
    this.sound = sound;
    this.legs = legs;
  }
  scream(intensity) {
    console.log(`${this.sound} ${"!".repeat(intensity)}`);
  }
  describe() {
    console.log(`${this.name} has ${this.legs} legs`);
  }
  getName() {
    return this.name;
  }
  getLegs() {
    return this.legs;
  }
}

/* const dog = new Animal("toto", "bark", 4);
dog.scream(4);
dog.describe();
const cat = new Animal("salem", "meow", 4) */

class Quadruped extends Animal {
  constructor(name, sound) {
    super(name, sound, 4);
    this.speed = 40;
  }
  walk() {
    console.log(`walking ${this.speed}m each minute`);
  }
}

class Dinosaur extends Quadruped {
  constructor(name) {
    super(name, "roar");
  }
}

class Biped extends Animal {
  constructor(name, sound) {
    super(name, sound, 2);
  }
}

const dog = new Quadruped("toto", "bark");
dog.describe();
console.log(dog.getLegs());
const human = new Biped("john", "hi");
console.log(human.getLegs());
dog.walk();
//human.walk();

const rex = new Dinosaur("Rex");
rex.scream(5);
rex.walk();

class Player {
  constructor(name, cash) {
    this.name = name;
    this.cash = cash;
  }
  getCash() {
    return this.cash;
  }
}

class Admin extends Player {
  constructor(name) {
    super(name, 500000);
  }
  reset() {
    console.log("resetting game");
  }
}

const player = new Player("james", 1000);
const admin = new Admin("holly");

console.log(admin.getCash());
admin.reset();
player.reset();
