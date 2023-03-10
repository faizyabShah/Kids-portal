



var score = 0;
var answer;
var count = 1;
var questions = [];

var statement = document.getElementById("quiz-statement-h2");
var options = document.getElementsByClassName("options");
var option = document.getElementsByClassName("option");

function updateQuiz() {
    var index = uniqueRandom();
    questions.push(index);
    statement.innerHTML = facts[index].question;
    for (let i = 0; i < options.length; i++) {
        console.log(options);
        console.log(options[i].firstChild.innerHTMl)
        options[i].innerHTML = facts[index].options[i];
        answer = facts[index].correct;
      }
}

function uniqueRandom() {
    var random = Math.floor(Math.random() * 20);
    if (questions.includes(random)) {
        uniqueRandom();
        return;
    }
    return random;
}


document.addEventListener('DOMContentLoaded', function() {
    updateQuiz();
  });

  for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click", function() {
      if (options[i].innerHTML == answer) {
        score++;
        count++;
        option[i].classList.add("correct");
        setTimeout(function() {
            if (count > 5 ){
                showScore();
            } else {
                option[i].classList.remove("correct");
                updateQuiz();
            }
          }, 1000);
       
        
      } else {
        option[i].classList.add("incorrect");
        count++;
        
        setTimeout(function() {
            if (count > 5 ){
                showScore();
            } else {
                option[i].classList.remove("incorrect");
                updateQuiz();
            }
        }, 1000);
        
      }
    });
  }


  function showScore() {
    let container = document.getElementById("quiz-container");
    container.innerHTML = "";
    let newDiv = document.createElement("div");
    newDiv.classList.add("final-message");
    let displayScore = score.toString() + "/5";
    if (score >= 4) {
        let congratts = document.createElement("div");
        congratts.classList.add("animate-charcter");
        congratts.innerHTML = "<h3>Congratulations!</h3><br />";
        newDiv.append(congratts);
        newDiv.innerHTML += "You got " + displayScore;
        container.append(newDiv);
    } else {
        newDiv.innerHTML = "You did well. <a href='facts.html'>Learn more!</a>";
        container.append(newDiv);
    }
  }