//defining the variables
var word = ["fox"];
var randomWord = word[Math.floor(Math.random() * word.length)];
var s;
var count = 0;
var answer = [];
var answervalue = answer.toString()
var answerjoined = word.join("");

//setting up the new game

function startUp(){
  console.log("starting up")
  for (var i = 0; i < randomWord.length; i++){
    
    answer[i] = "_";
    
  }
  s = answer.join(" ");
  document.getElementById("answer").innerHTML = s;
}

//Guessing the letter

function guessLetter(){
   console.log("guessing a letter")
  var letter = document.getElementById("letter").value;
  
  if (letter.length > 0){
     console.log("letter is longer than 0")
    for (var i = 0; i <randomWord.length; i++){
      if(randomWord[i] === letter){
        answer[i] = letter;
        
      }
      gameover();
    }
    //counting the number of guesses
    
    count++;
    document.getElementById("counter").innerHTML = "Number of guesses: " + count;
    document.getElementById("answer").innerHTML = answer.join(" ");
  }

}

//Winning message once word is guessed - Can't get this to display for some reason//
function gameover(){
console.log("in game is over")
    // var win = document.getElementById(answer.length);
    console.log("answer", answer.toString())
    console.log("word", word.toString())
    console.log("comparing", answer.toString() === word.toString());
    var answerstring = answer.join("");

    if (answerjoined === word){
         console.log("checking if the game is over?")
         document.getElementById("win").innerHTML = "Game Over! You won!";
     }

}



console.log(randomWord);
console.log(answer);

