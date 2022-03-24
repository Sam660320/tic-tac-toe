
let p1S = 0;
let p2S = 0;
let tie = 0;
let turn = 1;
let play= true;

$('.square').click(function(){

    if ($(this).text() == "" && play) {
        if ((turn % 2) == 1) {
            $(this).text("x");
            $(this).addClass("x");
            turn ++;
            $('#turn').text("1");
        } else if ((turn % 2) == 0){
            $(this).text("o");
            $(this).addClass("o");
            turn ++;
            $('#turn').text("2");
        }
        
        if (checkWin() !== "") {
            if ($(this).text() === "x"){
                $('#wPlayer').text("The winner is x");
                p1S++;
                $('#p1Score').text(p1S)
            } else if ($(this).text() === "o") {
                $('#wPlayer').text("The winner is o");
                p2S++;
                $('#p2Score').text(p2S);
            }
            play = false;
        }
        if (turn ===10) {
            $('#wPlayer').text("It's a draw");
            tie ++;
            $('#tie').text(tie)
        }
        
      
    }
});

$('#reload').click(function(){
    $(".square").removeClass('x');
    $(".square").removeClass('o');
    turn = 1;
    $('.square').text("");
    $('#wPlayer').text("");
    play=true
})


function checkWin () {
    let square1 = $('#square1').text();
    let square2 = $('#square2').text();
    let square3 = $('#square3').text();
    let square4 = $('#square4').text();
    let square5 = $('#square5').text();
    let square6 = $('#square6').text();
    let square7 = $('#square7').text();
    let square8 = $('#square8').text();
    let square9 = $('#square9').text();
    if (square1 && (square1 == square2) && (square2 == square3)) {
        return square3;
    } else if (square4 &&(square4 == square5) && (square5 == square6)) {
        console.log("hello")
        return square6;
    } else if (square7 &&(square7 == square8) && (square8 == square9)) {
        return square9;
    } else if (square1 &&(square1 == square4) && (square4 == square7)) {
        return square7;
    } else if (square2 &&(square2 == square5) && (square5 == square8)) {
        return square8;
    } else if (square3 &&(square3 == square6) && (square6 == square9)) {
        return square9;
    } else if (square1 &&(square1 == square5) && (square5 == square9)) {
        return square9;
    } else if (square3 &&(square3 == square5) && (square5 == square7)) {
        return square7;
    } else {
        return ""
    }
} 

