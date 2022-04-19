let name = "Matteo";
let age;

/*
	number => "Matteo"
	string => 23
	bool => true
	null
	undefined

*/

// number 3 => integer
// number 3.14 => float

console.log(age + 1); // prints NaN

// NaN => not a number
// infinity

age = 23;

age = age + 1;
console.log(age);
age = age - 1;
console.log(age);
age = age / 2;
console.log(age);
age = age * 2;
console.log(age);

// power operator
console.log(2 ** 3); // 2 * 2 * 2 = 8

console.log(age % 2);

console.log(23.7 % 2);

age *= 2;
console.log(age);
age /= 2;
console.log(age);

const i = (10 + (5 * 2 ** 3) / 4 - 6) % 2;

let value1 = "tom";
let value2 = "tony";
let value3 = "my name is " + name + " and I'm " + age;
let value4 = `my name is ${name} and I'm ${age + 20 / 2}`;
console.log(value3.length);
console.log(value4);
console.log(value2.length);
console.log(value1 + value2); // add strings together
console.log(value1.charAt(1)); // get the 'o' in tom
console.log(value1.indexOf("o"));
let value5 = "holly";
console.log(value5.indexOf("l"));
console.log(value5.indexOf("l", 3));
console.log(value5.substring(0, 4));
console.log(value5.substr(1, 1));
console.log(value5.slice(0, 3));
console.log(value5.slice(value5.length - 1, -3)); // WIP

console.log("Ancona".localeCompare("Firenze")); // shows -1; a comes before f
console.log(value5.startsWith("o"));
const value5Stqrt = value5.startsWith("o");

console.log(value5.endsWith("l"));
const includeValue = value5.includes("p");
console.log(includeValue);
