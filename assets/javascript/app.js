$(document).ready(function() {

	var correctAnswer = 0;
	var wrongAnswer = 0;
	var noAnswer = 0;
	var displayQues = 0;
	var trivia = [
		{question: "What is the capital of New York?",
		 choices: ["New York City", "Albany", "Kingston", "Poughkeepsie"],
		 answer: 1
		},
		{question: "What is the capital of California?",
		 choices: ["San Diego", "Los Angeles", "San Francisco", "Sacramento"],
		 answer: 3
		},
		{question: "What is the capital of Florida?",
		 choices: ["Tallahassee", "Miami", "Tampa Bay", "Orlando"],
		 answer: 0
		},
		{question: "What is the captial of Texas",
		 choices: ["Austin", "Dallas", "Houston", "San Antonio"],
		 answer: 0
		}
	];
	var timer = 15;
	var reset = 5;
	var intervalId;
    var userAnswer;

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

    //Next Page 
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

    //Question Page
    $("#question").html("<h3>" + trivia[displayQues].question + "</h3>");
        for (var i = 0; i < 4; i++) {
            var choiceList = $("<div>");
            choiceList.text(trivia[displayQues].choices[i]);
            choiceList.attr({'data-index': i});
            choiceList.addClass("thisChoice");
            $("#choice").append(choiceList);
        }

    $(".thisChoice").on("click", function() {
        userAnswer = $(this).data("index");
        stop();
        
    });


});//document.ready

