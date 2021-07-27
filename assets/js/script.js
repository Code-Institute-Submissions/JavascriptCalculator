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
class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    // Clear Calculator Function
    clear() {
        this.previousOperand = '';
        this.currentOperand = '0';
        this.operator = '';
    }

    // Delete last digit
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
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
    // Display Result
    displayResult() {
        this.currentOperandText.innerText =
            this.getDisplayNumber(this.currentOperand)
        // If operator is not null display previousOperandText + operator
        if (this.operator != null) {
            this.previousOperandText.innerText =
                // Concat previous + operator
                `${this.getDisplayNumber(this.previousOperand)} ${this.operator}`
        } else {
            // Else set to empty string
            this.previousOperandText.innerText = ''
        }
    }

    // Add Decimals 
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        // Split interger
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        // Split String
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            // Only allows one decimal point
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            // If Decimals
            return `${integerDisplay}.${decimalDigits}`
        } else {
            // If no Decimals
            return integerDisplay
        }

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

// Add an event listener for clear button click
deleteButton.addEventListener('click', button => {
    calculator.delete();
    // And display the result
    calculator.displayResult();
})

// Instructions Button
function instructionsAlert() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}