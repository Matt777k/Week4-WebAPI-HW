//start button that begins the game
var sButton = document.querySelector("#sButton");
var timer = document.querySelector("#timer");
var quizContainer = document.querySelector("#quiz");
var resultsContainer = document.querySelector("#results");
var submitButton = document.querySelector("#submit");
var myQuestions = [
    {
        Question1: "question",
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

function buildQuiz(){
    
    //variable to store the html output
    var output = [];

    //for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            //variable to store the list of possible answers
            var answers = [];

            //and for each availble answer...
            for(letter in currentQuestion.answers){

                //...add and HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            //add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    //combine output list into one string of HTML and put in on the page
    quizContainer.innerHTML = output.join('');
    console.log(output);
}

function showResults(){

    //gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answers
    var numCorrect = 0;

    //for each question
    myQuestions.forEach( (currentQuestion, questionNumber) => {

        //find selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector)  || {}).value;

        //if answer is correct 
        if(userAnswer === currentQuestion.correctAnswer) {
            //add to the number of correct answers
            numCorrect++;

            //color the answers green 
            answerContainers[questionNumber].style.color = "lightgreen";
        }
        //if answer is wrong
        else {
            //color answers red
            answerContainers[questionNumber].style.color = "red";
        }
    });

    //show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}




buildQuiz();

submitButton.addEventListener("click", showResults);
