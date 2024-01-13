function setWinnerButton() {
    let noButtons = document.getElementById("noButtons").value;
    let winner = Math.floor(Math.random() * noButtons) + 1;
    return winner;
}

function generateButtons() {
    let winner = setWinnerButton();
    let noButtons = document.getElementById("noButtons").value;
    for (var i = 1; i <= noButtons; ++i) {
        let button = document.createElement("button");
        button.Id = i;
        button.textContent = "Button " + i;
        button.className = "btn btn-success";
        button.addEventListener("click", function() {
            if (winner == button.Id) {
                alert("Winner");
            } else {
                alert("Loser");
            }
        });
        generateButtonsDiv.appendChild(button);

    }
}
