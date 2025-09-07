export function randomString(str) {
  let first = str[0].toUpperCase();
  let last = str[str.length - 1].toUpperCase();
  let middle = str.slice(1, str.length - 1).toLowerCase();

  return '\x1b[33m' + first + '\x1b[32m' + middle + '\x1b[33m' + last + '\x1b[0m';
}
console.log(randomString('geometry'));
