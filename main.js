// create functions for all the basic math operators found on a calculator (add, subtract, multiply, divide)
function add (a,b) {
    return a+b;
}
function subtract (a,b) {
    return a-b;
}
function multiply (a,b) {
    return a*b;
}
function divide (a,b) {
    return a/b;
}
// create variables that will represent the firstNumber, operator, and secondNumber of a calculation i.e 1 + 1. 
//These variables will be used to update calculator display later
let firstNumber = '';
let secondNumber = '';
let operator= '';


//create a function called operate which takes two numbers and an operator then calls one of the function operations (add, subtract, multiply, divide) on the numbers
function operate (firstNumber, operator, secondNumber) {
    switch(operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}
//create a function that will populate the display when the user clicks one of the number buttons. Store the display values in the firstNumber and secondNumber variables above
const numberButtons = document.querySelectorAll('.num-bttn');
const displayElement = document.querySelector('.display');
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        displayElement.textContent += value;
        firstNumber = displayElement.textContent
        console.log(firstNumber)
    })
    
})



console.log(firstNumber)