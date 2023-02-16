const quote = document.getElementById("quote")

fetchQuote()

async function fetchQuote() {
    const res = await fetch("/api/quote")
    const data = await res.json()

    quote.innerHTML = `
        <h1>"${data.quote}"</h1>
        <div class="author">
            <div class="line"></div>
            <h3>${data.author}</h3>
            <div class="line"></div>
        </div>
    
    `
}