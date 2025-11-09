export function theLongestArray(user) {
  let maxLength = 0;
  let lastValue;

  for (const key in user) {
    const value = user[key];
    if (Array.isArray(value) && value.length > maxLength) {
      maxLength = value.length;
      lastValue = value[value.length - 1];
    }
  }
  return { maxlen: maxLength, lastValue: lastValue };
}
const user = {
  example: [1, 2, 3],
  'X-Address': {
    street: 'Ленина',
    house: '10-Б',
  },
  data: { length: 50 },
  nickname: null,
  permissions: [true, false],
  age: 101,
  emails: ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'peter@example.com'],
  name: 'Peter Charles',
  isAdult: true,
  now: new Date().toISOString(),
};

const result = theLongestArray(user);
console.log(result);
