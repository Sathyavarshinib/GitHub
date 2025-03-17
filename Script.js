const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Who is known as father of economy?",
        options: ["lear", "Robbins", "Adamsmith", "Marshall"],
        answer: "Adamsmith"
    },
    {
        question: "What is √25?",
        options: ["5", "2", "10", "15"],
        answer: "5"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => selectAnswer(button, option);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(button, selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    
    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }
    
    document.querySelectorAll(".option").forEach(btn => btn.disabled = true);
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = "none";
    } else {
        showResults();
    }
});

function showResults() {
    document.getElementById("quiz").classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
    nextButton.style.display = "none";
}

loadQuestion();
