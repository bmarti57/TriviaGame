$(document).ready(function() {

	var correctAnswer = 0;
	var wrongAnswer = 0;
	var noAnswer = 0;
	var userAnswer = [];
	var question = ["What is the capital of New York?", "What is the capital of California?", "What is the capital of Florida?", "What is the capital of Texas?"];
	var answerKey = ["Albany", "Sacramento", "Tallahassee", "Austin"];
	var timer = 30;
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
      }
    }

	//Stop Timer
    function stop() {
		clearInterval(intervalId);
    }

});//document.ready

