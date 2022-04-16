console.log(add(10, 5)); // work because of hoisting
// printResultExpression(82); // does not work

function add(a, b) {
  return a + b;
} // function declaration

const printResultExpression = function (res) {
  console.log(res);
}; // function expression

/* function printResultExpression (res) {
	console.log(res)
} function declaration */

printResultExpression(54);
function runAdd(addFunction, c, d) {
  return addFunction(c, d);
}

console.log(runAdd(add, 40, 12));

function eatDinner(qwerty) {
  console.log(qwerty);
  console.log("eating dinner");
  qwerty();
}

function eatDessert() {
  console.log("eating dessert");
}

/* eatDinner(function () {
	console.log("Hello world")
}); */
eatDinner(eatDessert);
eatDinner(function () {
  console.log("Hello world");
});
eatDinner(() => {
  console.log("Hello world");
});

const greeting = () => {
  console.log("Hello world");
};
greeting();
const greetingName = (name) => {
  console.log(`Hello ${name}`);
};
greetingName("Holly");

function eat(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

/* eat(() => greetingName("Marc"));
eat(() => {
  console.log(runAdd(add, 1, 2));
}); */

const user = {
  name: "Holly",
  age: 25,
  getOlder: function () {
    /*     setInterval(() => {
      this.age += 1;
      console.log(this.age);
    }, 1000); */
  },
};

user.getOlder();
function printArgs() {
  console.log(arguments[3]);
}

//rintArgs();
printArgs("a", 12, false, ["b", "d"]);
