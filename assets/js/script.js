var startBtn = document.querySelector("#start-btn");
var startScreen = document.querySelector("#start-screen");
var gamePlayScreen = document.querySelector("#game-play");

var questionAnswersIndex = 0;
var questionAnswers = [
    // fill in these fields, make sure the correct matches one of your choices elements
    {
        question: "What does DOM stand for?",
        choices: ["Desktop Oxygen Man", "Document Object Model", "Dances On Marbles", "None of the Above"],
        correct: "Document Oblect Model"
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: ""
    },
    {
        question: "",
        choices: ["", "", "", ""],
        correct: ""
    },
]


function startQuiz() {


    startScreen.setAttribute("class", "hide")
    // needs to hide the startScreen (add the class hide to this element)
    gamePlayScreen.removeAttribute("class")
    // needs to show the gamePlayScreen (remove the class hide from this element)

    // start the timer

    // display the next question
    // nextQuestion()
}

function nextQuestion() {
    // iterate through you question and answer combos

    // this is how you will select the first question ---- questionAnswers[questionAnswersIndex].question

    // set the question as the text content of your #question-title

    // each time the user answers a question, you want to questionAnswersIndex++;

    // for loop to iterate through questionAnswers[questionAnswersIndex].choices to create a button for each answer choice and append to the #answer-choices div
}

userClick() {
    // handle when the user selects an answer during the quiz

    //compare the event.target to the correct answer at that same questionIndex and give the user visual feedback if they are right or wrong

    // want to subtract 10 seconds from the timer if the answer is wrong

    // if the time is at 0 or you have asked all of your questions - then game over
    // if there are still questions then play nextQuestion
}

startBtn.addEventListener("click",startQuiz);