let teamOneScore = 0;
let teamTwoScore = 0;


drawScore()

function scoreOne() {
  teamOneScore++
  drawScore()
}

function scoreTwo() {
  teamTwoScore++
  drawScore()
}



function drawScore() {
  let scoreBoard = document.getElementById("ScoreBoard")
  let scoreBoardTemplate = `<div class="col-6">
  <p>Score: ${teamOneScore} </p>
  <button class="btn btn-primary btn-lg" onclick="scoreOne()">Goal!</button>
</div>
<div class="col-6">
  <p>Score: ${teamTwoScore}</p> 
  <button class="btn btn-primary btn-lg" onclick="scoreTwo()">Goal!</button>
</div>`
  scoreBoard.innerHTML = scoreBoardTemplate

}
