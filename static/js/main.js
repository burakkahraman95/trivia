var correctCount = 0;
var incorrectCount = 0;
var lives = 10;

function correct() {
    correctCount++;
    lives--;

    var btn = event.target;
    var questionDiv = btn.closest('.question');
    questionDiv.classList.add('question--correct');
    disableButtons(questionDiv);

    document.querySelector('#correct_count').innerHTML = correctCount;
    document.querySelector('#lives_count').innerHTML = lives;
    document.querySelector('#message').innerHTML = 'Correct! 🎉';

    if (correctCount === 6) {
        document.querySelector('#all_questions').innerHTML = '<h1 class="gameover">YOU WIN!</h1>';
    }
}

function incorrect() {
    incorrectCount++;
    lives--;

    var btn = event.target;
    var questionDiv = btn.closest('.question');
    questionDiv.classList.add('question--wrong');
    disableButtons(questionDiv);

    document.querySelector('#incorrect_count').innerHTML = incorrectCount;
    document.querySelector('#lives_count').innerHTML = lives;
    document.querySelector('#message').innerHTML = 'Wrong! ❌';

    if (lives === 0) {
        document.querySelector('#all_questions').innerHTML = '<h1 class="gameover">GAME OVER!</h1>';
    }
}

function disableButtons(questionDiv) {
    var buttons = questionDiv.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}
