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
        image: "<img src= '../assets/images/gladiator.png  width='600px'>"

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
        image: "<img src= '../assets/images/gladiator.png  width='600px'>"
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
        image: "<img src= '../assets/images/gladiator.png  width='600px'>"
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
        image: "<img src= '../assets/images/gladiator.png  width='600px'>"
    },
    {
        q: "Friends don't lie.",
        answers: [
            "A. Annie in 'Bridesmaids' ",
            "B. Marty Byrde in 'Ozark' ",
            "C. Towelie in 'South Park' ",
            "D. Sterling Archer in 'Archer' ",
            "E. Eleven in 'Stranger Things' "],
        correctChoice: "E. Eleven in 'Stranger Things' ",
        image: "<img src= '../assets/images/gladiator.png  width='600px'>"
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
        image: "<img src= '../assets/images/gladiator.png  width='600px'>"
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
        image: "<img src= '../assets/images/gladiator.png  width='600px'>"
    }
]

//========================================== Global Variables =============================================

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




//========================================== FUNCTIONS =====================================================

function startGame() {

    $('#startButton').on('click', function () {
        reset();
        $('#startButton').hide();
        $('#directions').hide();
        questionUp();
    })
};

function questionUp() {
    $('.game').show();
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

function updateCorrect() {
    correctAnswer++;
    $('#correctGuesses').html("Correct Guesses: " + correctAnswer);
    $('h1').text("CORRECT!");
    questionIndex++;
};

function updateIncorrect() {
    incorrectAnswer++;
    $('#incorrectGuesses').html("Incorrect Guesses: " + incorrectAnswer);
    $('h1').text("Incorrect... The answer was " + questionArr[questionIndex].correctChoice);
    questionIndex++;
};

function updateUnanswered() {
    noAnswer++;
    $('#unansweredGuesses').html("Unanswered: " + noAnswer);
    $('h1').text("You did not answer in time!!");
    questionIndex++;
};

function showResult() {

    if (questionIndex <= questionArr.length - 1) {
        setTimeout(questionUp, 1000 * 5);
        $('.game').hide();
        $('#directions').show().text('Next Quote in 5 seconds!');
    } else {
        setTimeout(finalScore, 1000 * 4);
        $('.game').hide();
        $('#directions').show().text("All Done! Let's see how you did!");
    }
};

function finalScore() {
    $('.game').show();
    $('#directions').hide();
    $('#correctGuesses').html("Final Scores: <br> Correct Guesses: " + correctAnswer);
    $('.answers').hide();
    $('#timer').hide();
    $('h1').html("GAME OVER");
    $('#questions').html(Math.round(correctAnswer/(correctAnswer + incorrectAnswer + noAnswer) * 100 )+ "%");
    $('#startButton').show().text("Play again??");
}

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

//=============================== Time/Interval Functions ===============================================

function startTimer() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
};

function decrement() {
    time--;
    if (time === 0) {
        stopTimer();
        updateUnanswered();
        showResult();
    }
    $('#timer').html("Time Remaining: " + time + " seconds");
};

function stopTimer() {
    clearInterval(intervalID);
    $('#timer').html("Time Remaining: " + time + " seconds");
};

function resetTimer() {
    time = 21;
};

//============================== Main Process =================================================

$('#directions').html('Directions: <br> When you hit the START! button, a quote from either movies or TV will be diplayed. <br> Click on the correct character and title for which the quote was said! <br> You will only have 20 seconds to make a choice, so think quickly!');
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