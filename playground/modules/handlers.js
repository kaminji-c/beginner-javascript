/* import currencies from './currencies.js'; */

export async function handleButtonClick(e) {
  // console.log(currencies);
  // Destructuring a PROPERTY with curly brackets, since default is a RESERVED word in JS, you MUST use DESTRUCTING RENAMING to rename it to something else
  const { localCurrency, default: currency } = await import('./currencies.js');
  /*  const currenciesModule = await import('./currencies.js'); 
  console.log(currenciesModule);
  console.log(currenciesModule.default); */ // to access the default property on it
  console.log(localCurrency, currency);
}
// how to make a MODULE on demand, by changing it to ASYNC function
// if you look at the NETWORK TAB in the CONSOLE, you will see that CURRENCIES.js is not loaded..THE REQUEST is only made only after it is CLICKED on
