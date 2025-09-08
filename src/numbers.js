export function generateInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let radius = generateInteger(3, 13);
let square = (Math.PI * radius * radius).toFixed(2);
console.log('radius' + radius);
console.log('square' + square);
