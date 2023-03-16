const btn = document.querySelector("button")
const div = document.querySelector("div")

btn.addEventListener("click", function check(e) {
    e.preventDefault()
    let num = document.querySelector("input").value
    if (num > 0) {
        div.innerHTML = `<h1 class=positive>${num} is positive</h1>`
    }
    else if (num < 0) {
        div.innerHTML = `<h1 class=negative>${num} is negative</h1>`
    }
    else if (num == 0) {
        div.innerHTML = `<h1 class=zero>${num} is zero</h1>`
    }
})