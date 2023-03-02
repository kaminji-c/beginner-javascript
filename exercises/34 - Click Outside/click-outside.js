const cardButtons = document.querySelectorAll('.card button');

const modalOuter = document.querySelector('.modal-outer');

const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(e) {
    const button = e.currentTarget;
    const card = button.closest('.card');
    //closest similar to querySelectorAll, except it will climb up the nested tree of DOM elements
    //Grab the image src
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    //populate the modal with the new info
    modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace('200', '600')}" alt="${name}" />
    <p>${desc}</p>
    `;
    //console.log(modalInner.interHTML);
    //show the modal
    modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal(){
    modalOuter.classList.remove('open');
}

//click outside, clicking on the outer modal to close it
modalOuter.addEventListener('click', function(e){
    const isOutside = !e.target.closest('.modal-inner'); //boolean for isOutside, gives true or false
    //console.log(isOutside);
    if (isOutside) {
        closeModal();
    }
});

window.addEventListener('keydown', e => {
    //console.log(e);
    if (e.key === 'Escape'){
    closeModal();
    }
});