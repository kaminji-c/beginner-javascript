//Topics: Custom Events, Event Delegation, local storage, DOM events, Object Reference
const shoppingForm = document.querySelector('.shopping'); 
const list = document.querySelector('.list'); 

//We need an array to hold our *state*
let items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted!!');
    const name = e.currentTarget.item.value;
    //if its empty, then don't submit it
    if(!name) return;
    console.log(name);
    const item = {
        name,
        id: Date.now(),
        complete: false,
    }
    //Push the items into our state
    items.push(item);
    console.log(`There are now ${items.length} in your state`);
    //Clear the form 
    //e.currentTarget.item.value = '';
    e.target.reset(); //clear all inputs in a form
    //fire off a custom event that will tell anyone else who cares. the the items have been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
    //custom event is a constructor in the browser, used frequently when using vanilla JS
}
//if you put any check, or checked value it will be checked
function displayItems(){
    console.log(items);
    const html = items.map(item => `<li class="shopping-item">
    <input 
    value="${item.id}" 
    type="checkbox"
    ${item.complete && 'checked'}
    >
    <span class="itemName">${item.name}</span>
    <button 
    aria-label="Remove ${item.name}"
    value="${item.id}"
    >&times;</button>
    </li>`).join('');
    list.innerHTML = html;
}

function mirrorToLocalStorage(){
    console.info('Saving items to localstorage');
    localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage(){
    console.info('Restoring from local storage');
    //pull items from LS
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if(lsItems.length) {
        //items = lsItems;
        //lsItems.forEach(item => items.push(item)); //using foreach
        items.push(...lsItems); //spreading items, push takes unlimited arguments
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id){
    console.log('deleting item', id);
    //update our items array without this one
    items = items.filter(item => item.id !== id);
    console.log(items);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id){
    console.log('Marking as complete', id);
    //reason it is called an ref, if you change the value of an object in the array it will be reflected in the array of items
    const itemRef = items.find(item => item.id === id);
    console.log(itemRef);
    itemRef.complete = !itemRef.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

//For forms use 'submit' not click or enter
shoppingForm. addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
//***Event Delegation***: We listen for the click on the list <ul> but then delegate the click over to the button if that is what we clicked
list.addEventListener('click', function(e){
    const id = parseInt(e.target.value);
    //console.log(e.target, e.currentTarget);
    //target is what is clicked on
    //currentTarget is what you listened for the event on
    //matches checks if an element matches a CSS selector
    if(e.target.matches('button')){
        //wrap in parseInt so value remains a number and is not converted to a string
        deleteItem(id);
    }
    if(e.target.matches('input[type="checkbox"]')){
        markAsComplete(id);
    }
});
restoreFromLocalStorage();

//This doesn't work well because it only listens for things that exist on the page
//const buttons = list.querySelectorAll('button')
//console.log(buttons);

//instead of listening for events for things that don't exist yet or come in the future we can use event delegations 
//buttons.forEach(button => button.addEventListener('click', deleteItem));