// Manejar la funcionalidad de volver hacia atrás
function goBack() {
    window.history.back();
  }
  
  // Variables para almacenar datos de la pregunta
  let questionData = {
    id: '',
    text: '',
    image: null,
    answers: [
      { text: '', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  };
  
  // Función para inicializar la pregunta (vacía o con datos existentes)
  function initializeQuestion(data) {
    const questionText = document.getElementById('question-text');
    const questionIdentifier = document.getElementById('question-identifier');
    const questionImage = document.getElementById('question-image');
  
    questionText.value = data.text;
    questionIdentifier.textContent = data.id;
  
    if (data.image) {
      questionImage.src = data.image;
      questionImage.style.display = 'block';
    } else {
      questionImage.style.display = 'none';
    }
  
    const answerInputs = document.querySelectorAll('.response-option input[type="text"]');
    const correctButtons = document.querySelectorAll('.response-option .response-circle');
  
    data.answers.forEach((answer, index) => {
      answerInputs[index].value = answer.text;
      correctButtons[index].style.backgroundColor = answer.correct ? 'green' : 'red';
    });
  }
  
  // Función para manejar la selección de la respuesta correcta
  function selectCorrect(index) {
    questionData.answers.forEach((answer, i) => {
      answer.correct = i === index;
    });
    updateUI();
  }
  
  // Función para manejar la carga de imagen
  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        questionData.image = e.target.result;
        const questionImage = document.getElementById('question-image');
        questionImage.src = e.target.result;
        questionImage.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  }
  
  // Función para resetear la pregunta
  function resetQuestion() {
    questionData.text = '';
    questionData.image = null;
    questionData.answers = [
      { text: '', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ];
    updateUI();
  }
  
  // Función para guardar la pregunta
  function saveQuestion() {
    const questionText = document.getElementById('question-text').value;
    const answerInputs = document.querySelectorAll('.response-option input[type="text"]');
  
    questionData.text = questionText;
    questionData.answers.forEach((answer, index) => {
      answer.text = answerInputs[index].value;
    });
  
    // Validar que haya al menos un switch activado
    const hasCorrectAnswer = questionData.answers.some(answer => answer.correct);
    if (!hasCorrectAnswer) {
      alert('Debe seleccionar al menos una respuesta correcta.');
      return;
    }
  
    // Validar que el texto de la pregunta no esté vacío
    if (!questionData.text.trim()) {
      alert('El texto de la pregunta no puede estar vacío.');
      return;
    }
  
    console.log('Pregunta guardada:', questionData);
    alert('Pregunta guardada correctamente.');
  }
  
  // Actualizar la interfaz gráfica según los datos
  function updateUI() {
    const questionText = document.getElementById('question-text');
    const answerInputs = document.querySelectorAll('.response-option input[type="text"]');
    const correctButtons = document.querySelectorAll('.response-option .response-circle');
    const questionImage = document.getElementById('question-image');
  
    questionText.value = questionData.text;
    questionImage.src = questionData.image || '';
    questionImage.style.display = questionData.image ? 'block' : 'none';
  
    questionData.answers.forEach((answer, index) => {
      answerInputs[index].value = answer.text;
      correctButtons[index].style.backgroundColor = answer.correct ? 'green' : 'red';
    });
  }
  
  // Inicializar la página al cargar
  window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode'); // "create" o "edit"
  
    if (mode === 'edit') {
      questionData = {
        id: 'B', // Ejemplo de identificador
        text: 'Ejemplo de pregunta',
        image: null,
        answers: [
          { text: 'Respuesta 1', correct: false },
          { text: 'Respuesta 2', correct: true },
          { text: 'Respuesta 3', correct: false },
          { text: 'Respuesta 4', correct: false }
        ]
      };
    }
  
    initializeQuestion(questionData);
  };
  