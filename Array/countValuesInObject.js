let names = ['aa', 'bb', 'cc', 'dd', 'bb'];

let countedNames = names.reduce(function(allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames);

const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) => input =>
  functions.reduce((acc, fn) => fn(acc), input);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

console.log(pipe(double, triple));

// Usage
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240

function map(arr, mapFunc) {
  const mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunc(arr[i]);
    mapArr.push(result);
  }
  return mapArr;
}
let arr = [1, 2, 3, 4, 5];
const squareArr2 = map(arr, function(num) {
  return num ** 2;
});
console.log(squareArr2);

function reduce(arr1, reducer, initialValue)
{
  let accumulator = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < arr1.length; i++){
    accumulator = reducer(accumulator, arr1[i]);
  }
  return accumulator;
}
let arr1 = [1, 2, 3, 4, 5];

let sum = reduce(arr1, (a,v)=>a+v,10);
console.log(sum); // prints 10
