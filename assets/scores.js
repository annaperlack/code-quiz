var highScoreList = JSON.parse(localStorage.getItem("highScores")) || [];
var ol = document.getElementById ("highscores");

for (var i =0; i < highScoreList.length; i++) {
    var li = document.createElement ("li");
    li.textContent = "player: " + highScoreList[i].initials + "  score: " + highScoreList[i].score;
    ol.append(li);
}

function clearHighscores() {
    localStorage.removeItem('highScores');
    ol.textContent = "";
  }

document.getElementById('clear').onclick = clearHighscores;
