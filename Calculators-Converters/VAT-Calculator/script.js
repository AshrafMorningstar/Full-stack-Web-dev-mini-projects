
function calculateVAT() {
    const amount = parseFloat(document.getElementById('amount').value);
    const vatRate = parseFloat(document.getElementById('vat').value) / 100;
    const type = document.getElementById('type').value;
    const resultDiv = document.getElementById('result');
    
    if (!amount || !vatRate) {
        alert('Please enter valid values');
        return;
    }
    
    let vatAmount, total, netAmount;
    
    if (type === 'add') {
        netAmount = amount;
        vatAmount = amount * vatRate;
        total = amount + vatAmount;
    } else {
        total = amount;
        netAmount = amount / (1 + vatRate);
        vatAmount = amount - netAmount;
    }
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>VAT Breakdown:</h3>
        <p>Net Amount: <strong>$${netAmount.toFixed(2)}</strong></p>
        <p>VAT Amount: <strong>$${vatAmount.toFixed(2)}</strong></p>
        <p>Total (inc. VAT): <strong>$${total.toFixed(2)}</strong></p>
    `;
}
