let user = {
  username: "something",
  age: 100,
};

console.log(user.age);
console.log(user["username"]);

let user2 = new Object();

console.log(user2);
user2.username = "something else";
user2["date of birth"] = 32;
console.log(user2);

let user3 = {};
let username = "holly";
console.log(user3);

let user4 = {
  username: username,
};
user4["countryOfOrigin"] = "italy";
console.log(user4.countryOfOrigin);

console.log("countryOfOrigin" in user4);

user4.countryOfOrigin = "france";
console.log(user4);
user4["countryOfOrigin"] = "spain";
console.log(user4);

delete user4.countryOfOrigin;
console.log(user4);

delete user4.countryOfOrigin;
console.log(user4);

const user5 = { age: 23 };
user5.username = "toto";
console.log(user5);
//user5 = user4; // does not work
for (let key in user5) {
  console.log(key);
  console.log(user5[key]);
}

let user5Keys = Object.keys(user5);
console.log(user5Keys);
console.log(Object.values(user5));

let user6 = {
  ...user5,
  countryOfOrigin: "france",
  france: "Paris",
};

console.log(user6);

let { countryOfOrigin } = user6;
console.log(user6["countryOfOrigin"]);
console.log(countryOfOrigin + 1);

console.log(user6);
