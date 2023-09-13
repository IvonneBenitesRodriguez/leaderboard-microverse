import PlayerCollection from './js/app.js';
import AppPlayerCollection from './js/display.js';
import './style.css';

// const titlePage = document.querySelector('h1');
// titlePage.style.paddingLeft= '120px';
// titlePage.style.paddingTop= '20px';

// const heartDocument = document.querySelector('.main');
// heartDocument.style.paddingLeft = '20px';
// heartDocument.style.display = 'flex';
// heartDocument.style.justifyContent ='space-evenly';
// heartDocument.style.boxSizing = 'border-box';

// const info = document.querySelector('.info');
// info.style.display = 'flex';
// info.style.justifyContent= 'space-evenly';
// info.style.gap='60px';

// const fillScore = document.querySelector('.fill-score');
// fillScore.style.display = 'block';

// const form = document.getElementById('formPart');
// form.style.display= 'flex';
// form.style.flexDirection='column';
// form.style.gap='10px';
// form.style.padding='10px 10px';

// const button = document.querySelector('button');
// button.style.paddingLeft='16px';
// button.style.paddingRight= '16px';
// button.style.paddingTop= '6px';
// button.style.cursor = 'pointer';

// const titleOne = document.querySelector('.title');
// titleOne.style.margin='0px';

// const titleTwo =  document.querySelector('.titleTwo');
// titleTwo.style.margin ='0px';

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
