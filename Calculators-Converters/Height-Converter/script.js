
const heightConversions = {
    cm: 1,
    m: 0.01,
    ft: 0.0328084,
    in: 0.393701
};

function convertHeight() {
    const height = parseFloat(document.getElementById('height').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(height)) {
        alert('Please enter a valid height');
        return;
    }
    
    const inCm = height / heightConversions[from];
    const result = inCm * heightConversions[to];
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `<h3>${height} ${from} = ${result.toFixed(4)} ${to}</h3>`;
}
