export default class AppPlayerCollection {
  constructor() {
    this.players = [];
  }

  getPlayersFromStorage() {
    const storedPlayers = localStorage.getItem('players');

    if (storedPlayers) {
      this.players = JSON.parse(storedPlayers);
    }
  }

  savePlayersToStorage() {
    localStorage.setItem('players', JSON.stringify(this.players)); // in the localstorage appear the results
  }

  displayGameResults() {
    const playerList = document.getElementById('results');
    playerList.innerHTML = '';

    this.getPlayersFromStorage();// retrieve players from storage

    this.players.forEach((player) => {
      const playerItem = document.createElement('tr');// table rows
      const playerName = document.createElement('td'); // table cells
      const playerScore = document.createElement('td'); // table cells

      playerName.textContent = `Name: ${player.name}`;
      playerScore.textContent = `Score: ${player.score}`;
      playerItem.appendChild(playerName);
      playerItem.appendChild(playerScore);

      playerList.appendChild(playerItem);
    });
  }
}