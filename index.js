const quizData = [
  {
    question: "What is your name?",
    a: "Ali",
    b: "Abubakar",
    c: "Ahmad",
    d: "Ans",
    correct: "c",
  },
  {
    question: "How old are you?",
    a: "10",
    b: "17",
    c: "20",
    d: "22",
    correct: "d",
  },
  {
    question: "What is the average of first five multiples of 12?",
    a: "36",
    b: "38",
    c: "40",
    d: "42",
    correct: "a",
  },
  {
    question:
      "What is the difference in the place value of 5 in the numeral 754853?",
    a: "49500",
    b: "49950",
    c: "45000",
    d: "49940",
    correct: "c",
  },
  {
    question:
      "What is the compound interest on Rs. 2500 for 2 years at rate of interest 4% per annum?",
    a: "Rs. 180",
    b: "Rs. 204",
    c: "Rs. 210",
    d: "Rs. 220",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerE1s.forEach((answerE1) => {
    if (answerE1.checked) {
      answer = answerE1.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerE1s.forEach((answerE1) => {
    answerE1.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].
        correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h3>You answered correctly at ${score}/${quizData.length} questions.</h3>
      <button onclick="location.reload()">Reload</button>`
      
    }
  }
});
