var startButton = document.querySelector('#start-button');
var description = document.querySelector('#main-screen-description');
var timerDisplay = document.querySelector('#timer');
var resultDisplay = document.querySelector('#result');
var title = document.querySelector('#title');
var input = document.querySelector('#input-id');

var buttons = document.querySelectorAll('.buttons');

var answer1 = document.querySelector('#answer-1');
var answer2 = document.querySelector('#answer-2');
var answer3 = document.querySelector('#answer-3');
var answer4 = document.querySelector('#answer-4');

var secondsLeft = 60;

answer1.style.display = 'none';
answer2.style.display = 'none';
answer3.style.display = 'none';
answer4.style.display = 'none';

var questionCount = -1;
var timerInterval;

// An array of objects for each question for the quiz
var arrayOfQuestions = [
    {
        'question': 'What character is typically placed at the end of each segment of javascript code?',
        'firstAnswer': '1: /',
        'secondAnswer': '2: ,',
        'thirdAnswer': '3: ;',
        'fourthAnswer': '4: :',
        'correctAnswer': 3
    },

    {
        'question': 'Commonly used data types DO NOT include: ',
        'firstAnswer': '1: boolean',
        'secondAnswer': '2: length',
        'thirdAnswer': '3: string',
        'fourthAnswer': '4: integer',
        'correctAnswer': 2
    },

    {
        'question': 'Which JavaScript variable is using standard variable name syntax?',
        'firstAnswer': '1: colorArray',
        'secondAnswer': '2: 3rdperson',
        'thirdAnswer': '3: GreenTree',
        'fourthAnswer': '4: tropicaLbeach',
        'correctAnswer': 1
    },

    {
        'question': 'If you would like to display a message in the webpage console, what method would you use?',
        'firstAnswer': '1: show.text()',
        'secondAnswer': '2: print()',
        'thirdAnswer': '3: display()',
        'fourthAnswer': '4: console.log()',
        'correctAnswer': 4
    },

    {
        'question': 'If I wanted to apply changes to every value within an array, what would be the best way to do so?',
        'firstAnswer': '1: Use a for loop',
        'secondAnswer': '2: Apply the change to each value individually, line by line',
        'thirdAnswer': '3: Use an if/else statement',
        'fourthAnswer': '4: Array.apply()',
        'correctAnswer': 1
    },

    {
        'question': 'What is the third primary language used in web developement other than html and javascript?',
        'firstAnswer': '1: C#',
        'secondAnswer': '2: css',
        'thirdAnswer': '3: jquery',
        'fourthAnswer': '4: react',
        'correctAnswer': 2
    }
]

// By pressing the start button you make all the question buttons visible and make the start button not visible
startButton.addEventListener('click', function(event){
    startButton.style.display = 'none';
    answer1.style.display = 'block';
    answer2.style.display = 'block';
    answer3.style.display = 'block';
    answer4.style.display = 'block';
    nextQuestion();
    setTime();
})

// Checks to see if answer 1 is the correct answer
answer1.addEventListener('click', function(){
    resultDisplay.style.display = 'block';

    if(arrayOfQuestions[questionCount].correctAnswer === 1){
        resultDisplay.textContent = 'Correct!';
        displayResult();
    }
    else{
        resultDisplay.textContent = 'Wrong!';
        secondsLeft = secondsLeft - 15;
        displayResult();
    }

    nextQuestion();
});

// Checks to see if answer 2 is the correct answer
answer2.addEventListener('click', function(){
    resultDisplay.style.display = 'block';

    if(arrayOfQuestions[questionCount].correctAnswer === 2){
        resultDisplay.textContent = 'Correct!';
        displayResult();
    }
    else{
        resultDisplay.textContent = 'Wrong!';
        secondsLeft = secondsLeft - 15;
        displayResult();
    }

    nextQuestion();
});

// Checks to see if answer 3 is the correct answer
answer3.addEventListener('click', function(){
    resultDisplay.style.display = 'block';

    if(arrayOfQuestions[questionCount].correctAnswer === 3){
        resultDisplay.textContent = 'Correct!';
        displayResult();
    }
    else{
        resultDisplay.textContent = 'Wrong!';
        secondsLeft = secondsLeft - 15;
        displayResult();
    }

    nextQuestion();
});

// Checks to see if answer 4 is the correct answer
answer4.addEventListener('click', function(){
    resultDisplay.style.display = 'block';

    if(arrayOfQuestions[questionCount].correctAnswer === 4){
        resultDisplay.textContent = 'Correct!';
        displayResult();
    }
    else{
        resultDisplay.textContent = 'Wrong!';
        secondsLeft = secondsLeft - 15;
        displayResult();
    }

    nextQuestion();
});

// Run a timer while the quiz is going and display the time left for the user in the nav bar
function setTime(){
    title.style.display = 'none';

    timerInterval = setInterval(function(){
        secondsLeft--;
        timerDisplay.textContent = 'Time Left: ' + secondsLeft;

        if(secondsLeft <= 0 && questionCount !== 4){
            endQuiz();
            clearInterval(timerInterval);
        }

    }, 1000);
}

// Display if the answer you selected was correct or wrong at the bottom of the screen
function displayResult(){
    var resultTime = 2;

    var resultTimer = setInterval(() => {
        resultTime--;

        if(resultTime === 0){
            resultDisplay.style.display = 'none';
            clearInterval(resultTimer);
        }
    }, 750);
}

// Grab the next object out of the array of questions, to grab the new question and answers
function nextQuestion(){

    if(questionCount === 4){
        endQuiz();
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Time Left: ' + 0;
    }
    else{
        questionCount = questionCount + 1;
        description.textContent = arrayOfQuestions[questionCount].question;
    }

    answer1.textContent = arrayOfQuestions[questionCount].firstAnswer;
    answer2.textContent = arrayOfQuestions[questionCount].secondAnswer;
    answer3.textContent = arrayOfQuestions[questionCount].thirdAnswer;
    answer4.textContent = arrayOfQuestions[questionCount].fourthAnswer;
}

// Show the user their score and notify them that the game is over
function endQuiz(){
    title.textContent = 'All Done!';
    title.style.display = 'block';
    description.textContent = 'Your final score is ' + secondsLeft + '... Enter your name to keep track of your highscores!';
    input.classList.remove('invisible');
    input.classList.add('visible');


    answer1.style.display = 'none';
    answer2.style.display = 'none';
    answer3.style.display = 'none';
    answer4.style.display = 'none';
}