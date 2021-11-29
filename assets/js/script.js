


var showTime = document.getElementById('showtime');
var gameOver = document.getElementById('gameover');
var questions = document.getElementById('question');
var scoreboard = document.getElementById('score');
// var choices = Array.from(document.querySelectorAll("#chocies-text"));
// var choice = document.getElementById('choice-text')
var choices = document.getElementById('choices')
var ABC = document.getElementById('ABC')
var A = document.getElementById('A')
var B = document.getElementById('B')
var C = document.getElementById('C')

var highscoreDiv = document.getElementById('highscorebtn')
var displayOutcome = document.getElementById("response")
var highScoreName = document.querySelector(".highscorename")
var subBtn = document.getElementById("sub-btn")
var aTag = document.getElementById("aTag")

var startBtn = document.getElementById("button-one")
var hideBtn = document.querySelector(".hide")

var ChoiceBox = document.querySelector(".hideBullets")

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

myArray = JSON.parse(localStorage.getItem("userinfo"));
// var newArray = JSON.parse(localStorage.getItem("userinfo"));



function getHighscores() {
    var getScores = localStorage.getItem("UserScore")
    var displayScore = document.getElementById('scorePage');
    console.log(getScores)
    // displayScore.innerHTML = getScores;
    // saveUserName();

}





const myQuestions = [
   
    {
        Question: "Who is Monica? ",
        Answers: {
            A: "A = My Wife? ",
            B: " B = My Cat? ",
            C: " C = My Dog? "
        },
        correctAnswer: "a"
    },
    {
        Question: "2 + 2 = ?",
        Answers: {
            A: "A = 3",
            B: "B = 4",
            C:"C = -2"
        },
        correctAnswer: "b"
    },
    {
        Question: "What days are mandatory class ?",
        Answers: {
            A: " A = Sunday and Wednsday",
            B: "B = Friday and Saturday",
            C:"C = Tuesday and Thursday"
        },
        correctAnswer: "c"
    },
    {
        Question: "What team dose Max Verstappen drive for ?",
        Answers: {
            A: "A = Mercedes",
            B: "B = Redbull",
            C:"C = Alpine"
        },
        correctAnswer: "b"
    },
    {
        Question: "9 * 9 = ?",
        Answers: {
            A: "A = 18",
            B: "B = 36",
            C:"C = 81"
        },
        correctAnswer: "c"
    },
    {
        Question: "How many seconds did the Quiz timer give you at the start ?",
        Answers: {
            A: "A = 11 Seconds",
            B: "B = 10 Seconds",
            C:"C = 15 Seconds"
        },
        correctAnswer: "b"
    }

];
 console.log(myQuestions[0].Answers.A)
    currentQuestionIndex = 0
    questionDisplay = function() {
        arrayQuestion = myQuestions[currentQuestionIndex].Question
        questionA = myQuestions[currentQuestionIndex].Answers.A
        questionB = myQuestions[currentQuestionIndex].Answers.B
        questionC = myQuestions[currentQuestionIndex].Answers.C

        

        questions.innerHTML = arrayQuestion
        A.innerHTML = questionA
        B.innerHTML = questionB
        C.innerHTML = questionC



        console.log(myQuestions[currentQuestionIndex].Question, myQuestions[currentQuestionIndex].Answers.A, myQuestions[currentQuestionIndex].Answers.B, myQuestions[currentQuestionIndex].Answers.C)
    
}
    function endGame() {
        gameOver.innerHTML = "GAME OVER!";
        questions.innerHTML = "Enter your name to save your high score";
        choices.innerHTML = "GAME O";
        A.innerHTML = choices.innerHTML = "";
        B.innerHTML = choices.innerHTML = "";
        C.innerHTML = choices.innerHTML = "";
        
        displayOutcome.innerHTML = ""

        // let highscoreBtn = document.createElement("a");
        // highscoreBtn.textContent = "Checkout the highscores!!!";
        // highscoreBtn.className = "highscorebtn";
        // highscoreDiv.appendChild(highscoreBtn);
        // highscoreBtn.setAttribute("href","./HighScore.html");


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
            
            questionDisplay();
            
            buttons.addEventListener("click", function(event) {
                // console.log(event.target.value);
                var answer = myQuestions[currentQuestionIndex].correctAnswer; 
                
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
                    questionDisplay();
                    
                    
                }
                else{(timeLeft < 0)
                    clearInterval(countdown);
                    endGame();
                    let finalScore = score * timeLeft;
                    console.log(score);
                    console.log(timeLeft)
                    console.log(finalScore);
                    scoreboard.innerHTML = finalScore;

                    
                    subBtn.classList.remove("highscorename")
                    highScoreName.classList.remove("highscorename")
                    subBtn.onclick = function(){
                        aTag.classList.remove("highscorename")
                        
                        subBtn.classList.add("highscorename")
                        highScoreName.classList.add("highscorename")

                        console.log(highScoreName.value)
                        playerName = highScoreName.value
                        
                        var userInfo = 
                            {
                            name: playerName,
                            score: finalScore,
                        };
                        // console.log(myArray.length, "Yo");
                        // if local storage empty, then save to local storage
                        if(myArray == null) {
                            console.log(myArray)
                            myArray = []
                            myArray.push(userInfo)
                            localStorage.setItem("userinfo", JSON.stringify(myArray || []))
                            window.location.href = "HighScore.html";
                        }
                            
                        // else add to local storage 
                        else {
                            myArray.push(userInfo)
                            localStorage.setItem("userinfo", JSON.stringify(myArray));
                            // window.location.href = "HighScore.html";
                            
                        }

                        localStorage.setItem("UserScore", JSON.stringify(finalScore || 0));
                        //  console.log(myArray);
                    }

                    
                    
                }
                
            })
        }         
    }
document.getElementById("button-one").addEventListener("click", timer);
    
    