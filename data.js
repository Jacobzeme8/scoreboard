

let teams = []
let team = {}
let teamNumber;


function addNewTeam(){
  let newTeam = {
    score: 0,
    teamNumber: teams.length +1,
    name: `Team ${teams.length + 1}`
  }

  let team = newTeam

  teams.push(team)
  drawScore()

}




// drawScore()

function scoreOne(teamNumber) {
  teams[teamNumber-1].team.score++
  drawScore()
}

function scoreTwo() {

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
          <button class="btn btn-primary btn-lg p-1" onclick="scoreOne("${teamNumber}")">Goal!</button>
          <button class="btn btn-success btn-lg p-1" onclick="scoreTwo()">Double Goal!</button>
          <button class="btn btn-danger btn-lg p-1" onclick="penalty()">Penalty</button>
        </div>`})

  scoreBoard.innerHTML = scoreBoardTemplate

}
