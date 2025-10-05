export function getRandomItem(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7]));
