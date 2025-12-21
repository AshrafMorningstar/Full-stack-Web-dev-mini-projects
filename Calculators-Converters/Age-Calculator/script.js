/*
 * Project by Ashraf Morningstar
 * GitHub: https://github.com/AshrafMorningstar
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Project loaded successfully by Ashraf Morningstar');
    console.log('GitHub: https://github.com/AshrafMorningstar');
});

function calculateAge() {
    const dobInput = document.getElementById('dob');
    const resultDiv = document.getElementById('result');
    
    if (!dobInput.value) {
        alert('Please select your date of birth');
        return;
    }
    
    const dob = new Date(dobInput.value);
    const now = new Date();
    
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();
    
    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    const totalDays = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
    const totalMonths = years * 12 + months;
    
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>Your Age:</h3>
        <p><strong>${years}</strong> years, <strong>${months}</strong> months, <strong>${days}</strong> days</p>
        <p>Total: <strong>${totalDays.toLocaleString()}</strong> days or <strong>${totalMonths}</strong> months</p>
    `;
}
