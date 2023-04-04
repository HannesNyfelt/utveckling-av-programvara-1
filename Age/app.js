const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let input = document.querySelector('input').value
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let currentDate = `${year}-${month}-${day}`

    console.log(input);
    console.log(currentDate);
})