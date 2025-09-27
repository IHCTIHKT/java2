function compareFieldValues(obj1, obj2, fieldName) {
  const value1 = obj1[fieldName];
  const value2 = obj2[fieldName];

  if (value1 === value2) {
    console.log('\x1b[32m[СОВПАДАЕТ]\x1b[0m', `Поле "${fieldName}": ${value1}`);
  } else {
    console.log('\x1b[31m[РАЗЛИЧАЕТСЯ]\x1b[0m', `Поле "${fieldName}":`);
  }
}

const obj1 = { name: 'Alice', age: 25, city: 'Moscow' };
const obj2 = { name: 'Bob', age: 25, city: 'SPb' };

compareFieldValues(obj1, obj2, 'age');
compareFieldValues(obj1, obj2, 'name');
compareFieldValues(obj1, obj2, 'city');
