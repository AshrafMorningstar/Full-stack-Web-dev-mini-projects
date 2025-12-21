
function calculateLoan() {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualRate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);
    const resultDiv = document.getElementById('result');
    
    if (!principal || !annualRate || !years) {
        alert('Please fill all fields');
        return;
    }
    
    const monthlyRate = annualRate / 100 / 12;
    const numPayments = years * 12;
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - principal;
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Loan Summary:</h3>
        <p>Monthly Payment: <strong>$${monthlyPayment.toFixed(2)}</strong></p>
        <p>Total Payment: <strong>$${totalPayment.toFixed(2)}</strong></p>
        <p>Total Interest: <strong>$${totalInterest.toFixed(2)}</strong></p>
    `;
}
