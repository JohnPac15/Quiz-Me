var displayName = document.getElementById('usernamepage')
var displayScore = document.getElementById('scorePage');
var highBtn = document.getElementById('high-btn')

getUserInfo = JSON.parse(localStorage.getItem("userinfo"));

var highScoreList = getUserInfo.sort((a, b) => {
  return b.score - a.score;
  
})


var grabItems = highScoreList[0].name + "  ,  " + " HighScore = " + highScoreList[0].score;

console.log(highScoreList)
console.log(getUserInfo)

for (let i = 0; i < 10; i++){
  let outPut = highScoreList[i].name + "  ,  " + " Score = " + highScoreList[i].score
  let liEl = document.createElement("li")
  displayScore.appendChild(liEl)
  liEl.textContent = outPut
  liEl.setAttribute("style", "padding: 1%; margin: 1%; width: 100%; ");
  console.log(outPut)
  
}

displayName.innerHTML = grabItems;
let stringlist = JSON.stringify(highScoreList.name, highScoreList.score );




// let Display = function DisplayTheArray(){
//   let displayAll= getUserInfo[arrayIndex]
//   displayScore.innerHTML = displayAll.name + " , " + displayAll.score
//   if(arrayIndex < 5){
//     arrayIndex++
//     DisplayTheArray();
//     console.log(displayAll.name + " , " + displayAll.score);
//   }
// }
// console.log(stringlist);

// Display()








// leaderBoard = []
// leaderBoard.push()
// localStorage.setItem(getUserInfo, stringify(leaderBoard))
// UserScore.push(leaderBoard);

// window.localStorage.setItem("UserScore", JSON.stringify(UserScore))


// localStorage.setItem("leaderboard", JSON.stringify(getUserInfo));

// let arr = [1,2,3];

// arr.sort(function(a, b){
//   return a - b;
// })

// arr.sort((a, b) => {
//   return a - b;
// });