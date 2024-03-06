//***Closure***: ability to create a function that has scope
//Using Closure to create scope for each of these galleries so that they don't interfere with each other but can reuse the same code

function Gallery(gallery){
//throws error in the console, and stop the code from running and break on the page
if(!gallery) {
    throw new Error('No Gallery Found');
}
this.gallery = gallery;
//select all the elements we need
this.images = Array.from(gallery.querySelectorAll('img'));
this.modal = document.querySelector('.modal');
this.prevButton = this.modal.querySelector('.prev');
this.nextButton = this.modal.querySelector('.next');

//Bind our methods to the instance when we need them
this.showNextImage = this.showNextImage.bind(this); 
this.showPrevImage = this.showPrevImage.bind(this); 
this.handleKeyUp = this.handleKeyUp.bind(this); 
this.handleClickOutside = this.handleClickOutside.bind(this); 

//These are our Event Listeners 
this.images.forEach(image => 
    image.addEventListener('click', e => this.showImage(e.currentTarget)));
//Loop over each image
this.images.forEach(image => {
    //attach an event listener for each image
    image.addEventListener('keyup', e => {
        //when it is keyup'd check if it was enter
        if(e.key === 'Enter') {
            //if it was, show the image
            this.showImage(e.currentTarget);
        }
    });
});
this.modal.addEventListener('click', this.handleClickOutside);    
}

Gallery.prototype.openModal = function() {
console.info('Opening Modal...');
//1) Check if the modal is already open, matches checks for css selector matches
if(this.modal.matches('.open')){
    console.info('Modal already open');
    return; //stop the function from running
}
this.modal.classList.add('open');
//Event listeners to be bound when we open the modal
window.addEventListener('keyup', this.handleKeyUp);
this.nextButton.addEventListener('click', this.showNextImage);
this.prevButton.addEventListener('click', this.showPrevImage);
}

Gallery.prototype.closeModal = function(){
this.modal.classList.remove('open');
//TODO: add event listeners for clicks and keyboard
window.removeEventListener('keyup', this.handleKeyUp);
this.nextButton.removeEventListener('click', this.showNextImage);
this.prevButton.removeEventListener('click', this.showPrevImage);
}

Gallery.prototype.handleClickOutside = function(e){
//If the thing we actually clicked matches what we are listening for we are closing the modal
if (e.target === e.currentTarget) {
    this.closeModal();
}
};
//good use case for a block if statement
//return keyword doesn't necessarily return anything but it stops the function from running
Gallery.prototype.handleKeyUp = function(event){
if(event.key === 'Escape') return this.closeModal();
if(event.key === 'ArrowRight') return this.showNextImage();
if(event.key === 'ArrowLeft') return this.showPrevImage();
}

Gallery.prototype.showNextImage = function() {
console.log('Showing next image!');
this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
    );
};
Gallery.prototype.showPrevImage = function() {
this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
    );
};

Gallery.prototype.showImage = function(el){
if(!el) {
    console.info('no image to show');
    return;
}
//update the modal with this info
console.log(el);

this.modal.querySelector('img').src = el.src;
this.modal.querySelector('h2').textContent = el.title;
this.modal.querySelector('figure .price').textContent = el.dataset.price;
this.modal.querySelector('figure .descrip').textContent = el.dataset.description;
// Displaying specs as JSON string
this.modal.querySelector('figure .specs').textContent = JSON.stringify(el.dataset.specs);
/* console.log(el.dataset.specs);*/

// Parsing specs from JSON
const specObj = JSON.parse(el.dataset.specs); 
// Creating a list of specs
let text = "<ul>";
for (let x in specObj){
    text += "<li class='spec'>" + specObj[x] + "</li>";
}
text += "</ul>";
// Displaying the list in your modal
this.modal.querySelector('figure .specs').innerHTML = text;
/* console.log(text);*/
this.currentImage = el;
this.openModal();

}



//Use it on the page
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);


//click outside is broken
