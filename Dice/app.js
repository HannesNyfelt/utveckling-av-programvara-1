const btn = document.querySelector("#btn")
const div = document.querySelector("#div")
let die = document.createElement("img")


btn.addEventListener("click", function () {
    div.append(die)
    die.src = "images/die#3.png"
})