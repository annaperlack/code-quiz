//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

var questions = [
    {
        title: "What color is the sky?",
        options: ["Blue", "Red"],
        answer: "Blue"
    },
    {
        title: "What color is the grass?",
        options: ["Yellow", "Red", "Green"],
        answer: "Green"
    },
    {
        title: "What color is the sun?",
        options: ["Blue", "Green", "Yellow", "Black"],
        answer: "Yellow"
    }
]

var startSection = document.getElementById('start-screen')
var startButton = document.getElementById('start');

var quizSection = document.getElementById('questions')
var questionTitle = document.getElementById('question-title')
var questionChoices = document.getElementById('choices')

var endSection = document.getElementById('end-screen')


startButton.onclick = startQuiz;

function startQuiz() {
    // Start with 1st question index
    var currentQuestionIndex = 0;

    // hide initial section
    startSection.setAttribute('class', 'hide');

    // show quiz section
    quizSection.removeAttribute('class')

    // get current question
    var currentQuestion = questions[currentQuestionIndex]
    
    // set current question title and options in the html
    questionTitle.textContent = currentQuestion.title
    for (var i = 0; i < currentQuestion.options.length; i++) {
        var option = currentQuestion.options[i]

        // create button for each option
        var optionButton = document.createElement("button");
        optionButton.innerHTML = option

        // add button to options div
        questionChoices.appendChild(optionButton)
    }

}