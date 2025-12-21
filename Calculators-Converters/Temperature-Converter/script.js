/*
 * Project by Ashraf Morningstar
 * GitHub: https://github.com/AshrafMorningstar
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Project loaded successfully by Ashraf Morningstar');
    console.log('GitHub: https://github.com/AshrafMorningstar');
});

function convertTemp() {
    const temp = parseFloat(document.getElementById('temp').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const resultDiv = document.getElementById('result');
    
    if (isNaN(temp)) {
        alert('Please enter a valid temperature');
        return;
    }
    
    let celsius = temp;
    
    // Convert to Celsius first
    if (from === 'fahrenheit') {
        celsius = (temp - 32) * 5/9;
    } else if (from === 'kelvin') {
        celsius = temp - 273.15;
    }
    
    // Convert from Celsius to target
    let result = celsius;
    let unit = '°C';
    
    if (to === 'fahrenheit') {
        result = (celsius * 9/5) + 32;
        unit = '°F';
    } else if (to === 'kelvin') {
        result = celsius + 273.15;
        unit = 'K';
    }
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `<h3>${temp}° ${from.charAt(0).toUpperCase() + from.slice(1)} = ${result.toFixed(2)} ${unit}</h3>`;
}
