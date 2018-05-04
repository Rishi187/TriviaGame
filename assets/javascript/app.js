
function submitAnswers(){
    var total = 4;
    var score = 0;

//Get user input
var q1 = document.forms["quizForm"]["q1"].value;
var q2 = document.forms["quizForm"]["q2"].value;
var q3 = document.forms["quizForm"]["q3"].value;
var q4 = document.forms["quizForm"]["q4"].value;

//validation

if(q1 == null || q1 == ''){
    alert("You missed question 1")
    return false;
}
for (i = 1; i <= total; i++){
    if(eval('q' +i) == null || eval('q'+i) == ''){
        alert("You missed question" + i);
        return false;
    }
    
 }
 //set correct answers
 var answers = ["b", "c", "a", "a"];

 //Check answers
 for (i = 1; i <= total; i++){
    if(eval('q' +i)  == answers [i - 1]){
    score++;
    }
 }

 //Display results 
 var results = document.getElementById('results');
 results.innerHTML = '<h3> You scored <span> ' +score+'</span> out of <span>'+total+'</span></h3>'

 alert('You scored ' +score+' out of ' +total);

 return false;
}
  
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

 


        
       