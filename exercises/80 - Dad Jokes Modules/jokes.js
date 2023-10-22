import { handleClick } from './lib/handlers.js';
import { jokeButton } from './lib/elements.js';
// can use bind
/* jokeButton.addEventListener('click', handleClick.bind(null, loader)); */
// or use a regular function, anonymous function that will in turn call handle click
jokeButton.addEventListener('click', handleClick);

// What is a header, a header is some additional information that comes along with a request, can add additional info to the api, by adding an Object inside another Object

// Console > Network Tab > API you are trying to request from > Headers
