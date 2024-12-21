const maxPlayers = 4;
const minPlayers = 2;
let playerCount = 2;
let selectedColors = {};
let activePlayer = null;
let nextPlayer = 1;

const startButton = document.getElementById('start-button');

function updatePlayers() {
  const container = document.getElementById('players-container');
  container.innerHTML = '';

  for (let i = 1; i <= playerCount; i++) {
    const playerBox = document.createElement('div');
    playerBox.className = 'player';
    playerBox.id = `player-${i}`;
    playerBox.textContent = `Jugador ${i}`;
    playerBox.onclick = () => selectPlayer(i);

    // Restaurar color si existe
    if (selectedColors[i]) {
      playerBox.style.backgroundColor = selectedColors[i];
    }

    container.appendChild(playerBox);
  }

  releaseColors();
}

function selectPlayer(playerId) {
  if (activePlayer !== null) {
    const previousPlayer = document.getElementById(`player-${activePlayer}`);
    previousPlayer.classList.remove('selected');
  }
  activePlayer = playerId;
  const currentPlayer = document.getElementById(`player-${playerId}`);
  currentPlayer.classList.add('selected');
}

function decreasePlayers() {
  if (playerCount > minPlayers) {
    playerCount--;
    document.getElementById('player-count').textContent = playerCount;
    updatePlayers();
    checkStartButton();
  }
}

function increasePlayers() {
  if (playerCount < maxPlayers) {
    playerCount++;
    document.getElementById('player-count').textContent = playerCount;
    updatePlayers();
    checkStartButton();
  }
}

function selectColor(color) {
  if (activePlayer !== null) {
    assignColorToPlayer(activePlayer, color);
  } else {
    while (nextPlayer <= playerCount && selectedColors[nextPlayer]) {
      nextPlayer++;
    }

    if (nextPlayer <= playerCount) {
      assignColorToPlayer(nextPlayer, color);
      nextPlayer++;
    } else {
      alert('Todos los jugadores ya tienen un color.');
    }
  }
}

function assignColorToPlayer(playerId, color) {
  if (!Object.values(selectedColors).includes(color) || selectedColors[playerId] === color) {
    const playerBox = document.getElementById(`player-${playerId}`);
    playerBox.style.backgroundColor = color;
    selectedColors[playerId] = color;

    // Ajustar el próximo jugador si es necesario
    if (nextPlayer > playerId) {
      nextPlayer = playerId;
    }

    checkStartButton();
  } else {
    alert('Este color ya está seleccionado por otro jugador.');
  }
}

function releaseColors() {
  Object.keys(selectedColors).forEach(playerId => {
    if (playerId > playerCount) {
      delete selectedColors[playerId];
    }
  });

  checkStartButton();
}

function checkStartButton() {
  const allSelected = Object.keys(selectedColors).length === playerCount;
  startButton.style.display = allSelected ? 'block' : 'none';
}

function startGame() {
  window.location.href = './juego.html';
}

// Inicializar jugadores al cargar la página
updatePlayers();
