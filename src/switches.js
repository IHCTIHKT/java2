export function restaurantSuper(restaurant) {
  let status = '';
  let color = '';
  switch (restaurant) {
    case 'Формируются чеки':
    case 'Назначаются повара':
      status = 'Обрабатывается';
      color = '\x1b[34m';
      break;
    case 'Запекается':
    case 'Варится':
    case 'Жарится':
    case 'Поиск курьера':
      status = 'Готовится';
      color = '\x1b[33m';
      break;
    case 'Курьер берет заказ':
    case 'Курьер в пути':
    case 'Курьер подъезжает':
      status = 'У курьера';
      color = '\x1b[34m';
      break;
    case 'Клиент отказался от заказа':
    case 'Заказ доставлен':
      status = 'Готов';
      color = '\x1b[32m';
      break;

    default:
      status = 'Неизвестный статус';
      color = '\x1b[31m';
  }
  console.log(color + status + '\x1b[0m');
}
restaurantSuper('Запекается');
restaurantSuper('БАРБОСКИН');
restaurantSuper('Формируются чеки');
