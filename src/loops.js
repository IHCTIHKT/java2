function Numbers() {
  let positive = 0,
    negative = 0;
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 7) - 3);
  }

  for (let number of arr) {
    number >= 0 ? positive++ : negative++;
  }

  console.log('Массив', arr);
  console.log('Положительных:', positive);
  console.log('Отрицательных:', negative);
}
Numbers();
