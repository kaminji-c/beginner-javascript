function wait(ms = 0){
    return new Promise(resolve => setTimeout(resolve, ms));
}

//People don't like using random numbers,random dates because its not a pure function, and you will never know what those values are going to be
//The way to test a function that *returns a implicit random* is passing in an argument of a random number, then replace math.Random with randomNumber, it will then always return the same value
//Then the way to use this in a production application is calling Math.random() in the randomNumber, or you can set the default to Math.random
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()){
    return Math.floor(randomNumber * (max - min) + min);
   /*  return Math.floor(Math.random() * (max - min) + min); */
}

//async for of loop (preferred over recursion)
/* async function draw(el){ 
    //console.log(el);
    const text = el.textContent;
    let soFar = '';
    for(const letter of text){
        //console.log(letter);
        soFar += letter;
        el.textContent = soFar;
        //wait for some amount of time
        const { typeMin, typeMax } = el.dataset; 
        const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
        await wait(amountOfTimeToWait);
    }
} */

//recursion: function calling itself, until there is some sort of exit condition, until it should stop
function draw(el){
    let index = 1;
    const text = el.textContent;
    const { typeMin, typeMax } = el.dataset; 
    async function drawLetter(){
        el.textContent = text.slice(0, index);
        index += 1;
        //exit condition
        const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
        await wait(amountOfTimeToWait);
        await wait(10);
        if(index <= text.length){
        drawLetter();//part of the drawLetter is to call itself
        //wait for some time
        }
    }
    //when this function draw() runs, kick off drawLetter
    drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);
//const els = document.querySelectorAll('[data-type]');
//shorten version
//els.forEach(draw);
//els.forEach(el => draw(el));

//A pure function, this idea that a function that takes in arguments will always return the exact same value, which makes testing your functions really easy
/* function add(a,b) {
    return a + b; 
} */