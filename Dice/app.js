const btn = document.querySelector("#btn")
const div = document.querySelector("#div")
let die = document.createElement("img")
let die2 = document.createElement("img")


btn.addEventListener("click", function () {
    div.append(die)
    const num = Math.floor(Math.random() * 5 + 1)
    die.src = `images/die${num}.png`

    div.append(die2)
    const num2 = Math.floor(Math.random() * 5 + 1)
    die2.src = `images/die${num2}.png`
})