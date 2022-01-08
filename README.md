# CodeQuiz_HW4
Title: Coding Quiz \
Developer: Zackery Arsement \
Deployment Date:  1/7/2022 \
For:  UT JavaScript Coding Bootcamp \
Published: GitHub <https://github.com/ZackeryArsement/CodeQuiz_HW4> \
Published: Webpage <https://zackeryarsement.github.io/CodeQuiz_HW4/> \
Built with: HTML5, CSS3, Javascript


# Summary: 

![Coding Quiz](https://zackeryarsement.github.io/CodeQuiz_HW4/assets/images/codingQuizSnapshot.png)

The coding quiz is meant to allow a user to test their coding knowledge through a timed quiz. \
Each wrong answer deducts 15 seconds from your time. \
Your final time is your final score and at the end of the quiz the webpage keeps track of your total high scores!

You can see below a play through of the quiz!

![Coding Quiz](https://zackeryarsement.github.io/CodeQuiz_HW4/assets/images/codingQuizVid.gif)

# Development:

The webpage works by having an array of objects that contains each question, answer, and correct answer. When you start the game you begin looping through each question in the array and changing the button text to the answers corresponding to it. Every time you answer a question you get moved to the next question object in the array.

At the end of the quiz there is a table that takes the input of your nickname and your final score and appends a new row to the end of the table. Every time the table is loaded it checks the score of each prior highscore and sorts them from lowest to highest.


