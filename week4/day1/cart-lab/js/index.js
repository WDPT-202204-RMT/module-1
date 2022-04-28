// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const quantity = product.querySelector('.quantity input');
  const price = product.querySelector('.price span');
  const total = quantity.value * price.innerText;
  product.querySelector('.subtotal span').innerText = total;
  return total;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  document.querySelectorAll('.product').forEach((element) => {
    total += updateSubtotal(element);
  });
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const name = document.querySelector('.create-product input[type=text]');
  const price = document.querySelector('.create-product input[type=number]');
  const newNode = document.createElement('tr');
  newNode.className = 'product';
  newNode.innerHTML = `
  <td class="name">
    <span>${name.value}</span>
  </td>
  <td class="price">$<span>${price.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;
  newNode.querySelector('button').addEventListener('click', removeProduct);
  document.querySelector('tbody').appendChild(newNode);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  document.querySelector('#create').addEventListener('click', createProduct);
  document
    .querySelectorAll('.btn-remove')
    .forEach((element) => element.addEventListener('click', removeProduct));

  //... your code goes here
});
