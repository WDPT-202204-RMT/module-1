/**
 * TODO: Find the differences between innerText and textContent
 * TODO: Find the differences between nodeList and HTMLCollection
 */

//console.log(document);

/**
 * * Select Element By tag name
 * ! This returns an HTMLCollection
 */
const body = document.getElementsByTagName('div');

/**
 * * Select the element with the id "text"
 * ! This returns the element, not an HTMLCollection.
 */
const p = document.getElementById('text');

/**
 * * Select the elements by the class name.
 * ! This returns an HTMLCollection.
 */
const div = document.getElementsByClassName('test')[0];

/**
 * .innerHTML changes the content of a div
 * ! THIS CHANGE THE HTML of the dev
 */
div.innerHTML = '<b>hey</b>';

/**
 * .innerText and textContent changes the TEXT content of the element
 * ! It will add HTML as TEXT
 */
//div.innerText = '<b>THIS is innerText</b>';
div.textContent = '<b>THIS is innerText</b>';

// turn HTML tag to text by using character entity in html
//console.log(div.innerHTML);

/**
 * $ This is how we can change the Style attributes of an element
 */
div.style = 'font-weight: bold; color: red;';
div.style.backgroundColor = 'yellow';
div.style.textDecoration = 'underline';
//console.log(div);

// function generateRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// function changeColor() {
//   let divs = document.getElementsByClassName('disco-box');
//   console.log(divs);
//   for (let i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundColor = generateRandomColor();
//   }
// }

// setInterval(changeColor, 500);

/**
 * * This return the element according to the string
 * ! . = class || # = id || div = tag
 */
const p2 = document.querySelector('#text-2');

const div_test = document.querySelector('.test');

// I want to get the p tags !
/**
 * ! This returns the FIRST element that matches the selector.
 */
const first_p_tag = document.querySelector('p');

/**
 * ! This returns a nodeList containing the elements.
 */
const p_tags = document.querySelectorAll('p');

/**
 * Set the class of and element
 */
first_p_tag.className = 'banana';

/**
 * * This removes an attribute
 */
//first_p_tag.removeAttribute('class');

/**
 * * This adds attributes to the element
 */
first_p_tag.setAttribute('id', 'Enes');

// console.log(p2);
// console.log(div_test);
// console.log(fist_p_tag);
// console.log(p_tags);

const first_div = document.querySelector('div');
/**
 * * Create an element
 */
function addElement(value) {
  const p3 = document.createElement('p');
  p3.textContent = value;
  p3.className = 'banana';

  first_div.append(p3); // add p3 to first_div
}

const btn = document.querySelector('button');

const input = document.querySelector('input');

// first way
// btn.onclick = () => {
//   // this gets the value of the text that is inside of the input
//   console.log(input.value);
//   addElement(input.value);
//   input.value = '';
// };

// By using addEventListener

function addTask() {
  console.log(input.value);
  addElement(input.value);
  input.value = '';
}

btn.addEventListener('click', addTask);
