//start button that begins the game
var sButton = document.querySelector("#sButton");
var timer = document.querySelector("#timer");
var quizContainer = document.querySelector("#quiz");
var resultsContainer = documern.querySelector("#results");

var secondsLeft = 60;

sButton.addEventListener("click", function gameTimer()  {
    var timerStart = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(timerStart);
        }
    }, 1000)
})

//timer starts with the first presented question on Javascript fundamentals
//multple choices presented on first question
    //user clicks their answer
        //answers that are incorrect subtract time from the timer
        //displays whether answer selected was correct or incorrect
//proceeds to next question after an answer is selected
//game ends when timer reaches 0 or user answers all questions
//user can save their initials and their score to scoreboard
    //prompt box with intitial and submit button
        //displays scoreboard with buttons to chose "Go back" or "Clear high scores"
//**ensure it adapts to multiple screen sizes

function buildQuiz(){}

function showResults(){}

buildQuiz();

submitButton.addEventListener("click", showResults);

var myQuestions = [
    {
        Question1: "question1",
        answers: {
            A: "a",
            B: "b",
            C: "c",
            D: "d"  
        },
        correctAnswer: "idkyet"
    },
    {
        Question2: "question2",
        answers: {
            A: "a",
            B: "b",
            C: "c",
            D: "d"
        },
        correctAnswer: "idkyet"
    },
    {
        Question2: "question3",
        answers: {
            A: "a",
            B: "b",
            C: "c",
            D: "d"
        },
        correctAnswer: "idkyet"
    },
    {
        Question2: "question4",
        answers: {
            A: "a",
            B: "b",
            C: "c",
            D: "d"
        },
        correctAnswer: "idkyet"
    },
    {
        Question2: "question5",
        answers: {
            A: "a",
            B: "b",
            C: "c",
            D: "d"
        },
        correctAnswer: "idkyet"
    }
]