const gestPreButton = document.getElementById('myButtonGestPre');
const fichPreButton = document.getElementById('myButtonFichPreg');

// Redirigir al hacer clic o presionar Enter/Espacio
function handleNavigation(event, url) {
  if (event.type === 'click' || event.key === 'Enter' || event.key === ' ') {
    window.location.href = url;
    event.preventDefault(); // Prevenir scroll si se usa Espacio
  }
}

// Eventos para Gestión de preguntas
gestPreButton.addEventListener('click', (event) => handleNavigation(event, '../Html/preguntas/listaPreguntas.html'));
gestPreButton.addEventListener('keydown', (event) => handleNavigation(event, '../Html/preguntas/listaPreguntas.html'));

// Eventos para Fichero de preguntas
fichPreButton.addEventListener('click', (event) => handleNavigation(event, '../Html/preguntas/ficheroPregunta.html'));
fichPreButton.addEventListener('keydown', (event) => handleNavigation(event, '../Html/preguntas/ficheroPregunta.html'));
