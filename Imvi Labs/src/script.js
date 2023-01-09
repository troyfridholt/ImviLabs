const form = document.querySelector('form');
const timer = document.querySelector('#timer');
const wpm = document.querySelector('#wpm');
const accuracy = document.querySelector('#accuracy');
const stopButton = document.querySelector('#stop-button');

let timeLeft = 60; // tidtagare på 60 sekunder
let interval;

form.addEventListener('submit', e => {
  e.preventDefault();
  startTest();
});

stopButton.addEventListener('click', e => {
  e.preventDefault();
  stopTest();
});

function startTest() {
  interval = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft; // uppdatera tidtagaren
    if (timeLeft === 0) {
      clearInterval(interval);
      calculateResults();
    }
  }, 1000); // tider mellan varje sekund
}

function stopTest() {
  clearInterval(interval);
  calculateResults();
}

function calculateResults() {
  // här kan man räkna ut antal ord per minut och accuracy
  wpm.textContent = '123'; // exempel på ett resultat
 // accuracy.textContent = '98%'; // exempel på ett resultat
}

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
      testBox.appendChild(stopButton);
      
      startTime = Date.now();
      interval = setInterval(updateTimer, 1000);
    });
  
    stopButton.addEventListener('click', () => {
      endTime = Date.now();
      clearInterval(interval);
  
      const elapsedTime = (endTime - startTime) / 1000;
      const words = text.split(' ');
      const wpm = (words.length / elapsedTime) * 60;
      const accuracy = 100; // Räkna ut noggrannhet
  
      wpmSpan.textContent = wpm;
      accuracySpan.textContent = {accuracy};
    });
  });
  
  function updateTimer() {
    // Uppdatera tidtagare här
  }