export function generateInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let a = generateInteger(1, 10);
let площадь = a * a;
console.log('Площадь квадрата со стороной a=' + a + 'равна' + площадь);
