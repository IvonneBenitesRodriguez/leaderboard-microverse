import PlayerCollection from './js/app.js';
import AppPlayerCollection from './js/display.js';
import './style.css';

const playerCollection = new PlayerCollection();
const appPlayerCollection = new AppPlayerCollection();

appPlayerCollection.displayGameResults();

const form = document.getElementById('formPart');
const submitButton = form.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');

  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (name && score) {
    playerCollection.addPlayer(event);
    appPlayerCollection.displayGameResults();
    nameInput.value = '';
    scoreInput.value = '';
  } else {
    appPlayerCollection.displayGameResults();
  }
});
