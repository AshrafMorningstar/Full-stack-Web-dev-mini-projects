/*
 * Project by Ashraf Morningstar
 * GitHub: https://github.com/AshrafMorningstar
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Project loaded successfully by Ashraf Morningstar');
    console.log('GitHub: https://github.com/AshrafMorningstar');
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const resultDiv = document.getElementById('result');
    
    if (!weight || !height || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height');
        return;
    }
    
    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let color = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3b82f6';
    } else if (bmi < 25) {
        category = 'Normal weight';
        color = '#10b981';
    } else if (bmi < 30) {
        category = 'Overweight';
        color = '#f59e0b';
    } else {
        category = 'Obese';
        color = '#ef4444';
    }
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Your BMI: <span style="color: ${color}">${bmi}</span></h3>
        <p>Category: <strong style="color: ${color}">${category}</strong></p>
    `;
}
