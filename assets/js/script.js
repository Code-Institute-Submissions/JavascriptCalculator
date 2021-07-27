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
previousOperandText = document.querySelector('[data-previous-operand]'),
// Call the data-current-operand
currentOperandText = document.querySelector('[data-current-operand]');

// Class Construct Method Function
class  Calculator {
    constructor(previousOperandText, currentOperandText) {
      this.previousOperandText = previousOperandText;
      this.currentOperandText = currentOperandText;
      this.clear();
    }

    // Clear Calculator Function
    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operator = 'undefined';
    }

    delete() {

    }
    // Update currentOperand and append the number passed to the end
    appendNum(number) {
        // IF a period is already pressed then return/do not append another
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    selectOperator(operator) {
        // If currentOperand is empty then return to stop moving forward with the code
        if (this.currentOperand === '') return;
        // IF previousOperand is not a empty string then calculate
        if (this.previousOperand !== '') {
            this.calculate();
        }
        // Set operator
        this.operator = operator;
        // Previous operand to the current operand
        this.previousOperand = this.currentOperand;
        // Clear current operand
        this.currentOperand = '';
    }

    calculate() {
        // new variable
        let calc;
        // Convert from string to number
        const previous = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        // if NaN then return
        if (isNaN(previous) || isNaN(current)) return;
        //IF operator =
        switch (this.operator) {
            // + then add previous and current then break
          case '+':
            calc = previous + current;
            break;
            // - then subtract previous and current then break
          case '-':
            calc = previous - current;
            break;
            // - then multiply previous and current then break
          case '*':
            calc = previous * current;
            break;
            // - then divide previous by current then break
          case '÷':
            calc = previous / current;
            break;
            // Else operator isnt equal to any of the above then return
          default:
            return;
        }
        // currentOperand = calc
        this.currentOperand = calc;
        // Set operator to undefined
        this.operator = undefined;
        // Clear previousOperand
        this.previousOperand = '';
    }

    displayResult() {
        
    }

}
// Create new calculator Variable with classname calculator
const calculator = new Calculator(previousOperandText, currentOperandText);
// Add an event listener for each button innertext
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNum(button.innerText);
      // And display the result
      calculator.displayResult();
    })
  })

// Add an event listener for each operator button innertext
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.selectOperator(button.innerText);
      // And display the result
      calculator.displayResult();
    })
  })

// Add an event listener for equals button click
  equalsButton.addEventListener('click', button => {
    calculator.calculate();
    // And display the result
    calculator.displayResult();
  })

  // Add an event listener for clear button click
  allClearButton.addEventListener('click', button => {
    calculator.clear();
    // And display the result
    calculator.displayResult();
  })