const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

/* people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`);
  console.log(`${person.country}`);
  console.log(`${person.cool}`);
  console.log('DONE!!');
  console.groupEnd(`${person.name}`);
}); */

people.forEach((person, index) => {
  // debugger;
  console.log(person.name);
});

// console.table(people);

// Console Methods
/* console.log
   console.error (not for error handling, just changes the way it looks in the console)
   console.warn (similar, but gives exclamation mark, warning instead of error)
   console.table (lets you look at the data in readable format)
   console.count (helpful if you have a function running twice/trigger events), (can also pass in variables)
   console.group | console.groupEnd need to have same string (helpful when you have a bunch of console.logs, collapsable in the console)
   console.groupCollapsed makes info collapse by default 
   */
/* 
// Callstack, Strack Trace: Will tell you what function called what function called what function. 
A mechanism for an interpreter  to keep track of its place in a script that calls multiple functions  
*/

// Grabbing Elements
/* By selecting it, then using $0 to quick select that element, can use $0.value, 0/zero represents for the last element clicked 
Shorthand selectors only available in the console. 
'$' - '$('p') -> give you document.querySelector, will give you the first match selector 
'$$' - '$$('p')' -> will match all of the ones that match the selector  
*/

// Breakpoints
/* Can pause JS from running by typing debugger; We create a breakpoint at a certain time
Play button: Press it for the function to run (the example we are using is a loop), keeps running javascript until it hits another debugger
Step Over into the next function call: Runs code line by line
Can place a debugger anywhere, handy way to slow things down and peer into the pieces of data
Can set breakpoints in the browser as well: In the source tab click on the line you want to put a break point on, when you run that function it will pause the browser
Make sure you remove those
*/

// Scope

// Network Requests
/* Lets you see what's being fired off in the Network Tab, what data is sending out for you  */

// Break On Attribute
/* Can right click attribute and can pause things from running, makes it easier to identify where JS code is being implemented 
Can also find this in the source tab -> Event Listeners Breakpoints
and XHR breakpoints, anything someone goes off to an external API throws a breakpoint
*/

// Some Setup Code

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('Hey Im One');
  console.warn('watch out');
  console.error('hey');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  // console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app');
  go();
}
// bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', (e) => {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
