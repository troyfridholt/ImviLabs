document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const testBox = document.querySelector('#test-box');
  const stopButton = document.querySelector('#stop-button');
  const wpmSpan = document.querySelector('#wpm');
  const accuracySpan = document.querySelector('#accuracy');

  let text = '';
  let startTime = null;
  let endTime = null;
  let interval = null;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const difficulty = document.querySelector('#difficulty').value;

    // Hämta text från databas med vald svårighetsgrad
    text = 'Text hämtas från databas här';

    testBox.innerHTML = text;
    stopButton.style.display = 'block';
    testBox.appendChild(stopButton);

    startTime = Date.now();
    interval = setInterval(updateTimer, 1000);
  });

  stopButton.addEventListener('click', () => {
    testBox.innerHTML = '<div id="question-form">' +
                     '<form>' +
                     '<label for="question1">Fråga 1:</label><br>' +
                     '<input type="text" id="question1"><br>' +
                     '<br>' +
                     '<label for="question2">Fråga 2:</label><br>' +
                     '<input type="text" id="question2"><br>' +
                     '<br>' +
                     '<input type="submit" value="Skicka">' +
                     '</form>' +
                     '</div>';

    const questionForm = document.querySelector('#question-form');
questionForm.style.display = 'block';

    endTime = Date.now();
    clearInterval(interval);

    const elapsedTime = (endTime - startTime) / 1000;
    const words = text.split(' ');
    const wpm = Math.round((words.length / elapsedTime) * 60);
    const accuracy = 100; // Räkna ut noggrannhet

    wpmSpan.textContent = wpm;
    accuracySpan.textContent = {accuracy};
    
  });
});

function updateTimer() {
  // Uppdatera tidtagare här
}