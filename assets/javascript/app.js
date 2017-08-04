var firstQuestion = 
{
  'questionNumber': 1,
  'timeRemaining': 24,
  'questionScript': "Which NBA franchise has won the most championships?",
  'potentialAnswers':
     [
    'a. Los Angeles Lakers',
    'b. Boston Celtics',
    'c. Golden State Warriors',
    'd. Philadelphia 76ers'
    ],
    "correctAnswer":'b. Boston Celtics',

  
  'image': "http://content.sportslogos.net/logos/6/213/full/efanypa3xc41fh4f0w2pgy7fp.png",
}
var secondQuestion = 
{
  'questionNumber': 2,
  'timeRemaining': 24,
  'questionScript': "Which NBA team hold the record for most losses in one season?",
  'potentialAnswers':
  [
    'a. Philadelphia 76ers',
    'b. New York Knicks',
    'c. New Jersey Nets',
    'd. Dallas Maveriks'
    ],
    "correctAnswer":'a. Philadelphia 76ers',
    

  'image':"http://www.underconsideration.com/brandnew/archives/76ers_2015_franklin.png",
}
var thirdQuestion = 
  {
  'questionNumber': '3',
  'timeRemaining': 24,
  'questionScript': "Which NBA team has never won a championship?",
  'potentialAnswers':
    [
        'a. Detriot Pistons',
        'b. Houston Rockets',
        'c. Utah Jazz',
        'd. Dallas Maveriks'
    ],
  "correctAnswer":'c. Utah Jazz',
  'image':'http://img.ksl.com/slc/2566/256658/25665883.png',
}
var forthQuestion= 
  {
  'questionNumber': '4',
  'timeRemaining': 24,
  'questionScript': "True or False? There are no NBA teams in Canada.?",
  'potentialAnswers':
    [
        'True',
        'False',
    ],
    "correctAnswer":'False',
    'image':'https://www.thestar.com/content/dam/thestar/sports/raptors/2014/12/19/new_raptors_logo_gets_a_mixed_verdict_from_fans/raptors_logo_original.jpg.size.custom.crop.733x650.jpg',
    }

var fifthQuestion = 
{
  'questionNumber': '5',
  'timeRemaining': 24,
  'questionScript': "Who was drafted ahead of Michael Jordan in 1984?",
  'potentialAnswers':
  [
    'a. Sam Bowie',
    'b. Charles Barkley',
    'c. Alvin Robertson',
    'd. John Stockton'
  ],
  "correctAnswer":'a. Sam Bowie',
    'image':"http://kainews.weebly.com/uploads/4/3/7/6/43764863/684770_orig.jpeg",

  }
var myArray = [firstQuestion, secondQuestion, thirdQuestion,forthQuestion, fifthQuestion];
console.log(myArray.length);
console.log(myArray[2]);
//Set the question to an var that can go anywhere.  Make an function that will adjus the falue of this array. 
var question;
var answer; 
var userInput;
// counter for round Timer  
var counter = 24; 
//global interval ID
var intervalID;
//add my quote to my page every time 
function displayQuestion(){
  console.log(true);
  var startDiv = $('<div>');
    //first adjust the button 
    startDiv.html(function(n){
      return "<h1> "+question.questionScript +"</h1>";
    })
    console.log(question.questionScript);
    startDiv.addClass('col-md-12 marker');
    $('#start').append(startDiv);
    

}
function render(){
  var startDiv = $('#start');
    //first adjust the button 
    startDiv.html(
      "<h1> "+question.questionScript +"</h1>"
    );
  var length = (question.potentialAnswers.length);

  for (var i = 0; i < length ; i ++){
          var btn = $("<button>");
          btn.addClass('col-md-6  temp btn-primary question'+ i);
          btn.attr('data-let', question.potentialAnswers[i]);
          btn.html(question.potentialAnswers[i]);
          $("#start").append(btn);
    }
}// Close Render
//addVideo takes information object Video URL and turns it into a new video 
function changeQuestion(){
  if(myArray.length >0){
    console.log(myArray.length);
    var number = Math.floor(Math.random() * myArray.length);
    question = myArray[number];
    myArray.splice(number, 1);
    console.log(number.length);
    console.log(myArray[number]);
  
    return question;
  }else{
    alert( "The game is over!");
  }
  
}

function displayTimeRunsOut(){
    $('#start').empty();
    displayQuestion(question);
}
function displayImage(){
  var imgUrl = question.image;
  console.log(imgUrl);
  var image = $("<img>");
  image.addClass('smallimage')
  image.attr('src', imgUrl);
  $('.marker').append(image);

}
function displayWrongAnswer(){
  var div = $("<div>");
  div.addClass("col-md-12");
  div.html('<h2>' + userInput + " is incorrect! The answer is " + answer + "! </h2>");
  $('.image').append(div);

  setTimeout(nextQuestion, 5000);

}
function nextQuestion (){
  //call change question to pick a new question
  $('#start').empty();
  changeQuestion();
  //call render to render that question 
  render();

}
$(document).ready(function(){

  $('#startGame').on('click',function(){
    // the the question for this round 
    question = changeQuestion();
    console.log(question);
    displayQuestion(question);
    render(question);
    //Set and display game 
    intervalID = setInterval(function(){
      //reduce counter 
      counter --; 
      //display new counter value 
      $('#timer').html("<h3>" + counter +" </h2");
      // if = user inform user that they have lost and call a function that will pick a new question. 
      if(counter === 0 ){
        console.log('clearing interval', intervalID);
        displayTimeRunsOut();
        clearInterval(intervalID);
      }
    }, 1000)
    console.log('on start', intervalID);

  })//close Click

  $(document).on('click',".temp", function(){

    // Hold empty timer area
    console.log(question.questionScript);
    $('#timer').html('');
    // clear the timer 
    clearInterval(intervalID);
    //Hold the correct answer
    answer = question.correctAnswer;
    console.log(answer + " answer");
    //Hold the users Answer
    userInput = $(this).data("let");
    console.log(userInput);
    // Empty the Start Div 
    $('#start').empty();

    displayQuestion(question);
    // Resent the information in the Div
    /*var newDiv = $('<div>');
    newDiv.addClass("col-md-12 result");
    console.log(question.questionScript);
    newDiv.html(function(n){
      return "<h1> "+question.questionScript +"</h1>";
    });
        console.log(newDiv);
    $('#start').append(newDiv);*/
    // Set image.  not dependent on correct answer 
    // Sets the text informing the player whether they have won or lost 
    console.log(userInput);
    console.log(userInput ===answer);
    console.log(answer);
    if (userInput === answer){
      displayImage();
      console.log("got here");
      var div = $("<div>");
      div.addClass("col-md-12");
      console.log(answer);
      div.html('<h2>'+answer + " is correct! </h2>");
      console.log(div);
      $("#start").append(div); 
      setTimeout(nextQuestion, 8000);

    }else{
      displayImage();
      displayWrongAnswer();
      console.log('wrong')
      }

    //Will empty the Temp
    })// close  

  
})