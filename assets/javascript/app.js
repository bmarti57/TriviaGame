$(document).ready(function() {

	var correctAnswer = 0;
	var wrongAnswer = 0;
	var noAnswer = 0;
	var userAnswer = [];
	var question = ["What is the capital of New York?", "What is the capital of California?", "What is the capital of Florida?", "What is the capital of Texas?"];
	var answerKey = ["Albany", "Sacramento", "Tallahassee", "Austin"];
	var timer = 30;
	var reset = 5;
	var intervalId;


	//Start Timer
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      timer--;
      $("#clock").html("<h2>Time Remaining: " + timer + "</h2>");
      if (timer === 0) {
        stop();
        $("#question").html("Time's Up!");
        //wrongAnswer();
      }
    }

    function nextPage() {
    	intervalId = setInterval(countDown, 1000);
    }

    function countDown() {
    	reset--;
    	$("#clock").html("<h2>Next Question in " + reset + " seconds</p>");
    	if (reset === 0) {
    		stop();
    	}
    }

	//Stop Timer
    function stop() {
		clearInterval(intervalId);
    }

    function rightWrong() {
    	if (userAnswer === answerKey[i]) {
    		correctAnswer++;
    		userAnswer = [];

    	}
    }



});//document.ready

