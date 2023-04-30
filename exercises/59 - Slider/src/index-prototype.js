//Some people tack on 'El' at the end of their element emphasize that it is not just some variable
function Slider(slider){
if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
}

//select the elements needed for the slider
this.slides = slider.querySelector('.slides');
this.slider = slider;
//these two variables are not needed inside the prototype method so we can keep it as is
const prevButton = slider.querySelector('.goToPrev');
const nextButton = slider.querySelector('.goToNext');

//When this slider is created, run the start slider function
this.startSlider();
this.applyClasses();

//Event Listeners
//Binding Solution #1: this.move = this.move.bind(); another solution binding to reference later
//If you need to pass an argument to a function then you need to use an arrow function, or use call or apply
prevButton.addEventListener('click', () => this.move('back'));
//Binding solution #2: with an arrow function
nextButton.addEventListener('click', () => this.move());
//For Binding Solution #1:
//nextButton.addEventListener('click', this.move);
//nextButton.addEventListener('click', this.move.bind(this));
//Bind Solution#3 ok to bind this here because we are not removing an event listener so we don't actually need to reference it later


}

Slider.prototype.startSlider = function(){
this.current = 
    this.slider.querySelector('.current') ||
    this.slides.firstElementChild;
this.prev =
    this.current.previousElementSibling ||
    this.slides.lastElementChild;
this.next =
    this.current.nextElementSibling || 
    this.slides.firstElementChild;
//console.log({current, prev, next}); //put in an object to see their values

}
Slider.prototype.applyClasses = function(){
this.prev.classList.add('prev');
this.current.classList.add('current');
this.next.classList.add('next');
}
Slider.prototype.move = function(direction) {
    console.log(this);
//first strip all the classes off the current slides, using spread to keep code simple
const classesToRemove = ['prev', 'current', 'next'];
//[prev, current, next].forEach(el => el.classList.remove(...classesToRemove));
this.prev.classList.remove(...classesToRemove);
this.current.classList.remove(...classesToRemove);
this.next.classList.remove(...classesToRemove);
//destructuring to switch variables easily, shifting by one
if(direction === 'back') {
    //make a new array of the new values, and destructure them over and into the prev, current, and next variables 
    [this.prev, this.current, this.next] = [
    //get the prev slide if there is none get the last slide from the entire slider for wrapping
    this.prev.previousElementSibling || this.slides.lastElementChild, this.prev, 
    this.current];
} else {
    [this.prev, this.current, this.next] = [
        this.current, 
        this.next, 
        //get the next slide, or if it is at the end loop around and grab the first slide
        this.next.nextElementSibling || this.slides.firstElementChild];
}
this.applyClasses();
}


//creating new instance of the slider
const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));
console.log(mySlider, dogSlider);

//Ways to improve, keybinding, but only when someone focuses in on the div
window.dogSlider = dogSlider;

window.addEventListener('keyup', function(e) {
    if(e.key === 'ArrowRight') {
        dogSlider.move();
    }
    if(e.key === 'ArrowLeft') {
        dogSlider.move('back');
    }
})