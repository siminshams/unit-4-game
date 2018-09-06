$(document).ready(function(){

var totalScore = 0;
var wins = 0;
var losses = 0;


    //Generate a ranodm number between 19-120
var random = Math.floor(Math.random()* 101 + 19);

$("#randomNumber").text(random);
//$("#winCount").text(wins);
$("#losses").text(losses);
document.getElementById("winCount").textContent = wins;
    
});