// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = `https://cors-anywhere.herouapp.com/`;

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data);
}

fetchRecipes('pizza');

// CORS
// CO - cross-origins, domain names are origins, you are not allowed to share data between origins because of a security issue

// The data you are trying to get from another domain has to implement a CORS policy: allows your domain to access data and they will return it, it's safe. Has to happen on the server

// 19:00
