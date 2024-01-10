function setWinnerButton() {
    let noButtons = document.getElementById("noButtons").value;
    let winner = Math.floor(Math.random() * noButtons) + 1;
    console.log(winner);
    return winner;
}

function revealButton(winner, buttonNo, button) {
    if (buttonNo === winner) {
        button.innerHTML = "winner";
    } else {
        button.innerHTML = "loser";
    }
}

function generateButtons() {
    let winner = setWinnerButton();
    let noButtons = document.getElementById("noButtons").value;
    for (var i = 1; i <= noButtons; ++i) {
        let div = document.createElement("div");
        document.body.appendChild(div);

        let button = document.createElement("button");
        button.id = i;
        console.log(button.id);
        //button.style="--bs-btn-padding-y: 1rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: .75rem;"
        button.className = "btn btn-success";
        //button.onclick = revealButton(winner, i, button);
        div.appendChild(button);

    }
}
