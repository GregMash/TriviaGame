//========================================== Questions =========================================================

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
        correctChoice: "B. Maximus in 'Gladiator' ",
        image: "./assets/images/gladiator.png"
    },
    {
        q: "I ain't sayin I shot you, I ain't sayin I didn't shoot you, but damn somebody shot you in the ass!",
        answers: [
            "A. Mike Lowrey in 'Bad Boys 2' ",
            "B. Daredevil in 'Daredevil' ",
            "C. Will Smith in 'Fresh Prince of Bel Air' ",
            "D. Hansel in 'Zoolander' ",
            "E. Gary Bertier in 'Remember the Titans' "],
        correctChoice: "A. Mike Lowrey in 'Bad Boys 2' ",
        image: "./assets/images/bad-boys-2.png"
    },
    {
        q: "I want some fancy sauce",
        answers: [
            "A. Wheeler in 'Role Models' ",
            "B. Peter Klaven in 'I Love You Man' ",
            "C. Brennon in 'Step Brothers' ",
            "D. Derek Zoolander in 'Zoolander' ",
            "E. Ron Burgundy in 'Anchorman' "],
        correctChoice: "C. Brennon in 'Step Brothers' ",
        image: "./assets/images/step-brothers.png"
    },
    {
        q: "Wilson!!! Come back!",
        answers: [
            "A. Annie in 'Bridesmaids' ",
            "B. Marty Byrde in 'Ozark' ",
            "C. Chuck Noland in 'Cast Away' ",
            "D. Richard Phillips in 'Captain Phillips' ",
            "E. Chris Gardener in 'The Pursuit of Happyness' "],
        correctChoice: "C. Chuck Noland in 'Cast Away' ",
        image: "./assets/images/cast-away.png"
    },
    {
        q: "Friends don't lie.",
        answers: [
            "A. Tina in 'Bob's Burgers ",
            "B. Marty Byrde in 'Ozark' ",
            "C. Towelie in 'South Park' ",
            "D. Sterling Archer in 'Archer' ",
            "E. Eleven in 'Stranger Things' "],
        correctChoice: "E. Eleven in 'Stranger Things' ",
        image: "./assets/images/stranger-things.png"
    },
    {
        q: "I am not in danger, I AM the danger.",
        answers: [
            "A. Gus Fring in 'Better Call Saul' ",
            "B. Gabe from 'The Office' ",
            "C. Jax Teller in 'Sons of Anarchy' ",
            "D. Walter White in 'Breaking Bad' ",
            "E. Will in 'Stranger Things' "],
        correctChoice: "D. Walter White in 'Breaking Bad' ",
        image: "./assets/images/breaking-bad.png"
    },
    {
        q: "We are gonna have to go right to 'Ludacris Speed' ",
        answers: [
            "A. Jack Traven in 'Speed' ",
            "B. Dark Helmet in 'Space Balls' ",
            "C. Ricky Bobby in 'Talladega Nights' ",
            "D. Rod Kimble in 'Hot Rod' ",
            "E. Randy Marsh in 'South Park' "],
        correctChoice: "B. Dark Helmet in 'Space Balls' ",
        image: "./assets/images/spaceballs.png"
    }
    
]

//========================================================= Global Variables =====================================================

//start the scores at 0
var correctAnswer = 0;
var incorrectAnswer = 0;
var noAnswer = 0;
//start the question index at 0
questionIndex = 0;
//set the amount of seconds the user has to make a guess and set up the variable to hold the interval
var time = 21;
var intervalID;
//set this variable to false originally to use for interval functions
var answered = false;

var imgDisplay = [];
imgDisplay.src = questionArr[questionIndex].image;



//================================================= FUNCTIONS ===================================================================

//This function will start the game and reset it if it has already been played
function startGame() {
    $('p').hide();
    $('#startButton').on('click', function () {
        reset();
        $('p').show();
        $('#startButton').hide();
        $('#directions').hide();
        questionUp();
    })
};

//This function will hide the appropriate html attributes, show a question, and reset the timer and then start it again
function questionUp() {
    $('.game').show();
    $('#resultIMG').hide();
    $('h1').text("Name that Quote!");
    $('#directions').hide();
    resetTimer();
    startTimer();
    $('#questions').html("Quote: " + (questionArr[questionIndex].q));
    $('#answer1').html(questionArr[questionIndex].answers[0]);
    $('#answer2').html(questionArr[questionIndex].answers[1]);
    $('#answer3').html(questionArr[questionIndex].answers[2]);
    $('#answer4').html(questionArr[questionIndex].answers[3]);
    $('#answer5').html(questionArr[questionIndex].answers[4]);
};

//This function takes the user input and checks to see if it matches the correct answer and then takes the next appropriate action 
function checkGuess() {
    if (userGuess === questionArr[questionIndex].correctChoice.charAt(0)) {
        answered = true;
        if (answered = true) {
            stopTimer()
            updateCorrect();
            showResult();
        }
    } else if (userGuess != questionArr[questionIndex].correctChoice.charAt(0)) {
        answered = true;
        if (answered = true) {
            stopTimer()
            updateIncorrect();
            showResult();
        }
    }
};

//This function adds a + 1 score to correct and moves the question index to the next question
function updateCorrect() {
    correctAnswer++;
    $('#correctGuesses').html("Correct Guesses: " + correctAnswer);
    $('h1').text("CORRECT!");
    //showResult();
    questionIndex++;
};

//This function adds a + 1 score to incorrect and moves the question index to the next question
function updateIncorrect() {
    incorrectAnswer++;
    $('#incorrectGuesses').html("Incorrect Guesses: " + incorrectAnswer);
    $('h1').text("Incorrect... The answer was " + questionArr[questionIndex].correctChoice);
    //showResult();
    questionIndex++;
};

//This function adds a + 1 score to unanswered questions and moves the question index to the next question
function updateUnanswered() {
    noAnswer++;
    $('#unansweredGuesses').html("Unanswered: " + noAnswer);
    $('h1').text("You did not answer in time! The correct answer was: " + questionArr[questionIndex].correctChoice);
    //showResult();
    questionIndex++;
};

//This function has the short pause between questions, shows and hides appropriate content to the user
function showResult() {

    if (questionIndex <= questionArr.length - 1) {
        setTimeout(questionUp, 1000 * 5);
        $('.game').hide();
        $('#directions').show().text('Next Quote incoming!');
        $('#resultIMG').attr('src', questionArr[questionIndex -1].image);
        $('#resultIMG').show();
        //questionIndex++;
    } else {
        setTimeout(finalScore, 1000 * 4);
        $('.game').hide();
        $('#directions').show().text("All Done! Let's see how you did!");
        $('#resultIMG').attr('src', questionArr[questionIndex -1].image);
        $('#resultIMG').show();
        //questionIndex++;
    }
};

//This is the final function of the game that displays the percentage of correct questions and totals, and then gives the user the option to play again
function finalScore() {
    $('#resultIMG').hide();
    $('.game').show();
    $('#directions').hide();
    $('#correctGuesses').html("Final Scores: <br> Correct Guesses: " + correctAnswer);
    $('.answers').hide();
    $('#timer').hide();
    $('h1').html("GAME OVER");
    $('#questions').html(Math.round(correctAnswer/(correctAnswer + incorrectAnswer + noAnswer) * 100 )+ "%");
    $('#startButton').show().text("Play again??");
}

//This function resets the parameters for the game sho it can be played more times without reloading the page
function reset() {
    correctAnswer = 0;
    incorrectAnswer = 0;
    noAnswer = 0;
    questionIndex = 0;
    time = 21;
    answered = false;
    $('.answers').show();
    $('#timer').show();
    $('#unansweredGuesses').html("Unanswered: " + noAnswer);
    $('#incorrectGuesses').html("Incorrect Guesses: " + incorrectAnswer);
    $('#correctGuesses').html("Correct Guesses: " + correctAnswer);
}

//============================================ Time/Interval Functions =====================================================

//This function clears the interval so it cannot be manipulated twice and then starts it
function startTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
};

//This function holds the decrement and calls appropriate functions if the user runs out of time on a question
function decrement() {
    time--;
    if (time === 0) {
        stopTimer();
        updateUnanswered();
        showResult();
    }
    $('#timer').html("Time Remaining: " + time + " seconds");
};

//This function stops the timer
function stopTimer() {
    clearInterval(intervalID);
    $('#timer').html("Time Remaining: " + time + " seconds");
};

// This resets the timer, necessary for each question
function resetTimer() {
    time = 21;
};

//==================================================== Main Process =========================================================


//These set up the html on our page dynamically
$('#directions').html('Directions: <br> When you hit the START! button, a quote from either movies or TV will be diplayed. <br> Click on the correct character and title for which the quote was said! <br> You will only have 20 seconds to make a choice, so think quickly!');
$('#correctGuesses').html("Correct Guesses: " + correctAnswer);
$('#incorrectGuesses').html("Inorrect Guesses: " + incorrectAnswer);
$('#unansweredGuesses').html("Unanswered: " + noAnswer);

//Calls for the game to start
startGame();

//This is the main click function which lets the user click anywhere on the document 
//but only allows a function to happen if appropriate content is clicked
//Then it determines the userGuess by matching the first letter of their choice with the first letter of the correct answer
$(document).on('click', 'p', function () {
    userGuess = $(this).text();
    userGuess = userGuess.charAt(0);
    checkGuess();
});