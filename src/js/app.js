export default class PlayerCollection {
  constructor() {
    this.players = [];
  }

  savePlayersToStorage() {
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  addPlayerToCollection(name, score) {
    const player = {
      id: Math.floor(Math.random() * 1000),
      name,
      score,
    };
    this.players.push(player);
    this.savePlayersToStorage();
  }

  addPlayer(event) {
    event.preventDefault(); // Prevent form submission and page refresh

    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');

    const name = nameInput.value.trim();
    const score = scoreInput.value.trim();

    if (name && score) {
      this.getPlayersFromStorage(); // Retrieve existing players
      this.addPlayerToCollection(name, score);
      nameInput.value = '';
      scoreInput.value = '';
    }
  }

  getPlayersFromStorage() {
    const storedPlayers = localStorage.getItem('players');
    if (storedPlayers) {
      this.players = JSON.parse(storedPlayers);
    }
  }
}
// PlayerCollection

const playerCollection = new PlayerCollection();

const form = document.getElementById('formPart');
const submitButton = form.querySelector('button[type="submit"]');
submitButton.addEventListener('click', (event) => playerCollection.addPlayer(event));