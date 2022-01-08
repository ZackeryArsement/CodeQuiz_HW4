var startButton = document.querySelector('#start-button');
var description = document.querySelector('#main-screen-description');
var timerDisplay = document.querySelector('#timer');
var resultDisplay = document.querySelector('#result');
var title = document.querySelector('#title');
var input = document.querySelector('#input-id');
var inputValue = document.querySelector('#input-value');
var highscoreTable = document.querySelector('#highscore-table');
var clearButton = document.querySelector('#clear-button');
var retakeButton = document.querySelector('#retake-button');
var viewHighscore = document.querySelector('#highscore');

var buttons = document.querySelectorAll('#button-div');

var answer1 = document.querySelector('#answer-1');
var answer2 = document.querySelector('#answer-2');
var answer3 = document.querySelector('#answer-3');
var answer4 = document.querySelector('#answer-4');

var inputBtn = document.querySelector('#input-btn');

var secondsLeft = 60;

var highscoreArray = [];

answer1.style.display = 'none';
answer2.style.display = 'none';
answer3.style.display = 'none';
answer4.style.display = 'none';

clearButton.style.visibility = 'hidden';
retakeButton.style.visibility = 'hidden';

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
    questionCount = -1;
    secondsLeft = 60;

    clearButton.style.visibility = 'hidden';
    retakeButton.style.visibility = 'hidden';

    description.style.display = 'block';

    input.classList.remove('visible');
    input.classList.add('invisible');

    highscoreTable.classList.remove('d-table');
    highscoreTable.classList.add('d-none');

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
    }, 1000);
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
    timerDisplay.textContent = 'Time Left: 0';
    clearInterval(timerInterval);

    title.textContent = 'All Done!';
    title.style.display = 'block';

    if(secondsLeft < 0){
        description.textContent = 'Your final score is 0... Enter your name to keep track of your highscores!';
    }
    else{
        description.textContent = 'Your final score is ' + secondsLeft + '... Enter your name to keep track of your highscores!';
    }
    input.classList.remove('invisible');
    input.classList.add('visible');


    answer1.style.display = 'none';
    answer2.style.display = 'none';
    answer3.style.display = 'none';
    answer4.style.display = 'none';
}

// When you press the input button it shows you a list of all the highscores
var numbHighscores = 0;

inputBtn.addEventListener('click', function(){
    highscoreArray = [];

    numbHighscores++;

    input.classList.remove('visible');
    input.classList.add('invisible');
    input.value = '';

    if(secondsLeft < 0){
        highscoreTable.insertRow().innerHTML = '<th>' + numbHighscores + '</th><td>' + inputValue.value + '</td><td>0</td>';
    }
    else{
        highscoreTable.insertRow().innerHTML = '<th>' + numbHighscores + '</th><td>' + inputValue.value + '</td><td>' + secondsLeft + '</td>';
    }

    displayHighscoreTable();
})

retakeButton.addEventListener('click', function(){
    questionCount = -1;
    secondsLeft = 60;

    clearButton.style.visibility = 'hidden';
    retakeButton.style.visibility = 'hidden';

    description.style.display = 'block';

    input.classList.remove('visible');
    input.classList.add('invisible');

    highscoreTable.classList.remove('d-table');
    highscoreTable.classList.add('d-none');

    startButton.style.display = 'none';
    answer1.style.display = 'block';
    answer2.style.display = 'block';
    answer3.style.display = 'block';
    answer4.style.display = 'block';
    nextQuestion();
    setTime();
})

clearButton.addEventListener('click', function(){
    // You must delete rows starting from the last row or else once you delete the first row every row moves up a place in queue and messes up the for loop
    for (i=(highscoreTable.rows.length-1); i>0; i--){
        highscoreTable.deleteRow(i);
    }
})

// When you click the 'View Highscore' in the navbar then the game stops and the highscore table is displayed
viewHighscore.addEventListener('click', function(){
    displayHighscoreTable();
    endQuiz();

    answer1.style.display = 'none';
    answer2.style.display = 'none';
    answer3.style.display = 'none';
    answer4.style.display = 'none';

    title.textContent = 'Highscores';
    description.style.display = 'none';

    input.classList.remove('visible');
    input.classList.add('invisible');
    input.value = '';

    startButton.style.display = 'none';
})

// Display highscore table... needed for both 'input button' and 'view highscore'
function displayHighscoreTable(){
    clearButton.style.visibility = 'visible';
    retakeButton.style.visibility = 'visible';
    
    title.textContent = 'Highscores';
    description.style.display = 'none';

    highscoreTable.classList.remove('d-none');
    highscoreTable.classList.add('table');

    // Put all the scores into an array
    for(i=0; i<(highscoreTable.rows.length-1); i++)
    {
        highscoreArray[i] = highscoreTable.rows[(i+1)].cells[2].innerText;
    }

    // Sort the scores from lowest to highest
    highscoreArray.sort(function(a, b){return a - b});

    // Fill an empty array to sort out the inner HTML of each highscore from lowest score to highest score
    var holdInnerHTML = [];

    for(i=0; i<highscoreArray.length; i++){
        for(j=1; j<=highscoreArray.length; j++){
            if(highscoreArray[i] === highscoreTable.rows[j].cells[2].innerText){
                holdInnerHTML[i] = highscoreTable.rows[j].innerHTML;
            }
        }
    }

    // Sort the ranks from highest to lowest instead of lowest to highest
    holdInnerHTML.reverse();

    // Use the created array to now change the inner HTML of all existing rows to be sorted from highest to lowest scores
    for(i=holdInnerHTML.length; i>0; i--){
        highscoreTable.rows[i].innerHTML = holdInnerHTML[(i-1)];
        highscoreTable.rows[i].cells[0].innerText = i;
    }
}