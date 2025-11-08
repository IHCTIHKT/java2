function findMultiply(number, search) {
  const numbers = number.toString();
  for (let i = 0; i < numbers.length; i++) {
    for (let l = i + 1; l < numbers.length; l++) {
      let first = Number(numbers[i]);
      let last = Number(numbers[l]);
      if (first * last === search) {
        return i + '' + l;
      }
    }
  }
  return '-1-1';
}
console.log(findMultiply(1234567890, 18));
