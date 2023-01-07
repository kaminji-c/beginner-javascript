// Function Definition
function calculateBill(billAmount, taxRate) {
  console.log(billAmount, taxRate);
  // this is the function body
  console.log('Running Calculate Bill!');
  const total = billAmount * (1 + taxRate);
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

// Pass Functions as arguements
// 14:20 ep 14
