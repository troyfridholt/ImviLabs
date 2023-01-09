document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.querySelector("form");
    const testBox = document.querySelector("#test-box");
    const stopButton = document.querySelector("#stop-button");
    const wpmSpan = document.querySelector("#wpm");
    const accuracySpan = document.querySelector("#accuracy");
    let text = "";
    let startTime = null;
    let endTime = null;
    let interval = null;
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const difficulty = document.querySelector("#difficulty").value;
        // Hämta text från databas med vald svårighetsgrad
        text = "Text h\xe4mtas fr\xe5n databas h\xe4r";
        testBox.innerHTML = text;
        stopButton.style.display = "block";
        testBox.appendChild(stopButton);
        startTime = Date.now();
        interval = setInterval(updateTimer, 1000);
    });
    stopButton.addEventListener("click", ()=>{
        const questions = [
            {
                text: "Fr\xe5ga 1:",
                options: [
                    "A",
                    "B",
                    "C"
                ]
            },
            {
                text: "Fr\xe5ga 2:",
                options: [
                    "A",
                    "B",
                    "C"
                ]
            },
            {
                text: "Fr\xe5ga 3:",
                options: [
                    "A",
                    "B",
                    "C"
                ]
            },
            {
                text: "Fr\xe5ga 4:",
                options: [
                    "A",
                    "B",
                    "C"
                ]
            },
            {
                text: "Fr\xe5ga 5:",
                options: [
                    "A",
                    "B",
                    "C"
                ]
            }
        ];
        // Clear the "test-box" element
        testBox.innerHTML = "";
        // Iterate through the questions array and append each question to the "test-box" element
        let html = "";
        questions.forEach((question)=>{
            html += `<label for="${question.text}">${question.text}</label>
               <br>`;
            question.options.forEach((option)=>{
                html += `<input type="radio" name="${question.text}-${option}" value="option1">
                 <label for="${question.text}-${option}">${option}</label>
                 <br>`;
            });
            html += "<br>";
        });
        testBox.innerHTML = html;
        endTime = Date.now();
        clearInterval(interval);
        const elapsedTime = (endTime - startTime) / 1000;
        const words = text.split(" ");
        const wpm = Math.round(words.length / elapsedTime * 60);
        const accuracy = 100; // Räkna ut noggrannhet
        wpmSpan.textContent = wpm;
        accuracySpan.textContent = {
            accuracy
        };
    });
});
function updateTimer() {
// Uppdatera tidtagare här
}

//# sourceMappingURL=index.44983732.js.map
