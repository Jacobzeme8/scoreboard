let teamOneScore = 0;
let teamTwoScore = 0;

let teams = []


function addNewTeam(){
  let newTeam = {
    score: 0,
    name: `Team${teams.length +1}`
  }

  teams.push(newTeam)
  drawScore()

}




// drawScore()

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
  let scoreBoardTemplate = ` `
  teams.forEach(team =>{scoreBoardTemplate+=`
  <div class="col-3">
          <p>${team.name}</p>
        </div>
        <div class="col-3">
          <p>Score: ${team.score} </p>
          <button class="btn btn-primary btn-lg p-1" onclick="scoreOne()">Goal!</button>
          <button class="btn btn-success btn-lg p-1" onclick="scoreTwo()">Double Goal!</button>
          <button class="btn btn-danger btn-lg p-1" onclick="penalty()">Penalty</button>
        </div>`})

  scoreBoard.innerHTML = scoreBoardTemplate

}
