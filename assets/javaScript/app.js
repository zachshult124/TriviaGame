//need to let the document load before we start the JS
$(document).ready(function () {



    //need to log the guesses
    //can use an if statement with a counter to give a total correct after
    var totalCorrect = 0;
    var totalWrong = 0;
    var unanswered = 5 //need to decrement down on each question answered

    //need a variable for each question
    var question1 = null;
    var question2 = null;
    var question3 = null;
    var question4 = null;
    var question5 = null;


    //need to have the correct answers for each question to make if-statements
    // var answer1 = 'a';
    // var answer2 = 'b';
    // var answer3 = 'c';
    // var answer4 = 'd';
    // var answer5 = 'e'; 
    //dont need these anymore

    $().on(click, function () {




        //if statements for each answer
        //need to connect these to the correct html element

        if (question1 === 'a') {
            totalCorrect++
        } else {
            totalWrong++
        }

        if (question2 === 'b') {
            totalCorrect++
        } else {
            totalWrong++
        }

        if (question3 === 'c') {
            totalCorrect++
        } else {
            totalWrong++
        }

        if (question4 === 'd') {
            totalCorrect++
        } else {
            totalWrong++
        }

        if (question4 === 'e') {
            totalCorrect++
        } else {
            totalWrong++
        }



        //timer
        //need to create a timer which ends with an alert
        var timer = 60; //60 second timer
        //need to have the function work inside this

        //the function to countdown
        function countDownTimer(timer) {
            setInterval(countDown, 1000)
        };

        //the function we have to pass the setInterval
        function countDown() {
            timer--
        }


        //need to think about the scope of these functions and place them in the correct place
        //need an onclick function to start the game
        // $().on(click, function(){

        // })

        //need to show a div that shows the number of correct and incorrect answers
        if (timer <= 0) {
            console.log(totalCorrect)
            console.log(totalWrong)
            console.log(unanswered)
        }
        //need a div that is hidden and appears when the timer is 0 and shows the above answers //not consoled

    })






});