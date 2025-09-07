export function startsWithIgnoreCase(text, part) {
  return text.toLowerCase().startsWith(part.toLowerCase());
}
console.log(startsWithIgnoreCase('Сбербанк', 'Сбер'));
console.log(startsWithIgnoreCase('Кс2', 'в'));
