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

// displayValue will hold the value inside the display element 
let displayValue;

//create a function that will populate the display when the user clicks one of the number buttons. Store the display values in the firstNumber and secondNumber variables above
const numberButtons = document.querySelectorAll('.num-bttn');
const displayElement = document.querySelector('.display');
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        displayElement.textContent += value;
        displayValue = displayElement.textContent;
        console.log(displayValue)
    })
})

// create a function that will populate the display when the user clicks one of the operator buttons. Stores display value within displayValue.
// displayValue should hold a string representing and operation i.e '1+1' or '2000*3000'
    
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        displayElement.textContent += value;
        displayValue = displayElement.textContent;
        console.log(displayValue)
    })
})

// equal button takes displayValue and calculates the assigned value and returns a new displayValue of the completed operation
const equalButton = document.querySelector('#equals')
equalButton.addEventListener("click", () => {
    const arr = displayValue.split('');
    // console.log('displayValue split, ', arr);
    const combinedString = arr.join('')
    // console.log('array joined, ', combinedString);
    const parts = combinedString.split(/([-+*/])/);
    // console.log(' array split by operator', parts)
    displayElement.textContent = '';
    displayValue = undefined;
    // console.log('displayValue after equal button pressed ', displayValue);
    firstNumber = Number(parts[0]);
    operator = parts[1];
    secondNumber = Number(parts[2]);
    // console.log(operate(firstNumber, operator, secondNumber));
    displayElement.textContent = `${operate(firstNumber, operator, secondNumber)}`
    displayValue = displayElement.textContent
    // console.log('array after calculation ;', arr)
    // console.log('displayValue after calculation, ', displayValue);
} 
)
