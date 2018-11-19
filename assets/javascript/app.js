/*
need to create each question, render one after the other
    -make an array of questions
    -put the questions in a single array
    -get them to show up one by one

each question will have 5 multiple choice options for the user to click
selecting any answer moves to a show of the correct answer and then the next question
each question needs to have a timer that restarts after showing the question
the final page needs to stop the timer, show correct, incorrect, and unanswered questions
*/


//==========================================Questions=========================================================

// Here is the question array full of objects of questions. It can be added to or subtracted from at will given the same format.
var questionArr = [
    {
        q: "What we do in life, echoes in eternity",
        answers: [
            "A. Achilles in 'Troy' ",
            "B. Maximus in 'Gladiator' ",
            "C. Woody in 'Toy Story 2' ",
            "D. Tony Stark in 'Iron Man' ",
            "E. Jon Snow in 'Game of Thrones' "],
        correctChoice: "B",
        image:  "<img src= '../assets/images/gladiator.png  width='600px'>"

    },
    {
        q: "I ain't sayin I shot you, I ain't sayin I didn't shoot you, but damn somebody shot you in the ass",
        answers: [
            "A. Mike in 'Bad Boys 2' ",
            "B. Maximus in 'Gladiator' ",
            "C. Woody in 'Toy Story 2' ",
            "D. Tony Stark in 'Iron Man' ",
            "E. Jon Snow in 'Game of Thrones' "],
        correctChoice: "A",
        image:  "<img src= '../assets/images/gladiator.png  width='600px'>"
    },
    {
        q: "What we do in life, echoes in eternity",
        answers: [
            "A. Achilles in 'Troy' ",
            "B. Maximus in 'Gladiator' ",
            "C. Woody in 'Toy Story 2' ",
            "D. Tony Stark in 'Iron Man' ",
            "E. Jon Snow in 'Game of Thrones' "],
        correctChoice: "B",
        image: "TriviaGame/assets/images/gladiator.png)"
    },
    {
        q: "I ain't sayin I shot you, I ain't sayin I didn't shoot you, but damn somebody shot you in the ass",
        answers: [
            "A. Mike in 'Bad Boys 2' ",
            "B. Maximus in 'Gladiator' ",
            "C. Woody in 'Toy Story 2' ",
            "D. Tony Stark in 'Iron Man' ",
            "E. Jon Snow in 'Game of Thrones' "],
        correctChoice: "A",
        image: "url(TriviaGame/assets/images/gladiator.png)"
    },
];

//==========================================Global Variables=============================================



//start the scores at 0
var correctAnswer = 0;
var incorrectAnswer = 0;
var noAnswer = 0;
//start the question index at 0
questionIndex = 0;

var time = 16;
var answered = false;




//==========================================FUNCTIONS=====================================================

function startGame() {
    $('#startButton').on('click', function () {
        $('#startButton').hide();
        $('#directions').hide();
        questionUp();
    })
};

function questionUp() {
    $('.game').show();
    $('h1').text("Name that Quote!");


    //startTimer();

    if (questionIndex <= questionArr.length - 1) {
        $('#questions').html("Quote: " + (questionArr[questionIndex].q));
        $('#answer1').html(questionArr[questionIndex].answers[0]);
        $('#answer2').html(questionArr[questionIndex].answers[1]);
        $('#answer3').html(questionArr[questionIndex].answers[2]);
        $('#answer4').html(questionArr[questionIndex].answers[3]);
        $('#answer5').html(questionArr[questionIndex].answers[4]);
    }
    else {
        $('#questions').hide();
        $('.answers').hide();
        $('#timer').hide();
        $('h1').html("GAME OVER <br> Final Scores: ");
    }
};

function checkGuess() {
    if (userGuess === questionArr[questionIndex].correctChoice) {
        console.log(questionArr[questionIndex].correctChoice);
        answered = true;
        updateCorrect();
    } else if (userGuess != questionArr[questionIndex].correctChoice) {
        answered = true;
        updateIncorrect();
    } else {
        updateUnanswered();
    }
    questionIndex++;
    showImage();

    //stopTimer();
};

function updateCorrect() {
    correctAnswer++;
    $('#correctGuesses').html("Correct Guesses: " + correctAnswer);
    $('h1').text("CORRECT!");
};

function updateIncorrect() {
    incorrectAnswer++;
    $('#incorrectGuesses').html("Incorrect Guesses: " + incorrectAnswer);
    $('h1').text("Incorrect...");

};

function updateUnanswered() {
    noAnswer++;
    $('#unansweredGuesses').html("Unanswered: " + noAnswer);
    $('h1').text("You did not answer in time!!");

};

function showImage() {
    $('.game').hide();
    $('#startButton').show().text('Next Quote...');
    $('#result').html(questionArr[questionIndex].image);
};

/*
function startTimer() {
    var countdown = setInterval(timer, 1000);
    time = time - 1;
    $('#timer').html("Time Remaining: " + time + " seconds");
};

function stopTimer() {
    clearInterval(countdown);
    $('#timer').html("Time Remaining: " + time + " seconds");

};
*/
//==============================Main Process=================================================

$('#directions').html('Directions: <br> When you hit the START! button, a quote from either movies or TV will be diplayed. <br> Click on the correct person and title for which the quote was said! <br> You will only have 15 seconds to make a choice, so think quickly!');
$('#correctGuesses').html("Correct Guesses: " + correctAnswer);
$('#incorrectGuesses').html("Inorrect Guesses: " + incorrectAnswer);
$('#unansweredGuesses').html("Unanswered: " + noAnswer);
startGame();



$(document).on('click', 'p', function () {
    userGuess = $(this).text();
    userGuess = userGuess.charAt(0);
    console.log(userGuess);
    checkGuess();
});


