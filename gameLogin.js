let p1Name = "Player 1";
let p2Name = "Player 2";

function addUsers() {
    p1Name = document.getElementById("p1NameInput").value;
    p2Name = document.getElementById("p2NameInput").value;

    localStorage.setItem("p1", p1Name);
    localStorage.setItem("p2", p2Name);

    window.location = "game.html";
}