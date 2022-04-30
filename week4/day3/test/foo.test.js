const sum = require('./foo'); // This will execute the file foo.js

//console.log(foo.sum(1, 3));

// 4 != 4 "first"

// describe is the description of the tests that we are trying to run
describe('Here we are testing the sum function', () => {
  // it() and test() is the same thing
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('Checks if sum is a function', () => {
    expect(typeof sum).toBe('function');
  });
  //   it('should return 0 for an empty array', () => {
  //     expect(sum([])).toBe(0);
  //   });
  //   it('should return a number', () => {
  //     expect(typeof sum([35654684, 'kjoibmob'])).toBe('number');
  //   });

  it('should return a the sum of the 2 elements inside of my first array', () => {
    expect(sum([1, 1])).toBe(2);
  });
  it('should return NaN  if I send a string to my sum function', () => {
    expect(sum('Hello')).toBe(NaN);
  });
});

describe('This is just an exemple', () => {
  // it() and test() is the same thing
  it('I expect a string to be equal to a string', () => {
    expect(typeof '').toBe('string');
  });
  it('ToBe', () => {
    let a = { a: 1 };
    let b = { a: 1 }; // this creates a twin (the same but still a different person)
    let c = a; // This creates a real clone (the same)
    expect(a).toBe(b); // This checks is they are clone (exactly the same)
  });
  it('To be eqaul', () => {
    expect({ a: 'test' }).toEqual({ a: 'test' }); // This checks if they are twins
  });
});
