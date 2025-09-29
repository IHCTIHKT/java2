export function randomYear(year) {
  const bomba = (year % 4 === 0 && year % 100 === 0) || year % 400 === 0;
  const message = bomba ? 'Високосный' : 'Не Високосный';
  return message;
}
const randomYears = Math.floor(Math.random() * 15) * 10 + 1980;
console.log(`${randomYears}: ${randomYear(randomYears)}`);
