import chalk from 'chalk';

export function printColoredObject(obj) {
  for (const key in obj) {
    console.log(chalk.red(key) + ' ' + chalk.yellow(obj[key]));
  }
}

const testObj = {
  id: 1,
  name: 'Max',
  ip: '127.0.0.1',
  age: 25,
};

printColoredObject(testObj);
