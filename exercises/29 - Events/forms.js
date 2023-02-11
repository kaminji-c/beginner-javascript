// Methods commonly used preventDefault();
// There are a couple elements in HTML have default functionality when they are clicked or when they are used

// 01 LINK ELEMENT
/* const wes = document.querySelector('.wes');
wes.addEventListener('click', function(e){
    e.preventDefault();//default of a link is to change
    console.log('You clicked it!');
    const shouldChangePage = confirm('this website my be mal! Do you wish to proceed?');
    if(shouldChangePage) {
        window.location = e.currentTarget.href;
    }
    console.log(shouldChangePage);
}); */

// Another way to tackle this without the use of window.location
const wes = document.querySelector('.wes');
wes.addEventListener('click', (e) => {
  const shouldChangePage = confirm(
    'this website my be mal! Do you wish to proceed?'
  );
  if (!shouldChangePage) {
    e.preventDefault();
  }
});

// cog icon and click on persist log to show console.logs that disappear quicker than you can see them

// 02 SUBMITTING A FORM ELEMENT
// Best way to grab a form element is by grabbing it by a NAME rather than a CLASS
// To chose something by name you use an ATTRIBUTE selector [name="signup"]
const signupForm = document.querySelector('[name="signup"]');
console.log(signupForm);
signupForm.addEventListener('submit', (e) => {
  // console.log(e);
  // console.log.dir(e.currentTarget); //able to see the properties inside the form
  // EASIEST WAY TO GRAB ELEMENTS INSIDE OF A FORM
  const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    e.preventDefault();
  }
  const email = e.currentTarget.email.value;
  const agree = e.currentTarget.agree.checked;
  // console.log(e.currentTarget.name.value); gives raw values of what is in the input boxes
  // console.log(e.currentTarget.email.value);
  // console.log(e.currentTarget.agree.checked);
});

// Extended Validation for Forms
// Aside Note: String includes() are not case sensitive, need to use regex for case insensitivity

function logEvent(e) {
  console.log(e.type); // logs the type of event
  console.log(e.currentTarget.value);
}
// Whole types of elements
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
/* 'keyup'
'keydown'
KeyDown occurs when the user presses a key. KeyUp occurs when the user releases a key.
'focus'
'blur' 
The focus event is called on focusing, and blur – when the element loses the focus.
*/

const photo = document.querySelector('.photo');

function handlePhotoClick(e) {
  if (e.type === 'click' || e.key === 'Enter') {
    console.log('You clicked the photo');
  }
  console.log(e.key); // logs the key being fired
  // https://keycode.info/
}
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick); // looks for the enter key

/* photo.addEventListener('click', () => {
  console.log('You clicked the photo');
}); this alone will not register the click */

// ACCESSIBILITY: html itself is accessible.
/* COMMON PITFALLS: 
Q01.Differences between buttons and links. Don't mix them up! 
01a. Buttons are used for actions that happen inside an application
01b.Links are 'used to change a page

Q02. Things that aren't keyboard accessible should not have clicks registered to them
02. If you need something to be a button that is not a button tag, you can add a role to it role="button", and a tabindex="0", now users are able to focus on each of these things
*/

//
