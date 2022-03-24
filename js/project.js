let p1S = 0;
let p2S = 0;
let tie = 0;
let turn = 1;
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function checkWin(val) {

}
$('.square').click(function(){
    if (turn === 1) {
        $(this).text("✕");
        $(this).addClass("x");
        turn = 2;
        if (checkWin("x")){
            p1S ++;
            $("#p1Score").text(p1S);
        } else checkTie()
    } else {
        $(this).text("o");
        $(this).addClass("o");
        turn = 1;
        if (checkWin("o")){
            p2S ++;
            $("#p2Score").text(p2S);
        } else checkTie
    } 
    $("#turn").text(turn)
})
