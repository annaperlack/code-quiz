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
        title: "Which item is not a javascript value?",
        options: ["Boolean", "Number", "String", "Zero"],
        answer: "Zero"
    },
    {
        title: "What is the correct format for an array in javascript?",
        options: ["(1, 2)", "[1, 2]", "1", "true"],
        answer: "[1, 2]"
    },
    {
        title: "How do you comment within javascript?",
        options: ["**", "||", "//", "<>"],
        answer: "//"
    }
]

var currentQuestionIndex = 0;
var clock = questions.length * 15;
var timerId;

var startSection = document.getElementById('start-screen')
var startButton = document.getElementById('start');

var quizSection = document.getElementById('questions')
var questionTitle = document.getElementById('question-title')
var questionChoices = document.getElementById('choices')
var clockEl = document.getElementById('time');

var endSection = document.getElementById('end-screen')
var submitBtn = document.getElementById('submit')
var initialsEl = document.getElementById('initials')
var highScoreList = JSON.parse(localStorage.getItem("highScores")) || [];

function getCurrentQuestion() {
    return questions[currentQuestionIndex]
}


function setNextQuestion() {
    currentQuestionIndex++
    // if index is greater than number of questions then end quiz
    if (currentQuestionIndex > questions.length-1) {
        endQuiz()
    }
    else {
        displayCurrentQuestion()  
    }
}

function displayCurrentQuestion() {
    // remove any existing choice buttons, if any
    questionChoices.innerHTML = ''

     // get current question
     var currentQuestion = getCurrentQuestion()

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

function startQuiz() {
    // hide initial section\]
    startSection.setAttribute('class', 'hide');

    // show quiz section
    quizSection.removeAttribute('class');

    // timer ticking every 1 second
    timerId = setInterval(clockTick, 1000);


    displayCurrentQuestion()
}

function clockTick() {
    clock--;
    clockEl.textContent = clock;


    if (time <= 0) {
        endQuiz();
      }
}

function answerQuestion(event) {
    var answer = event.target.innerHTML
    
    var currentQuestion = getCurrentQuestion()
    if (currentQuestion.answer === answer) {
        alert("Correct!")
    } else {
        alert("Incorrect!")
        clock -= 15;
    }

    setNextQuestion()
}

function endQuiz() {

    clearInterval(timerId);
    // hide quiz section
    quizSection.setAttribute('class', 'hide');

    endSection.removeAttribute('class');

    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = clock;
}


startButton.onclick = startQuiz;
questionChoices.onclick = answerQuestion;
submitBtn.addEventListener("click", function() {
    var playerInfo = {
        initials: initialsEl.value,
        score: clock,
    }
    highScoreList.push(playerInfo);
    localStorage.setItem("highScores", JSON.stringify(highScoreList));
})


