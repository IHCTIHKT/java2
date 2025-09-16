export const adult = (age) => {
  const message = age >= 18 ? 'true' : 'false';
  const color = age >= 18 ? '\x1b[32m' : '\x1b[31m';
  console.log(color + message + '\x1b[0m');
  return message;
};
const randomAge = Math.floor(Math.random() * 8) + 15;
console.log(randomAge);
adult(randomAge);
