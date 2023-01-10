


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
    text = textArray[difficulty-1];
 

    testBox.innerHTML = text;
    stopButton.style.display = 'block';
    testBox.appendChild(stopButton);

    startTime = Date.now();
    interval = setInterval(updateTimer, 1000);
  });


  stopButton.addEventListener('click', () => {
    const questions = [
      {
        text: 'Some Ute Indians lived in',
        options: [
          {value: 'one', letter: 'A', text: 'California'},
          {value: 'two', letter: 'B', text: 'Colorado'},
          {value: 'three', letter: 'C', text: 'Nevada'}
        ]
      },
      {
        text: 'Some Utes lived in',
        options: [
          {value: 'one', letter: 'A', text: 'Utah'},
          {value: 'two', letter: 'B', text: 'Montana'},
          {value: 'three', letter: 'C', text: 'Wyoming'}
        ]
      },
      {
        text: 'Some Utes lived in',
        options: [
          {value: 'one', letter: 'A', text: 'Utah'},
          {value: 'two', letter: 'B', text: 'Montana'},
          {value: 'three', letter: 'C', text: 'Wyoming'}
        ]
      },
      {
        text: 'Some Utes lived in',
        options: [
          {value: 'one', letter: 'A', text: 'Utah'},
          {value: 'two', letter: 'B', text: 'Montana'},
          {value: 'three', letter: 'C', text: 'Wyoming'}
        ]
      },      {
        text: 'Some Utes lived in',
        options: [
          {value: 'one', letter: 'A', text: 'Utah'},
          {value: 'two', letter: 'B', text: 'Montana'},
          {value: 'three', letter: 'C', text: 'Wyoming'}
        ]
      }
      //...
    ];
    
    const testBox = document.getElementById('test-box');
    
    let html = '';
let counter = 1;
html = '<form id="test-form" onsubmit="return validateForm()">'
questions.forEach((question, index) => {
    html += `<div id="question_${counter}">${counter}. ${question.text}</div><br>`;
    html += '<div id=questionAlternatives>'
    question.options.forEach((option, optionIndex) => {
      html += `<label>
              <input type="radio" id="${counter}.${option.letter}" name="q${counter}" value="${option.value}">
              <span id="choice_${counter}${option.letter}_letter">${option.letter}. </span>
              <div id="choice_${counter}${option.letter}">${option.text}</div>
              </label>`;
    });
    html += '</div>'
    html += '<br>';
    counter++;
  });
      html += '<input type="submit" id="answerQuestionsFormButton" value="Skicka in svar"></form>'

      testBox.innerHTML = html;
  
    endTime = Date.now();
    clearInterval(interval);

    const elapsedTime = (endTime - startTime) / 1000;
    const words = text.split(' ');
    const wpm = Math.round((words.length / elapsedTime) * 60);

    accuracySpan.textContent = accuracy;
  });
  });

  function validateForm(){
    const questionAlternatives = document.querySelector('#questionAlternatives');

    console.log(radioButtons.length)
    for (let i = 0; i < radioButtons.length; i++) {
      if (!radioButtons[i].checked) {
        return false;
      }
    }
    
    return true;
  }
  
  
  
  
  

function updateTimer() {
  // Uppdatera tidtagare här
}

