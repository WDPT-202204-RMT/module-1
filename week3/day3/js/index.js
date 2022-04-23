// scope
const messageGlobal = "this is a global message";

function sayHello() {
  const greeting = "hello world";
  return greeting;
}

console.log(messageGlobal);
// console.log(greeting); greeting does not exist in global scope

/* for (let i = 0; i < 10; i++) {
  console.log(messageGlobal);
  console.log(i);
} */
//console.log(i); outside of block scope i does not exist

/* for (let i = 0; i < 10; i++) {
  console.log(`first block i is ${i}`);
  for (let i = 0; i < 10; i++) {
    // this i shadows the outer i variable
    console.log(`second block i is ${i}`);
  }
} */

declaredFunction();

function declaredFunction() {
  console.log("this is hoisted");
}

//expressionFunction(); function expression does not get hoisted

let expressionFunction = function () {
  console.log("this is not hoisted");
};

for (var index = 0; index < 10; index++) {
  console.log(index);
}
console.log(`value outside of for loop: ${index}`);

console.log(nbOfStudents);

var nbOfStudents = 3; // gets hoisted with value of undefined

//console.log(nbOfTeachers); does not get initialized during hoising

let nbOfTeachers = 2;

function hoistedValue() {
  // var is declare here
  console.log(hello); // hello is undefined but declared
  var hello = "hello from a hoisted variable";
  console.log(hello); // hello is initialized
}

function notHoistedValue() {
  //console.log(hello); hello is not accessible before being initialized
  const hello = "hello from a non initialized hoisted variable"; // const and let work the same way regarding hoisting
  console.log(hello); // hello has been initialized and is accessible
}

/*
function declareAVar() {
    var declaredInsideFunction = true;
}
console.log(declaredInsideFunction) // does not get hoisted outside of function block
*/

function declareAVar() {
  if (true) {
    var declaredInsideFunction = true;
  }
  console.log(declaredInsideFunction);
}

var name = "Holly";

if (true) {
  var name = "Joy";
  console.log(`inside if statement name = ${name}`);
}
console.log(`outside of statement name = ${name}`);

function returnsANumber() {
  // function declaration
  let number = Math.random();
  return number;
}

let number = function () {
  // function expression
  let number = Math.random();
  return number;
};

let numberResult = number();
console.log(numberResult);
