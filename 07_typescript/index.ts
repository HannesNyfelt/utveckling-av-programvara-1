
// Write a function that takes in an array of numbers and returns the sum of all even numbers in the array. If there are no even numbers, return 0.


function sumEvenNumbers(numbers: string | any[]) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {

            sum += numbers[i];

        }

    }

    return sum;

}


// Example usage:

const numbers = [1, 2, 3, 4, 5, 6];

console.log(sumEvenNumbers(numbers));