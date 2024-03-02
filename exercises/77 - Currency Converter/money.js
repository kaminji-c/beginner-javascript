// this lesson includes fetching data, caching data
// because when we hit this API we need to provide it our base rate
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const endpoint = 'https://api.ratesapi.io/latest';
const ratesByBase = {}; // going to store all the rates in it

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

// populates currencies into html options
function generateOptions(options) {
  // console.log(options);
  // looping over an object: Object.entries, Object.values, Object.keys,
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">
    ${currencyCode} - ${currencyName}
    </option>`
      // console.log(currencyCode, currencyName);
    )
    .join(''); // .join turns it into a dump of HTML
}
// API function fetch
async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}

/* const myHeaders = new Headers();
myHeaders.append('apikey', '8r1rY7P68CzrqSeRSbcKURXniAc2whPT');
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};
fetch(
  `https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}`,
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
 */
// convert function
async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(
      `Oh no we don't have ${from} to convert ${to}. So lets it go get it`
    );
    const rates = await fetchRates(from);
    console.log(rates);
    // store them for next time
    ratesByBase[from] = rates;
  }
}

const optionsHTML = generateOptions(currencies);
// console.log(optionsHTML);
// on page load we can populate the options
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

// best practice: not going into the UI too much without coding up the actual functionality
// if start UI before functionality, tie functionality to tightly to the actual UI
