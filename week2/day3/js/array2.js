const students = ["Marc", "Joe", "Holly", "Jane"];
console.log(students);
let reversedStudents = students.reverse();
//let reversedStudents = [...students].reverse();
// duplicqtion of array without modifying initial data
/* let reversedFor = [];
for (let index = students.length - 1; index >= 0; index--) {
  reversedFor.push(students[index].toUpperCase());
} */ // reverse with for loop
//console.log(reversedFor);

console.log(students);
students.push("Foo");
console.log(reversedStudents);

const grades = [5, 3, 2, 10];
grades.sort(); // sort with unicode values
console.log(grades);
grades.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  //if (a - b > 0) return 1;
  //if (a - b < 0) return -1;
  if (a === b) return 0;
});
console.log(grades);
