export function addFields(obj, fieldName, value) {
  obj[fieldName] = value;
  return obj;
}

const person = { name: 'Said', age: 32 };

console.log(addFields(person, 'wife', 'Maria'));
