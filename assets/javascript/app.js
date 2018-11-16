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

// Here is our question array full of objects of questions. It can be added to or subtracted from at will given the same format.
var questionArr = [
    {
        q: "What we do in life, echoes in eternity",
        a1: "Achilles in 'Troy'",
        a2: "Maximus in 'Gladiator'",
        a3: "Woody in 'Toy Story 2'",
        a4: "Tony Stark in 'Iron Man'",
        a5: "Jon Snow in 'Game of Thrones'",
        correctChoice: 2
    },
    {
        q: "What we do in life, echoes in eternity",
        a1: "Achilles in 'Troy'",
        a2: "Maximus in 'Gladiator'",
        a3: "Woody in 'Toy Story 2'",
        a4: "Tony Stark in 'Iron Man'",
        a5: "Jon Snow in 'Game of Thrones'",
        correctChoice: 2
    },
    {
        q: "What we do in life, echoes in eternity",
        a1: "Achilles in 'Troy'",
        a2: "Maximus in 'Gladiator'",
        a3: "Woody in 'Toy Story 2'",
        a4: "Tony Stark in 'Iron Man'",
        a5: "Jon Snow in 'Game of Thrones'",
        correctChoice: 2
    },
    {
        q: "What we do in life, echoes in eternity",
        a1: "Achilles in 'Troy'",
        a2: "Maximus in 'Gladiator'",
        a3: "Woody in 'Toy Story 2'",
        a4: "Tony Stark in 'Iron Man'",
        a5: "Jon Snow in 'Game of Thrones'",
        correctChoice: 2
    },
    {
        q: "What we do in life, echoes in eternity",
        a1: "Achilles in 'Troy'",
        a2: "Maximus in 'Gladiator'",
        a3: "Woody in 'Toy Story 2'",
        a4: "Tony Stark in 'Iron Man'",
        a5: "Jon Snow in 'Game of Thrones'",
        correctChoice: 2
    },
    {
        q: "What we do in life, echoes in eternity",
        a1: "Achilles in 'Troy'",
        a2: "Maximus in 'Gladiator'",
        a3: "Woody in 'Toy Story 2'",
        a4: "Tony Stark in 'Iron Man'",
        a5: "Jon Snow in 'Game of Thrones'",
        correctChoice: 2
    },
    {
        q: "What we do in life, echoes in eternity",
        a1: "Achilles in 'Troy'",
        a2: "Maximus in 'Gladiator'",
        a3: "Woody in 'Toy Story 2'",
        a4: "Tony Stark in 'Iron Man'",
        a5: "Jon Snow in 'Game of Thrones'",
        correctChoice: 2
    },
    {
        q: "What we do in life, echoes in eternity",
        a1: "Achilles in 'Troy'",
        a2: "Maximus in 'Gladiator'",
        a3: "Woody in 'Toy Story 2'",
        a4: "Tony Stark in 'Iron Man'",
        a5: "Jon Snow in 'Game of Thrones'",
        correctChoice: 2
    },
    {
        q: "What we do in life, echoes in eternity",
        a1: "Achilles in 'Troy'",
        a2: "Maximus in 'Gladiator'",
        a3: "Woody in 'Toy Story 2'",
        a4: "Tony Stark in 'Iron Man'",
        a5: "Jon Snow in 'Game of Thrones'",
        correctChoice: 2
    },
    {
        q: "What we do in life, echoes in eternity",
        a1: "Achilles in 'Troy'",
        a2: "Maximus in 'Gladiator'",
        a3: "Woody in 'Toy Story 2'",
        a4: "Tony Stark in 'Iron Man'",
        a5: "Jon Snow in 'Game of Thrones'",
        correctChoice: 2
    },
];

//==========================================Global Variables=============================================
$('#directions').html('Directions: <br> When you hit the START! button, a quote from either movies or TV will be diplayed. <br> Click on the correct person and medium for which the quote was said! <br> You will have 15 seconds to make a choice, so think quickly!');



//start the score at 0
var score = 0;
//start the question index at 0
questionIndex = 0;
timer = 15;



//==========================================FUNCTIONS=====================================================

function startGame() {
    $('#startButton').on('click', function () {
        $('#startButton').hide();
        $('#directions').hide();
        //startTimer();
        questionUp();
    })
}

function questionUp() {

    if (questionIndex <= questionArr.length - 1) {
        document.querySelector('#questions').innerHTML = ("Quote: " + (questionArr[questionIndex].q));
        document.querySelector('#answer1').innerHTML = ("A. " + (questionArr[questionIndex].a1));
        document.querySelector('#answer2').innerHTML = ("B. " + (questionArr[questionIndex].a2));
        document.querySelector('#answer3').innerHTML = ("C. " + (questionArr[questionIndex].a3));
        document.querySelector('#answer4').innerHTML = ("D. " + (questionArr[questionIndex].a4));
        document.querySelector('#answer5').innerHTML = ("E. " + (questionArr[questionIndex].a5));
    }
    else {
        document.querySelector('#questions').innerHTML = ("GAME OVER");
    }
};

function updateScore() {
    if (userGuess === questionArr[questionIndex].correctChoice) {
        score++;
        console.log("YES");
    }
};

function startTimer() {
    setTimeout(timer, 1500);
}

var userGuess = $('.answers').on('click', function () {
    if (userGuess == questionArr[questionIndex].correctChoice) {
        console.log('Yes');
    } else {
        console.log("No");
    }
});



//==============================Main Process=================================================

startGame();
