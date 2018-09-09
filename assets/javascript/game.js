$(document).ready(function () {

    var totalScore = 0;
    var wins = 0;
    var losses = 0;


    //Generate a ranodm number between 19-120
    var random = Math.floor(Math.random() * 101 + 19);
    $("#randomNumber").text(random);

    //Generate ranodm numbers between 1-11
    var num1 = Math.floor(Math.random() * 11 + 1); 
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);
    console.log()
    
    $("#wins").text(wins);
    $("#losses").text(losses);


    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        $("#randomNumber").text(random);

        num1 = Math.floor(Math.random() * 11 + 1);        
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
       
        totalScore = 0;
       $("#score").text(totalScore);
    }

    $("#blue").click(function () {
        totalScore += num1;
        console.log("new totalScore" + totalScore);
        $("#score").text(totalScore);
        if (totalScore == random) {
            alert("You Won!!!!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
        else if (random < totalScore) {
            alert("You Lost!!!!");
            losses++;
            $("#losses").text(losses);
            reset();
        }

    })

    $("#green").click(function () {
        totalScore += num2;
        console.log("new totalScore" + totalScore);
        $("#score").text(totalScore);
        if (totalScore == random) {
            alert("You Won!!!!")
            wins++;
            $("#wins").text(wins);
            reset();
        }
        else if (random < totalScore) {
            alert("You Lost!!!!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    })

    $("#red").click(function () {
        totalScore += num3;
        console.log("new totalScore" + totalScore);
        $("#score").text(totalScore);
        if (totalScore == random) {
            alert("You Won!!!!")
            wins++;
            $("#wins").text(wins);
            reset();
        }
        else if (random < totalScore) {
            alert("You Lost!!!!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    })

    $("#yellow").click(function () {
        totalScore += num4;
        console.log("new totalScore" + totalScore);
        $("#score").text(totalScore);
        if (totalScore == random) {
            alert("You Won!!!!")
            wins++;
            $("#wins").text(wins);
            reset();
        }
        else if (random < totalScore) {
            alert("You Lost!!!!");
            losses++;
            $("#losses").text(losses);
            reset();
        }
    });
 
 });