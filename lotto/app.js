const btn = document.querySelector('button')
const div = document.querySelector('#results')


btn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input')
    const values = Array.from(inputs).map(input => input.value)
    const randValues = Array.from({ length: values.length }, () => Math.floor(Math.random() * 36 + 1))

    div.innerHTML = `
    <h3>your guess: ${values}</h3>
    <h3>lotto numbers: ${randValues}</h3>
    `
})