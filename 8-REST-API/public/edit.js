const editId = window.location.pathname.split("/")[2]

const Name = document.querySelector("#name")
const ingredients = document.querySelector("textarea")
const grade = document.querySelector("#grade")
const button = document.querySelector("button")


fetchPizzaId()

async function fetchPizzaId() {
    const response = await fetch(`/api/editPizza/${editId}`)
    const data = await response.json()


    Name.value = data[0].name
    ingredients.value = data[0].ingredients
    grade.value = data[0].grade
}

button.addEventListener("click", () => {
    const newName = document.querySelector("#name").value
    const newIngredients = document.querySelector("textarea").value
    const newGrade = document.querySelector("#grade").value

    const data = { name: newName, ingredients: newIngredients, grade: newGrade, id: editId }
    console.log(data)

    fetch("/api/editPizza", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((data) => {
            console.log('Success:', data);
            window.location = "http://localhost:3000/"
        })
        .catch((error) => {
            console.log('Error:', error);
        });
})