/*
 * Project by Ashraf Morningstar
 * GitHub: https://github.com/AshrafMorningstar
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Project loaded successfully by Ashraf Morningstar');
    console.log('GitHub: https://github.com/AshrafMorningstar');
});

let currentInput = '0';
let operator = null;
let previousInput = null;

function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}

function appendNumber(num) {
    if (currentInput === '0' && num !== '.') {
        currentInput = num;
    } else if (num === '.' && currentInput.includes('.')) {
        return;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (previousInput !== null) {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
}

function calculate() {
    if (operator === null || previousInput === null) return;
    
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result = 0;
    
    switch(operator) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/': result = prev / current; break;
        case '%': result = prev % current; break;
    }
    
    currentInput = result.toString();
    operator = null;
    previousInput = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay();
}
