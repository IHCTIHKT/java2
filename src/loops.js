export function listUsers(users) {
  const ageNumber = {};
  for (let i = 0; i < users.length; i++) {
    const age = users[i].age;
    if (ageNumber[age]) {
      ageNumber[age] += 1;
    } else {
      ageNumber[age] = 1;
    }
  }
  return ageNumber;
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'Diana', age: 35 },
  { name: 'Eve', age: 30 },
  { name: 'Frank', age: 28 },
  { name: 'Grace', age: 25 },
  { name: 'Hannah', age: 41 },
  { name: 'Ivy', age: 30 },
  { name: 'Jack', age: 28 },
];
console.log(listUsers(users));
