/*Creating elements using JS*/
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/200';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

/* Inserting JS created elements using appendchild()*/
/*Every time you use appendchild() you are modifying the DOM, triggers reflows, causes performances issues */
/* document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage); */

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

/* insertAdjacentElement()*/
// oh shoot! we need to add something to the top like a heading!

const heading = document.createElement('h2'); 
heading.textContent = 'Cool things';
/*myDiv.appendChild(heading);  places it after all the other node s*/
myDiv.insertAdjacentElement('afterbegin', heading);

/*Can also element.append(): allows you to also append string objects
appendChild(): only accepts Node objects.
*/
/*appending an element*/
const div = document.createElement("div");
div.classList.add('element-append');
const p = document.createElement("p");
p.classList.add('paragraph-text');
div.append(p);
/* appending text*/
p.append("Some text");
console.log(p.textContent);
document.body.appendChild(div);

/*Practice
<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
<li>Four</li>
<li>Five</li>
<ul>
*/

const myList = document.createElement('ul');
const myItem1 = document.createElement('li');
myItem1.textContent = 'One';
myList.appendChild(myItem1);

const myItem2 = document.createElement('li');
myItem2.textContent = 'Two';
myList.appendChild(myItem2);

const myItem3 = document.createElement('li');
myItem3.append('Three');
myList.append(myItem3);

/*Oooo clone node*/
const myItem4 = myItem3.cloneNode(true);
myItem4.textContent = "Four is the coolest number therefore is on the top of my list";
myList.insertAdjacentElement('afterbegin', myItem4);

document.body.appendChild(myList);

const myListHeader = document.createElement('h2');
myListHeader.textContent = 'My Cool List of Numbers';
myList.insertAdjacentElement('afterbegin', myListHeader);

const myItem5 = document.createElement('li');
myItem5.textContent = 'I am a rebel 5';
//console.log(myItem5.textContent);
myItem3.insertAdjacentElement('beforebegin', myItem5);