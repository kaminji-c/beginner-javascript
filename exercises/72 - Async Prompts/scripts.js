function wait(ms = 0){
return new Promise(resolve => setTimeout(resolve, ms));
}
//must pass popup via an argument because popup is scooped to the new Promise
async function destroyPopup(popup){
    popup.classList.remove('open');
    await wait(1000);
    //remove the popup entirely
    popup.remove(); //only removes it from the DOM and not from JS memory entirely
    popup = null; //removes the pop up entirely
    console.log(popup); //still have access to the popup, potential memory leak, if not equal to null
}
//25:35

function ask(options){
return new Promise(async function(resolve){
//First we need to create a pop up with all the fields in it
const popup = document.createElement('form');
popup.classList.add('popup');
popup.insertAdjacentHTML('afterbegin', 
    `<fieldset>
    <label>${options.title}</label>
    <input type="text" name="input"/>
    <button type="submit">Submit</button>
    </fieldset>
    `
);

//Check if they want a cancel button
if (options.cancel){
    const skipButton = document.createElement('button');
    skipButton.type = 'button';
    skipButton.textContent = 'Cancel';
    //console.log(popup.firstChild);
    popup.firstElementChild.appendChild(skipButton);
    //TODO: Listen for a click on that cancel button
    skipButton.addEventListener('click', function(){
        resolve(null);
        destroyPopup(popup);
    }, { once: true}
    ); 
}
//Listen for the submit event on the inputs
popup.addEventListener('submit', function(e) {
    'submit',
    e.preventDefault();
    resolve(e.target.input.value);
    //console.log(e.target.input.value);
    //console.log('Submitted'); //its still listening after the resolve
    //remove it from the DOM entirely 
    destroyPopup(popup);
}, {once: true} //options in event listener will listen only once, handy for things you only want to happen once, can use this instead of removing an event listener after the resolve
);
//When someone does submit it, resolve the data that was in the input box
//Insert that popup into the dom
document.body.appendChild(popup);
//Put a very small timeout before we add the open class
await wait(50);
popup.classList.add('open');
});
}

//select all buttons that have a question
async function askQuestion(e){
    const button = e.currentTarget;
    // in shows if that property is there, so is cancel in button dataset!
    const cancel = 'cancel' in button.dataset;

    const answer = await ask({
        title: button.dataset.question,
        cancel,
    });
    console.log(answer);
    //console.log(e);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));
console.log(buttons);

const questions = [
    {title: 'What is your name'},
    {title: 'What is your age', cancel: true},
    {title: 'What is your dog\'s name'},
];

//utility function that can be used multiple times, instead of using the askMany() function below
async function asyncMap(array, callback){
    //make an array to store our results
    const results = [];
    //loop over our array
    for(const item of array){
        results.push(await callback(item));
    }
    //when done with the loop return it
    return results;
}

async function go(){
    const answers = await asyncMap(questions, ask);
    console.log(answers);
}

go();

//For of function is the best function to use
//Unlike forEach, and map, a For Of allows you to pause a loop by awaiting something inside of it!
/* async function askMany(){
    for(const question of questions) {
        const answer = await ask(question);
        console.log(answer);
    }
}

askMany();
 */
/* questions.forEach(async function(question){
    console.log('Asking a question');
    console.log(question);
    const answer = await ask(question);
    console.log(answer);
}); */

/* Promise.all(questions.map(ask)).then(data => {
    console.log(data);
}); */

//because we are trying to use this sequentially Promise.all is not our best solution because it will fire it all at once
/* const answers = Promise.all([
    ask(questions[0]),
    ask(questions[1]),
    ask(questions[2]),
]).then(answers => {
    console.log(answers);
}); */