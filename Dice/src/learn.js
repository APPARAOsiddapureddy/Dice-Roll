
document.getElementById('refreshButton').addEventListener('click', refreshDice);

function refreshDice() {
    var randomNumber1 = Math.ceil(Math.random() * 6);
    var randomNumber2 = Math.ceil(Math.random() * 6);

    document.getElementById("p1").innerHTML = randomNumber1;
    document.getElementById("p2").innerHTML = randomNumber2;

    if (randomNumber1 === randomNumber2) {
        document.getElementById("refresh").innerHTML = "Draw";
    } else if (randomNumber1 > randomNumber2) {
        document.getElementById("refresh").innerHTML = "Player 1 Wins";
    } else {
        document.getElementById("refresh").innerHTML = "Player 2 Wins";
    }

    document.getElementById("pla1").src = `../public/Dice-${randomNumber1}.png`;
    document.getElementById("pla2").src = `../public/Dice-${randomNumber2}.png`;
}

refreshDice();
