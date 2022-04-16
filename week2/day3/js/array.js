let students = ["Marc", "James", "Holly", "Jane"];

students.forEach((element) => {
  console.log(element);
});

let newStudents = [];
students.forEach((element) => {
  newStudents.push(element.toUpperCase());
});
console.log(newStudents);

let newStudentsMap = students.map((element) => element.toUpperCase());
console.log(newStudentsMap);

let classGrades = [3, 3.4, 5, 2];

let sumGrade = classGrades.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  console.log(currentValue);
  return accumulator + currentValue; // becomes accumulator
});
console.log(sumGrade);

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacturer: "Amazon",
  reviews: [
    {
      user: "Pavel Nedved",
      comments: "It was really useful, strongly recommended",
      rate: 4,
    },
    { user: "Alvaro Trezeguet", comments: "It lasted 2 days", rate: 1 },
    { user: "David Recoba", comments: "Awesome", rate: 5 },
    { user: "Jose Romero", comments: "Good value for money", rate: 4 },
    { user: "Antonio Cano", comments: "It broked really fast", rate: 2 },
  ],
};

const totalReviews = product.reviews.reduce((accumulator, currentValue) => {
  //console.log(accumulator);
  return accumulator + currentValue.rate;
}, 0); // add initial value to iterate over first element as well
//console.log(totalReviews);

let totalReviewsFor = 0;
product.reviews.forEach((element) => {
  totalReviewsFor += element.rate;
}); // forEach version of reviews reduce
//console.log(totalReviewsFor);

let filteredStudents = students.filter((element) => {
  return element.startsWith("J");
});
console.log(filteredStudents);

let filteredStudentsFor = [];
students.forEach((element) => {
  if (element.startsWith("J")) {
    filteredStudentsFor.push(element);
  }
});
console.log(filteredStudentsFor);

const gradesFiltered = classGrades.filter((element) => element > 3);
console.log(gradesFiltered);
