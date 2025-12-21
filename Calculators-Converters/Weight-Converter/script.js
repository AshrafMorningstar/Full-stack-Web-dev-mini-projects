
const conversions = {
    kg: 1,
    lb: 2.20462,
    oz: 35.274,
    g: 1000
};

function convertWeight() {
    const weight = parseFloat(document.getElementById('weight').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(weight)) {
        alert('Please enter a valid weight');
        return;
    }
    
    const inKg = weight / conversions[from];
    const result = inKg * conversions[to];
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `<h3>${weight} ${from} = ${result.toFixed(4)} ${to}</h3>`;
}
