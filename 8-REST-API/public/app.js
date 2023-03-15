const pizzas = document.querySelector("#pizzas")
const btn = document.querySelector("button")

fetchPizzas()



async function fetchPizzas() {
    pizzas.innerHTML = ""
    const res = await fetch("/api/pizza")
    const data = await res.json()

    data.map(pizza => pizzas.innerHTML += `
        <div class="pizza" id="${pizza.id}">
            <div class="pizzainfo">
                <span class="pizzaName">${pizza.name}</span>
                <span class="edit" onclick="editPizza(${pizza.id})">Edit</span>
                <span class="pizzaDelete" onclick="removePizza(${pizza.id})">X</span>
            </div>

            <div class="pizzaInfo">
                <span>${pizza.ingredients}</span>
                <span>${pizza.grade}
            </div>
        </div>
    `)
}

function saveNewPizza() {
    try {
        const pizzaName = document.querySelector("#pizzaName").value
        const pizzaIngredients = document.querySelector("#ingredients").value
        const pizzaGrade = document.querySelector("#grade").value

        const data = { name: pizzaName, ingredients: pizzaIngredients, grade: pizzaGrade }

        fetch("/api/newPizza", {
            methof: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Success:', data);
                fetchPizzas()
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }
    catch (err) {
        console.log("Sorry something went very wrong!!")
    }
}

btn.addEventListener("click", () => {
    saveNewPizza()
})

function removePizza(id) {
    try {
        const data = { id: id }

        fetch("/api/deletePizza", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Success:', data);
                fetchPizzas()
            })
            .catch((error) => {
                console.log('Error:', error);
            });

    }
    catch (err) {
        console.log("Sorry something went very wrong!!")
    }
}

function editPizza(id) {
    location.replace(`/api/editPizza/${id}`)
    location.replace(`/editPizza/${id}`)
}