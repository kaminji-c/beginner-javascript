console.log('it works');
// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
console.log(div);
// put it into the body
document.body.appendChild(div);
// make an unordered list
const list = document.createElement('ul');
const listItem1 = document.createElement('li');
listItem1.textContent = 'One';
const listItem2 = document.createElement('li');
listItem2.textContent = 'Two';
const listItem3 = document.createElement('li');
listItem3.textContent = 'Three';
// add three list items with the words "one, two, three" in them
/* console.log(listItem1.textContent);
console.log(listItem2.textContent);
console.log(listItem3.textContent); */
list.append(listItem1);
list.append(listItem2);
list.append(listItem3);
// put that list into the above wrapper
div.appendChild(list);

// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500';
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = ('Cute Pupper');
// Append that image to the wrapper
div.appendChild(img);
console.log(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class="myDiv">
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</div>
`;
console.log(myHTML);
// put this div before the unordered list from above
list.insertAdjacentHTML('beforebegin', myHTML);
const myDiv = div.querySelector('.myDiv');
// add a class to the second paragraph called warning
console.log(myDiv.children[1]);
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
/*    const card = `
<div class="playerCard">
  <h2>NAME - AGE</h2>
  <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
</div>`; 
document.body.append(card);*/
function generatePlayerCard(name, age, height){
  const html = `
  <div class="playerCard">
  <h2>${name} - ${age}</h2>
  <p>Their height is ${height} cms and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!
  </p>
  <button class="delete" type="button">&times; Delete</button>
  </div>

  `;
  return html; 
}
/*My Solution
function generatePlayerCard(name, age, height){
const div = document.createElement('div');
div.classList.add('playerCard');
const h2 = document.createElement('h2');
h2.textContent = `${name} - ${age}`;
const p = document.createElement('p');
p.textContent = `They are ${height} cms and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!`;
div.append(h2);
div.append(p); 
}*/
// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard (Multiple Solutions)
//Solution 1
let cardsHTML = generatePlayerCard('cam', 29, 152);
cardsHTML += generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('gerry', 15, 132);
cardsHTML += generatePlayerCard('nick', 25, 172);
console.log(cardsHTML);

cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
// append those cards to the div
div.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);
// make our delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  //buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove(); //will look at the closest element and move itself up the tree of dom elements until it matches  
  //console.log(event.currentTarget);
  //console.log('Delete Card!');
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));

/*
//Solution 2 (Create 4 separate variables )
const card = document.createElement('div');
card.classList.add('card');
const card2 = card.cloneNode(true);
const card3 = card.cloneNode(true);
const card4 = card.cloneNode(true);
card.textContent = `Player #${Math.floor(Math.random() * 10) }`;
card2.textContent = `Player #${Math.floor(Math.random() * 10) }`;
card3.textContent = `Player #${Math.floor(Math.random() * 10) }`;
card4.textContent = `Player #${Math.floor(Math.random() * 10) }`;
cards.appendChild(card);
cards.appendChild(card2);
cards.appendChild(card3);
cards.appendChild(card4);
const wrapper = document.querySelector('.wrapper');
console.log(wrapper);
const button = document.createElement('button');
button.textContent = 'delete card';
const button2 = button.cloneNode(true);
const button3 = button.cloneNode(true);
const button4 = button.cloneNode(true);
card.appendChild(button);
card2.appendChild(button2);
card3.appendChild(button3);
card4.appendChild(button4);
function deleteBtn(e) {
  //return console.log('I am a button deleter');
  const button = document.querySelector('button');
  button.addEventListener("click", function(){
  this.remove(e);
  });
}
//console.log(cards);
document.body.append(cards);
document.body.append(div);
// put the div into the DOM just before the wrapper element
document.body.insertBefore(cards, wrapper);
};*/
generatePlayerCard('Cam', 29, 152);

