//grab textarea
const textarea = document.querySelector('[name="text"]'); //use an attribute selector
//grab the result 
const result =  document.querySelector('.result');
//grab all inputs
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));
//console.log(filterInputs);

/* eslint-disable */
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
  };
  /* eslint-enable */

//store methods inside of an object
const filters = {
    sarcastic(letter, index){
        //if it is odd, it will return 1, and that is truthy, so this if statement will trip
        if (index % 2){
            return letter.toUpperCase();
        } //if it is even, it will return zero and we will lowercase it 
        return letter.toLowerCase();
    },
    funky(letter){
    //first check if there is a funky letter for this case
        let funkyLetter = funkyLetters[letter];
        if (funkyLetter) return funkyLetter;
    //if there is not, check if there is a lowercase version 
        funkyLetter = funkyLetters[letter.toLowerCase()];
        if(funkyLetter) return funkyLetter;
    //if there is nothing, return the regular letter
    return letter; 
    },
    unable(letter){
        const random = Math.floor(Math.random() * 3);
        if(letter === ' ' && random === 2){
            return '...';
        }
        return letter;
    },
    };

//handler that will handle the output of the text
//12:58
function transformText(text){
    //grabbing the filter
    //1 way to grab filter, 2nd way is better because its redundant to grab the selector again
    //const filter = document.querySelector('[name="filter"]:checked').value; 
    const filter = filterInputs.find(input => input.checked).value;
    //console.log(filter);
    //take the text, and loop over each letter
    const mod = Array.from(text).map(filters[filter]);;
    //console.log(mod);
    //result.textContent = text;
    result.textContent = mod.join('');
}
//event listener
textarea.addEventListener('input', e => transformText(e.target.value));

//multiple filters, instead of making each individual function, stick it into an OBJECT, allows you to group them together

filterInputs.forEach(input => input.addEventListener('input', () => {
    transformText(textarea.value);
}));