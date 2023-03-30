const btn = document.querySelector('button')
const div = document.querySelector('div')

btn.addEventListener('click', () => {
    let input = document.querySelector('input').value
    let num = input
    let randomNum = Math.floor(Math.random() * 11)
    if (num == randomNum) {
        div.innerHTML = `
            <h3>Correct!</h3>
        `
    }
    else {
        div.innerHTML = `
            <h3>wrong the number was ${randomNum}</h3>
        `
    }
})