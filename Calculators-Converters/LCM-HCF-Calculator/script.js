
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function calculate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');
    
    if (!num1 || !num2 || num1 <= 0 || num2 <= 0) {
        alert('Please enter valid positive numbers');
        return;
    }
    
    const hcf = gcd(num1, num2);
    const lcmValue = lcm(num1, num2);
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Results for ${num1} and ${num2}:</h3>
        <p>HCF (GCD): <strong>${hcf}</strong></p>
        <p>LCM: <strong>${lcmValue}</strong></p>
    `;
}
