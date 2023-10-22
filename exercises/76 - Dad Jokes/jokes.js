const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  // turn  loader on when we fetch something
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  // similarly you can just return it this way, wes prefers to do it the first way, to use console.log() easily
  // return response.json();
  // turn loader off when data returns
  loader.classList.add('hidden');
  return data;
}

// function changes joke button text content
// function uses the arr to pass in arr we want because we want this to be a utility function and not specific to a certain array, allows us to use it for whatever array we want!!!
function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  // where we pass in not, sometimes when we generate random it populates the same result
  // when a function calls itself, RECURSION...if the thing is the same the same time, then run it again
  if (item === not) {
    console.log('Ahh we used that one last tie, look again');
    console.log(not);
    // in console run 'randomItemFromArray(buttonText, "stop it.")' to see the console log, utilize not
    return randomItemFromArray(arr, not);
  }
  return item;
}
// randomItemFromArray(buttonText) run in console.log SOOOO COOOL !!!

// function generates joke and populates it
async function handleClick() {
  // destructuring, because we only want the joke data in a variable called joke
  const { joke } = await fetchJoke();
  // console.log(joke);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  ); // second arg, whatever the button says don't return that one to me because thats already the current one
}

jokeButton.addEventListener('click', handleClick);

// What is a header, a header is some additional information that comes along with a request, can add additional info to the api, by adding an Object inside another Object

// Console > Network Tab > API you are trying to request from > Headers
