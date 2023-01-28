/* What does this file do? */
sayHi();

/* How does this file do it? */

console.log(age);
var age = 10;

// Hoisting in JS allows you to access functions and variables before they have been created
// Two things that are hoisted are Function declarations and Variable declarations

// You can technically run a function before it exist, JS rearranges functions to the top of your file

function sayHi() {
  console.log('hery!');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

// How Hoisting is implemented commonly (check out like 1 - 4), Wes doesn't use it/agrees with it

// Variable hoisting: JS will hoist the declarations but not the set value
