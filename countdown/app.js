let secondsLeft = 10;
const h1 = document.querySelector("#text")
const span = document.querySelector("#span")

function tick() {

    if (secondsLeft >= 1) {
        if (secondsLeft == 1) {
            h1.innerHTML = "1 second"
        }
        else {
            span.innerHTML = secondsLeft
        }
        secondsLeft = secondsLeft - 1
        setTimeout(tick, 1000)
    }
    else {
        document.body.style.backgroundColor = "red"
        h1.innerHTML = "Hej på dig!"
    }
}
tick()