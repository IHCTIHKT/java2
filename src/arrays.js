function championShip(athletes) {
  const [first, second, third, ...others] = athletes;

  console.log(`1. Первое место: ${first}`);
  console.log(`2. Второе место: ${second}`);
  console.log(`3. Третье место: ${third}`);
  console.log(`4. Остальные спортсмены: ${others}`);
}

const athletes = ['Александр', 'Михаил', 'Валентин', 'Сергей', 'Артур'];
championShip(athletes);
