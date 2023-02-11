console.log('it works');
const item = document.querySelector('.item');

const width = 300;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}" />
    </div>
`;
console.log(typeof myHTML);
//BACK TICKS interpolate values USING INNERHTML

/* item.innerHTML = myHTML; */
/* console.log(item.innerHTML); //getter */

//Downsides: The above code are not elements. They are a string. It only becomes an element after we dump it into the DOM

/* itemImage = document.querySelector('.wrapper img');
console.log(itemImage);

itemImage.classList.add('round'); */

//turn a string into a DOM element (IF you are planning on adding event listeners/change classes/change attributes)
//range is a collection of elements or part of the HTML that we can work with
const myFragment = document.createRange().createContextualFragment(myHTML); // returns a document fragment (some HTML)
//console.log(myFragment.querySelector('img'));
document.body.appendChild(myFragment);

//SECURITY and SANITIZATION 
//XXS Cross site scripting