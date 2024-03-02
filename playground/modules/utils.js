const last = 'bos';
/* export const last = 'bos'; can also export variables */
const middle = 'slam dunk';

export function returnHi(name) {
  return `hi ${name} ${last}`;
}
const first = 'wes';
// another way of exporting variables in curly brackets: NAMED exports
export { last, middle };
export default first;
