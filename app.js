/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/
let num1= null;
let num2= null;
let operator = null;
let result;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display=document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      // Future logic to capture the button's value would go here...
    });
  });
  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
  
    // Example
    if (event.target.classList.contains('number')) {
      // console.log(event.target.innerText)
      checkNumber(event.target.innerText)
      // num1=event.target.innerText
      // checkNumber(num1)
      // console.log(num1)
    }

    if (event.target.classList.contains('operator')) {
 
      
      
      if (operator === null){
        operator = event.target.innerText
      display.innerText += operator
    }
    }
    if (event.target.classList.contains('equals')) {
      handleEquals()
    }
    if (event.target.classList.contains('clears')) {
handleClear()

    }
  
  });

/*-------------------------------- Functions --------------------------------*/


function checkNumber(value){
  if (num1 === null) {
    num1 = value
  } else if (operator === null) {
    num1 += value
  } else if (num2 === null) {
    num2 = value
  } else {
    num2 += value
  }
  display.innerText += value
}

function handleEquals() {
  if (num1 !== null && num2 !== null && operator !== null) {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)
    switch (operator) {
      case '+':
        result = n1 + n2
        break
      case '-':
        result = n1 - n2
        break
      case '*':
        result = n1 * n2
        break
      case '/':
        result = n1 / n2
        break
    }
    num1 = result
    num2 = null
    operator = null
    display.innerText = result
  }
}

function handleClear(){
  num1 = null
  num2 = null
  operator = null
  result = null
  display.innerText = '' 
}
