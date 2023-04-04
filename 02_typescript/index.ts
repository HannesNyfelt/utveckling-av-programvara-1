interface User {
    name: string
    age: number
    email: string
    address: {
        street: string
        city: string
        state: string
        zip: string
    }
}

// Object representing a user

let user: User = {

    name: "John Doe",

    age: 30,

    email: "johndoe@example.com",

    address: {

        street: "123 Main St",

        city: "Anytown",

        state: "CA",

        zip: "12345"

    }

};



// Function to get the user's name

function getUserName(user: User) {

    return user.name;

}



// Function to update the user's age

function updateUserAge(user: User, newAge: number) {

    user.age = newAge;

}



// Function to display the user's address

function displayUserAddress(user: User) {

    console.log(`${user.name}'s address is: ${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}`);

}