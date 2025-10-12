export function merge(obj1, obj2, priority) {
  if (priority === 1) {
    return { ...obj2, ...obj1, noise: obj2.notes };
  } else {
    return { ...obj1, ...obj2, noise: obj1.notes };
  }
}

const user = { name: 'Коля', age: 9, notes: 'Заметка от Коли!' };
const work = { address: 'Строительная 4', department: 'Шпаклёвщик', notes: 'Рабочая заметка' };

console.log(merge(user, work));

console.log(merge(user, work, 0));

console.log(merge(user, work, 1));
