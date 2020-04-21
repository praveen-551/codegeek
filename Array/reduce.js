const compose = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value)

// Increment passed number
const inc = (n) => n + 1

// Doubles the passed value
const double = (n) => n * 2

// using composition function
console.log(compose(double, inc)(2)); // 6

// using composition function
console.log(compose(inc, double)(2)); 