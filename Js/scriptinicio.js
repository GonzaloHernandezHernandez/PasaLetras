  // Accedemos a los botones por su ID
const playButton = document.getElementById('myButtonjuego');
const settingsButton = document.getElementById('myButtonajustes');

// Evento para el botón "Jugar"
playButton.addEventListener('click', () => {
  console.log("Botón Jugar clicado");
  // Aquí puedes redirigir a otra página o realizar alguna acción
  window.location.href = '../Html/juego/eleccion.html'; // Ejemplo de redirección
});

// Evento para el botón "Ajustes"
settingsButton.addEventListener('click', () => {
  console.log("Botón Ajustes clicado");
  // Aquí puedes redirigir a otra página o abrir una ventana de ajustes
  window.location.href = '../Html/ajustesPreguntas.html'; // Ejemplo de redirección
});

// Opcionalmente, agregar eventos de teclado (Enter o Espacio)
playButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    window.location.href = '../Html/juego/juego.html';
  }
});

settingsButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    window.location.href = '../Html/ajustesPreguntas.html';
  }
});
