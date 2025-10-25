export function restorant(order) {
  let food = [],
    snacks = [],
    drinks = [];

  for (let item of order) {
    if (['Бургер', 'Сырный суп', 'Лазанья'].includes(item)) {
      food.push(item);
    } else if (['Картошка Фри', 'Хлеб'].includes(item)) {
      snacks.push(item);
    } else if (['Пиво', 'Молочный коктейль'].includes(item)) {
      drinks.push(item);
    }
  }

  if (food.includes('Бургер') && !snacks.includes('Картошка фри')) {
    snacks.push('Картошка фри');
  }
  if (food.includes('Сырный суп') && !snacks.includes('Хлеб')) {
    snacks.push('Хлеб');
  }

  let result = '';
  const divider = '----------';

  if (food.length > 0) {
    result += `${divider}
    Основные блюда (${food.length}):
    ${food.join(', ')}
    `;
  }

  if (snacks.length > 0) {
    result += `${divider}
  Закуски (${snacks.length}):
  ${snacks.join(', ')}
  `;
  }

  if (drinks.length > 0) {
    result += `${divider}
  Напитки (${drinks.length}):
  ${drinks.join(', ')}
  `;
  }

  if (drinks.includes('Пиво')) {
    result += `${divider}
  !!Внимание: Есть алкоголь!
  `;
  }

  result += divider;
  return result;
}

console.log(restorant(['Бургер', 'Пиво', 'Сырный суп']));
