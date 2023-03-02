//Scroll event, scrolls inside an element. Term and conditions, scroll to accept

//Intersection Observer vs Scroll Events
//1min

//If there is no scroll on the page then put code in a function, common for Javascript to break because something doesn't exist on a different page
const terms = document.querySelector('.terms-and-conditions');
console.log(terms);
const watch = document.querySelector('.watch');
console.log(watch);
const button = document.querySelector('.accept');

//Intersection Observer: is something that will watch if something is on or off, or partway on or off of the page
function obCallback(payload){
    if(payload[0].intersectionRatio === 1) {
        button.disabled = false;
   //stop observing the button
   ob.unobserve(terms.lastElementChild);
    }
}
//watcher
const ob = new IntersectionObserver(obCallback, { 
    root: terms, //usually its the body
    threshold: 1,
});

ob.observe(terms.lastElementChild); //select the last paragraph tag

//ob.observe(watch); //every time we scroll past the watch me tag, it only fires when there is new information

/* function scrollToAccept(){
    if(!terms){
    return; //quit this there isn't that item on the page
    }
    terms.addEventListener('scroll', function(e){
    console.log(e.currentTarget.scrollTop);
    console.log(e.currentTarget.scrollHeight);
});
} 

scrollToAccept();
*/