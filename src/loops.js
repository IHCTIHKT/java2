export function cubeGame() {
  let attempts = 1;
  let cube1, cube2;

  cube1 = Math.floor(Math.random() * 6) + 1;
  cube2 = Math.floor(Math.random() * 6) + 1;

  while (cube1 !== cube2) {
    cube1 = Math.floor(Math.random() * 6) + 1;
    cube2 = Math.floor(Math.random() * 6) + 1;
    attempts++;
  }

  return { double: cube1, attempts };
}

console.log(cubeGame());
