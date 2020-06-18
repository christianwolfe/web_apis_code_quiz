var questions = [
    {
        title: "Example Question 1:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 3",
    },
    {
        title: "Example Question 2:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 2",
    },
    {
        title: "Example Question 3:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 4",
    },
    {
        title: "Example Question 4:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 1",
    },
];


//hook elements from the page (i.e. var exampleEl = document.querySelecter(".elementClass"))
//hook container element

var containerEl = document.querySelector(".container");
//timer element
var timerEl = document.querySelector(".timer");

var startText = document.createElement("h1");
//create button to start
var startBtn = document.createElement("button");
//create p page to display question
var questionText = document.createElement("p");

//declare global variables
//variable to store timer number
var timer = 75;
//variable to store current index (which question you're currently on)
var index = 0;

//variable to store current index

// FUNCTIONS

//function that loads content when page first loads
function openPage() {
    //add text to title tag
    startText.textContent = "Welcome to the Quiz";
    //add text to button

    startBtn.textContent = "Start Quiz";
    //append h1 element startText
    containerEl.appendChild(startText);
    //appen button text startBtn    
    containerEl.appendChild(startBtn);
}

function showTimer() {

    timer.textContent = timer;

    //create seInterval and store it to the variable
    var interval = setInterval(function () {
        // decrease timer by 1
        timer--;
        // display timer to screen
        timer.textContent.timer;
        // if timer goes down to 0, clear interval
        if (timer === 0) {
            clearInterval(interval);
        }
    }, 1000)

}
//function that shows the question and starts the timer

function startQuiz(event) {
    event.preventDefault();
    startTimer();
    askQuestion();

}
//funciton that handles the timer
function startTimer() {
    //show timer
    timerEl.textContent = timer;
}
//funciton that handles and displays the next question
function askQuestion() {
    //stores current question from array into a scoped variable
    var currentQuestion = questions[index];
    //field to populate question
    containerEl.textContent = "";
    //retrieve current question title and print to questionText ("p")
    questionText.textContent = currentQuestion.title;
    //loop over the question array
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var questionBtn = document.createElement("button");
        questionBtn.textContent = questions[index].choices[i];
        d iv.append(questionBtn);
    }
}


//function to check the answer and display the following question

//event listeners 
startBtn.addEventListener("click", startQuiz);

document.addEventListener("click", verifyAnswer)