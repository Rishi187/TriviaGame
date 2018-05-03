
alert(1)
  
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var twoMinutes = 60 * 2,
        display = $('#time');
    startTimer(twoMinutes, display);
});

$(document).ready(function () {
    var allQuestions = [
        {
            question: "What is Darth Vader real name?", 
            choices: ["Bob", "Anakin", "Obi-one"],
            correctAnswer: 2,
            photo: "assets/images/Anakin.jpg"
         },
         {
             question: "Who is Luke Skywalkers father?", 
            choices: ["Dave", "Jabba", "Anakin"],
            correctAnswer: 3,
            photo: "assets/images/darthvader.jpg"
         }, 
         {
             question: "What is the name of Han Solo ship?", 
            choices: ["Millenium Falcon", "Enterprise", "Podracer"],
            correctAnswer: 1,
            photo: "assets/images/millennium.jpg"
        }, 
        {
            question: "Who is Darth Sidious?", 
            choices: ["Palpatine", "Maul", "Yoda"],
            correctAnswer: 1,
            photo: "assets/images/Emperor.png"
        }]
    }
    
        
        // var currentquestion = 0;
        // var correctAnswers = 0;
function handleClick()
  {         
var amountCorrect = 0;          
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    }
  }
 }                   
    alert("Correct Responses: " + amountCorrect);
  }
        
        
       