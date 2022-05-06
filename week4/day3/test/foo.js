function sum(nb1, nb2) {
  if (Array.isArray(nb1) && nb2 == undefined) {
    console.log('test');
    return nb1[0] + nb1[1];
  }
  //if (Array.isArray(nb1)) return 0;
  if (typeof nb1 == 'string') return NaN;
  return nb1 + nb2;
}

let obj = {
  name: 'Enes',
  age: 24,
  country: 'france',
};

let obj3 = obj;

let obj2 = {
  name: 'Enes',
  age: 24,
  country: 'france',
};

console.log(obj == obj3);
// console.log(typeof sum);
// console.log(typeof obj);
// console.log(typeof 4);
// console.log(typeof 'test');
// console.log(typeof true);

// console.log(obj.name);
// This exports the sum function
module.exports = sum;
