const students = ["toto", "holly", "mary", "john"];

const students2 = [
  {
    name: "toto",
    age: 21,
    gpa: 3.4,
  },
  {
    name: "holly",
    age: 22,
    gpa: 3.5,
    username: "holly22",
  },
];

function printName(element) {
  console.log(element);
}

console.log(students2.length);
console.log(students2[0]);
console.log(students2[0]["name"]);

students2.forEach(printName);

/* for (let index = 0; index < students2.length; index++) {
  console.log(students2[index]);
}

for (let element of students2) {
  console.log(element);
}
 */

let classroom = {
  teacher: {
    name: "Anna",
  },
  students: [
    {
      name: "toto",
      age: 21,
      gpa: 3.4,
    },
  ],
};

console.log(classroom["teacher"]["name"]);
console.log(classroom.students[0]["name"]);

const chessboard = [
  ["black", "white", "black", "white"],
  ["white", "black", "white", "black"],
];

console.log(chessboard[1][0]);

for (let line of chessboard) {
  console.log(line);
  for (let square of line) {
    console.log(square);
  }
}
