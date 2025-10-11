function mergeToNewObject(obj1, obj2) {
  return {
    ...obj1,
    ...obj2,
  };
}

const user = { name: 'Коля', age: 9 };
const diplom = { degree: 'Магистр', university: 'МГУ', department: 'Кафедра информационных технологий' };

const obj3 = mergeToNewObject(user, diplom);

console.log(obj3);
