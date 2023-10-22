import first, { returnHi as sayHi, last, middle } from './utils.js';
/* import wes from './wes.js'; */
import * as everything from './wes.js';
import { handleButtonClick } from './handlers.js';
/* console.log(wes); */ // can name it anything you want and still access it
/* console.log(everything); // Kind of like an OBJECT, but its a MODULE, in firefox shows as an OBJ, in CHROME shows as a MODULE
console.log(sayHi);
console.log(first);

const name = 'wes';
console.log(sayHi(name));

console.log("it's working");

console.log(last, middle);
 */

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);
