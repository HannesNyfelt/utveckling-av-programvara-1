const btn = document.querySelector("button")
const div = document.querySelector("div")

btn.addEventListener("click", function (e) {
    e.preventDefault()
    let birthDay = document.querySelector("input").value
    let today = new Date().getFullYear()
    let age = today - birthDay



    if (age <= 0) {
        div.innerHTML = `<h1>${birthDay} is not a valid number</h1>`
    }

    else if (age <= 12) {
        div.innerHTML = `<h1>${age} is a child age</h1>`
    }

    else if (age <= 19) {
        div.innerHTML = `<h1>${age} is a teen age</h1>`
    }

    else if (age <= 64) {
        div.innerHTML = `<h1>${age} is an adult age</h1>`
    }

    else {
        div.innerHTML = `<h1>${age} is a senior age</h1>`
    }
})