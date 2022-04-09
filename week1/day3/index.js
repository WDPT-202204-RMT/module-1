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
//printEveryChar4('four');

// print the result directly
function add(nb1, nb2) {
  console.log(nb1 + nb2);
  return; // this is good practice
}

function addWithReturn(nb1, nb2) {
  return nb1 + nb2;
}

add(5, 5);
let var2 = addWithReturn(5, 5); // this is equal to 10
console.log(var2);

let result = addWithReturn(2, 5);
console.log(result);

// let result = add(5, 5);
// console.log(result);

// chain functions together.
console.log(addWithReturn(5, 5) + addWithReturn(2, 2));

const test = function () {
  console.log('hello');
  return; // this stops the function.
  // break; this only works in loops
  console.log('this is a test');
};

test();

// function checkAge(age) {
//   if (age > 18) {
//     return 'you are an adult';
//   } else {
//     return 'you are a child';
//   }
// }

// function checkAge(age) {
//   if (age > 18) return 'you are an adult';
//   else return 'you are a child';
// }

//with ternary operators
function checkAge(age) {
  // if true      do this             else do this
  return age > 18 ? 'you are an adult' : 'you are an adult';
}

console.log(checkAge(19));

// function that returns more than one thing
// don't focus on this for now

function getUserInfo(firstName, lastName) {
  //console.log(firstName + ' ' + lastName);
  //object
  let userInfo = {
    firstName: firstName,
    lastName: lastName,
    age: 24,
    city: 'Bodeaux',
  };

  return userInfo;
}

console.log(getUserInfo('Enes', 'Koc'));
