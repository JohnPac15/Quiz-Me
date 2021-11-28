var displayName = document.getElementById('usernamepage')
var displayScore = document.getElementById('scorePage');

getUserInfo = JSON.parse(localStorage.getItem("userinfo"));
console.log(getUserInfo);

displayName.innerHTML = getUserInfo.name
displayScore.innerHTML = getUserInfo.score






// var TopScores = JSON.parse(localStorage.getItem("UserScore"));

// var getPlayerName = function() {
//     var name = "";
  
//     while (name === "" || name === null) {
//       name = prompt("Input your name to save your highscore");
//     }
//     console.log(name);
//     return name;
//   };
// function getHighscores() {
//     var getScores = localStorage.getItem("UserScore")
//     var displayScore = document.getElementById('scorePage');
//     console.log(getScores)
//     displayScore.innerHTML = getScores;
//     // saveUserName();

// }


// userInfo = {
//     name: getPlayerName(),
//     score: getHighscores(),
// }

// TopScores.push(userInfo)

// TopScores.sort( (a, b) => {
//   return b.TopScores - a.TopScores;
// })

// console.log(TopScores)



// localStorage.setItem("userinfo", JSON.stringify(userInfo))
// console.log(userInfo)





// getHighscores();
