import { fetchJoke } from './index.js';
import { loader, jokeHolder, jokeButtonSpan } from './elements.js';
import { randomItemFromArray } from './utils.js';
import buttonText from '../data/buttonText.js';
// function generates joke and populates it
// named export
export async function handleClick() {
  // destructuring, because we only want the joke data in a variable called joke
  const { joke } = await fetchJoke(loader);
  // console.log(joke);
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );

  // second arg, whatever the button says don't return that one to me because thats already the current one
}
