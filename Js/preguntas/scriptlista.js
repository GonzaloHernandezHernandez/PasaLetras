let questionCount = 0;

function goBack() {
    window.history.back();
  }
function redirectToAddPage() {
  // Redirigir a la página para agregar una nueva pregunta
  window.location.href = `pregunta.html`;
}

function addQuestion() {
  const questionsList = document.getElementById('questionsList');

  // Crear elemento de pregunta
  const questionItem = document.createElement('div');
  questionItem.className = 'question-item';

  questionCount++;
  const questionText = document.createElement('span');
  questionText.textContent = `Pregunta ${questionCount}`;

  // Agregar evento de redirección con parámetros
  questionText.onclick = () => {
    window.location.href = `pregunta.html?questionId=${questionCount}&questionText=Pregunta%20${questionCount}`;
  };

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Eliminar';

  deleteButton.onclick = () => {
    questionsList.removeChild(questionItem);
  };

  // Agregar elementos al DOM
  questionItem.appendChild(questionText);
  questionItem.appendChild(deleteButton);
  questionsList.appendChild(questionItem);
}
