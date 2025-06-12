const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
// console.log(message)
// console.log(cells)
let turn = "X";


function checkVictory() {
    const combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return combinations.some(comb => {
        const [a, b, c] = comb;
        return (
            cells[a].textContent === turn &&
            cells[b].textContent === turn &&
            cells[c].textContent === turn
        );
    });
}

cells.forEach(c => {
    c.addEventListener("click", () => {
        if (c.textContent !== "" || message.textContent.includes("vince")) {
            return;
        }

        c.textContent = turn;

        if (checkVictory()) {
            message.textContent = `Giocatore ${turn} vince!`;
        } else if ([...cells].every(c => c.textContent !== "")) {
            message.textContent = "Pareggio!";
        } else {
            turn = turn === "X" ? "O" : "X";
        }
    });
});