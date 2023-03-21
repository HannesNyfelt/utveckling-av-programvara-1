const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const sissorBtn = document.querySelector("#sissors")
const div = document.querySelector("#div")
let cpuChoice = "";
let result = "";
let num = 0;


function Shoot() {
    num = Math.floor(Math.random() * 3) + 1
}


rockBtn.addEventListener("click", () => {
    Shoot()
    if (num == 1) {
        cpuChoice = "Rock";
        result = "Tie";
    }
    else if (num == 2) {
        cpuChoice = "Paper";
        result = "Paper Wins";
    }
    else {
        cpuChoice = "Sissors";
        result = "Rock Wins";
    }
    div.innerHTML = `
    <h1>Rock VS ${cpuChoice}</h1>
    <h2>${result}</h2>
    `
})

paperBtn.addEventListener("click", () => {
    Shoot()
    if (num == 1) {
        cpuChoice = "Rock";
        result = "Paper Wins";
    }
    else if (num == 2) {
        cpuChoice = "Paper";
        result = "Tie";
    }
    else {
        cpuChoice = "Sissors";
        result = "Sissors Win";
    }
    div.innerHTML = `
    <h1>Paper VS ${cpuChoice}</h1>
    <h2>${result}</h2>
    `
})

sissorBtn.addEventListener("click", () => {
    Shoot()
    if (num == 1) {
        cpuChoice = "Rock";
        result = "Rock Wins";
    }
    else if (num == 2) {
        cpuChoice = "Paper";
        result = "Sissors Win";
    }
    else {
        cpuChoice = "Sissors";
        result = "Tie";
    }
    div.innerHTML = `
    <h1>Sissors VS ${cpuChoice}</h1>
    <h2>${result}</h2>
    `
})

