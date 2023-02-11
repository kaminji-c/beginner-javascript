//Dom elements emit events 
//You can attach event listeners to all elements, document, and the window

const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
function handleClick(){
    console.log('IT GOT CLICKED!');
}

const hooray = () => console.log('Hooraaaay!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);
//butts.addEventListener('click', handleClick()); //runs on page load, you don't have to call the function yourself because the browser will call it
/*
//BUZZ WORDS
//callback function: word to describe a function that we pass to a method that will then be called at a later point in time
//anonymous function: no name function, no way to reference it outside of it
//anonymous functions, cannot be unbind, event listeners can not be removed, must used named functions
butts.addEventListener('click', function(){
    console.log('it got clicked');
});*/
//binding: A binding essentially means taking a function and listening for a specific click within an element.

//Listening for events on multiple items
const buyButtons = document.querySelectorAll('button.buy');
/* function buyItem(){
    console.log('buying item');
}  */
//Named function ver
/* function attachListener(buyButton){
    console.log('Binding the buy button');
    buyButton.addEventListener('click', buyItem);
} */

//console.log(buyButtons);
//console.dir(butts);
//buyButtons.addEventListener('click', buyItem);
//buyButtons.forEach(attachListener);

//Anon version
/* buyButtons.forEach(function(buyButton){
    console.log('Binding the buy button');
    buyButton.addEventListener('click', buyItem);
}) */

//Arrow Function V, anon function, cannot unbind it
/* buyButtons.forEach((button)=> {
    button.addEventListener('click', () => {
        console.log('You clicked it');
    });
}); */

//EVENT OBJECT #30: filled with useful information and methods about the event
//To access the event object modify the callback/handler to accept a param that is the event. Params are placeholders 
function handleBuyButtonClick(e){
    console.log('You clicked a button');
    const button = e.target;
    //console.log(button.textContent);
    //DIFFERENCES between e.target and e.currentTarget, in most cases you want to use event.currentTarget!
    console.log(e.target); //the thing that actually got clicked
    console.log(e.currentTarget); //the thing that fired the event listener
    console.log(e.target === e.currentTarget);
    //Stop propagation, stop it from bubbling up
    //e.stopPropagation();//only returns a callback from the button, window listener doesn't fire

    //console.log(e); gives you entire event object
    //console.log(typeof e.target.dataset.price); returns a string
    console.log(parseFloat(e.target.dataset.price)); //parsefloat to convert it to numeral 
}
buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function(e){
    console.log('you clicked the window');
    console.log(e.target);//show what element you are clicking on
    console.log(e.type); //type of event
    console.log(e.bubbles); //returns boolean if event bubbles or not
    //e.stopPropagation();
}, 
{capture: true}//order goes from top -> down versus bubble up
); 
//fires when button event listener is called back. To prevent this use stopPropagation();
//when someone clicks a button, how do I get information on what button they are clicking(which specific button they clicked) 

//BUZZWORD: Propagation: how events travel through the DOM | stack of events that are fired in a web browser.

//Capture(sort of the opposite of Propagation), third argument: More of an interview question!! About the intricacies of how events work

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mouseenter', function(e){
    console.log(e.currentTarget);
    console.log(this); //special word in JS, same as code above.
    //console.count(e.currentTarget); //how often something has fired
})

//THIS keyword is going to equal to whatever is to the left of the dot
//Downside, if used with an arrow function, the THIS function is no longer scoped
//Don't use THIS in event listener or callbacks. Always use e.currentTarget or e.target 