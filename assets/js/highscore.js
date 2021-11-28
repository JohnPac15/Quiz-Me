var displayName = document.getElementById('usernamepage')
var displayScore = document.getElementById('scorePage');
var highBtn = document.getElementById('high-btn')

getUserInfo = JSON.parse(localStorage.getItem("userinfo")) || [];
console.log(getUserInfo);

displayName.innerHTML = getUserInfo.name
displayScore.innerHTML = getUserInfo.score

leaderBoard = []
leaderBoard.push()
localStorage.setItem(getUserInfo, stringify(leaderBoard))
// UserScore.push(leaderBoard);

// window.localStorage.setItem("UserScore", JSON.stringify(UserScore))


localStorage.setItem("leaderboard", JSON.stringify(getUserInfo));