
// Approximate exchange rates (base: USD)
const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 149.50,
    INR: 83.12,
    AUD: 1.52,
    CAD: 1.36
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const resultDiv = document.getElementById('result');
    
    if (!amount) {
        alert('Please enter an amount');
        return;
    }
    
    // Convert to USD first, then to target currency
    const inUSD = amount / rates[from];
    const result = inUSD * rates[to];
    const rate = rates[to] / rates[from];
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>${amount.toFixed(2)} ${from} =</h3>
        <h2 style="color: #667eea; font-size: 2rem;">${result.toFixed(2)} ${to}</h2>
        <p>Exchange Rate: 1 ${from} = ${rate.toFixed(4)} ${to}</p>
    `;
}
