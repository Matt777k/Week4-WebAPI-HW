//start button that begins the game
var sButton = document.querySelector("#sButton");

var secondsLeft = 60;

sButton.eventListener("click") function gameTimer(event)  {
    var timerStart = setInterval(function() {
        secondsLeft--




    },1000)
        
        
        

}

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