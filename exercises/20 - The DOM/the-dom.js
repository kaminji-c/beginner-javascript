/* function init() {
const p = document.querySelector('p');
console.log(p);
}
document.addEventListener('DOMContentLoaded', init); 
if script tag is loaded with the style tags
*/
/* Delaying the code that runs until all the DOM content has been loaded to the page */
/* KEY TAKEAWAYS:  document.querySelector will search the entire page 
  querySelector as a method of another element will only search inside of that element */
const p =
document.querySelector('p'); /* will give you the first matching element */
const imgs =
document.querySelectorAll('.item img'); /* will give you all the elements */
const item2 =
document.querySelector('.item2'); /* !!limits the scope of the scoping */
const item2Image =
item2.querySelector(
  'img'
); /* Look inside an element that you already have and search inside of it */
const heading = document.querySelector('h2');
/*shows properties, can set as getters or setters */
console.log(heading.textContent);
//textContent gets hidden elements and well as styles
//set the textContent property on that element
//heading.textContent = 'Wes is Cool'; /* this is a setter */
//console.dir(heading.textContent); /* this is a getter */
console.log(heading.innerText); /* this is a getter */
console.log(heading.innerHTML);
console.log(heading.outerHTML);
/* KEY DIFFERENCES : https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent */
/* console.log(p);
console.log(imgs);
console.log(item2); */
console.log(item2Image);
/* divs returns a Nodelist is not an array, it is a list of things, does not have all the methods built in (map, filter, reduce) */

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

//pizzaList.textContent = `${pizzaList.textContent} 🍕`; makes browser slow
//method, function we run against the element, first position, second element
pizzaList.insertAdjacentText('beforeend', '🍕');
pizzaList.insertAdjacentText('afterbegin', '🍕');

/* Selecting elements: 1st must access them(select them), 2nd then we can listen for clicks, change the content, add/remove etc.   */

/* Two main ways to select elements:  
querySelector 
querySelectorAll */

// Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound(){
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
//pic.classList.contains('round'); .contains good for testing 