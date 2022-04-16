// boolean

let isTired = false;
console.log(isTired);

// logic operator

//and
console.log(true && true); // is true
console.log(true && false); // is false
//or
console.log(true || false); // is true
console.log(false || false); // is false
//not
console.log(!true); // is false
console.log(!false); // is true

// undefined
let temp;
console.log(temp);

// NULL
let username = null;

// truthy and falsy values
console.log("" && "holly");

// conditions

// this console.log runs
if (true) {
  console.log("this is true");
}

// this does not
if (false) {
  console.log("this is false");
}

// this runs
if (username === null) {
  console.log("username required");
  username = "holly";
}

console.log(username);

if (username === null) {
  console.log("username still required");
} else {
  console.log(`username is ${username}`);
}

if (username === null) {
  console.log("username required");
} else if (username === "Enes") {
  console.log("Hey");
} else if (username === "holly") {
  console.log("hey Holly");
} else {
  console.log("nothing else was true");
}

let emptyValue; // undefined is falsy

if (emptyValue) {
  console.log("this is truthy");
}

let emptyName = "";

if (emptyName) {
  console.log("no name is a name");
}

if (username) {
  console.log("this is an actual name");
}

let userNameDivided = username / 3;

if (userNameDivided) {
  console.log("turns out you can divide words");
}

// 0 is a falsy value as well

console.log(username);
console.log(username[0]);
username[0] = "M";
console.log(username);
username.slice(0, 2);
console.log(username);
let sliced = username.slice(0, 2);
console.log(sliced);
username = "Matteo";
console.log(username);
username = username.slice(0, 3);
console.log(username);
username = "Enes";

switch (username) {
  case "holly":
    console.log("Hey Holly");
    break;
  case "Mat":
    console.log("Hi Mat");
    break;
  default:
    console.log("no luck with catching names");
    break;
}

switch (username) {
  case "holly":
  case "Mat":
    console.log("it's Mat or holly");
    break;
  default:
    console.log("it was neither");
    break;
}
