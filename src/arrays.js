export function setNickname(user, newNickname) {
  if (!Array.isArray(user.nicknameHistory)) {
    user.nicknameHistory = [];
  }

  if (user.nickname) {
    user.nicknameHistory.push(user.nickname);
  }

  user.nickname = newNickname;
}

const user = { id: 8, nickname: 'Stepan Stepanov', nicknameHistory: [] };

setNickname(user, 'Александр Сильвестрович');
console.log(user);

setNickname(user, 'Саша');
console.log(user);

const max = { id: 3, nickname: 'Franz Hermann', nicknameHistory: ['max', 'maxxx'] };
console.log(max);
