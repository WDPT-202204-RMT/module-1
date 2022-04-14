let counter = 0;
let breakLoop = false;

// while loop
while (counter < 20) {
  console.log("some data");
  if (breakLoop) {
    break;
  }
  if (counter === 5) {
    breakLoop = true;
  }
  counter += 1;
}
console.log("out of the loop");

// do while
do {
  console.log("counter is less than 0");
} while (counter < 0);

for (let forCounter = 0; forCounter < 20; forCounter++) {
  console.log("some more data");
  //console.log(forCounter);
}
// console.log(forCounter); forCounter it does exist outside the for loop

let name = "some name";
//console.log(name[0]); // can be indexed

for (let letterCounter = 0; letterCounter < name.length; letterCounter++) {
  //console.log(name[letterCounter]);
  console.log(name.charAt(letterCounter));
}

/* for (let something of name) {
  if (something === "o") {
    continue;
  }
  console.log(something);
  if (something === "n") {
    break;
  }
} */
