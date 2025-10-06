export function unique(arr, element) {
  if (!arr.includes(element)) {
    arr.push(element);
  }
}

const list = [];
unique(list, 'Картошка');
unique(list, 'Капуста');
unique(list, 'Морковь');
unique(list, 'Картошка');
unique(list, 'Лук');
unique(list, 'Морковь');

console.log(list);
