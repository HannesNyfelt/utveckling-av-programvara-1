const div = document.getElementById('div')
const form = document.querySelector('#search')

form.addEventListener("submit", async e => {
    e.preventDefault()

    const year = form.querySelector('input').value
    const res = await fetch('/api/temperature/search?year=' + year)
    const data = await res.json()

    render()
    function render() {
        div.innerHTML = `
        ${data.map(item => `<div class = "row"> 
        <h2>Country: ${item.country}</h2>
        <h3>Temperature: ${item.averageTemperature}</h3>
        <h4>Year: ${item.year}</h4>
        </div>`).join('')}
        `
    }
})

render()
async function render() {
    const year = 2021
    const res = await fetch('/api/temperature/search?year=' + year)
    const data = await res.json()

    div.innerHTML = `
        ${data.map(item => `<div class = "row"> 
        <h2>Country: ${item.country}</h2>
        <h3>Temperature: ${item.averageTemperature}</h3>
        <h4>Year: ${item.year}</h4>
        </div>`).join('')}
        `
}