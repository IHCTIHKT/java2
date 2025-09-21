export function bikiniBottom(character) {
  let face = '';
  let color = '';
  switch (character.toLowerCase()) {
    case 'spongebob':
      face = '| ( · )( · ) |';
      color = '\x1b[33m';
      break;
    case 'patrick':
      face = '/ ( · )( · ) \\';
      color = '\x1b[35m';
      break;
    case 'squidward':
      face = '( ( · )( · ) )';
      color = '\x1b[36m';
      break;
    case 'plankton':
      face = '| ( · ) |';
      color = '\x1b[32m';
      break;
    case 'crabs':
      face = '|·||·|';
      color = '\x1b[31m';
      break;
    default:
      console.log('НЕ ВЫДУМЫВАЙ');
      return;
  }
  console.log(color + face + '\x1b[0m');
}
bikiniBottom('spongebob');
bikiniBottom('patrick');
bikiniBottom('squidward');
bikiniBottom('plankton');
bikiniBottom('crabs');
bikiniBottom('spiderman');
