// First class citizen: JS functions are values in themselves, they can be stored in variables and they can be passed into other functions
// Ability to put functions into variables

/* T1: function doctorize(firstName) {
  return `Dr. ${firstName}`;
}
 */

// T2: Anon function, one without a name
/* function (firstName) {
  return `Dr. ${firstName}`;
} */

// doctorize('wes'); // throws an error because const is declared before initialization
// console.log(doctorize2('wes'));

// T3: Function Expression, store a function as a value in a variable
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};
// difference in HOISTING: JS takes all functions and hoist them up to the top of the file, so anywhere you call the function is it will be available to you. JS does not hoist JS variable functions, INTERVIEW questions: can run a function before its defined

/* function doctorize2(firstName) {
  return `Dr. ${firstName}`;
}
 */

// T4: Arrow Functions: concise syntax, don't have their own scope with "this" keyword
// Arrow Functions are ANON functions, allows you to return a value without having to use the return keyword
/* function inchToCM(inches) {
  const cm = inches * 2.54;
  return cm;
}  4lines of code */

/* function inchToCM(inches) {
  return inches * 2.54;
} shorter function 
 */

/* eslint-disable*/
const inchToCM = (inches) => {return inches * 2.54}; //explicit return with keyword return
const inchToCM2 = (inches) => inches * 2.54; //implicit return without keyword return, removed the function block
const inchToCM3 = inches => inches * 2.54; 
//if there is only one argument in your function you may remove the parentheses 

/* function add(a, b = 3){
    const total = a + b;
    return total;
} */
const add = (a, b=3) => a + b;

//T5: Returning an Object
/* function makeABaby(first, last){
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }
    return baby;
} */
//objects on one line is common
//TIP: To implicitly return an object use parentheses to contain it in the curly brackets, so it doesn't get mistaken as a block function
const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0});

// T6: IFFE => Immediately Invoked Function Expression, not used often
// parentheses always runs first in JS, it will return a function value, and you can immediately return that function by putting parentheses on the end
(function(age){
    console.log('Running the Anon Function');
    return `You are cool and age ${age}`;
})(10); 

// T7: METHODS: simply a function that lives inside of an object
// Console is an object, log is a function in that object, FUNCTIONS that live inside an OBJECT are called METHODS!!
const wes = {
    name: 'Wes Bos',
    //method!!!
    sayHi: function(){
        console.log(`Hey ${this.name}`);
        console.log('Hey Wes'); 
        return 'Hey Wes';
    },
    //short hand method !!!
    yellHi() {
        console.log('Hey WESSSSSSSSSS!')
    },
    //arrow function
    whisperHi: () => {
        console.log('hi wesss, i\'m a mouse')
    }
}

// T8: Callback functions, regular function, something that will happen when something is done, when somebody 'clicks' something run this, this amount of time has passed, run this

//Click Callback
const button = document.querySelector('.clickMe');
console.log(button);
//callback function can be declared outside of the handler
function handleClick() {
    console.log('Great Clicking!!');
}
//button.addEventListener('click', handleClick); //callback is the 2nd parameter
//anon function asa  value directly
button.addEventListener('click', function(){
    console.log('nice Clicking!');
}); //callback is the 2nd parameter

//Timer Callback 
setTimeout(wes.yellHi, 1000);
//anon callback
setTimeout(function() {
    console.log('DONE! Time to eat!')
}, 1000);
//time callback
setTimeout(() => {
    console.log('DONE! Time to sleep!')
}, 1000);