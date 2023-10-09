// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';

async function fetchRecipes(query){
    const res = await fetch(`${baseEndpoint}?q=${query}`);
    const data = await res.json();
}
//4:30

fetchRecipes('pizza');