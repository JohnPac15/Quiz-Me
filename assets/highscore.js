function getHighscores() {
    var getScores = localStorage.getItem("UserScore")
    var displayScore = document.getElementById('scorePage');
    console.log(getScores)
    displayScore.innerHTML = getScores;
    // saveUserName();

}

var getPlayerName = function() {
    var name = "";
  
    while (name === "" || name === null) {
      name = prompt("Input your name to save your highscore");
    }
    console.log(name);
    return name;
  };

userInfo = {
    name: getPlayerName(),
    score: getHighscores(),
    
}

var displayName = document.getElementById('usernamepage')


localStorage.setItem("userinfo", JSON.stringify(userInfo))
console.log(userInfo)

displayName.innerHTML = userInfo.name



// getHighscores();
