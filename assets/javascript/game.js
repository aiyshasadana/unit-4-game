var score = 0;
var match = 0;
var wins =0;
var losses = 0;

var crystals = {
    red: {
        name:"red", value: 0
    },

    yellow: {
        name:"yellow", value: 0
    },


}

function start() {
    var matchNumber = Math.floor(Math.random() * (120 - 18 + 1)) + 18;
    console.log (matchNumber);
    crystals.red.value = 
    $("#matchNumber").text(matchNumber);

}   

start();
