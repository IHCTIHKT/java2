export const compareStrings = (a, b) => a.toLowerCase() === b.toLowerCase();
let text = 'Начало';
let sub = `всех${text.slice(0, text.length - 1)}`;

console.log(compareStrings(text, 'Начало'));

text += sub;
console.log(compareStrings(text, 'Начало всех'));
console.log(compareStrings(text, 'начало всех начал'));
