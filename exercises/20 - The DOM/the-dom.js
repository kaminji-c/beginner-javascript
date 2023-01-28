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
/* console.log(p);
console.log(imgs);
console.log(item2); */
console.log(item2Image);
/* divs returns a Nodelist is not an array, it is a list of things, does not have all the methods built in (map, filter, reduce) */

/* Selecting elements: 1st must access them(select them), 2nd then we can listen for clicks, change the content, add/remove etc.   */

/* Two main ways to select elements:  
querySelector 
querySelectorAll

*/
