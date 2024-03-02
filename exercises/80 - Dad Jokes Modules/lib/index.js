// Will contain all the library js

// Named export (we can have lots of these)
export async function fetchJoke(loader) {
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
