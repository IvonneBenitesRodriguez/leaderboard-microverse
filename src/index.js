import './style.css';

import { listScore, display } from './js/app.js';
import { addScore } from './js/display.js';

const submit = document.querySelector('.btn-score');
const nameIn = document.getElementById('name');
const scoreIn = document.getElementById('score');

window.onload = async () => {
  display(await listScore());
};

const refresh = document.querySelector('.btn-refresh');
refresh.addEventListener('click', async () => {
  const scoreList = await listScore();
  display(scoreList);
});

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  const users = nameIn.value.trim();
  const scores = scoreIn.value.trim();

  const newScore = {
    user: users,
    score: scores,
  };

  addScore(newScore);
  nameIn.value = '';
  scoreIn.value = '';
});