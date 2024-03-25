// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const number1Tag = document.getElementById('number1');
const number2Tag = document.getElementById('number2');
var number1, number2;
function generateNumber() {
    number1 = Math.floor(Math.random() * 100) + 1;
    number1Tag.innerText = number1;
    number2 = Math.floor(Math.random() * 100) + 1;
    number2Tag.innerText = number2;
    operation = Math.floor(Math.random() * 5) + 1;
    switch (operation) {
        case 1:
            result = number1 + number2;
            operator = 'plus';
            break;
        case 2:
            result = number1 - number2;
            operator = 'minus';
            break;
        case 3:
            result = number1 * number2;
            operator = 'mul';
            break;
        case 4:
            result = number1 / number2;
            operator = 'divide';
            break;
        case 5:
            result = number1 % number2;
            operator = 'modulus';
            break;
        default:
            console.log(operation)
    }
    number3Tag.innerText = Math.floor(result);
}

// Iteration 3: Creating variables required to make the game functional
var operation, operator;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var result;
const number3Tag = document.getElementById('number3');

// Iteration 5: Creating a randomise function to make the game functional
generateNumber();

// Iteration 6: Making the Operators (button) functional
let score = 0;
localStorage.setItem('score', score);
const buttons = document.getElementById("buttons");
buttons.addEventListener('click', function (event) {
    let num1 = parseInt(number1.innerText);
    let num2 = parseInt(number2.innerText);
    if (event.target.id === 'plus') {
        if (operator != event.target.id) {
            window.open('gameover.html', '_self');
        }
        generateNumber();
        remainingTime = 20;
        score++;
    }
    else if (event.target.id === 'minus') {
        if (operator != event.target.id) {
            window.open('gameover.html', '_self');
        }
        generateNumber();
        remainingTime = 20;
        score++;
    }
    else if (event.target.id === 'mul') {
        if (operator != event.target.id) {
            window.open('gameover.html', '_self');
        }
        generateNumber();
        remainingTime = 20;
        score++;
    }
    else if (event.target.id === 'divide') {
        if (operator != event.target.id) {
            window.open('gameover.html', '_self');
        }
        generateNumber();
        remainingTime = 20;
        score++;
    }
    else if (event.target.id === 'modulus') {
        if (operator != event.target.id) {
            window.open('gameover.html', '_self');
        }
        generateNumber();
        remainingTime = 20;
        score++;
    }
    else {
        localStorage.setItem('score', score);
        window.open('gameover.html', '_self');
    }
    localStorage.setItem('score', score);

});

// Iteration 7: Making Timer functional
const timer = document.getElementById('timer');
var remainingTime = 20;
function updateTimer() {
    timer.innerText = remainingTime;
    remainingTime--;
    if (remainingTime === 0) {
        clearInterval(timerInterval); // Stop the timer
        window.location.href = 'gameover.html';
    }
}

let timerInterval = setInterval(updateTimer, 1000);
