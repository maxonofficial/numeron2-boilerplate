// Iteration 8: Making scoreboard functional
const scoreboard = document.getElementById('score-board')
let score = localStorage.getItem('score');
if (score == 0)
    score = 1
scoreboard.innerText = score - 1;
const play_button = document.getElementById("play-again-button")
play_button.addEventListener('click', () => {
    window.open('index.html', '_self');
})
