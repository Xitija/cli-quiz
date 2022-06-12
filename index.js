var readlineSync = require("readline-sync");

var score = 0;

function log(str){
  console.log(str);
}

var questions = [{
  question:"1. What is the capital of India? ",
  answer:"Delhi"
  },
  {
    question:"2. What is the national animal of India? ",
    answer:"Tiger"
  },
  {
    question:"3. What is the national flower of India? ",
    answer:"Lotus"
  },
  {
    question: "4. Which city is known as the ‘Silicon Valley of India’? ",
    answer: "Bengaluru"
  },
  {
    question: "5. By the banks of which Indian river is the tallest statue in the world located? ",
    answer: "Narmada"
  },
  {
    question:"6. What is the national bird of India? ",
    answer:"Peacock"
  },]

  var userName = readlineSync.question("Enter your name: ");
  log("Hello "+ userName +" Welcome to Do you know India?!");
  
function play(que,ans){
  var userAnswer = readlineSync.question(que);
  if (userAnswer.toLowerCase() === ans.toLowerCase()){
    score++;
    log("You are right!!");
  }
  else{
    score--;
    log("You are wrong!!");
    log("Correct Answer is : "+ ans);
  }
  log("Your Current Score: "+score);
  log("-------------------");
}

function showQuestions(){
  for(var i=0;i < questions.length;i++){
    play(questions[i].question,questions[i].answer)
  }
}

var highScores = [
  {name : "Kshitija" , score : 6},
  {name : "Aparna", score : 6}
]

function showHighScores(){
  log("\n HighScore Chart \n Name\t\tScore");
  for(var i = 0; i < highScores.length ; i++)
    log(highScores[i].name + "\t\t" + highScores[i].score)

  log("\n"+userName + " Your Score is : " + score);
}

function primeNumber(){
  var factors = [];
  var num = readlineSync.question("Enter any positive number: ");
  if(num <= 0){
    log("Invalid Number!!");
    primeNumber();
  }
  else{
    if(+num === 1){
      log("The number one is neither a prime nor a composite. ");
    }
    else{
      for(var i=2; i<num ; i++){
        if(num%i == 0){
          factors.push(i);
        }
      }
      if(factors.length == 0){
        log("You entered a Prime number");
      }
      else{
        log("You entered a composite number factors are : "+ factors);
      }
    }
  }
}

showQuestions();
showHighScores();
primeNumber();