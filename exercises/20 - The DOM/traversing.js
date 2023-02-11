//traversing meaning going up/down/, you often need to select an element based on it's position
const wes = document.querySelector('.wes');
console.log(wes);
console.log(wes.children); //returns 1 thing
//children returns all of the child elements
console.log(wes.childNodes); //returns 3 thing
//childNodes 

//Difference between a node and element
//ELEMENTS: will ignore plain text nodes, most cases will want the element selectors
console.log(wes.firstElementChild); //returns first element
console.log(wes.lastElementChild); //returns last element
console.log(wes.previousElementSibling); //returns prev element, may return null it does not exist
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

//NODES: will include text nodes
/* childNodes
.firstChild
.lastChild
.previousSibling 
.nextSibling
.parentNode */

//Removing elements
//.remove()
//What happens if you create an element, add it to the DOM and then remove it. Does it still exist?
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();
console.log(p); //still exist in Javascript memory and still have access to it even after it has been removed from the DOM