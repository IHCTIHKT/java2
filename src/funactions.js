export const sayHi = (name = 'Аноним') => {};
const greenColor = '\x1b[32m';
const blueColor = '\x1b[34m';
const resetColor = '\x1b[0m';

console.log(`${greenColor}Привет${resetColor} ${blueColor}${'Аноним'}${resetColor}`);
