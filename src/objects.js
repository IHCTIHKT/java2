function relocationHuman(user) {
  const isAdult = user.age >= 18;

  if (isAdult) {
    if (user.city === 'Москва') {
      if (user.address.includes('Ленина')) {
        console.log('\x1b[32mМосква\x1b[0m \x1b[34mулица Кривая 109\x1b[0m');
      } else {
        console.log('\x1b[32mИваново\x1b[0m \x1b[34mулица Важная 5\x1b[0m');
      }
    } else {
      if (user.address.includes('Капиталистов')) {
        console.log('\x1b[32mМосква\x1b[0m \x1b[34mулица Материалистов 3\x1b[0m');
      } else {
        console.log(`x1b[32m${user.city}\x1b[0m \x1b[34mулица Центральная 2\x1b[0m`);
      }
    }
  } else {
    if (user.age < 16) {
      console.log('${user.city} ${user.address} - переселение не требуется');
    } else if (user.age >= 16 && user.age <= 17) {
      if (user.city === 'Москва') {
        console.log('\x1b[32mКострома\x1b[0m \x1b[34m${user.address}\x1b[0m');
      } else {
        console.log('${user.city} ${user.address} - переселение не требуется');
      }
    }
  }
}

relocationHuman({ age: 16, city: 'Москва', address: 'Ленина' });
