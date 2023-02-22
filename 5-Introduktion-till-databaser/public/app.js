const div = document.getElementById('div')


fetchGames()
async function fetchGames() {
    const res = await fetch('/api/games')
    const games = await res.json()

    render()
    function render() {
        div.innerHTML = `
            <ul class = "games">
                ${games.map(item => `<li class = "game">${item.name} | ${item.genre} | ${new Date(item.release_date).toDateString()} | ${item.publisher}</li>`).join('')}
            </ul>
        `
    }
}