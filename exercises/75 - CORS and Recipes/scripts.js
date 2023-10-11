// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  // console.log(data);
  return data;
}

// user input data
async function handleSubmit(e) {
  e.preventDefault();
  const el = e.currentTarget;
  console.log(el.query.value);
  fetchAndDisplay(form.query.value);
}
async function fetchAndDisplay(query) {
  // turn the form off
  form.submit.disabled = true;
  // submit the search
  // fetchRecipes(form.query.value);
  const recipes = await fetchRecipes(query);
  console.log(recipes);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

// display results
function displayRecipes(recipes) {
  console.log('Creating HTML');
  // console.log(recipes);
  const html = recipes.map(
    (recipe) => `<div class="recipe">
    <h2>${recipe.title}</h2>
    <p>${recipe.ingredients}</p>
    ${
      recipe.thumbnail &&
      `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
    }
    <a href="${recipe.href}" target="_blank">View Recipe →</a>
    </div>
    `
  );
  // console.log(html);
  recipesGrid.innerHTML = html.join('');
  // join on nothing because it will place a comma between everything
}

form.addEventListener('submit', handleSubmit);
// fetchRecipes('pizza');
// on page load run it with pizza
fetchAndDisplay('pizza');

// CORS
// CO - cross-origins, domain names are origins, you are not allowed to share data between origins because of a security issue

// The data you are trying to get from another domain has to implement a CORS policy: allows your domain to access data and they will return it, it's safe. Has to happen on the server

// 19:00
