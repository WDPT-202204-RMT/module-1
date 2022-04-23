/* console.log("starting...");
console.log("fetching data...");
for (let i = 0; i < 100000; i++) {
  console.log(0);
}
console.log("data fetched");
console.log("using data");
synchronous version */

/* function processData() {
  console.log("data fetched");
  console.log("using data");
}

console.log("fetching data...");
setTimeout(processData, 1000);
console.log("showing loading screen");
for (let i = 0; i < 10; i++) {
  console.log(1);
} asynchronous version
 */

let counter = 1;
function callback() {
  console.log(counter);
  timeoutID = setTimeout(callback, 1000); // schedule callback to be executed after 1 second
  // timeoutID is the identifier for the timer.
  counter += 1;

  if (counter > 10) {
    clearTimeout(timeoutID); // stop timer
  }
}

let timeoutID = setTimeout(callback, 1000);

let intervalCounter = 1;
const intervalID = setInterval(() => {
  console.log(intervalID);
  console.log(intervalCounter);
  intervalCounter += 1;
  if (intervalCounter > 10) {
    clearInterval(intervalID);
  }
}, 1000);
