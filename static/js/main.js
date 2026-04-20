var correctCount = 0;
var incorrectCount = 0;
var lives = 10;

function correct() {
    correctCount++;
    lives--;
    document.querySelector('#correct_count').innerHTML = correctCount;
    document.querySelector('#lives_count').innerHTML = lives;
    document.querySelector('#message').innerHTML = 'Correct, good job!';
    if (correctCount === 5) {
        document.querySelector('#all_questions').innerHTML = '<h1 class="gameover">YOU WIN!</h1>';
    }
}

function incorrect() {
    incorrectCount++;
    lives--;
    document.querySelector('#incorrect_count').innerHTML = incorrectCount;
    document.querySelector('#lives_count').innerHTML = lives;
    document.querySelector('#message').innerHTML = 'Incorrect! You lose a life.';
    if (lives === 0) {
        document.querySelector('#all_questions').innerHTML = '<h1 class="gameover">GAME OVER!</h1>';
    }
}