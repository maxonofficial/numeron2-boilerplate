// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
const play_button = document.getElementById("play-button")
localStorage.setItem('score', 0);
play_button.addEventListener('click',()=>{
    window.open('game.html', '_self');
})