const div = document.getElementById('div')


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