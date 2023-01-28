// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running Calculate Bill!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total; // temporary variable  only available in the block of the function when it's run
}

// Function Call. Or **Run**
// Need to capture the 'value' of this ^ function you need to stick it into a variable
const camTotal = 500;
const camTaxRate = 0.3;
// const myTotal = calculateBill(camTotal, camTaxRate);
// params: placeholders
// arguments: actual values

// Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Cam');
// console.log(greeting);

// Passing Expressions , actually running the expression and passes the raw value of 90
// const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);
const kait = 100;
const myTotal3 = calculateBill(kait + 50, 0.15);

// Pass Functions as arguments

// Pass a value into a function
// OK to use parameters multiple times, because they are scoped within functions

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

// yell(doctorize('wes'));
// functions will only fall back into their defaults when it is undefined/nothing is passed/when a variable isn't set to anything it is the value of undefined
const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
