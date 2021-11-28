

var showTime = document.getElementById('showtime');
var gameOver = document.getElementById('gameover');
var questions = document.getElementById('question');
var scoreboard = document.getElementById('score');
// var choices = Array.from(document.querySelectorAll("#chocies-text"));
// var choice = document.getElementById('choice-text')
var choices = document.getElementById('choices')
var highscoreDiv = document.getElementById('highscorebtn')
var displayOutcome = document.getElementById("response")
var highScoreName = document.querySelector(".highscorename")
var subBtn = document.getElementById("sub-btn")

var startBtn = document.getElementById("button-one")
var hideBtn = document.querySelector(".hide")

var buttons = document.getElementById('buttons')
var btnA = document.getElementById('choice-one')
var btnB = document.getElementById('choice-two')
var btnC = document.getElementById('choice-three')

var currentQuestion = {}
var acceptingAnswer = true
var availableQuestion =[]
var questionsCounter = 0

var timeLeft = 10;
let score = 0


function getHighscores() {
    var getScores = localStorage.getItem("UserScore")
    var displayScore = document.getElementById('scorePage');
    console.log(getScores)
    // displayScore.innerHTML = getScores;
    // saveUserName();

}





const myQuestions = [
    {
        id:"1",
        Question: "Who is Stella?",    
        Answers:"'A:   My Dog'   'B:   My Cat'   'C:   My Daughter' ",
        correctAnswer: "c"
    },
    {
        id:"2",
        Question: "Who is Bison?",
        Answers:"A:   My Cat?   B: My Daughter?   C: My Dog",
        correctAnswer: "c"
    },
    {
        id:"3",
        Question: "Who is Monica?",
        Answers: " A: My Wife?  B: My Dog?  C: My Cat?",
        correctAnswer: "a"
    },
    // {
        //     Question: "2+2=?",
        //     Answers: "2", "3","4",
        // }
];
    
    
    
    var currentQuestionIndex = 0
    displayQuestion= function () {
        //This varible grabs question choices from the array
        var displayChoice = myQuestions[currentQuestionIndex].Answers
        //This varible grabs the questions from the array
        var displayQ = myQuestions[currentQuestionIndex].Question
        questions.innerHTML = displayQ
        choices.innerHTML =displayChoice
    }
    
    function endGame() {
        let displayGameOver = gameOver.innerHTML = "GAME OVER!";
        let questionEndgame = questions.innerHTML = "GAME OVER!";
        let choiceEndgame = choices.innerHTML = "GAME OVER!";
        displayOutcome.innerHTML = ""

        let highscoreBtn = document.createElement("a");
        highscoreBtn.textContent = "Checkout the highscores!!!";
        highscoreBtn.className = "highscorebtn";
        highscoreDiv.appendChild(highscoreBtn);
        highscoreBtn.setAttribute("href","./HighScore.html");


    }
    
    function timer(event) {
        
        var targetEl = event.target.value;
        // console.log(targetEl);
        
        
        if(targetEl === startBtn.value) {
            hideBtn.setAttribute("style", "display: none;");
            countdown
            
            
            var countdown = setInterval(function(){     
                // console.log(timeLeft);
                showTime.innerHTML = timeLeft-- ;
                
                if(timeLeft < 0) { 
                    clearInterval(countdown);
                    endGame();
                    
                    
                };
            },1000)
            
            displayQuestion();
            // displayScore();
            buttons.addEventListener("click", function(event) {
                // console.log(event.target.value);
                var answer = myQuestions[currentQuestionIndex].correctAnswer; 

                let highscoreEl = document.createElement("form") 
                let formEl = document.createElement("input")

                
                
                
                
                
                if(answer === event.target.value){
                    displayOutcome.innerHTML = "CORRECT!"
                    timeLeft= timeLeft + 5
                    score ++
                    console.log(score);
                    
                }else{
                    displayOutcome.innerHTML = "WRONG!"
                    score --
                    timeLeft = timeLeft - 8
                    console.log(score)
                    
                }
                
                if(currentQuestionIndex < myQuestions.length - 1){
                    currentQuestionIndex++
                    displayQuestion();
                    
                    
                }
                else{(timeLeft < 0)
                    clearInterval(countdown);
                    endGame();
                    let finalScore = score * timeLeft
                    console.log(score);
                    console.log(timeLeft)
                    console.log(finalScore);
                    scoreboard.innerHTML = finalScore;

                    subBtn.classList.remove("highscorename")
                    highScoreName.classList.remove("highscorename")

                    subBtn.onclick = function(){
                        subBtn.classList.add("highscorename")
                        highScoreName.classList.add("highscorename")

                        console.log(highScoreName.value)
                        playerName = highScoreName.value
    
                        userInfo = {
                            name: playerName,
                            score: finalScore,
                        
                        };
    
                        localStorage.setItem("userinfo", JSON.stringify(userInfo));
                        console.log(userInfo);
                        localStorage.setItem("UserScore", JSON.stringify(finalScore));
                    }

                    
                    
                    // window.location.href = "HighScore.html";
                    
                    
                    // displayName.innerHTML = userInfo.name

                    



                    // getHighscores();

                    
                    
                }
                
            })
        }         
    }

    
    
    // function getHighscores() {
    //     var getScores = localStorage.getItem("UserScore")
    //     var displayScore = document.getElementById('scorePage');
    //     console.log(getScores)
    //     displayScore.innerHTML = getScores;
    //     saveUserName();

    // }

    // function saveUserName() {
    //     var userName = document.getElementById('inputname').value
    //     console.log(userName);
    // }



    // getHighscores();
    // localStorage.setItem("Questions", JSON.stringify(myQuestions));
    
    // var questionArray = localStorage.getItem("Questions")
    
    document.getElementById("button-one").addEventListener("click", timer);
    
    // document.getElementById("button-one"),addEventListener("click", timer)