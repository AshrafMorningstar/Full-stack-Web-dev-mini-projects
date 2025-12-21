
function calculateCompound() {
    const P = parseFloat(document.getElementById('principal').value);
    const r = parseFloat(document.getElementById('rate').value) / 100;
    const t = parseFloat(document.getElementById('time').value);
    const n = parseFloat(document.getElementById('compound').value);
    const resultDiv = document.getElementById('result');
    
    if (!P || !r || !t) {
        alert('Please fill all fields');
        return;
    }
    
    const A = P * Math.pow((1 + r/n), n*t);
    const interest = A - P;
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Investment Results:</h3>
        <p>Initial Principal: <strong>$${P.toFixed(2)}</strong></p>
        <p>Final Amount: <strong>$${A.toFixed(2)}</strong></p>
        <p>Total Interest Earned: <strong>$${interest.toFixed(2)}</strong></p>
        <p>ROI: <strong>${((interest/P)*100).toFixed(2)}%</strong></p>
    `;
}
