document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.querySelector("form");
    const testBox = document.querySelector("#test-box");
    const stopButton = document.querySelector("#stop-button");
    const wpmSpan = document.querySelector("#wpm");
    let text = "";
    let startTime = null;
    let endTime = null;
    let interval = null;
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const difficulty = document.querySelector("#difficulty").value;
        // Hämta text från databas med vald svårighetsgrad
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum et optio nostrum maiores eligendi ipsum ducimus. Eaque, saepe officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum et optio nostrum maiores eligendi ipsum ducimus. Eaque, saepe officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum et optio nostrum maiores eligendi ipsum ducimus. Eaque, saepe officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum et optio nostrum maiores eligendi ipsum ducimus. Eaque, saepe officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum et optio nostrum maiores eligendi ipsum ducimus. Eaque, saepe officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum et optio nostrum maiores eligendi ipsum ducimus. Eaque, saepe officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum et optio nostrum maiores eligendi ipsum ducimus. Eaque, saepe officia?";
        testBox.innerHTML = text;
        stopButton.style.display = "block";
        testBox.appendChild(stopButton);
        startTime = Date.now();
        interval = setInterval(updateTimer, 1000);
    });
    stopButton.addEventListener("click", ()=>{
        const questions = [
            {
                text: "Some Ute Indians lived in",
                options: [
                    {
                        value: "one",
                        letter: "A",
                        text: "California"
                    },
                    {
                        value: "two",
                        letter: "B",
                        text: "Colorado"
                    },
                    {
                        value: "three",
                        letter: "C",
                        text: "Nevada"
                    }
                ]
            },
            {
                text: "Some Utes lived in",
                options: [
                    {
                        value: "one",
                        letter: "A",
                        text: "Utah"
                    },
                    {
                        value: "two",
                        letter: "B",
                        text: "Montana"
                    },
                    {
                        value: "three",
                        letter: "C",
                        text: "Wyoming"
                    }
                ]
            },
            {
                text: "Some Utes lived in",
                options: [
                    {
                        value: "one",
                        letter: "A",
                        text: "Utah"
                    },
                    {
                        value: "two",
                        letter: "B",
                        text: "Montana"
                    },
                    {
                        value: "three",
                        letter: "C",
                        text: "Wyoming"
                    }
                ]
            },
            {
                text: "Some Utes lived in",
                options: [
                    {
                        value: "one",
                        letter: "A",
                        text: "Utah"
                    },
                    {
                        value: "two",
                        letter: "B",
                        text: "Montana"
                    },
                    {
                        value: "three",
                        letter: "C",
                        text: "Wyoming"
                    }
                ]
            },
            {
                text: "Some Utes lived in",
                options: [
                    {
                        value: "one",
                        letter: "A",
                        text: "Utah"
                    },
                    {
                        value: "two",
                        letter: "B",
                        text: "Montana"
                    },
                    {
                        value: "three",
                        letter: "C",
                        text: "Wyoming"
                    }
                ]
            }
        ];
        const testBox = document.getElementById("test-box");
        let html = "";
        let counter = 1;
        html = "";
        questions.forEach((question, index)=>{
            html += `<div id="question_${counter}">${counter}. ${question.text}</div><br>`;
            html += '<div id="questionAlternatives">';
            question.options.forEach((option, optionIndex)=>{
                html += `<label>
                  <input type="radio" id="${counter}.${option.letter}" name="q${counter}" value="${option.value}">
                  <span id="choice_${counter}${option.letter}_letter">${option.letter}. </span>
                  <div id="choice_${counter}${option.letter}">${option.text}</div>
                  </label>`;
            });
            html += "</div>";
            html += "<br>";
            counter++;
        });
        html += '<button type="button" id="answerQuestionsButton" onClick="submitAnswers()">Skicka in svar</button>';
        testBox.innerHTML = html;
        endTime = Date.now();
        clearInterval(interval);
        const elapsedTime = (endTime - startTime) / 1000;
        const words = text.split(" ");
        const wpm = Math.round(words.length / elapsedTime * 60);
        wpmSpan.innerHTML = wpm;
    });
});
function submitAnswers() {
    const accuracySpan = document.querySelector("#question-accuracy");
    const correctAnswers = [
        "one",
        "one",
        "one",
        "one",
        "one"
    ];
    const selectedAnswers = [];
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    radioButtons.forEach((button)=>{
        selectedAnswers.push(button.value);
    });
    let correctCount = 0;
    for(let i = 0; i < correctAnswers.length; i++){
        const radio = document.querySelector(`input[name="q${i + 1}"][value="${selectedAnswers[i]}"]`);
        if (correctAnswers[i] === selectedAnswers[i]) {
            correctCount++;
            radio.parentElement.style.color = "green";
        } else radio.parentElement.style.color = "red";
    }
    const percentage = Math.round(correctCount / correctAnswers.length * 100);
    console.log(percentage);
    accuracySpan.innerHTML = percentage + "%";
}
function updateTimer() {
// Uppdatera tidtagare här
}

//# sourceMappingURL=index.44983732.js.map
