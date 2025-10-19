export function Array(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
  }
  return { min, max, avg: sum / arr.length };
}

const numbers = [];
for (let i = 0; i < 8; i++) {
  numbers.push(Math.floor(Math.random() * 14) + 2);
}

console.log(numbers);
console.log(Array(numbers));
