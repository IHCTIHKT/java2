export function removeName(obj, name) {
  delete obj[name];
  return obj;
}
const person = {
  name: 'Tramp',
  age: 72,
  country: 'USA',
};

console.log(removeName(person, 'name'));
