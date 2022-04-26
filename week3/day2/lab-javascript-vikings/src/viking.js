// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const saxon = Math.floor(Math.random() * this.saxonArmy.length);
    const viking = Math.floor(Math.random() * this.vikingArmy.length);

    const result = this.saxonArmy[saxon].receiveDamage(
      this.vikingArmy[viking].strength
    );

    this.saxonArmy = this.saxonArmy.filter((element) => element.health > 0);
    /* if (this.saxonArmy[saxon].health <= 0) {
      this.saxonArmy.splice(saxon, 1);
    } */
    return result;
  }

  saxonAttack() {
    const saxon = Math.floor(Math.random() * this.saxonArmy.length);
    const viking = Math.floor(Math.random() * this.vikingArmy.length);

    const result = this.vikingArmy[viking].receiveDamage(
      this.saxonArmy[saxon].strength
    );

    this.vikingArmy = this.vikingArmy.filter((element) => element.health > 0);
    /* if (this.saxonArmy[saxon].health <= 0) {
      this.saxonArmy.splice(saxon, 1);
    } */
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}