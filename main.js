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
let operator= null;


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

let arr = [];
//create a function that will populate the display when the user clicks one of the number buttons. Store the display values in the firstNumber and secondNumber variables above
const numberButtons = document.querySelectorAll('.num-bttn');
const displayElement = document.querySelector('.display');
// displayValue will hold the value inside the display element. By default it is zero.
let displayValue = displayElement.textContent;
console.log(displayValue);
// numberButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         let value = button.textContent;
//         // console.log(value)
//         if(displayElement.textContent === '0') {
//             displayElement.textContent = value;
//             displayValue = displayElement.textContent;
//             // console.log(displayElement)
//             // console.log(typeof displayValue)
//             // console.log(value)
//              return;
//         }
//         displayElement.textContent += value;
//         // console.log(displayValue)
//         displayValue = displayElement.textContent;
//         // console.log(displayValue)
//     })
// })

console.log(typeof firstNumber);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
       console.log('firstNumber is: ', firstNumber);
       console.log('secondNumber is: ', secondNumber);
       console.log('operator is: ', operator);
       if(operator === null) {
        firstNumber += button.textContent;
        console.log('firstNumber: ', firstNumber)
        displayElement.textContent = firstNumber;
       } 
       else if (firstNumber !== '' && operator !== null) {
        secondNumber += button.textContent;
        console.log('secondNumber: ', secondNumber)
        displayElement.textContent = secondNumber;
       }

    })
})

// create a function that will populate the display when the user clicks one of the operator buttons. Stores display value within displayValue.
// displayValue should hold a string representing and operation i.e '1+1' or '2000*3000'
    
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        console.log('operator is: ', operator);
    })
})



// equal button takes displayValue and calculates the assigned value and returns a new displayValue of the completed operation
const equalButton = document.querySelector('#equals')
// equalButton.addEventListener("click", () => {
//     arr = displayValue.split('');
//     console.log('displayValue split, ', arr);
//     const combinedString = arr.join('')
//     console.log('array joined, ', combinedString);
//     const parts = combinedString.split(/([-+*/])/);
//     console.log(' array split by operator', parts)
//     console.log('displayValue after equal button pressed ', displayValue);
//     firstNumber = Number(parts[0]);
//     operator = parts[1];
//     secondNumber = Number(parts[2]);
//     console.log(operate(firstNumber, operator, secondNumber));
//     displayElement.textContent = `${operate(firstNumber, operator, secondNumber)}`
//     displayValue = displayElement.textContent
//     console.log('array after calculation ;', arr);
//     console.log('displayValue after calculation, ', displayValue);
// } 
// )

equalButton.addEventListener("click", () => {
    console.log(`The solution is ${operate(Number(firstNumber), operator, Number(secondNumber))}`);
    displayElement.textContent = `${operate(Number(firstNumber), operator, Number(secondNumber))}`
    firstNumber = displayElement.textContent;
    secondNumber = '';
    operator = null;    
    console.log(`firstNumber after solution should be the solution on display like this ${firstNumber}`);
    console.log(`secondNumber should be empty string after solution like this  ${secondNumber}`);
    console.log(`operator should be reset back to null after solution like this ${operator}`);
} 
)

// clear button should clear the displayElement and displayValue values
const clearButton =  document.querySelector('#clear');
clearButton.addEventListener("click", () => {
    displayElement.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator= null;
})