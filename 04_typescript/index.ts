// Define an array of products
const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
];

// Function to render products to HTML table
function renderProducts() {
    const tbody = (document.getElementById('product-table') as HTMLElement)
    // Loop through products array and render each product to table row
    products.forEach(product => {
        const tr = document.createElement('tr');
        const nameTd = document.createElement('td');
        const priceTd = document.createElement('td');
        nameTd.textContent = product.name;
        priceTd.textContent = '$' + product.price.toFixed(2);
        tr.appendChild(nameTd);
        tr.appendChild(priceTd);
        tbody.appendChild(tr);
    });
}

// Function to calculate total price of products
function calculateTotalPrice() {
    let totalPrice = 0;
    products.forEach(product => {
        totalPrice += product.price;
    });
    return totalPrice;
}

// Function to render total price to HTML element
function renderTotalPrice() {
    const totalPrice = calculateTotalPrice();
    const totalPriceElement = (document.getElementById('total-price') as HTMLElement).textContent = '$' + totalPrice.toFixed(2);
}

// Function to add new product to the products array
function addProduct(product) {
    products.push(product);
}

// Function to handle form submission to add new product
function handleFormSubmit(event) {
    event.preventDefault();
    const nameInput = (document.getElementById('name-input') as HTMLInputElement);
    const priceInput = (document.getElementById('price-input') as HTMLInputElement);
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    if (name && price) {
        addProduct({ name, price });
        renderProducts();
        renderTotalPrice();
        nameInput.value = '';
        priceInput.value = '';
    }
}

// Attach event listener to form submit event
const form = (document.getElementById('product-form') as HTMLFormElement);
form.addEventListener('submit', handleFormSubmit);


// Initial render of products and total price
renderProducts();
renderTotalPrice();