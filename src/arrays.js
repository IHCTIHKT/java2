const alex = { name: 'Alex', dateOfBirth: new Date('2024-05-15') };
const jake = { name: 'Jake', dateOfBirth: new Date('1970-01-01') };
const join = { name: 'Join', dateOfBirth: new Date('2007-12-30') };
const bob = { name: 'Bob', dateOfBirth: new Date() };

function getAge(person) {
  const today = new Date();
  let age = today.getFullYear() - person.dateOfBirth.getFullYear();
  if (today < new Date(today.getFullYear(), person.dateOfBirth.getMonth(), person.dateOfBirth.getDate())) {
    age--;
  }

  return age;
}

[alex, jake, join, bob].forEach((person, i) => {
  const colors = ['\x1b[34m', '\x1b[32m', '\x1b[33m', '\x1b[35m'];
  console.log(colors[i] + `${person.name}: ${getAge(person)} лет` + '\x1b[0m');
});
