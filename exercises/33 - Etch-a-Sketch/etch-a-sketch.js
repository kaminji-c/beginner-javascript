//This exercise covers Dom elements, key elements, canvas, switch statement
//Select elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');//canvas is the element
const ctx = canvas.getContext('2d');
//context is where we will be drawing stuff, get context using the getContext();
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50; //When it is a TRUE CONSTANT, meaning the value doesn't change developers use all uppercase and underscores
//Setup our canvas for drawing 
//make a variable called height and width from the same properties on our canvas
const {width, height} = canvas; //destructuring 
//create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random()* height);

console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round'; //ensures smooth drawing
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
//ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
ctx.beginPath(); //start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
//Write a draw function
//sometimes when there is too many parameters programmers pass in an options object -> inside of that we will pass properties of that object that we need
/* function draw(options){
    console.log(options);
} */
//object destructuring
function draw({key}){
    //increment the hue
    hue += 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y);
    //move our x and y values depending on what the user did
    switch(key){
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
        break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
        break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
        break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
        break;
        default: break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}

//SWITCH STATEMENT: based on four different outcomes do the following
//Switch statement should always have a default case
//After every case you need a break keyword and it will stop the switch

//Write a handler for the keys
function handleKey(e){
    if (e.key.includes('Arrow')){
        e.preventDefault();
        draw({key: e.key});
    }
}
//Clear/Shake function
function clearCanvas(){
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
        console.log('Done that shake');
        canvas.classList.remove('shake');
    }, 
    {once: true}//setting it to true will unbind the event listener
    );
}


//Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);