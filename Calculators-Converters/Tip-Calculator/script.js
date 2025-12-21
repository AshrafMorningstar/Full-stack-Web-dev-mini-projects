/*
 * Project by Ashraf Morningstar
 * GitHub: https://github.com/AshrafMorningstar
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Project loaded successfully by Ashraf Morningstar');
    console.log('GitHub: https://github.com/AshrafMorningstar');
});

function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercent = parseFloat(document.getElementById('tip').value);
    const people = parseInt(document.getElementById('people').value);
    const resultDiv = document.getElementById('result');
    
    if (!bill || !tipPercent || !people || bill <= 0 || people <= 0) {
        alert('Please enter valid values');
        return;
    }
    
    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Bill Breakdown:</h3>
        <p>Original Bill: <strong>$${bill.toFixed(2)}</strong></p>
        <p>Tip (${tipPercent}%): <strong>$${tipAmount.toFixed(2)}</strong></p>
        <p>Total: <strong>$${total.toFixed(2)}</strong></p>
        <p>Per Person: <strong>$${perPerson.toFixed(2)}</strong></p>
    `;
}
