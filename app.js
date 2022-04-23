// Players object
let player1 = {
    name: 'Player 1',
    score: 0
}
let player2 = {
    name: 'Player 2',
    score: 0
}

let p1Turn = true

// Score, player and dice

const turnMsg = document.querySelector('#message')
const p1Score = document.querySelector('#player1Score')
const p2Score = document.querySelector('#player2Score')
const p1Dice = document.querySelector('#player1Dice')
const p2Dice = document.querySelector('#player2Dice')

// Buttons

const rollBtn = document.querySelector('#rollBtn')
const resetBtn = document.querySelector('#resetBtn')
const startBtn = document.querySelector('#startBtn')

// Dice Game ⬇️

turnMsg.textContent = 'Want to play ? 🎮'


startBtn.addEventListener('click', function(){
        startBtn.style.display = 'none'
        rollBtn.style.display = 'inline'
        turnMsg.textContent = `It is ${player1.name} turn`
})


rollBtn.addEventListener('click', function(){
    const randomNum = Math.floor(Math.random()*6)+1
    console.log(randomNum)
    if (p1Turn){
        p1Dice.classList.remove('active')
        p2Dice.classList.add('active')
        p1Dice.textContent = randomNum
        p1Score.textContent = player1.score += randomNum
        p1Turn = false
        turnMsg.textContent = `It is ${player2.name} turn`
    } else{
        p2Dice.classList.remove('active')
        p1Dice.classList.add('active')
        p2Dice.textContent = randomNum
        p2Score.textContent = player2.score += randomNum
        p1Turn = true
        turnMsg.textContent = `It is ${player1.name} turn`
    }
    if(player1.score >= 20 || player2.score >= 20){
        rollBtn.style.display = ''
        resetBtn.style.display = 'inline'
    }
})

resetBtn.addEventListener('click', function(){
    player1.score = 0
    player2.score = 0
    p1Dice.textContent = '-'
    p2Dice.textContent = '-'
    p1Score.textContent = player1.score
    p2Score.textContent = player2.score
    resetBtn.style.display = ''
    startBtn.style.display = ''
    turnMsg.textContent = 'Want to play ? 🎮'
})