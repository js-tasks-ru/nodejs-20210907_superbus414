function sum(a, b) {
  /* ваш код */
  let sum = a + b;
 if (typeof sum == 'number'){
   return sum;
 } else {
   throw new TypeError ('Not a number')
 }
}

module.exports = sum;
