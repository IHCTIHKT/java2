export function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  }
}
const numbers = Math.floor(Math.random() * 12) + 9;
console.log(`${numbers}: ${fizzBuzz(numbers)}`);
