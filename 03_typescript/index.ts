function calculateSum() {

    const firstNumber = (document.getElementById("firstNumber") as HTMLInputElement).value;

    const secondNumber = (document.getElementById("secondNumber") as HTMLInputElement).value;

    const sum = parseInt(firstNumber) + parseInt(secondNumber);

    (document.getElementById("result") as HTMLElement).innerHTML = "The sum is " + sum;

}