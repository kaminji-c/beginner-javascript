/* Scope: Answers the question: Where are my variables and functions available to me  */
// Global Variables (aka the window) - if you have a script tag/JS file/anytime you declare a variable it will be available to you.
/* Var and functions are available inside the window */

// Function Scope - when variables are created inside of a function, those variables are only accessible inside that function, unless we explicity return it into its own variable when that function runs

// Scope Look Up
// Looks in the local function first, if it's not found it will look up one level above it. Generally not a good idea to have the same name for variables because you are limited to accessing that value when you want to access it outside of that scope

/* const age = 100;

function go() {
  const myAge = 200;
  const hair = 'blonde';
  console.log(age);
  console.log(myAge);
  console.log(hair);
}

go(); */

// Block Scope are let, cons  | Anytime you have a set of curly brackets, most likely it will be an if statement, don't have to worry about variables leaking out of it

// var variables are Function scoped

/* eslint-disable */
/* function isCool(name){
    let cool;
    if (name === 'cam') {
      cool = true;
    }
    console.log(cool);
    return cool;
} */
/* function isCool(name){
   
    if (name === 'cam') {
     var cool = true;
    }
    console.log(cool);
    return cool;
}
// var is function scoped

for(let i = 0; i < 10; i++){
    console.log(i);
} */

const dog = 'snickers';
function logDog(){
    console.log(dog);
}
// because logDog is defined here^ it will look up!!!

function go(){
    const dog = 'sunny';
    logDog();
}

go();

// Lexical scoping (static scoping), Where functions are DEFINED not where they are RUN

// Best Practices for SCOPING
/* Try not to create global variables, can create a bug */

/* Function scoping, functions will be scoped to the parent function  */
function sayHi(name){
    function yell(){
        console.log(name.toUpperCase());
    }
    yell();
}

//yell ();
//is not defined outside