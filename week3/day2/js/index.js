let squares = [
  100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
];

/* let player1 = {
  name: "Holly",
  cash: 1000,
  position: 0,
  move() {
    dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(
        `${this.name} is at position ${this.position} and has no more money`
      );
    }
  },
  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} amd has ${this.cash} left`
    );
  },
};

let player2 = {
  name: "Max",
  cash: 1000,
  position: 0,
  move() {
    dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(
        `${this.name} is at position ${this.position} and has no more money`
      );
    }
  },
  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} amd has ${this.cash} left`
    );
  },
};

let player3 = {
  name: "Joe",
  cash: 1000,
  position: 0,
  move() {
    dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(
        `${this.name} is at position ${this.position} and has no more money`
      );
    }
  },
  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} amd has ${this.cash} left`
    );
  },
}; */

let dice;

// turn 1
/* object literals
dice = 1 + Math.floor(6 * Math.random());
player1.position = (player1.position + dice) % squares.length;
player1.cash += squares[player1.position];
if (player1.cash <= 0) {
  console.log(`Game over for ${player1.name}`);
}

dice = 1 + Math.floor(6 * Math.random());
player2.position = (player2.position + dice) % squares.length;
player2.cash += squares[player2.position];
if (player2.cash <= 0) {
  console.log(`Game over for ${player2.name}`);
}

dice = 1 + Math.floor(6 * Math.random())
player3.position = (player3.position + dice) % squares.length;
player3.cash += squares[player3.position]
if (player3.cash <= 0) {
	console.log(`Game over for ${player3.name}`)
}
*/
/* object methods
player1.move();
player2.move();
player3.move();
*/

class Player {
  constructor(name) {
    this.cash = 1000;
    this.position = 0;
    this.name = name;
  }

  move() {
    dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(
        `${this.name} is at position ${this.position} and has no more money`
      );
    }
  }

  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} and has ${this.cash} left`
    );
  }

  getName() {
    return this.name;
  }

  getCash() {
    return this.cash;
  }

  getPosition() {
    return this.position;
  }

  setCash(newCash) {
    if (newCash === 10000) {
      this.name = "Cheater";
    }
    this.cash = newCash;
  }

  setPosition(newPosition) {
    this.position = newPosition;
  }

  setName(newName) {
    this.name = newName;
  }
}

/* function createPlayer(name) {
  return {
    name: name,
    cash: 1000,
    position: 0,
	move() {
		dice = 1 + Math.floor(6 * Math.random());
		this.position = (this.position + dice) % squares.length;
		this.cash += squares[this.position];
		if (this.cash <= 0) {
		  console.log(
			`${this.name} is at position ${this.position} and has no more money`
		  );
		}
	  }
  };
} */

const player1 = new Player("Holly");
const player2 = new Player("Max");
const player3 = new Player("Joe");
player1.setCash(2000); // modify cash for only player1
player1.move(); // this refers to instance, not class
player1.move();
player1.displayInfo();
player2.displayInfo();
const player4 = new Player("Lisa");
player4.setCash(10000); // setter
//player4.cash = 10000;
/* if (player4.getCash() === 10000) {
	player4.setName("Cheater")
} */
player4.setPosition(10);
player4.displayInfo();
console.log(player4.getCash()); // getters
