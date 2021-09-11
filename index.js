var readlineSync = require('readline-sync');

var score=0;
function QnA(question, answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer == answer){
    console.log("Yay!, your answer is right")
    score = score+1;
  }
  else{
    console.log("Oops!, your answer is not right")
  }

  console.log("Your Current Score is: ", score);
  console.log("---------------------");
}

var questions =[{
  question:"What's my name? ",
  answer:"somanshu"
},{
  question:"Where do I live? ",
  answer:"delhi"
}, {
  question:"What's my favourite sport? ",
  answer:"cricket"
}, {
  question:"Where do I work? ",
  answer:"capgemini"
}];

for (var i=0; i<questions.length; i++){
  var currentQuestion=questions[i];
  QnA(currentQuestion.question, currentQuestion.answer);
}

if(score == 4){
  console.log("Great! You know me pretty well")
} else if(score ==3){
  console.log("Nice!, You somewhat know about me")
}
else{
  console.log("You need to know me more!")
}