import chalk from 'chalk';

function randomRainbowNumber(numbers) {
  const colors = [chalk.red, chalk.green, chalk.blue];
  for (let i = 0; i <= numbers; i++) {
    const color = colors[i % 3];
    console.log(color(i));
  }
}

const randomNumber = Math.floor(Math.random() * 21) + 5;
randomRainbowNumber(randomNumber);
