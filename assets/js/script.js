var startButton = document.querySelector('#start-button');
var description = document.querySelector('#main-screen-description');

var buttons = document.querySelectorAll('.buttons');

var answer1 = document.querySelector('#answer-1');
var answer2 = document.querySelector('#answer-2');
var answer3 = document.querySelector('#answer-3');
var answer4 = document.querySelector('#answer-4');

answer1.style.display = 'none';
answer2.style.display = 'none';
answer3.style.display = 'none';
answer4.style.display = 'none';

var questionCount = -1;

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

startButton.addEventListener('click', function(event){
    startButton.style.display = 'none';
    answer1.style.display = 'block';
    answer2.style.display = 'block';
    answer3.style.display = 'block';
    answer4.style.display = 'block';
    nextQuestion();
})

function nextQuestion(){
    questionCount = questionCount + 1;
    console.log(questionCount);

    description.textContent = arrayOfQuestions[questionCount].question;
    answer1.textContent = arrayOfQuestions[questionCount].firstAnswer;
    answer2.textContent = arrayOfQuestions[questionCount].secondAnswer;
    answer3.textContent = arrayOfQuestions[questionCount].thirdAnswer;
    answer4.textContent = arrayOfQuestions[questionCount].fourthAnswer;
}

answer1.addEventListener('click', function(){
    if(arrayOfQuestions[questionCount].correctAnswer === 1){
        console.log("Correct 1");
    }
    else{
        console.log("Wrong 1");
    }

    nextQuestion();
});

answer2.addEventListener('click', function(){
    if(arrayOfQuestions[questionCount].correctAnswer === 2){
        console.log("Correct 2");
    }
    else{
        console.log("Wrong 2");
    }

    nextQuestion();
});

answer3.addEventListener('click', function(){
    if(arrayOfQuestions[questionCount].correctAnswer === 3){
        console.log("Correct 3");
    }
    else{
        console.log("Wrong 3");
    }

    nextQuestion();
});

answer4.addEventListener('click', function(){
    if(arrayOfQuestions[questionCount].correctAnswer === 4){
        console.log("Correct 4");
    }
    else{
        console.log("Wrong 4");
    }

    nextQuestion();
});