//***Closure***: ability to create a function that has scope
//Using Closure to create scope for each of these galleries so that they don't interfere with each other but can reuse the same code

function Gallery(gallery){
    //throws error in the console, and stop the code from running and break on the page
    if(!gallery) {
        throw new Error('No Gallery Found');
    }
    //select all the elements we need
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage; 
    

    function openModal(){
        console.info('Opening Modal...');
        //1) Check if the modal is already open, matches checks for css selector matches
        if(modal.matches('.open')){
            console.info('Modal already open');
            return; //stop the function from running
        }
        modal.classList.add('open');
        //Event listeners to be bound when we open the modal
        window.addEventListener('keyup', handleKeyUp);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);
    }
    
    function closeModal(){
        modal.classList.remove('open');
        //TODO: add event listeners for clicks and keyboard
        window.removeEventListener('keyup', handleKeyUp);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPrevImage);
    }

    function handleClickOutside(e){
        //If the thing we actually clicked matches what we are listening for we are closing the modal
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }
    //good use case for a block if statement
    //return keyword doesn't necessarily return anything but it stops the function from running
    function handleKeyUp(e){
        if(e.key === 'Escape') return closeModal();
        if(e.key === 'ArrowRight') return showNextImage();
        if(e.key === 'ArrowLeft') return showPrevImage();
    }
    function showNextImage() {
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }
    function showPrevImage() {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }
    
    function showImage(el){
        if(!el) {
            console.info('no image to show');
            return;
        }
        //update the modal with this info
        console.log(el);
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }
    //These are our Event Listeners 
    images.forEach(image => image.addEventListener('click', (e) => showImage(e.currentTarget)));
    //Loop over each image
    images.forEach(image => {
        //attach an event listener for each image
        image.addEventListener('keyup', e => {
            //when it is keyup'd check if it was enter
            if(e.key === 'Enter') {
                //if it was, show the image
                showImage(e.currentTarget);
            }
        })
    })
    modal.addEventListener('click', handleClickOutside);    
}

//Use it on the page
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));