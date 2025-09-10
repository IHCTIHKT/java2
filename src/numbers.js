export function weather() {
  const planet = Math.floor(Math.random() * 61 + 20) * 10;
  const temperature = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, '0');
  return `${planet}, ${temperature}`;
}
const temperature = weather();
console.log(`Прогноз погоды на TerraRandomis: Температура завтра ${temperature} `);
