var questions = [
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "JavaScript", "Python"],
    correct: 2
  },
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Logic", "Home Tool Markup Language"],
    correct: 0
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: ["#", "//", "/* */", "--"],
    correct: 1
  },
  {
    question: "Which CSS property changes the text color?",
    answers: ["font-color", "text-color", "color", "foreground"],
    correct: 2
  },
  {
    question: "What does CSS stand for?",
    answers: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style System", "Coded Style Syntax"],
    correct: 1
  },
  {
    question: "Which HTML tag is used to link an external JavaScript file?",
    answers: ["<js>", "<javascript>", "<link>", "<script>"],
    correct: 3
  },
  {
    question: "Which method adds an element to the end of an array in JavaScript?",
    answers: ["push()", "pop()", "shift()", "add()"],
    correct: 0
  },
  {
    question: "What is the correct way to declare a variable in modern JavaScript?",
    answers: ["variable x = 5", "v x = 5", "let x = 5", "int x = 5"],
    correct: 2
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: ["class", "font", "styles", "style"],
    correct: 3
  },
  {
    question: "What does the 'typeof' operator do in JavaScript?",
    answers: ["Converts a value to a number", "Returns the data type of a variable", "Checks if two values are equal", "Deletes a variable"],
    correct: 1
  }
];

var currentQuestion = 0;
var score = 0;
var answered = false;

function startGame() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("question-screen").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  var q = questions[currentQuestion];

  document.getElementById("question-number").textContent = "Question " + (currentQuestion + 1) + " of " + questions.length;
  document.getElementById("score-display").textContent = "Score: " + score;
  document.getElementById("question-text").textContent = q.question;
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";

  var answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  for (var i = 0; i < q.answers.length; i++) {
    var btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = q.answers[i];
    btn.setAttribute("onclick", "selectAnswer(" + i + ")");
    answersDiv.appendChild(btn);
  }
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  var q = questions[currentQuestion];
  var buttons = document.querySelectorAll(".answer-btn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    if (i === q.correct) {
      buttons[i].classList.add("correct");
    }
  }

  if (index === q.correct) {
    score++;
    document.getElementById("feedback").textContent = "✅ Correct!";
  } else {
    buttons[index].classList.add("wrong");
    document.getElementById("feedback").textContent = "❌ Wrong! Correct answer: " + q.answers[q.correct];
  }

  document.getElementById("score-display").textContent = "Score: " + score;
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("result-score").textContent = "You got " + score + " out of " + questions.length + " correct!";
  }
}

function restartGame() {
  document.getElementById("result-screen").style.display = "none";
  startGame();
}
