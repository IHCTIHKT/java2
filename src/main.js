/*
Написать ф-цию joinUsingCase, которая получает на вход 2 аргумента:
1) Массив слов
2) Тот кейс (регистр) в который нужно соединить эти слова

И соединяет все слова в одно "слово" согласно нужному регистру.

Поддерживающиеся регистры:
PascalCase - первое и каждое новое слово с большой буквы
camelCase - первое слово с маленькой буквы, каждое следующее с большой
snake_case - каждое слово маленькими буквами через нижнее подчеркивание
kebab-case - каждое слово маленькими буквами через тире

Примеры ниже:
 */

const test1 = ['сЛоВо'];
console.log(joinUsingCase(test1, 'PascalCase')); // Слово
console.log(joinUsingCase(test1, 'camelCase')); // слово
console.log(joinUsingCase(test1, 'snake_case')); // слово
console.log(joinUsingCase(test1, 'kebab-case')); // слово

const test2 = ['краСНый', 'СИГНАЛ', 'свЕТОфоРа'];
console.log(joinUsingCase(test2, 'PascalCase')); // КрасныйСигналСветофора
console.log(joinUsingCase(test2, 'camelCase')); // красныйСигналСветофора
console.log(joinUsingCase(test2, 'snake_case')); // красный_сигнал_светофора
console.log(joinUsingCase(test2, 'kebab-case')); // красный-сигнал-светофора

function joinUsingCase(words, cases) {
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
  }
  if (cases === 'kebab-case') {
    return words.join('-');
  }
  if (cases === 'snake_case') {
    return words.join('_');
  }
  if (cases === 'PascalCase') {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
  }
  if (cases === 'camelCase') {
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
  }
}
