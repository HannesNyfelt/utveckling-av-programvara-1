const div = document.getElementById('div')
const form = document.querySelector('#search')

form.addEventListener('submit', async e => {
    e.preventDefault();

    const name = form.querySelector('input').value
    const res = await fetch('/api/pokemon/search?name=' + name)
    const data = await res.json()

    render()
    function render() {
        div.innerHTML = `
        ${data.map(item => `<div class = "poke">
        <h3>${item.name}</h3>
        <img class="image" src="https://img.pokemondb.net/artwork/large/${item.name}.jpg">
        </div>`).join('')}
        `
    }
})

fetchpokemon()
async function fetchpokemon() {
    const res = await fetch('/api/pokemon')
    const pokemon = await res.json()

    render()
    function render() {
        div.innerHTML = `
        ${pokemon.map(item => `<div class = "poke">
        <h3>${item.name}</h3>
        <img class="image" src="https://img.pokemondb.net/artwork/large/${item.name}.jpg">
        </div>`).join('')}
        `
    }
}