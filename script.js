
//start button that begins the game
var sButton = document.querySelector("#sButton");
var timer = document.querySelector("#timer");
var quizContainer = document.querySelector("#quiz");
var resultsContainer = document.querySelector("#results");
var submitButton = document.querySelector("#submit");
var scoreButton = document.querySelector("#score");
var myQuestions = [
  {
    question: "Which of the following is NOT a Javascript data type?",
    answers: {
      A: "Boolean",
      B: "Number",
      C: "Letter",
      D: "String",
    },
    correctAnswer: "C",
  },
  {
    question: "Which company developed Javascript?",
    answers: {
      A: "Oracle",
      B: "Angelfire",
      C: "AltaVista",
      D: "Netscape",
    },
    correctAnswer: "D",
  },
  {
    question: "What is 'this' keyword in Javascript?",
    answers: {
      A: "this keyword refers to the object from where it was called",
      B: "this keyword refers to the previous function",
      C: "this keyword refers to a number within and object",
      D: "this keyword links a function to the HTML",
    },
    correctAnswer: "A",
  },
  {
    question: "What of the following is NOT a looping structure in Javascript",
    answers: {
      A: "for",
      B: "while",
      C: "do-while",
      D: "else",
    },
    correctAnswer: "D",
  },
  {
    question: "What is the use of Push method in Javascript?" ,
    answers: {
      A: "Used to send the latest save file to your Github",
      B: "Used to merge two or more arrays",
      C: "Used to add or append one or more elements to the end of an Array",
      D: "Used to add a new element to an the HTML file",
    },
    correctAnswer: "C",
  },
];

var secondsLeft = 60;

function gameTimer() {
  var timerStart = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerStart);
      alert("Game Over");
      location.reload();
    }
    else if(submitButton.onclick = function() {
        clearInterval(timerStart);
    });
  }, 1000);
};

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

function buildQuiz() {
  //variable to store the html output
  var output = [];

  //for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    //variable to store the list of possible answers
    var answers = [];
    //and for each availble answer...
    for (letter in currentQuestion.answers) {
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
      `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
       </div>`
    );
  }
);

  //combine output list into one string of HTML and put in on the page
  quizContainer.innerHTML = output.join("");
  console.log(output);
}

function showResults() {
  //gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll(".answers");

  //keep track of user's answers
  var numCorrect = 0;

  //for each question
  myQuestions.forEach((currentQuestion, questionNumber) => {
    //find selected answer
    var answerContainer = answerContainers[questionNumber];
    var selector = `input[name=question${questionNumber}]:checked`;
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    //if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
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


function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;

  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
    scoreButton.style.display = "inline-block";
  } else {
    nextButton.style.length.display = "inline-block";
    submitButton.style.display = "none";
    scoreButton.style.display = "none";
  }
}

buildQuiz();

//Pagination
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

showSlide(currentSlide);

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

//event listeners
sButton.addEventListener("click", gameTimer);
//sButton.addEventListener("click", showSlide);
submitButton.addEventListener("click", showResults);
//submitButton.addEventListener("click", gameTimer);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

