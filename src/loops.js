export function christmasTree(height) {
  for (let row = 1; row <= height; row++) {
    let empty = '';
    for (let spaces = 0; spaces < height - row; spaces++) {
      empty += ' ';
    }
    for (let stars = 0; stars < row * 2 - 1; stars++) {
      empty += '*';
    }

    console.log(empty);
  }
}

christmasTree(5);
