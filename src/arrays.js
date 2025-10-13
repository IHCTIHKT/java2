function showInfo(user) {
  const {
    name,
    surname,
    patronymic = 'Не указано',
    age,
    gender = 'Не указано',
    photo = 'https://photos.com/default.jpg',
  } = user;

  const adult = age >= 18 ? 'Да' : 'Нет';

  console.log('Карточка пользователя');
  console.log(`Имя: ${name}`);
  console.log(`Фамилия: ${surname}`);
  console.log(`Отчество: ${patronymic}`);
  console.log(`Возраст: ${age}`);
  console.log(`Совершеннолетний: ${adult}`);
  console.log(`Пол: ${gender}`);
  console.log(`Фото: ${photo}`);
}
const ryan = {
  name: 'Райан',
  age: 28,
  surname: 'Гослинг',
  gender: 'Мужчина',
  photo: 'https://photos.com/photo.jpg',
};

const jason = {
  name: 'Джейсон',
  age: 5,
  surname: 'Стетхем',
  patronymic: 'Александрович',
};

showInfo(ryan);
showInfo(jason);
