// Call all data-number attributes and create a variable
const numberButtons = document.querySelectorAll('[data-number]'),
// Call all data-operator attributes and create a variable
operatorButtons = document.querySelectorAll('[data-operator]'),
// Call data-equals attribute and create a variable
equalsButton = document.querySelector('[data-equals]'),
// Call the Delete/Clear (DEL Button) attribute and create a variable
deleteButton = document.querySelector('[data-delete]'),
// Call the data-all-clear (AC Button) attribute and create a variable
allClearButton = document.querySelector('[data-all-clear]'),
// Call the data-previous-operand attribute and create a variable
previousOperand = document.querySelector('[data-previous-operand]'),
// Call the data-current-operand
currentOperand = document.querySelector('[data-current-operand]');

class Calculator {
    constructor(previousOperand, currentOperand) {
      this.previousOperand = previousOperand;
      this.currentOperand = currentOperand;
      this.clear();
    }

    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operator = 'undefined';
    }

    delete() {

    }

    appendNum(number) {

    }

    selectOperator(operator) {

    }

    calculate() {

    }

    displayResult() {

    }

}