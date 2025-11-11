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

function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  if (arr1.length == arr2.length) {
    return true;
  }
}

// ПРАВИЛЬНЫЕ ВЫЗОВЫ:
console.log(compareArrays([], []));
console.log(compareArrays([true, null, 1, 'stop'], [true, null, 1, 'stop']));
console.log(compareArrays([1, 2, 3], [2, 1, 3]));
console.log(compareArrays([null], []));
