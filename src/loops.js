function compareObjects(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (let key of key1) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(compareObjects({}, {})); // true
console.log(compareObjects({ name: 'max' }, { name: 'john' }));
