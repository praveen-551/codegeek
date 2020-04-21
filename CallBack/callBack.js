function add(a, b, callback) {
  let c = a + b;
  callback(c);
}
add(2, 3, function (a) {
  console.log(a);
});
