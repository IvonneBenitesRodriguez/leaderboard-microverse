/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0h9fPW0Emu3RZUlzfxoW/scores';

export const listScore = async () => {
  const response = await fetch(url);
  const { result } = await response.json().catch((error) => new Error(error));
  return result;
};

export const display = (list) => {
  const listBox = document.querySelector('#listItems');
  listBox.innerHTML = '';
  if (list.length === 0) {
    listBox.innerHTML = '<li> Sorry, no scores yet</li>';
  }
  list.sort((a, b) => b.score - a.score).forEach((score) => {
    listBox.innerHTML += `<li> ${score.user}: ${score.score}</li>`;
  });
};