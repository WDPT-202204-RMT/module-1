// slice and substring.

let str = 'thiseee is a tast';

console.log(str.slice(-3, -1));
console.log(str.substring(-1, 5));

//function
// concept DRY ==> Don't repaet yourself

//let a = 32;
function sayHello() {
  //let a = 32;
  //console.log(a);
  console.log('Hello');
}

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

function sayHelloToName(name) {
  //name = 'Enes';
  //console.log('Hello ' + name);
  console.log(`Hello ${name}`);
}

// sayHelloToName('potetos');
// sayHelloToName('Enes');
// sayHelloToName('Sarah');
// sayHelloToName(32);
// sayHelloToName(true);

function printEveryChar(str) {
  for (let letter of str) {
    console.log(letter);
  }
}

// second way of creating a function
const printEveryChar2 = function (str) {
  for (let letter of str) {
    console.log(letter);
  }
};

// third way (arrow function)
const printEveryChar3 = (str) => {
  for (let letter of str) {
    console.log(letter);
  }
};

// third way (arrow function)
const printEveryChar4 = (str) => {
  for (let letter of str) {
    console.log(letter);
  }
};

// printEveryChar('Enes');
// printEveryChar2('Test');
//printEveryChar3('three');
printEveryChar4('four');
