export function welcomeMessage(name, age) {
  console.log(`
Добро Пожаловать!
Имя: \x1b[33m${name}\x1b[0m]
Возраст: \x1b[32m${age}\x1b[0m]
Надеюсь вам понравиться пользоваться нашим сервисом!`);
}
welcomeMessage('Путин', 18);
