// slice and substring.

let str = 'thiseee is a tast';
// they do the same thing
// console.log(str.slice(-3, -1)); // can you negative values
// console.log(str.substring(-3, -1));

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

// add(5, 5);
let var2 = addWithReturn(5, 5); // this is equal to 10
//console.log(var2);

let result = addWithReturn(2, 5);
//console.log(result);

// let result = add(5, 5);
// console.log(result);

// chain functions together.
//console.log(addWithReturn(5, 5) + addWithReturn(2, 2));

const test = function () {
  console.log('hello');
  return; // this stops the function.
  // break; this only works in loops
  console.log('this is a test');
};

//test();

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

//console.log(checkAge(19));

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

//console.log(getUserInfo('Enes', 'Koc'));

// Now it's time to work this Arrays ! // Data structure

let student1 = 'Sarah';
let stduent2 = 'Tanvi';
let student3 = 'Natalia';

let students = ['Sarah', 'Tanvie', 'Natalia', 'Ihab', 'Jan'];

console.log(students);

// I want the first stuend of the list/array

console.log(students[1]);

// I want the length of my array

console.log(students.length);

// I want to get the last element of an array

console.log(students.length - 1);
console.log(students[students.length - 1]);

// I want to add a new student to the list

students.push(32);
//students.push(['Test']); Double dimension arrays // not for now

// I want to remove the LAST element of the array / list.
students.pop();

// I want to add a new element to the BEGINNING of the list.

students.unshift('New students');

// I want to remove the FIRST element of the list.

students.shift();

console.log(students);

// I want to loop of the array.
// First way

// for (let i = 0; i < students.length; i++) {
//   console.log('Value of i in the loop: ' + i);
//   console.log(students[i]);
// }

// The second way of doing things

// for (let name of students) {
//   console.log(name);
// }

// let i = 0;

// while (i < students.length) {
//   console.log('Value of i in the loop: ' + i);
//   console.log(students[i]);
//   i++;
// }

//NOT RECOMMENDED
// let i = -1;

// while (i++ < students.length - 1) {
//   console.log('Value of i in the loop: ' + i);
//   console.log(students[i]);
// }

// Foreach

// students.forEach((name, i) => {
//   console.log(i);
//   console.log(name.toUpperCase());
// });

//we want to make all the names Uppercase
//let new_array = [];

// students.forEach((name) => {
//   new_array.push(name.toUpperCase());
// });

// for (let name of students) {
//   new_array.push(name.toLowerCase());
// }

// Now, the best wahy of doig this .map

// let new_array = students.map((name, i) => {
//   //console.log(i);
//   return name.toUpperCase();
// });

console.log(students);
// console.log(students.slice(1, 4)); // this cuts the array.
// console.log(students.splice(3, 1, 'New students'));
