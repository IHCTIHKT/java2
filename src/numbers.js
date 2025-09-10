export function calculate(classes, studentsClass) {
  return Math.ceil(studentsClass / 2) * classes;
}
const classes = 10;
const students = 7;
const desks = calculate(classes, students);

console.log(`для ${classes} классов по ${students} учеников, нужно ${desks} парт`);
