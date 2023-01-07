/* eslint-disable */
const name = 'cameron';
const middle = "cutie";
const last = `delcarmen`;

const escapeBackSlash = 'she\'s so cool';
const doubleQuotes = "shes's so cool";
const backTicksEscape = `she's so cool`;

/* Backticks benefits:  
1) multiple-line strings
2) maintains line breaks 
3) interpolation and concatenation 
*/

//Concatenation: two or more strings are combined into one
//Interpolation: When you put a variable inside of a string 

const song = `Ohhh

ya

I like
pizza`;

//Concatenation and interpolation with quotes 
const hello = "hello my name is " + name + ". Nice to meet you";
//Another way. Initially creating a variable and then overwrite the variable value
let hello2 = "hello my name is ";
hello2 = hello2 + name;
hello2 = hello2 + '. Nice to meet you';

const hello3 = `hello my name is ${name}. Nice to meet you. I am ${1+28} years old.`;


const html = `
    <div>
    <h2>${name}</h2>
    <p>${hello3}</p>
    </div>
`

// document.body.innerHTML = html;

const person = {
    first: 'cameron',
    last: 'dcarmen',
    age: '25'
};

let somethingUndefined;
const somethingNull = null; //must explicity be set to null 

// const cher = {
//     first: 'cher',

// }

// const teller = {
//     first: 'Raymond',
//     last: 'Teller'
// }

// teller.first = 'Teller';
// teller.last = 'null';

let isDrawing = false;
let age = 18;
const ofAge = age > 19;
console.log(ofAge);

age = 100; //one equal sign is used to updating or setting a variable 
//rules of thumb for equality
//almost always use triple ===
//double equals are almost always bad practice
 let age2 = 100;