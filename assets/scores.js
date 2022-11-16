var highScoreList = JSON.parse(localStorage.getItem("highScores")) || [];

for (var i =0; i < highScoreList.length; i++) {
    var ol = document.getElementById ("highscores");
    var li = document.createElement ("li");
    li.textContent = "player: " + highScoreList[i].initials + "  score: " + highScoreList[i].score;
    ol.append(li);
}