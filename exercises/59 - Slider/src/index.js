 //Some people tack on 'El' at the end of their element emphasize that it is not just some variable
 function Slider(slider){
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }
    //create some variables for working with the slider
    let current;
    let prev;
    let next;
    //select the elements needed for the slider
    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    function startSlider(){
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log({current, prev, next}); //put in an object to see their values
        
    }
    function applyClasses(){
        prev.classList.add('prev');
        current.classList.add('current');
        next.classList.add('next');
    }
    function move(direction) {
        //first strip all the classes off the current slides, using spread to keep code simple
        const classesToRemove = ['prev', 'current', 'next'];
        //[prev, current, next].forEach(el => el.classList.remove(...classesToRemove));
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
        //destructuring to switch variables easily, shifting by one
        if(direction === 'back') {
            //make a new array of the new values, and destructure them over and into the prev, current, and next variables 
           [prev, current, next] = [
            //get the prev slide if there is none get the last slide from the entire slider for wrapping
            prev.previousElementSibling || slides.lastElementChild, prev, 
            current];
        } else {
            [prev, current, next] = [
                current, 
                next, 
                //get the next slide, or if it is at the end loop around and grab the first slide
                next.nextElementSibling || slides.firstElementChild];
        }
        applyClasses();
    }

    //When this slider is created, run the start slider function
    startSlider();
    applyClasses();

    //Event Listeners
    //If you need to pass an argument to a function then you need to use an arrow function, or use call or apply
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move);


 }

 const mySlider = Slider(document.querySelector('.slider'));
 const dogSlider = Slider(document.querySelector('.dog-slider'));
 
 //Ways to improve, keybinding, but only when someone focuses in on the div